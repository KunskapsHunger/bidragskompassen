/* Bidragskompassen – safe DOM helpers. Data strings only ever reach the DOM via textContent. */
(function () {
  'use strict';
  var SB = window.SB = window.SB || {};
  var core = SB.core;
  var SVG_NS = 'http://www.w3.org/2000/svg';

  function append(el, children) {
    (Array.isArray(children) ? children : [children]).forEach(function (c) {
      if (c === null || c === undefined || c === false) return;
      if (Array.isArray(c)) { append(el, c); return; }
      el.appendChild(typeof c === 'string' || typeof c === 'number' ? document.createTextNode(String(c)) : c);
    });
    return el;
  }

  function setAttrs(el, attrs) {
    Object.keys(attrs || {}).forEach(function (k) {
      var v = attrs[k];
      if (v === null || v === undefined || v === false) return;
      if (k === 'class') el.setAttribute('class', v);
      else if (k === 'text') el.textContent = v;
      else if (k === 'style' && typeof v === 'object') Object.keys(v).forEach(function (p) { el.style.setProperty(p, v[p]); });
      else if (k.indexOf('on') === 0 && typeof v === 'function') el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? '' : String(v));
    });
    return el;
  }

  /** h('p', { class: 'x', text: 'hej' }, [children]) */
  function h(tag, attrs, children) {
    return append(setAttrs(document.createElement(tag), attrs), children);
  }
  function s(tag, attrs, children) {
    return append(setAttrs(document.createElementNS(SVG_NS, tag), attrs), children);
  }

  function clear(el) { while (el && el.firstChild) el.removeChild(el.firstChild); return el; }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  /** Text with <mark> around matched query tokens – built node by node (no innerHTML). */
  function highlight(text, query) {
    var frag = document.createDocumentFragment();
    var value = text || '';
    var ranges = query ? core.highlightRanges(value, query) : [];
    var pos = 0;
    ranges.forEach(function (r) {
      if (r[0] > pos) frag.appendChild(document.createTextNode(value.slice(pos, r[0])));
      frag.appendChild(h('mark', { text: value.slice(r[0], r[1]) }));
      pos = r[1];
    });
    if (pos < value.length) frag.appendChild(document.createTextNode(value.slice(pos)));
    return frag;
  }

  /** External link only for https URLs; otherwise plain text. */
  function safeLink(url, text, cls) {
    var href = core.safeUrl(url);
    if (!href) return h('span', { class: cls || null, text: text || '' });
    return h('a', { class: cls || null, href: href, target: '_blank', rel: 'noopener noreferrer' }, [
      text || href,
      h('span', { class: 'sr-only', text: ' (öppnas i ny flik)' }),
      h('span', { 'aria-hidden': 'true', class: 'ext', text: ' ↗' })
    ]);
  }

  function debounce(fn, ms) {
    var t = null;
    return function () {
      var args = arguments;
      var self = this;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(self, args); }, ms);
    };
  }

  var storage = {
    get: function (key, fallback) {
      try {
        var v = window.localStorage.getItem(key);
        return v === null ? fallback : v;
      } catch (e) { return fallback; }
    },
    set: function (key, value) {
      try { window.localStorage.setItem(key, value); } catch (e) { /* storage unavailable – ignore */ }
    }
  };

  var announceTimer = null;
  function announce(msg) {
    var el = document.getElementById('sr-announcer');
    if (!el) return;
    el.textContent = '';
    clearTimeout(announceTimer);
    announceTimer = setTimeout(function () { el.textContent = msg; }, 60);
  }

  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  function plural(n, one, many) { return n + ' ' + (n === 1 ? one : many); }

  /** Status tag: symbol + text, styled by the blue scale only. */
  function statusTag(st) {
    var def = core.findById(core.STATUS, st.code) || core.findById(core.STATUS, 'unknown');
    return h('span', { class: 'status status--' + def.id }, [
      h('span', { class: 'status__sym', 'aria-hidden': 'true', text: def.symbol }),
      def.label
    ]);
  }

  /** Mini eligibility matrix (symbols + text, never colour only). */
  function eligList(grant, organiser, compact) {
    var keys = ['fristaende', 'kommun', 'region', 'stat'];
    if (grant.sokande.ovriga !== 'nej') keys = keys.concat(['ovriga']);
    var org = core.findById(core.ORGANISERS, organiser);
    return h('ul', { class: 'elig' + (compact ? ' elig--compact' : ''), 'aria-label': 'Vem kan söka' },
      keys.map(function (k) {
        var v = grant.sokande[k];
        var e = core.ELIG[v];
        var mine = org && org.keys.indexOf(k) !== -1;
        return h('li', { class: 'elig__item elig__item--' + v + (mine ? ' is-mine' : '') }, [
          h('span', { class: 'elig__sym', 'aria-hidden': 'true', text: e.symbol }),
          h('span', { class: 'elig__who', text: core.labelOf(core.SOKANDE, k) }),
          h('span', { class: 'sr-only', text: ': ' + e.label }),
          compact ? null : h('span', { class: 'elig__val', 'aria-hidden': 'true', text: e.label })
        ]);
      }));
  }

  function grantLink(grant, attrs, children) {
    return h('a', Object.assign({ href: core.grantHash(grant.id), 'data-grant': grant.id }, attrs || {}), children);
  }

  SB.dom = {
    h: h, s: s, append: append, clear: clear, $: $, $$: $$, highlight: highlight, safeLink: safeLink,
    debounce: debounce, storage: storage, announce: announce, pad2: pad2, plural: plural,
    statusTag: statusTag, eligList: eligList, grantLink: grantLink
  };
})();
