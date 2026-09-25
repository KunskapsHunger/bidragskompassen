/* Bidragskompassen – core: URL hash state (encode/decode) for shareable catalog views. Pure. */
(function (root) {
  'use strict';
  var isNode = typeof module !== 'undefined' && module.exports;
  var core = isNode ? Object.assign({}, require('./core.js'), require('./core-search.js')) : root.SB.core;

  var CATALOG_ID = 'alla-bidrag';
  var GRANT_PREFIX = 'bidrag/';
  var VIEWS = ['grid', 'lista'];
  var MAX_Q = 100;
  var MAX_ITEM = 80;

  function defaultCatalogState() {
    return { q: '', filters: core.emptyFilters(), sort: 'relevans', view: 'grid' };
  }

  function ids(list) { return list.map(function (x) { return x.id; }); }
  function allowedValues(key) {
    switch (key) {
      case 'skolform': return ids(core.SKOLFORMER);
      case 'omrade': return ids(core.OMRADEN);
      case 'typ': return ids(core.TYPER);
      case 'status': return ids(core.STATUS);
      default: return null; // myndighet: free text (validated for length)
    }
  }

  function isDefaultState(s) {
    var d = defaultCatalogState();
    return !s.q && s.sort === d.sort && s.view === d.view &&
      core.FILTER_KEYS.every(function (k) { return !s.filters[k].length; });
  }

  /** Catalog state → hash string, e.g. "#alla-bidrag?q=läs&status=open". */
  function encodeCatalogState(s) {
    var parts = [];
    if (s.q) parts.push('q=' + encodeURIComponent(s.q));
    core.FILTER_KEYS.forEach(function (k) {
      if (s.filters[k] && s.filters[k].length) {
        parts.push(k + '=' + s.filters[k].map(encodeURIComponent).join(','));
      }
    });
    if (s.sort && s.sort !== 'relevans') parts.push('sort=' + s.sort);
    if (s.view && s.view !== 'grid') parts.push('vy=' + s.view);
    return '#' + CATALOG_ID + (parts.length ? '?' + parts.join('&') : '');
  }

  function safeDecode(v) {
    try { return decodeURIComponent(v); } catch (e) { return ''; }
  }

  function parseQuery(qs) {
    var state = defaultCatalogState();
    var filters = core.emptyFilters();
    (qs || '').split('&').forEach(function (pair) {
      if (!pair) return;
      var eq = pair.indexOf('=');
      var key = eq === -1 ? pair : pair.slice(0, eq);
      var raw = eq === -1 ? '' : pair.slice(eq + 1);
      if (key === 'q') {
        state = Object.assign({}, state, { q: safeDecode(raw.replace(/\+/g, ' ')).slice(0, MAX_Q) });
      } else if (key === 'sort') {
        if (core.findById(core.SORTS, raw)) state = Object.assign({}, state, { sort: raw });
      } else if (key === 'vy') {
        if (VIEWS.indexOf(raw) !== -1) state = Object.assign({}, state, { view: raw });
      } else if (core.FILTER_KEYS.indexOf(key) !== -1) {
        var allowed = allowedValues(key);
        var values = raw.split(',').map(safeDecode).filter(function (v, i, arr) {
          if (!v || v.length > MAX_ITEM || arr.indexOf(v) !== i) return false;
          return !allowed || allowed.indexOf(v) !== -1;
        });
        var patch = {};
        patch[key] = values;
        filters = Object.assign({}, filters, patch);
      }
    });
    return Object.assign({}, state, { filters: filters });
  }

  /**
   * Hash → route. Returns one of:
   *  { route:'none' } · { route:'grant', id } · { route:'catalog', state } · { route:'section', id }
   */
  function decodeHash(hash) {
    var h = typeof hash === 'string' ? hash.replace(/^#/, '') : '';
    if (!h) return { route: 'none' };
    if (h.indexOf(GRANT_PREFIX) === 0) {
      var id = safeDecode(h.slice(GRANT_PREFIX.length));
      return /^[a-z0-9-]{1,80}$/.test(id) ? { route: 'grant', id: id } : { route: 'none' };
    }
    var qIdx = h.indexOf('?');
    var base = qIdx === -1 ? h : h.slice(0, qIdx);
    if (base === CATALOG_ID) {
      return { route: 'catalog', state: parseQuery(qIdx === -1 ? '' : h.slice(qIdx + 1)) };
    }
    return /^[a-z0-9-]{1,60}$/.test(base) ? { route: 'section', id: base } : { route: 'none' };
  }

  function grantHash(id) { return '#' + GRANT_PREFIX + id; }

  var api = {
    CATALOG_ID: CATALOG_ID, VIEWS: VIEWS,
    defaultCatalogState: defaultCatalogState, isDefaultState: isDefaultState,
    encodeCatalogState: encodeCatalogState, decodeHash: decodeHash, grantHash: grantHash
  };

  if (isNode) module.exports = api;
  if (root) { root.SB = root.SB || {}; root.SB.core = Object.assign(root.SB.core || {}, api); }
})(typeof window !== 'undefined' ? window : null);
