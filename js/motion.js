/* Bidragskompassen – motion: reduced-motion preference, scroll reveals, word-rise, counters. */
(function () {
  'use strict';
  var SB = window.SB;
  var dom = SB.dom;
  var KEY = 'sb.reduceMotion';
  var root = document.documentElement;
  var listeners = [];
  var observer = null;
  var REVEAL_FAILSAFE_MS = 1200;

  function systemPrefers() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }
  function isReduced() { return root.classList.contains('reduce-motion'); }

  function apply(reduced) {
    root.classList.toggle('reduce-motion', reduced);
    dom.$$('[data-motion-toggle]').forEach(function (cb) { cb.checked = reduced; });
    if (reduced) dom.$$('[data-reveal], [data-split]').forEach(function (el) { el.classList.add('is-in'); });
    listeners.forEach(function (fn) { fn(reduced); });
  }

  function set(reduced) {
    dom.storage.set(KEY, reduced ? '1' : '0');
    apply(reduced);
    dom.announce(reduced ? 'Rörelse på sidan är avstängd.' : 'Rörelse på sidan är påslagen.');
  }

  function onChange(fn) { listeners.push(fn); }

  /** Wrap each word in spans so headlines can rise word by word. Text stays as text nodes. */
  function split(el) {
    if (el.getAttribute('data-split-done')) return;
    var i = 0;
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            var inner = dom.h('span', { class: 'w__i', style: { '--i': String(i++) } }, part);
            frag.appendChild(dom.h('span', { class: 'w' }, inner));
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1) {
          walk(child);
        }
      });
    })(el);
    el.setAttribute('data-split-done', '1');
  }

  function observe(scope) {
    var els = dom.$$('[data-reveal], [data-split]', scope || document);
    els.forEach(function (el) { if (el.hasAttribute('data-split')) split(el); });
    if (isReduced() || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    if (!observer) {
      observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    }
    els.forEach(function (el) { if (!el.classList.contains('is-in')) observer.observe(el); });
    // Failsafe: some hosts (background tabs, embedded previews) never deliver observer callbacks.
    // Content already on screen must not stay hidden, so reveal it after a short grace period.
    window.setTimeout(function () {
      els.forEach(function (el) {
        if (el.classList.contains('is-in')) return;
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.add('is-in');
          observer.unobserve(el);
        }
      });
    }, REVEAL_FAILSAFE_MS);
  }

  var counting = typeof WeakMap !== 'undefined' ? new WeakMap() : null; // el -> { raf, token }
  var countToken = 0;

  function stopCount(el) {
    var run = counting && counting.get(el);
    if (run) { window.cancelAnimationFrame(run.raf); counting.delete(el); }
  }

  /** Count from `from` (default 0) to `to`; a new count on the same element replaces the old one.
   *  Visual only – callers provide the final value for screen readers. */
  function countUp(el, to, duration, from) {
    stopCount(el);
    var origin = typeof from === 'number' ? from : 0;
    // Hidden tabs never run requestAnimationFrame – show the final value straight away.
    if (isReduced() || to === origin || document.hidden || !counting) { el.textContent = String(to); return; }
    var start = null;
    var dur = duration || 1400;
    var run = { raf: 0, token: ++countToken };
    function frame(ts) {
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(origin + (to - origin) * eased));
      if (p < 1) run.raf = window.requestAnimationFrame(frame);
      else counting.delete(el);
    }
    run.raf = window.requestAnimationFrame(frame);
    counting.set(el, run);
    // Safety net: throttled rAF (background tab, embedded preview) must still end on the right number.
    window.setTimeout(function () {
      var cur = counting.get(el);
      if (cur && cur.token === run.token) { stopCount(el); el.textContent = String(to); }
    }, dur + 150);
  }

  /** FLIP helper: call `first()` before DOM change, then `play()` after. */
  function flip(container, selector) {
    var rects = {};
    dom.$$(selector, container).forEach(function (el) { rects[el.getAttribute('data-key')] = el.getBoundingClientRect(); });
    return function play() {
      if (isReduced()) return;
      dom.$$(selector, container).forEach(function (el, idx) {
        var before = rects[el.getAttribute('data-key')];
        var after = el.getBoundingClientRect();
        if (!before) {
          if (el.animate) el.animate([{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }],
            { duration: 420, delay: Math.min(idx, 10) * 30, easing: 'cubic-bezier(0.2,0.7,0.1,1)', fill: 'backwards' });
          return;
        }
        var dx = before.left - after.left;
        var dy = before.top - after.top;
        if ((dx || dy) && el.animate && Math.abs(dy) < 2400) {
          el.animate([{ transform: 'translate(' + dx + 'px,' + dy + 'px)' }, { transform: 'none' }],
            { duration: 460, easing: 'cubic-bezier(0.2,0.7,0.1,1)' });
        }
      });
    };
  }

  function init() {
    var stored = dom.storage.get(KEY, null);
    apply(stored === '1' || (stored === null && systemPrefers()));
    dom.$$('[data-motion-toggle]').forEach(function (cb) {
      cb.addEventListener('change', function () { set(cb.checked); });
    });
    if (window.matchMedia) {
      var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      var handler = function () { if (dom.storage.get(KEY, null) === null) apply(mq.matches); };
      if (mq.addEventListener) mq.addEventListener('change', handler);
    }
    observe(document);
  }

  SB.motion = { init: init, isReduced: isReduced, set: set, onChange: onChange, observe: observe, split: split, countUp: countUp, flip: flip };
})();
