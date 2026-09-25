/* Bidragskompassen – core: hero combobox suggestions (local + smart blend) and live counters. Pure. */
(function (root) {
  'use strict';
  var isNode = typeof module !== 'undefined' && module.exports;
  var core = isNode
    ? Object.assign({}, require('./core.js'), require('./core-search.js'), require('./core-smart.js'))
    : root.SB.core;

  var COUNTER_ORG_LABELS = { fristaende: 'för fristående', kommun: 'för kommunala', region: 'för region/stat', alla: 'kan sökas' };
  var CAPTION_MAX = 36;

  function state(q) { return { q: q, filters: core.emptyFilters(), sort: 'relevans' }; }
  function withCtx(ctx, patch) { return Object.assign({}, ctx, patch); }

  /** Grants Jev may add: allowed by organiser rules, never ended (the catalog's default pool). */
  function allowedPool(grants, index, ctx) {
    return core.runCatalog(grants, index, state(''), withCtx(ctx, { showIneligible: false, showEnded: false })).items;
  }

  /**
   * Hero suggestions. Local matches include grants the organiser cannot apply for and ended ones
   * (shown last, labelled), as before; Jev may only ADD allowed grants. `smart` may be null.
   * Returns { items, total } – items are new objects, best first.
   */
  function heroSuggest(grants, index, q, ctx, smart, limit) {
    if (!core.tokenize(q).length) return { items: [], total: 0 };
    var local = core.runCatalog(grants, index, state(q), withCtx(ctx, { showIneligible: true, showEnded: true }));
    var items = smart
      ? core.mergeSmart(local.items, allowedPool(grants, index, ctx), smart, local.tokens.length).items
      : local.items;
    // Both inputs are already relevance-ordered; only push "cannot apply" and ended grants last.
    var rank = function (it) { return (it.dim ? 1 : 0) + (it.status.code === 'ended' ? 2 : 0); };
    var sorted = items.map(function (it, i) { return { it: it, i: i }; }).sort(function (a, b) {
      return (rank(a.it) - rank(b.it)) || (a.i - b.i);
    }).map(function (x) { return x.it; });
    return { items: sorted.slice(0, limit || 6), total: sorted.length };
  }

  /**
   * Counter numbers for the hero. Empty query → site totals (ended excluded). With a query →
   * the catalog's matching set for that query incl. grants the organiser cannot apply for, so
   * the third number ("för fristående") stays meaningful. Jev-only hits are added when present.
   */
  function heroStats(grants, index, q, ctx, smart) {
    var items;
    if (!core.tokenize(q).length) {
      items = grants.filter(function (g) { return ctx.showEnded || !core.isEnded(g); }).map(function (g) {
        return { grant: g, status: core.grantStatus(g, ctx.today) };
      });
    } else {
      var c = withCtx(ctx, { showIneligible: true });
      var local = core.runCatalog(grants, index, state(q), c);
      items = smart
        ? core.mergeSmart(local.items, core.runCatalog(grants, index, state(''), c).items, smart, local.tokens.length).items
        : local.items;
    }
    return Object.freeze({
      total: items.length,
      open: items.filter(function (it) { return it.status.code === 'open'; }).length,
      forOrg: items.filter(function (it) { return core.canApply(it.grant, ctx.organiser); }).length
    });
  }

  /** Labels for the three counters. */
  function counterLabels(organiser, hasQuery) {
    return [hasQuery ? 'matchar' : 'bidrag', 'öppna nu', COUNTER_ORG_LABELS[organiser] || COUNTER_ORG_LABELS.alla];
  }

  /** Short caption under the counters, e.g. för ”läxhjälp”. Empty string without a query. */
  function queryCaption(q) {
    var c = core.cleanQuery(q);
    if (!core.tokenize(c).length) return '';
    var shown = c.length > CAPTION_MAX ? c.slice(0, CAPTION_MAX - 1).trim() + '…' : c;
    return 'för ”' + shown + '”';
  }

  /** Screen-reader sentence for the counters. */
  function counterSummary(stats, q, organiser) {
    var labels = counterLabels(organiser, !!core.tokenize(q).length);
    var head = core.tokenize(q).length
      ? (stats.total === 1 ? '1 bidrag matchar ' : stats.total + ' bidrag matchar ') + queryCaption(q).replace(/^för /, '')
      : stats.total + ' bidrag';
    return head + ', ' + stats.open + ' öppna nu, ' + stats.forOrg + ' ' + labels[2] + '.';
  }

  var api = {
    COUNTER_ORG_LABELS: COUNTER_ORG_LABELS, heroSuggest: heroSuggest, heroStats: heroStats,
    counterLabels: counterLabels, queryCaption: queryCaption, counterSummary: counterSummary
  };

  if (isNode) module.exports = api;
  if (root) { root.SB = root.SB || {}; root.SB.core = Object.assign(root.SB.core || {}, api); }
})(typeof window !== 'undefined' ? window : null);
