/* Bidragskompassen – core: optional "smart search" (Jev re-ranking). Pure: request building,
 * defensive response validation, blending with local relevance, filter hints. No DOM, no network. */
(function (root) {
  'use strict';
  var core = (typeof module !== 'undefined' && module.exports) ? require('./core.js') : root.SB.core;

  var SMART = Object.freeze({
    MIN_CHARS: 3,          // endpoint accepts 3–200 characters
    MAX_CHARS: 200,
    DEBOUNCE_MS: 700,      // wait after typing stops
    TIMEOUT_MS: 8000,
    WEIGHT: 1.0,           // Jev p is added on the same 0–1 scale as normalised local relevance
    STRONG_P: 0.15,        // below this Jev only nudges (boost halved)
    WEAK_FACTOR: 0.5,
    ADD_P: 0.10,           // a grant the local search missed is added only from this p
    ONLY_FACTOR: 0.9,      // Jev-only hits are damped so Jev alone never beats a strong local match (1.0)
    NONE_PENALTY: 2,       // boost × (1 − 2·none): "no grant fits" is the best signal that Jev is guessing
    LOCAL_REF: 6,          // local score per token that counts as a full match (word start in kortnamn)
    CHIP_CONFIDENCE: 0.6,
    NONE_HINT: 0.5,
    FEW_LOCAL: 2,
    HERO_MIN_WORDS: 3,
    HERO_MIN_LOCAL: 3,
    HERO_MAX: 3,
    PAUSE_MS: 5 * 60 * 1000
  });
  var ORGANISERS = ['fristaende', 'kommun', 'region', 'alla'];

  function cleanQuery(q) { return typeof q === 'string' ? q.replace(/\s+/g, ' ').trim() : ''; }
  function isSmartQuery(q) {
    var c = cleanQuery(q);
    return c.length >= SMART.MIN_CHARS && c.length <= SMART.MAX_CHARS && core.tokenize(c).length > 0;
  }
  function wordCount(q) { var c = cleanQuery(q); return c ? c.split(' ').length : 0; }
  function smartOrganiser(org) { return ORGANISERS.indexOf(org) !== -1 ? org : 'alla'; }
  /** Cache/staleness key: same normalised question for the same organiser. */
  function smartKey(q, organiser) { return smartOrganiser(organiser) + '|' + core.normalize(q); }

  /** { url, init } for fetch – or null when config or query is unusable. */
  function buildSmartRequest(q, organiser, config) {
    if (!config || typeof config !== 'object') return null;
    var url = core.safeUrl(config.smartSearchUrl);
    var key = typeof config.publishableKey === 'string' ? config.publishableKey.trim() : '';
    if (!url || !key || !isSmartQuery(q)) return null;
    return {
      url: url,
      init: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', apikey: key },
        body: JSON.stringify({ q: cleanQuery(q), organiser: smartOrganiser(organiser) })
      }
    };
  }

  function prob(v) {
    var n = typeof v === 'number' ? v : typeof v === 'string' && v.trim() ? Number(v) : NaN;
    return isFinite(n) ? Math.min(1, Math.max(0, n)) : 0;
  }
  function choice(raw, vocab) {
    var o = raw && typeof raw === 'object' ? raw : {};
    var valid = typeof o.id === 'string' && !!core.findById(vocab, o.id);
    return Object.freeze({ id: valid ? o.id : null, confidence: valid ? prob(o.confidence) : 0 });
  }

  /** Validate a 200 body. Unknown ids are dropped, probabilities clamped. Returns frozen data or null. */
  function parseSmartResponse(data, knownIds) {
    if (!data || typeof data !== 'object' || !Array.isArray(data.ranking)) return null;
    var known = {};
    (Array.isArray(knownIds) ? knownIds : []).forEach(function (id) { known[id] = true; });
    var seen = {};
    var ranking = [];
    data.ranking.forEach(function (r) {
      if (!r || typeof r.id !== 'string' || !known[r.id] || seen[r.id]) return;
      seen[r.id] = true;
      var p = prob(r.p);
      if (p > 0) ranking.push(Object.freeze({ id: r.id, p: p }));
    });
    ranking.sort(function (a, b) { return b.p - a.p; });
    return Object.freeze({
      model: typeof data.model === 'string' ? data.model.slice(0, 60) : '',
      ranking: Object.freeze(ranking.slice(0, 15)),
      none: prob(data.none),
      omrade: choice(data.omrade, core.OMRADEN),
      skolform: choice(data.skolform, core.SKOLFORMER)
    });
  }

  function localNorm(score, tokenCount) {
    return tokenCount > 0 ? Math.min(1, (score || 0) / (SMART.LOCAL_REF * tokenCount)) : 0;
  }
  function boostFor(p, none) {
    var b = SMART.WEIGHT * p * Math.max(0, 1 - SMART.NONE_PENALTY * none);
    return p >= SMART.STRONG_P ? b : b * SMART.WEAK_FACTOR;
  }

  /**
   * Blend local results with Jev. `localItems` = catalog items for the query (already filtered);
   * `poolItems` = every item allowed by the current filters/organiser rules (query ignored) –
   * the only source for Jev-only additions, so Jev can never bring back hidden grants.
   * Returns NEW item objects: { ...item, smartP, smartOnly, finalScore }.
   */
  function mergeSmart(localItems, poolItems, smart, tokenCount) {
    var local = Array.isArray(localItems) ? localItems : [];
    if (!smart) return { items: local.slice(), changed: false, added: 0 };
    var pById = {};
    smart.ranking.forEach(function (r) { pById[r.id] = r.p; });
    var inLocal = {};
    var scored = local.map(function (it, i) {
      inLocal[it.grant.id] = true;
      var p = pById[it.grant.id] || 0;
      return Object.assign({}, it, { smartP: p, smartOnly: false, order: i,
        finalScore: localNorm(it.score, tokenCount) + boostFor(p, smart.none) });
    });
    var extra = (Array.isArray(poolItems) ? poolItems : []).filter(function (it) {
      var p = pById[it.grant.id] || 0;
      return !inLocal[it.grant.id] && p >= SMART.ADD_P && boostFor(p, smart.none) > 0; // no additions when Jev says nothing fits
    }).map(function (it, i) {
      var p = pById[it.grant.id];
      return Object.assign({}, it, { score: 0, smartP: p, smartOnly: true, order: local.length + i,
        finalScore: boostFor(p, smart.none) * SMART.ONLY_FACTOR });
    });
    var all = scored.concat(extra).sort(function (a, b) {
      return (b.finalScore - a.finalScore) || (a.order - b.order);
    });
    var changed = extra.length > 0 || all.some(function (it, i) { return it.order !== i; });
    return { items: all, changed: changed, added: extra.length };
  }

  /** Does at least one strong Jev hit carry this value? (Jev can be confidently wrong about the
   *  school form; a chip that would filter away its own best hits is not worth offering.) */
  function consistent(smart, field, value, grantsById) {
    if (!grantsById) return true;
    return smart.ranking.some(function (r) {
      var g = grantsById[r.id];
      return r.p >= SMART.STRONG_P && g && g[field].indexOf(value) !== -1;
    });
  }

  /** Filter chips worth offering: confident omrade/skolform, filter group still empty, and
   *  consistent with the strong hits when `grantsById` is given. */
  function suggestFilters(smart, filters, grantsById) {
    if (!smart) return [];
    var f = filters || {};
    return [
      { key: 'omrade', field: 'omraden', c: smart.omrade, vocab: core.OMRADEN },
      { key: 'skolform', field: 'skolformer', c: smart.skolform, vocab: core.SKOLFORMER }
    ].filter(function (x) {
      return x.c.id && x.c.confidence >= SMART.CHIP_CONFIDENCE && !(f[x.key] && f[x.key].length) &&
        consistent(smart, x.field, x.c.id, grantsById);
    }).map(function (x) {
      return Object.freeze({ key: x.key, id: x.c.id, label: core.labelOf(x.vocab, x.c.id), confidence: x.c.confidence });
    });
  }

  function isNoFit(smart, localCount) {
    return !!smart && smart.none >= SMART.NONE_HINT && localCount <= SMART.FEW_LOCAL;
  }

  /** Hero combobox: should we ask Jev at all? (few local suggestions, a real question) */
  function wantsHeroSmart(q, localCount) {
    return isSmartQuery(q) && wordCount(q) >= SMART.HERO_MIN_WORDS && localCount < SMART.HERO_MIN_LOCAL;
  }

  /** Extra hero suggestions: allowed ids only, not already shown, p ≥ ADD_P, best first. */
  function heroSmartIds(smart, allowedIds, excludeIds, limit) {
    if (!smart) return [];
    var allowed = {};
    (allowedIds || []).forEach(function (id) { allowed[id] = true; });
    var exclude = {};
    (excludeIds || []).forEach(function (id) { exclude[id] = true; });
    return smart.ranking.filter(function (r) {
      return r.p >= SMART.ADD_P && allowed[r.id] && !exclude[r.id];
    }).slice(0, limit || SMART.HERO_MAX).map(function (r) { return r.id; });
  }

  var api = {
    SMART: SMART, cleanQuery: cleanQuery, isSmartQuery: isSmartQuery, wordCount: wordCount,
    smartOrganiser: smartOrganiser, smartKey: smartKey, buildSmartRequest: buildSmartRequest,
    parseSmartResponse: parseSmartResponse, smartLocalNorm: localNorm, smartBoost: boostFor,
    mergeSmart: mergeSmart, suggestFilters: suggestFilters, isNoFit: isNoFit,
    wantsHeroSmart: wantsHeroSmart, heroSmartIds: heroSmartIds
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (root) { root.SB = root.SB || {}; root.SB.core = Object.assign(root.SB.core || {}, api); }
})(typeof window !== 'undefined' ? window : null);
