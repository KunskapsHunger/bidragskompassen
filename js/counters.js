/* Bidragskompassen – hero counters that follow the hero query and the "Jag söker för" choice.
 * Numbers count from the previous value (≈400 ms, instant under reduced motion); the screen-reader
 * summary updates politely about a second after the query settles, never per keystroke. */
(function () {
  'use strict';
  var SB = window.SB;
  var core = SB.core;
  var dom = SB.dom;
  var h = dom.h;
  var ANIM_MS = 400;
  var INTRO_MS = 1400;
  var SR_DELAY_MS = 1000;

  var app = null;
  var index = null;
  var els = null;
  var shown = null;      // last numbers on screen [total, open, forOrg]
  var query = '';
  var srTimer = null;
  var lastSr = '';

  function build(initialSummary, initialLabels) {
    var host = document.getElementById('hero-counters');
    if (!host) return null;
    dom.clear(host);
    var nums = [];
    var labels = [];
    // Text is set BEFORE the live region enters the page, so page load is not announced.
    var sr = h('span', { class: 'sr-only', 'aria-live': 'polite', text: initialSummary });
    host.appendChild(sr);
    [0, 1, 2].forEach(function (i) {
      var num = h('span', { class: 'counter__num', text: '0' });
      var label = h('span', { class: 'counter__label', text: initialLabels[i] });
      nums.push(num);
      labels.push(label);
      host.appendChild(h('span', { class: 'counter', 'aria-hidden': 'true' }, [num, label]));
    });
    var caption = h('span', { class: 'counter__caption', 'aria-hidden': 'true' });
    host.appendChild(caption);
    return { host: host, sr: sr, nums: nums, labels: labels, caption: caption, cue: dom.$('.hero__cue') };
  }

  function stats(q) {
    return core.heroStats(app.grants, index, q, app.ctx(), SB.smart ? SB.smart.peek(q) : null);
  }

  function summaryLater(text, immediate) {
    window.clearTimeout(srTimer);
    var write = function () { if (text !== lastSr) { lastSr = text; els.sr.textContent = text; } };
    if (immediate) write(); else srTimer = window.setTimeout(write, SR_DELAY_MS);
  }

  /** Recount for a (possibly empty) hero query. Cheap: runs on every settled keystroke. */
  function update(q) {
    if (!els) return;
    query = typeof q === 'string' ? q.trim() : '';
    var hasQuery = core.tokenize(query).length > 0;
    var s = stats(query);
    var next = [s.total, s.open, s.forOrg];
    var labels = core.counterLabels(app.get().organiser, hasQuery);
    next.forEach(function (n, i) {
      SB.motion.countUp(els.nums[i], n, shown ? ANIM_MS : INTRO_MS, shown ? shown[i] : 0);
      if (els.labels[i].textContent !== labels[i]) els.labels[i].textContent = labels[i];
    });
    var pending = hasQuery && !!SB.smart && SB.smart.isPending(query);
    var zero = hasQuery && s.total === 0 && !pending; // wait for the smart answer before saying "none"
    els.caption.textContent = zero
      ? 'Inga träffar ' + core.queryCaption(query) + ' – prova de tre frågorna nedan.'
      : core.queryCaption(query);
    els.host.classList.toggle('has-query', hasQuery);
    els.host.classList.toggle('is-zero', zero);
    if (els.cue) els.cue.classList.toggle('is-emphasised', zero);
    if (pending) window.clearTimeout(srTimer); // settled = after the smart answer; announce once
    else summaryLater(core.counterSummary(s, query, app.get().organiser), false);
    shown = next;
  }

  function init(a) {
    app = a;
    index = core.buildIndex(app.grants);
    var organiser = app.get().organiser;
    lastSr = core.counterSummary(stats(''), '', organiser);
    els = build(lastSr, core.counterLabels(organiser, false));
    if (!els) return;
    // Intro: count up from zero once the hero has revealed, as before.
    window.setTimeout(function () { update(query); }, 500);
    app.subscribe(function (next, prev) {
      if (next.organiser !== prev.organiser || next.showEnded !== prev.showEnded) update(query);
    });
    if (SB.smart) SB.smart.onUpdate(function () { if (shown && query) update(query); });
  }

  SB.counters = { init: init, update: update };
})();
