/* Bidragskompassen – core: fördjupningar (deep-dive pages). Pure: ids and urls, paragraph search
 * and anchors, calculator field values/visibility/validation, number formatting, staleness and a
 * schema check used by both the page and the tests. No DOM, no network. */
(function (root) {
  'use strict';
  var core = (typeof module !== 'undefined' && module.exports) ? require('./core.js') : root.SB.core;

  var ID_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
  var FIELD_TYPES = ['val', 'tal', 'reglage', 'segment', 'kryss'];
  var STALE_DAYS = 400;

  function isSafeId(id) { return typeof id === 'string' && id.length <= 80 && ID_RE.test(id); }

  /** "?id=karriartjanster" → "karriartjanster" (or null when missing/unsafe). */
  function parseFordjupningId(search) {
    var m = /[?&]id=([^&#]*)/.exec(typeof search === 'string' ? search : '');
    if (!m) return null;
    var id;
    try { id = decodeURIComponent(m[1]); } catch (e) { return null; }
    return isSafeId(id) ? id : null;
  }
  function fordjupningUrl(id) { return 'fordjupning.html?id=' + encodeURIComponent(id); }
  function hasFordjupning(index, id) { return Array.isArray(index) && index.indexOf(id) !== -1; }

  /* ---------- Paragraphs ---------- */
  function paragraphSlugs(paragrafer) {
    var used = {};
    return (paragrafer || []).map(function (p, i) {
      var base = 'p-' + (core.normalize(p && p.ref).replace(/ /g, '-') || String(i + 1));
      var slug = base;
      var n = 2;
      while (used[slug]) { slug = base + '-' + n; n += 1; }
      used[slug] = true;
      return slug;
    });
  }

  function praktikOf(p) {
    if (!p || !p.praktik) return null;
    return typeof p.praktik === 'string' ? { rubrik: 'I praktiken', text: p.praktik } : { rubrik: p.praktik.rubrik || 'I praktiken', text: p.praktik.text || '' };
  }

  function paragraphText(p) {
    var pr = praktikOf(p);
    return [p.ref, p.rubrik].concat(p.text || [], p.lista || [], pr ? [pr.rubrik, pr.text] : [], p.nyckelord || []).join(' ');
  }

  /** AND-search over ref, heading, text, list, practice note and keywords (diacritic-tolerant). */
  function searchParagraphs(paragrafer, query) {
    var tokens = core.tokenize(query);
    var matches = (paragrafer || []).map(function (p) {
      if (!tokens.length) return true;
      var hay = ' ' + core.normalize(paragraphText(p)) + ' ';
      return tokens.every(function (t) { return hay.indexOf(t) !== -1; });
    });
    return { tokens: tokens, matches: matches, count: matches.filter(Boolean).length };
  }

  /* ---------- Calculator fields ---------- */
  function fieldDefaults(falt) {
    var out = {};
    (falt || []).forEach(function (f) { out[f.id] = f.standard; });
    return out;
  }

  function isFieldVisible(field, values) {
    var cond = field && field.visasOm;
    if (!cond) return true;
    var wanted = Array.isArray(cond.ar) ? cond.ar : [cond.ar];
    return wanted.indexOf(values[cond.falt]) !== -1;
  }

  /** Raw DOM value (string/boolean) → typed value. Numbers accept a decimal comma; '' → NaN. */
  function parseFieldValue(field, raw) {
    if (field.typ === 'kryss') return raw === true || raw === 'true';
    if (field.typ === 'tal' || field.typ === 'reglage') {
      var s = typeof raw === 'number' ? String(raw) : String(raw == null ? '' : raw).replace(/\s/g, '').replace(',', '.');
      return s === '' ? NaN : Number(s);
    }
    return raw;
  }

  function fieldError(f, v) {
    if (f.typ === 'tal' || f.typ === 'reglage') {
      var heltal = f.heltal !== false && f.steg !== 'any';
      var ok = typeof v === 'number' && isFinite(v) && v >= f.min && v <= f.max && (!heltal || Math.floor(v) === v);
      if (!ok) {
        return f.etikett + ': ange ' + (heltal ? 'ett heltal' : 'ett tal') + ' från ' + formatNumber(f.min) + ' till ' + formatNumber(f.max) +
          (f.enhet ? ' ' + f.enhet : '') + '.';
      }
    }
    if ((f.typ === 'val' || f.typ === 'segment') && !(f.alternativ || []).some(function (a) { return a.varde === v; })) {
      return f.etikett + ': välj ett av alternativen.';
    }
    return null;
  }

  /** Errors for visible fields only: [{ id, text }]. */
  function validateFields(falt, values) {
    return (falt || []).filter(function (f) { return isFieldVisible(f, values); }).map(function (f) {
      var text = fieldError(f, values[f.id]);
      return text ? { id: f.id, text: text } : null;
    }).filter(Boolean);
  }

  /** Defaults merged with an example's values (unknown keys ignored). Returns a new object. */
  function applyExample(falt, exempel) {
    var out = fieldDefaults(falt);
    var v = (exempel && exempel.varden) || {};
    (falt || []).forEach(function (f) { if (Object.prototype.hasOwnProperty.call(v, f.id)) out[f.id] = v[f.id]; });
    return out;
  }

  /* ---------- Numbers and dates ---------- */
  function formatNumber(n, maxDecimals) {
    if (typeof n !== 'number' || !isFinite(n)) return '–';
    return new Intl.NumberFormat('sv-SE', { maximumFractionDigits: maxDecimals == null ? 2 : maxDecimals }).format(n);
  }
  function formatKr(n) { return formatNumber(n, 0) + ' kr'; }

  function daysSince(iso, todayIso) {
    var a = core.dayNumber(iso);
    var b = core.dayNumber(todayIso);
    return a === null || b === null ? Infinity : b - a;
  }
  function isStale(iso, todayIso, maxDays) { return daysSince(iso, todayIso) > (maxDays || STALE_DAYS); }

  /* ---------- Page structure ---------- */
  /** Section anchors and tab labels in page order. */
  function guideSections(guide) {
    var list = [{ id: 'regler', label: 'Reglerna' }]
      .concat((guide.kalkylatorer || []).map(function (k) { return { id: 'rakna-' + k.id, label: k.flik || k.rubrik }; }))
      .concat([{ id: 'praktiken', label: 'I praktiken' }]);
    return list.map(function (s, i) { return { id: s.id, label: s.label, number: (i < 9 ? '0' : '') + (i + 1) }; });
  }

  function checklistText(done, total) { return done + ' av ' + total + ' förberedda'; }

  /* ---------- Schema check (used by tests and as a runtime guard) ---------- */
  function str(v) { return typeof v === 'string' && v.trim().length > 0; }

  function checkField(f, where, problems, ids) {
    if (!f || !str(f.id)) { problems.push(where + ': fält saknar id'); return; }
    if (FIELD_TYPES.indexOf(f.typ) === -1) problems.push(where + '.' + f.id + ': okänd typ ' + f.typ);
    if (!str(f.etikett)) problems.push(where + '.' + f.id + ': etikett saknas');
    if ((f.typ === 'val' || f.typ === 'segment') && !(Array.isArray(f.alternativ) && f.alternativ.length)) problems.push(where + '.' + f.id + ': alternativ saknas');
    if ((f.typ === 'tal' || f.typ === 'reglage') && !(typeof f.min === 'number' && typeof f.max === 'number' && f.min <= f.max)) problems.push(where + '.' + f.id + ': min/max saknas');
    if (f.typ !== 'kryss' && fieldError(f, f.standard)) problems.push(where + '.' + f.id + ': ogiltigt standardvärde');
    if (f.typ === 'kryss' && typeof f.standard !== 'boolean') problems.push(where + '.' + f.id + ': standard ska vara true/false');
    if (f.visasOm && ids.indexOf(f.visasOm.falt) === -1) problems.push(where + '.' + f.id + ': visasOm pekar på okänt fält');
  }

  /** Returns a list of problems (empty = OK). opts: { grantIds, calcIds } to check references. */
  function validateGuide(guide, opts) {
    var o = opts || {};
    var problems = [];
    if (!guide || typeof guide !== 'object') return ['fördjupningen saknas'];
    if (!isSafeId(guide.id)) problems.push('id ogiltigt');
    if (o.grantIds && o.grantIds.indexOf(guide.id) === -1) problems.push('id matchar inget bidrag: ' + guide.id);
    ['rubrik', 'ingress'].forEach(function (k) { if (!str(guide[k])) problems.push(k + ' saknas'); });
    if (!core.isISODate(guide.kontrollerad)) problems.push('kontrollerad ska vara YYYY-MM-DD');
    if (!guide.forordning || !str(guide.forordning.namn) || !core.safeUrl(guide.forordning.url)) problems.push('forordning: namn och https-url krävs');
    (guide.paragrafer || []).forEach(function (p, i) {
      if (!p || !str(p.ref) || !str(p.rubrik) || !Array.isArray(p.text) || !p.text.length) problems.push('paragrafer[' + i + ']: ref, rubrik och text krävs');
    });
    if (!Array.isArray(guide.paragrafer) || !guide.paragrafer.length) problems.push('paragrafer saknas');
    (guide.kalkylatorer || []).forEach(function (k, i) {
      var where = 'kalkylatorer[' + i + ']';
      if (!k || !isSafeId(k.id) || !isSafeId(k.modul)) { problems.push(where + ': id och modul krävs'); return; }
      if (o.calcIds && o.calcIds.indexOf(k.modul) === -1) problems.push(where + ': räknarmodul saknas: ' + k.modul);
      var ids = (k.falt || []).map(function (f) { return f && f.id; });
      (k.falt || []).forEach(function (f) { checkField(f, where, problems, ids); });
      (k.exempel || []).forEach(function (e, j) {
        Object.keys((e && e.varden) || {}).forEach(function (key) {
          if (ids.indexOf(key) === -1) problems.push(where + '.exempel[' + j + ']: okänt fält ' + key);
        });
        if (!e || !str(e.etikett)) problems.push(where + '.exempel[' + j + ']: etikett saknas');
      });
    });
    if (!Array.isArray(guide.process) || guide.process.length < 3 || guide.process.length > 6) problems.push('process ska ha 3–6 steg');
    if (!Array.isArray(guide.underlag)) problems.push('underlag saknas');
    (guide.kallor || []).forEach(function (k, i) { if (!k || !str(k.titel) || !core.safeUrl(k.url)) problems.push('kallor[' + i + ']: titel och https-url krävs'); });
    return problems;
  }

  var api = {
    FD_STALE_DAYS: STALE_DAYS, FD_FIELD_TYPES: FIELD_TYPES,
    isSafeId: isSafeId, parseFordjupningId: parseFordjupningId, fordjupningUrl: fordjupningUrl, hasFordjupning: hasFordjupning,
    paragraphSlugs: paragraphSlugs, praktikOf: praktikOf, paragraphText: paragraphText, searchParagraphs: searchParagraphs,
    fieldDefaults: fieldDefaults, isFieldVisible: isFieldVisible, parseFieldValue: parseFieldValue,
    validateFields: validateFields, applyExample: applyExample,
    formatNumber: formatNumber, formatKr: formatKr, daysSince: daysSince, isStale: isStale,
    guideSections: guideSections, checklistText: checklistText, validateGuide: validateGuide
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (root) { root.SB = root.SB || {}; root.SB.core = Object.assign(root.SB.core || {}, api); }
})(typeof window !== 'undefined' ? window : null);
