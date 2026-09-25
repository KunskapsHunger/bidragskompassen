/* Bidragskompassen – app bootstrap: data prep, immutable store, organiser switch, hash router. */
(function () {
  'use strict';
  var SB = window.SB;
  var core = SB.core;
  var dom = SB.dom;
  var h = dom.h;
  var ORG_KEY = 'sb.organiser';

  var today = core.isoFromDate(new Date());
  var grants = core.prepareGrants(window.SB_GRANTS);
  var byId = {};
  grants.forEach(function (g) { byId[g.id] = g; });
  var guide = window.SB_GUIDE && typeof window.SB_GUIDE === 'object' ? window.SB_GUIDE : {};

  var storedOrg = dom.storage.get(ORG_KEY, core.DEFAULT_ORGANISER);
  var initialRoute = core.decodeHash(window.location.hash);

  var state = Object.freeze({
    organiser: core.findById(core.ORGANISERS, storedOrg) ? storedOrg : core.DEFAULT_ORGANISER,
    showIneligible: false,
    showEnded: false,
    catalog: initialRoute.route === 'catalog' ? initialRoute.state : core.defaultCatalogState()
  });
  var listeners = [];

  function get() { return state; }

  /** Replace state with a new frozen object; notify subscribers with (next, prev). */
  function set(patch, opts) {
    var prev = state;
    state = Object.freeze(Object.assign({}, state, patch));
    if (patch.organiser && patch.organiser !== prev.organiser) dom.storage.set(ORG_KEY, patch.organiser);
    if (opts && opts.url && patch.catalog) replaceHash(core.encodeCatalogState(state.catalog));
    listeners.forEach(function (fn) {
      try { fn(state, prev); } catch (err) { if (window.console) console.error('[Bidragskompassen]', err); }
    });
  }
  function subscribe(fn) { listeners.push(fn); }

  function ctx() {
    return { today: today, organiser: state.organiser, showIneligible: state.showIneligible, showEnded: state.showEnded };
  }

  function replaceHash(hash) {
    var target = hash || (window.location.pathname + window.location.search);
    try { window.history.replaceState(null, '', target); } catch (e) { /* history blocked (rare on file://) */ }
  }

  /** Jump to the catalog with a patched state; focuses the catalog search. */
  function goToCatalog(catalogPatch) {
    set({ catalog: Object.assign({}, core.defaultCatalogState(), catalogPatch || {}) }, { url: true });
    if (SB.smart) SB.smart.now(); // submit = ask the smart search right away
    var section = document.getElementById('alla-bidrag');
    if (section) section.scrollIntoView({ behavior: SB.motion.isReduced() ? 'auto' : 'smooth', block: 'start' });
    var input = document.getElementById('cat-q');
    if (input) window.setTimeout(function () { input.focus({ preventScroll: true }); }, SB.motion.isReduced() ? 0 : 500);
  }

  /* ---------- Organiser switch ---------- */
  function renderOrgSwitch() {
    var seg = document.getElementById('org-seg');
    dom.clear(seg);
    core.ORGANISERS.forEach(function (o) {
      var input = h('input', { type: 'radio', name: 'organiser', value: o.id, 'aria-label': o.label });
      input.checked = o.id === state.organiser;
      input.addEventListener('change', function () {
        if (!input.checked) return;
        set({ organiser: o.id });
        dom.announce('Visar bidrag för: ' + o.label + '.');
      });
      seg.appendChild(h('label', null, [input, h('span', null, [
        h('span', { class: 'seg__long', text: o.label }),
        h('span', { class: 'seg__short', 'aria-hidden': 'true', text: o.short })
      ])]));
    });
  }

  /* ---------- Header menu + current section ---------- */
  function initNav() {
    var toggle = dom.$('.menu-toggle');
    var nav = document.getElementById('site-nav');
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); toggle.focus();
      }
    });
    if (!('IntersectionObserver' in window)) return;
    var links = dom.$$('a', nav);
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          if (a.getAttribute('href') === '#' + en.target.id) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['top', 'kompassen', 'arshjulet', 'alla-bidrag', 'sa-gor-du', 'ordlista'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }

  /* Hero counters live in js/counters.js (they follow the hero query). */

  /* ---------- Footer ---------- */
  function renderFooter() {
    var dates = grants.map(function (g) { return g.senastKontrollerad; })
      .concat([guide.senastKontrollerad]).filter(core.isISODate).sort();
    var latest = dates[dates.length - 1];
    document.getElementById('footer-checked').textContent = latest ? core.formatDate(latest, { long: true }) : 'Okänt';
    var list = document.getElementById('footer-sources');
    dom.clear(list);
    (Array.isArray(guide.kallor) ? guide.kallor : []).forEach(function (k) {
      if (k && typeof k.titel === 'string') list.appendChild(h('li', null, dom.safeLink(k.url, k.titel)));
    });
    if (!list.children.length) list.appendChild(h('li', { text: 'Källor anges för varje bidrag.' }));
  }

  /* ---------- Router ---------- */
  function route(r, isInitial) {
    if (r.route === 'grant') {
      if (byId[r.id]) SB.detail.open(r.id, { fromHash: true });
      return;
    }
    if (SB.detail.isOpen()) SB.detail.close({ keepHash: true });
    if (r.route === 'catalog') {
      /* A plain "#alla-bidrag" (nav link) keeps the current selection instead of resetting it. */
      if (!isInitial && window.location.hash === '#' + core.CATALOG_ID) {
        replaceHash(core.encodeCatalogState(state.catalog));
        return;
      }
      if (core.encodeCatalogState(r.state) !== core.encodeCatalogState(state.catalog)) set({ catalog: r.state });
      if (isInitial || r.state) {
        var sec = document.getElementById('alla-bidrag');
        if (sec) window.setTimeout(function () { sec.scrollIntoView({ block: 'start' }); }, isInitial ? 60 : 0);
      }
    }
  }

  function initModule(name) {
    try { if (SB[name] && SB[name].init) SB[name].init(SB.app); }
    catch (err) { if (window.console) console.error('[Bidragskompassen] ' + name + ' kunde inte starta', err); }
  }

  SB.app = {
    today: today, grants: grants, byId: byId, guide: guide,
    get: get, set: set, subscribe: subscribe, ctx: ctx, replaceHash: replaceHash, goToCatalog: goToCatalog
  };

  function boot() {
    if (window.SB_SAMPLE && window.SB_SAMPLE.grants) document.getElementById('sample-banner').hidden = false;
    renderOrgSwitch();
    initNav();
    renderFooter();
    ['motion', 'smart', 'counters', 'search', 'filters', 'catalog', 'detail', 'wizard', 'wheel', 'guide'].forEach(initModule);
    subscribe(function (next, prev) {
      if (next.organiser !== prev.organiser) {
            dom.$$('#org-seg input').forEach(function (i) { i.checked = i.value === next.organiser; });
      }
    });
    window.addEventListener('hashchange', function () { route(core.decodeHash(window.location.hash), false); });
    if (initialRoute.route === 'grant' || initialRoute.route === 'catalog') route(initialRoute, true);
    SB.booted = true;
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
