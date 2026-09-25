/* Bidragskompassen – core: search scoring, filtering, sorting, guided-finder ranking. Pure. */
(function (root) {
  'use strict';
  var core = (typeof module !== 'undefined' && module.exports) ? require('./core.js') : root.SB.core;

  var FIELD_WEIGHTS = { kortnamn: 6, namn: 5, nyckelord: 4, myndighet: 3, omraden: 2, sammanfattning: 2 };
  var FILTER_KEYS = ['skolform', 'omrade', 'myndighet', 'typ', 'status'];
  var SORTS = [
    { id: 'relevans', label: 'Relevans' },
    { id: 'stanger', label: 'Stänger snart' },
    { id: 'ao', label: 'A–Ö' }
  ];
  var STATUS_ORDER = { open: 0, soon: 1, auto: 2, closed: 3, unknown: 4, ended: 5 };

  /* Plain-language goals for the guided finder, mapped to ÖMRÅDEN. */
  var GOALS = [
    { id: 'loner', label: 'Höja lärarnas löner', omraden: ['lon-karriar'] },
    { id: 'vuxna', label: 'Få fler vuxna i skolan', omraden: ['personal'] },
    { id: 'lasning', label: 'Stärka läsningen', omraden: ['lasning'] },
    { id: 'stod', label: 'Hjälpa elever som behöver stöd', omraden: ['stod', 'likvardighet'] },
    { id: 'lov', label: 'Erbjuda lovskola eller sommarskola', omraden: ['utokad-tid'] },
    { id: 'yrke', label: 'Utveckla yrkesutbildningen', omraden: ['yrke'] },
    { id: 'kultur', label: 'Kultur och skapande', omraden: ['kultur'] },
    { id: 'internationellt', label: 'Resa och samarbeta internationellt', omraden: ['internationellt'] },
    { id: 'kompetens', label: 'Fortbilda personalen', omraden: ['kompetens'] },
    { id: 'nyanlanda', label: 'Stötta nyanlända och flerspråkiga elever', omraden: ['nyanlanda'] },
    { id: 'halsa', label: 'Mer rörelse, hälsa och trygghet', omraden: ['halsa-trygghet'] },
    { id: 'digitalt', label: 'Arbeta mer digitalt', omraden: ['digitalt'] }
  ];

  function emptyFilters() { return { skolform: [], omrade: [], myndighet: [], typ: [], status: [] }; }

  /** Pre-computes normalised search fields per grant (derived, never mutates grants). */
  function buildIndex(grants) {
    return grants.map(function (g) {
      return {
        id: g.id,
        fields: {
          kortnamn: core.normalize(g.kortnamn),
          namn: core.normalize(g.namn),
          nyckelord: core.normalize(g.nyckelord.join(' ')),
          myndighet: core.normalize(g.myndighet),
          omraden: core.normalize(g.omraden.map(function (o) { return core.labelOf(core.OMRADEN, o); }).join(' ')),
          sammanfattning: core.normalize(g.sammanfattning)
        }
      };
    });
  }

  /** Score one index entry: every token must hit some field (AND). Word-start > partial. */
  function scoreEntry(entry, tokens) {
    if (!tokens.length) return 0;
    var total = 0;
    for (var i = 0; i < tokens.length; i++) {
      var tok = tokens[i];
      var best = 0;
      Object.keys(FIELD_WEIGHTS).forEach(function (f) {
        var text = ' ' + entry.fields[f] + ' ';
        var w = FIELD_WEIGHTS[f];
        var s = 0;
        if (text.indexOf(' ' + tok + ' ') !== -1) s = w * 1.5;
        else if (text.indexOf(' ' + tok) !== -1) s = w;
        else if (tok.length >= 3 && text.indexOf(tok) !== -1) s = w * 0.5;
        if (s > best) best = s;
      });
      if (!best) return 0;
      total += best;
    }
    return total;
  }

  function scoreMap(index, query) {
    var tokens = core.tokenize(query);
    var out = {};
    index.forEach(function (e) { out[e.id] = scoreEntry(e, tokens); });
    return { tokens: tokens, scores: out };
  }

  function anyIn(values, wanted) {
    if (!wanted || !wanted.length) return true;
    return values.some(function (v) { return wanted.indexOf(v) !== -1; });
  }

  /** Filter matching: OR within a category, AND across categories. */
  function matchesFilters(grant, filters, today) {
    var f = filters || emptyFilters();
    return anyIn(grant.skolformer, f.skolform) &&
      anyIn(grant.omraden, f.omrade) &&
      anyIn([grant.myndighet], f.myndighet) &&
      anyIn([grant.typ], f.typ) &&
      anyIn([core.grantStatus(grant, today).code], f.status);
  }

  function byName(a, b) { return a.grant.kortnamn.localeCompare(b.grant.kortnamn, 'sv'); }
  function deadlineKey(item) { return item.deadline ? core.dayNumber(item.deadline) : Infinity; }

  function sortItems(items, sort, hasQuery) {
    var copy = items.slice();
    if (sort === 'ao') return copy.sort(byName);
    if (sort === 'stanger') {
      return copy.sort(function (a, b) { return (deadlineKey(a) - deadlineKey(b)) || byName(a, b); });
    }
    return copy.sort(function (a, b) {
      if (hasQuery && b.score !== a.score) return b.score - a.score;
      return (STATUS_ORDER[a.status.code] - STATUS_ORDER[b.status.code]) ||
        (deadlineKey(a) - deadlineKey(b)) || byName(a, b);
    });
  }

  /**
   * Full catalog pipeline. ctx = { today, organiser, showIneligible, showEnded }.
   * Ended grants (giltighet "upphort") are hidden unless showEnded or the status filter asks for them.
   * Returns { items, hiddenIneligible, hiddenEnded, tokens } – items carry derived fields, grants untouched.
   */
  function runCatalog(grants, index, state, ctx) {
    var sm = scoreMap(index, state.q);
    var hasQuery = sm.tokens.length > 0;
    var matched = grants.filter(function (g) {
      return (!hasQuery || sm.scores[g.id] > 0) && matchesFilters(g, state.filters, ctx.today);
    }).map(function (g) {
      var elig = core.eligibility(g, ctx.organiser);
      return {
        grant: g, score: sm.scores[g.id] || 0, status: core.grantStatus(g, ctx.today),
        deadline: core.nextDeadline(g, ctx.today), elig: elig,
        dim: ctx.organiser !== 'alla' && elig === 'nej'
      };
    });
    var wantsEnded = ctx.showEnded || (state.filters && state.filters.status.indexOf('ended') !== -1);
    var current = matched.filter(function (it) { return wantsEnded || it.status.code !== 'ended'; });
    var visible = current.filter(function (it) { return !it.dim || ctx.showIneligible; });
    return {
      items: sortItems(visible, state.sort, hasQuery),
      hiddenIneligible: current.length - visible.length,
      hiddenEnded: matched.length - current.length,
      tokens: sm.tokens
    };
  }

  /** Quick suggestions for the hero combobox. */
  function suggest(grants, index, query, ctx, limit) {
    if (!core.tokenize(query).length) return { total: 0, items: [] };
    var st = { q: query, filters: emptyFilters(), sort: 'relevans' };
    var res = runCatalog(grants, index, st, { today: ctx.today, organiser: ctx.organiser, showIneligible: true, showEnded: true });
    var rank = function (it) { return (it.dim ? 1 : 0) + (it.status.code === 'ended' ? 2 : 0); };
    var sorted = res.items.slice().sort(function (a, b) { return (rank(a) - rank(b)) || (b.score - a.score); });
    return { total: res.items.length, items: sorted.slice(0, limit || 6) };
  }

  function uniqueMyndigheter(grants) {
    var seen = {};
    grants.forEach(function (g) { seen[g.myndighet] = true; });
    return Object.keys(seen).sort(function (a, b) { return a.localeCompare(b, 'sv'); });
  }

  function goalsToOmraden(goalIds) {
    var out = [];
    goalIds.forEach(function (id) {
      var goal = core.findById(GOALS, id);
      (goal ? goal.omraden : []).forEach(function (o) { if (out.indexOf(o) === -1) out.push(o); });
    });
    return out;
  }

  function statusReason(st) {
    if (st.code === 'open') return st.closes ? 'Öppen nu – stänger ' + core.formatDate(st.closes, { noYear: true }) : 'Öppen nu';
    if (st.code === 'soon') return 'Öppnar ' + (st.ungefar ? 'ca ' : '') + core.formatDate(st.opens, { noYear: true });
    if (st.code === 'auto') return 'Ingen ansökan behövs';
    return '';
  }

  /**
   * Guided finder ranking. answers = { skolformer:[], goals:[], snart:bool }.
   * Grants the organiser cannot apply for are excluded (reported as `excluded`).
   */
  function rankWizard(grants, answers, ctx) {
    var omr = goalsToOmraden(answers.goals || []);
    var sf = answers.skolformer || [];
    var excluded = 0;
    var ranked = [];
    grants.forEach(function (g) {
      if (core.isEnded(g)) return;
      var sfHits = g.skolformer.filter(function (s) { return sf.indexOf(s) !== -1; });
      var omrHits = g.omraden.filter(function (o) { return omr.indexOf(o) !== -1; });
      if (sf.length && !sfHits.length) return;
      if (omr.length && !omrHits.length) return;
      var st = core.grantStatus(g, ctx.today);
      if (answers.snart && ['open', 'soon', 'auto'].indexOf(st.code) === -1) return;
      var elig = core.eligibility(g, ctx.organiser);
      if (ctx.organiser !== 'alla' && elig === 'nej') { excluded++; return; }
      var score = sfHits.length * 2 + omrHits.length * 5 +
        ({ open: 4, soon: 3, auto: 1 }[st.code] || 0) + core.ELIG[elig].rank;
      var reasons = [];
      if (sfHits.length) reasons.push('Passar för ' + sfHits.map(function (s) { return core.labelOf(core.SKOLFORMER, s).toLowerCase(); }).join(', '));
      if (omrHits.length) reasons.push(omrHits.map(function (o) { return core.labelOf(core.OMRADEN, o); }).join(' · '));
      var sr = statusReason(st);
      if (sr) reasons.push(sr);
      if (elig === 'villkor') reasons.push('Med villkor för er');
      if (elig === 'via-kommun') reasons.push('Går via kommunen');
      ranked.push({ grant: g, score: score, status: st, elig: elig, reasons: reasons });
    });
    ranked.sort(function (a, b) { return (b.score - a.score) || a.grant.kortnamn.localeCompare(b.grant.kortnamn, 'sv'); });
    return { items: ranked, excluded: excluded, omraden: omr };
  }

  var api = {
    FIELD_WEIGHTS: FIELD_WEIGHTS, FILTER_KEYS: FILTER_KEYS, SORTS: SORTS, GOALS: GOALS,
    emptyFilters: emptyFilters, buildIndex: buildIndex, scoreEntry: scoreEntry, scoreMap: scoreMap,
    matchesFilters: matchesFilters, sortItems: sortItems, runCatalog: runCatalog, suggest: suggest,
    uniqueMyndigheter: uniqueMyndigheter, goalsToOmraden: goalsToOmraden, rankWizard: rankWizard
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (root) { root.SB = root.SB || {}; root.SB.core = Object.assign(root.SB.core || {}, api); }
})(typeof window !== 'undefined' ? window : null);
