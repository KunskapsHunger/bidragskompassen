/* Bidragskompassen – optional smart search: talks to the ranking endpoint, keeps a small cache,
 * and renders the calm "sorted by intent" bar above the catalog. Every failure falls back to
 * the local results silently; nothing here may block the UI. */
(function () {
  'use strict';
  var SB = window.SB;
  var core = SB.core;
  var dom = SB.dom;
  var h = dom.h;
  var S = core.SMART;
  var PREF_KEY = 'sb.smartSearch';
  var LOCAL_DELAY = 180; // catalog.js already debounces typing this long before updating state

  var app = null;
  var knownIds = [];
  var cache = {};           // smartKey -> parsed answer
  var pausedUntil = 0;
  var listeners = [];
  var version = 0;
  var cat = { timer: null, ctrl: null, key: null, loading: null };
  var hero = { timer: null, ctrl: null, key: null };
  var plainKey = null;      // "Visa vanlig ordning" chosen for this query
  var announcedKey = null;
  var refocusToggle = false; // keep keyboard focus on the order toggle across re-renders

  function isOn() { return dom.storage.get(PREF_KEY, '1') !== '0'; }
  function isPaused() { return Date.now() < pausedUntil; }
  function available() { return !!core.buildSmartRequest('abc', 'alla', window.SB_CONFIG); }
  function active() { return isOn() && available(); }
  function bump() {
    version += 1;
    listeners.forEach(function (fn) { try { fn(); } catch (e) { /* a listener must not break the others */ } });
  }

  /** One request with timeout; resolves to a parsed answer or null. Never rejects. */
  function request(q, organiser, outer) {
    var key = core.smartKey(q, organiser);
    if (cache[key]) return Promise.resolve(cache[key]);
    if (isPaused() || typeof fetch !== 'function' || typeof AbortController === 'undefined') return Promise.resolve(null);
    var req = core.buildSmartRequest(q, organiser, window.SB_CONFIG);
    if (!req) return Promise.resolve(null);
    var ctrl = new AbortController();
    var timer = window.setTimeout(function () { ctrl.abort(); }, S.TIMEOUT_MS);
    if (outer) outer.addEventListener('abort', function () { ctrl.abort(); });
    return fetch(req.url, Object.assign({}, req.init, { signal: ctrl.signal, credentials: 'omit', referrerPolicy: 'no-referrer', cache: 'no-store' }))
      .then(function (res) {
        if (res.status === 429) { pausedUntil = Date.now() + S.PAUSE_MS; bump(); return null; }
        if (!res.ok) return null;
        return res.json().then(function (data) {
          var parsed = core.parseSmartResponse(data, knownIds);
          if (parsed) cache[key] = parsed;
          return parsed;
        });
      })
      .catch(function () { return null; })
      .then(function (result) { window.clearTimeout(timer); return result; });
  }

  /* ---------- Catalog ---------- */
  function catalogQuery(st) {
    var c = st.catalog;
    return c.sort === 'relevans' && core.isSmartQuery(c.q) ? core.cleanQuery(c.q) : '';
  }
  function abortCatalog() {
    window.clearTimeout(cat.timer);
    if (cat.ctrl) cat.ctrl.abort();
    cat.ctrl = null;
    cat.key = null;
  }

  function scheduleCatalog(delay) {
    var st = app.get();
    var q = catalogQuery(st);
    var key = q ? core.smartKey(q, st.organiser) : null;
    if (!active() || !q) { abortCatalog(); cat.loading = null; bump(); return; }
    if (cache[key] || cat.key === key) { bump(); return; }
    abortCatalog();
    cat.loading = isPaused() ? null : key;
    bump();
    if (isPaused()) return;
    cat.timer = window.setTimeout(function () {
      var ctrl = new AbortController();
      cat.ctrl = ctrl;
      cat.key = key;
      request(q, st.organiser, ctrl.signal).then(function () {
        if (cat.ctrl === ctrl) { cat.ctrl = null; cat.key = null; }
        if (cat.loading === key) cat.loading = null;
        var now = app.get();
        if (core.smartKey(catalogQuery(now), now.organiser) === key) bump(); // ignore stale answers
      });
    }, Math.max(0, delay));
  }

  /** Called by catalog.js on every render. Returns { items, info }. */
  function apply(res, st, poolFn) {
    var q = catalogQuery(st);
    if (!active() || !q) return { items: res.items, info: { status: 'off' } };
    var key = core.smartKey(q, st.organiser);
    var data = cache[key];
    if (!data) {
      var status = isPaused() ? 'paused' : (cat.loading === key || cat.key === key ? 'loading' : 'none');
      return { items: res.items, info: { status: status, key: key } };
    }
    var merged = core.mergeSmart(res.items, poolFn(), data, res.tokens.length);
    var plain = plainKey === key;
    return {
      items: plain ? res.items : merged.items,
      info: { status: 'ready', key: key, changed: merged.changed, added: merged.added, plain: plain, count: merged.items.length,
        chips: core.suggestFilters(data, st.catalog.filters, app.byId), noFit: core.isNoFit(data, res.items.length) }
    };
  }

  function chipRow(info) {
    return info.chips.map(function (c) {
      var btn = h('button', { type: 'button', class: 'chip smartbar__chip', 'aria-label': 'Filtrera på ' + c.label }, 'Filtrera');
      btn.addEventListener('click', function () {
        var catalog = app.get().catalog;
        var filters = Object.assign({}, catalog.filters);
        filters[c.key] = catalog.filters[c.key].concat([c.id]);
        app.set({ catalog: Object.assign({}, catalog, { filters: filters }) }, { url: true });
        dom.announce('Filter: ' + c.label + '.');
        // Keyboard users land on the matching "Ta bort …" chip so the filter is easy to undo.
        var undo = dom.$$('#cat-active .chip--remove').filter(function (b) {
          return (b.getAttribute('aria-label') || '').indexOf(c.label) !== -1;
        })[0];
        var target = undo || document.getElementById('cat-q');
        if (target) target.focus();
      });
      return h('p', { class: 'smartbar__suggest' }, [(c.key === 'omrade' ? 'Menar du ' : 'Gäller det ') + c.label + '? ', btn]);
    });
  }

  function renderBar(host, info) {
    dom.clear(host);
    host.hidden = info.status === 'off' || info.status === 'none';
    if (host.hidden) return;
    if (info.status === 'loading') {
      host.appendChild(h('p', { class: 'smartbar__status is-loading' }, [h('span', { class: 'smartbar__dot', 'aria-hidden': 'true' }), 'Letar efter bidrag som passar frågan …']));
      return;
    }
    if (info.status === 'paused') {
      host.appendChild(h('p', { class: 'smartbar__status', text: 'Smart sökning är tillfälligt pausad. Den vanliga sökningen fungerar som vanligt.' }));
      return;
    }
    var line = h('p', { class: 'smartbar__status' });
    if (info.changed) {
      var toggle = h('button', { type: 'button', class: 'link-btn', text: info.plain ? 'Sortera efter frågan' : 'Visa vanlig ordning' });
      toggle.addEventListener('click', function () {
        plainKey = info.plain ? null : info.key;
        refocusToggle = true;
        bump();
        dom.announce(info.plain ? 'Sorterat efter vad frågan troligen handlar om.' : 'Vanlig ordning visas.');
      });
      dom.append(line, [info.plain ? 'Vanlig ordning visas. ' : 'Sorterat efter vad frågan troligen handlar om. ', toggle]);
      if (refocusToggle) { refocusToggle = false; window.setTimeout(function () { toggle.focus(); }, 0); }
      if (!info.plain && announcedKey !== info.key) {
        announcedKey = info.key;
        dom.announce('Resultaten är sorterade efter vad frågan troligen handlar om' +
          (info.added ? '. ' + dom.plural(info.added, 'förslag', 'förslag') + ' har lagts till' : '') + '.');
      }
    } else if (info.count >= 2 && !info.noFit) {
      line.appendChild(document.createTextNode('Smart sökning: ordningen stämmer med frågan. '));
    }
    line.appendChild(h('a', { class: 'smartbar__about', href: '#installningar', text: 'Om smart sökning' }));
    host.appendChild(line);
    dom.append(host, chipRow(info));
    if (info.noFit) {
      host.appendChild(h('div', { class: 'note smartbar__nofit' }, [
        h('p', { text: 'Det finns kanske inget statsbidrag för just det här.' }),
        h('p', null, ['Prova ', h('a', { href: '#kompassen', text: 'Kompassen' }), ' för att hitta något närliggande, eller läs ',
          h('a', { href: '#sa-gor-du', text: 'Så gör du' }), ' om hur statsbidrag fungerar.'])
      ]));
    }
  }

  /* ---------- Hero combobox ---------- */
  function heroAllowedIds(st) {
    return app.grants.filter(function (g) {
      return !core.isEnded(g) && (st.organiser === 'alla' || core.canApply(g, st.organiser));
    }).map(function (g) { return g.id; });
  }

  /** Extra grants for the hero list (sync from cache); schedules a fetch and calls `onReady` later. */
  function heroExtras(q, localIds, onReady) {
    var st = app.get();
    if (!active() || !core.wantsHeroSmart(q, localIds.length)) return [];
    var key = core.smartKey(q, st.organiser);
    if (cache[key]) {
      return core.heroSmartIds(cache[key], heroAllowedIds(st), localIds, S.HERO_MAX).map(function (id) { return app.byId[id]; });
    }
    if (hero.key === key || isPaused()) return [];
    window.clearTimeout(hero.timer);
    if (hero.ctrl) hero.ctrl.abort();
    hero.key = key;
    hero.timer = window.setTimeout(function () {
      var ctrl = new AbortController();
      hero.ctrl = ctrl;
      request(q, st.organiser, ctrl.signal).then(function (data) {
        if (hero.ctrl === ctrl) hero.ctrl = null;
        if (hero.key === key) hero.key = null;
        if (data) onReady(q);
      });
    }, S.DEBOUNCE_MS);
    return [];
  }

  function cancelHero() {
    window.clearTimeout(hero.timer);
    if (hero.ctrl) hero.ctrl.abort();
    hero.ctrl = null;
    hero.key = null;
  }

  /* ---------- Setup ---------- */
  function syncToggles() {
    dom.$$('[data-smart-toggle]').forEach(function (cb) { cb.checked = isOn(); cb.disabled = !available(); });
  }

  function init(a) {
    app = a;
    knownIds = app.grants.map(function (g) { return g.id; });
    syncToggles();
    dom.$$('[data-smart-toggle]').forEach(function (cb) {
      cb.addEventListener('change', function () {
        dom.storage.set(PREF_KEY, cb.checked ? '1' : '0');
        syncToggles();
        if (!cb.checked) { abortCatalog(); cancelHero(); cat.loading = null; }
        dom.announce(cb.checked ? 'Smart sökning är påslagen.' : 'Smart sökning är avstängd. Vanlig sökning används.');
        scheduleCatalog(0);
      });
    });
    app.subscribe(function (next, prev) {
      var qChanged = next.catalog.q !== prev.catalog.q || next.catalog.sort !== prev.catalog.sort;
      if (qChanged) plainKey = null;
      if (qChanged || next.organiser !== prev.organiser) scheduleCatalog(S.DEBOUNCE_MS - LOCAL_DELAY);
    });
    if (catalogQuery(app.get())) scheduleCatalog(0); // shared link with a query
  }

  SB.smart = {
    init: init, apply: apply, renderBar: renderBar, heroExtras: heroExtras, cancelHero: cancelHero,
    now: function () { scheduleCatalog(0); },
    version: function () { return version; },
    onUpdate: function (fn) { listeners.push(fn); },
    isOn: isOn
  };
})();
