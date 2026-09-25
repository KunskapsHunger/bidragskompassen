/* Bidragskompassen – core: vocabularies, text normalisation, dates, eligibility, status.
 * Pure functions only (no DOM). Works as a classic browser script (window.SB.core)
 * and as a CommonJS module in Node (for tests). */
(function (root) {
  'use strict';

  var SKOLFORMER = [
    { id: 'forskola', label: 'Förskola' },
    { id: 'forskoleklass', label: 'Förskoleklass' },
    { id: 'grundskola', label: 'Grundskola' },
    { id: 'anpassad-grundskola', label: 'Anpassad grundskola' },
    { id: 'specialskola', label: 'Specialskola' },
    { id: 'sameskola', label: 'Sameskola' },
    { id: 'fritidshem', label: 'Fritidshem' },
    { id: 'gymnasieskola', label: 'Gymnasieskola' },
    { id: 'anpassad-gymnasieskola', label: 'Anpassad gymnasieskola' },
    { id: 'komvux', label: 'Komvux och sfi' }
  ];

  var OMRADEN = [
    { id: 'lon-karriar', label: 'Lärarlöner & karriär' },
    { id: 'kompetens', label: 'Kompetensutveckling' },
    { id: 'personal', label: 'Fler vuxna i skolan' },
    { id: 'lasning', label: 'Läsning, bibliotek & läromedel' },
    { id: 'stod', label: 'Särskilt stöd & elevhälsa' },
    { id: 'likvardighet', label: 'Likvärdighet & resultat' },
    { id: 'nyanlanda', label: 'Nyanlända & flerspråkighet' },
    { id: 'utokad-tid', label: 'Lovskola, sommarskola & mer tid' },
    { id: 'yrke', label: 'Yrkesutbildning & lärlingar' },
    { id: 'kultur', label: 'Kultur & skapande' },
    { id: 'halsa-trygghet', label: 'Rörelse, hälsa & trygghet' },
    { id: 'internationellt', label: 'Internationellt utbyte' },
    { id: 'digitalt', label: 'Digitalisering' },
    { id: 'ovrigt', label: 'Övrigt' }
  ];

  var TYPER = [
    { id: 'ansokan', label: 'Ansökan', hint: 'Ni ansöker och myndigheten bedömer' },
    { id: 'rekvisition', label: 'Rekvisition', hint: 'En summa är avsatt – ni begär ut den' },
    { id: 'automatisk', label: 'Automatisk', hint: 'Betalas ut utan ansökan' },
    { id: 'ovrigt', label: 'Övrigt', hint: '' }
  ];

  var PERIOD_TYPER = {
    ansokan: 'Ansökan', rekvisition: 'Rekvisition', beslut: 'Beslut',
    utbetalning: 'Utbetalning', redovisning: 'Redovisning'
  };

  var ELIG = {
    ja: { symbol: '✓', label: 'Ja', rank: 3 },
    villkor: { symbol: '◐', label: 'Med villkor', rank: 2 },
    'via-kommun': { symbol: '↻', label: 'Via kommunen', rank: 1 },
    nej: { symbol: '—', label: 'Nej', rank: 0 }
  };

  var SOKANDE = [
    { id: 'fristaende', label: 'Fristående' },
    { id: 'kommun', label: 'Kommun' },
    { id: 'region', label: 'Region' },
    { id: 'stat', label: 'Stat' },
    { id: 'ovriga', label: 'Övriga' }
  ];

  var ORGANISERS = [
    { id: 'fristaende', label: 'Fristående skola', short: 'Fristående', keys: ['fristaende'],
      cannot: 'Kan inte sökas av fristående huvudmän', countLabel: 'för fristående' },
    { id: 'kommun', label: 'Kommunal skola', short: 'Kommunal', keys: ['kommun'],
      cannot: 'Kan inte sökas av kommunala huvudmän', countLabel: 'för kommunala skolor' },
    { id: 'region', label: 'Region/stat', short: 'Region/stat', keys: ['region', 'stat'],
      cannot: 'Kan inte sökas av regioner eller staten', countLabel: 'för region och stat' },
    { id: 'alla', label: 'Visa alla', short: 'Alla', keys: [], cannot: '', countLabel: 'går att söka' }
  ];
  var DEFAULT_ORGANISER = 'fristaende';

  var STATUS = [
    { id: 'open', label: 'Öppen nu', filterLabel: 'Öppen nu', symbol: '●' },
    { id: 'soon', label: 'Öppnar snart', filterLabel: 'Öppnar inom 60 dagar', symbol: '◔' },
    { id: 'closed', label: 'Stängd', filterLabel: 'Stängd', symbol: '○' },
    { id: 'auto', label: 'Ingen ansökan', filterLabel: 'Ingen ansökan behövs', symbol: '↺' },
    { id: 'unknown', label: 'Datum okänt', filterLabel: 'Okänt', symbol: '?' },
    { id: 'ended', label: 'Avslutat', filterLabel: 'Avslutat', symbol: '×' }
  ];
  var SOON_DAYS = 60;

  var MONTHS = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli',
    'augusti', 'september', 'oktober', 'november', 'december'];
  var MONTHS_SHORT = ['jan', 'feb', 'mars', 'apr', 'maj', 'juni', 'juli',
    'aug', 'sep', 'okt', 'nov', 'dec'];

  function findById(list, id) {
    for (var i = 0; i < list.length; i++) { if (list[i].id === id) return list[i]; }
    return null;
  }
  function labelOf(list, id) { var o = findById(list, id); return o ? o.label : String(id); }

  /* ---------- Text ---------- */
  var SPECIAL = { 'ø': 'o', 'æ': 'ae', 'ß': 'ss', 'œ': 'oe', 'ł': 'l', 'đ': 'd' };
  var COMBINING = new RegExp('[' + String.fromCharCode(0x300) + '-' + String.fromCharCode(0x36f) + ']', 'g');

  function foldChar(ch) {
    var lower = ch.toLowerCase();
    if (SPECIAL[lower]) return SPECIAL[lower];
    var base = lower.normalize('NFD').replace(COMBINING, '');
    return /^[a-z0-9]+$/.test(base) ? base : ' ';
  }

  /** Lower-case, strip diacritics, keep a–z/0–9, collapse whitespace. */
  function normalize(value) {
    var s = value == null ? '' : String(value);
    var out = '';
    for (var ch of s) out += foldChar(ch);
    return out.replace(/\s+/g, ' ').trim();
  }

  function tokenize(query) {
    var n = normalize(query);
    return n ? n.split(' ') : [];
  }

  /** Normalised string plus a map from each normalised char to its [start,end) in the original. */
  function normalizeWithMap(value) {
    var s = value == null ? '' : String(value);
    var text = '';
    var map = [];
    var idx = 0;
    for (var ch of s) {
      var folded = foldChar(ch);
      for (var k = 0; k < folded.length; k++) {
        text += folded[k];
        map.push([idx, idx + ch.length]);
      }
      idx += ch.length;
    }
    return { text: text, map: map };
  }

  /** Ranges [start,end) in the ORIGINAL text that match query tokens (min 2 chars). Merged + sorted. */
  function highlightRanges(value, query) {
    var tokens = tokenize(query).filter(function (t) { return t.length >= 2; });
    if (!tokens.length || !value) return [];
    var nm = normalizeWithMap(value);
    var ranges = [];
    tokens.forEach(function (tok) {
      var from = 0;
      var at;
      while ((at = nm.text.indexOf(tok, from)) !== -1) {
        ranges.push([nm.map[at][0], nm.map[at + tok.length - 1][1]]);
        from = at + tok.length;
      }
    });
    ranges.sort(function (a, b) { return a[0] - b[0]; });
    return ranges.reduce(function (acc, r) {
      var last = acc[acc.length - 1];
      if (last && r[0] <= last[1]) {
        return acc.slice(0, -1).concat([[last[0], Math.max(last[1], r[1])]]);
      }
      return acc.concat([r]);
    }, []);
  }

  /* ---------- Dates (ISO YYYY-MM-DD, day numbers in UTC) ---------- */
  var ISO_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
  var DAY_MS = 86400000;

  function isISODate(v) {
    if (typeof v !== 'string') return false;
    var m = ISO_RE.exec(v);
    if (!m) return false;
    var d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
    return d.getUTCMonth() === +m[2] - 1 && d.getUTCDate() === +m[3];
  }
  function dayNumber(iso) {
    if (!isISODate(iso)) return null;
    var m = ISO_RE.exec(iso);
    return Math.round(Date.UTC(+m[1], +m[2] - 1, +m[3]) / DAY_MS);
  }
  function isoFromDay(n) { return new Date(n * DAY_MS).toISOString().slice(0, 10); }
  function addDays(iso, n) { return isoFromDay(dayNumber(iso) + n); }
  function daysBetween(a, b) { return dayNumber(b) - dayNumber(a); }
  /** Local calendar date of a JS Date as ISO. */
  function isoFromDate(d) {
    function p(x) { return (x < 10 ? '0' : '') + x; }
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  }
  function formatDate(iso, opts) {
    if (!isISODate(iso)) return '';
    var o = opts || {};
    var m = ISO_RE.exec(iso);
    var names = o.long ? MONTHS : MONTHS_SHORT;
    var out = (+m[3]) + ' ' + names[+m[2] - 1];
    return o.noYear ? out : out + ' ' + m[1];
  }
  function relativeDays(n) {
    if (n === 0) return 'i dag';
    if (n === 1) return 'i morgon';
    if (n === -1) return 'i går';
    return n > 0 ? 'om ' + n + ' dagar' : 'för ' + (-n) + ' dagar sedan';
  }

  /* ---------- Safety / data hygiene ---------- */
  function safeUrl(url) {
    if (typeof url !== 'string') return null;
    var u = url.trim();
    return /^https:\/\/[^\s"'<>]+$/i.test(u) ? u : null;
  }
  function str(v) { return typeof v === 'string' ? v : ''; }
  function strArr(v) { return Array.isArray(v) ? v.filter(function (x) { return typeof x === 'string' && x; }) : []; }
  var ELIG_KEYS = ['fristaende', 'kommun', 'region', 'stat', 'ovriga'];

  /** Returns a new, frozen, well-formed grant – or null if unusable. Never mutates input. */
  function sanitizeGrant(raw) {
    if (!raw || typeof raw !== 'object' || typeof raw.id !== 'string' || !raw.id) return null;
    var sok = raw.sokande && typeof raw.sokande === 'object' ? raw.sokande : {};
    var sokande = {};
    ELIG_KEYS.forEach(function (k) { sokande[k] = ELIG[sok[k]] ? sok[k] : 'nej'; });
    var perioder = (Array.isArray(raw.perioder) ? raw.perioder : [])
      .filter(function (p) { return p && typeof p === 'object'; })
      .map(function (p) {
        return Object.freeze({
          typ: PERIOD_TYPER[p.typ] ? p.typ : 'ansokan',
          fran: isISODate(p.fran) ? p.fran : null,
          till: isISODate(p.till) ? p.till : null,
          text: str(p.text),
          ungefar: p.ungefar === true
        });
      });
    var kallor = (Array.isArray(raw.kallor) ? raw.kallor : [])
      .filter(function (k) { return k && typeof k === 'object'; })
      .map(function (k) { return Object.freeze({ titel: str(k.titel) || str(k.url), url: safeUrl(k.url) }); });
    return Object.freeze({
      id: raw.id, namn: str(raw.namn) || raw.id, kortnamn: str(raw.kortnamn) || str(raw.namn) || raw.id,
      myndighet: str(raw.myndighet) || 'Okänd myndighet', giltighet: str(raw.giltighet) || 'aktiv',
      sammanfattning: str(raw.sammanfattning), syfte: str(raw.syfte),
      omraden: Object.freeze(strArr(raw.omraden)), skolformer: Object.freeze(strArr(raw.skolformer)),
      sokande: Object.freeze(sokande), sokandeNot: str(raw.sokandeNot),
      typ: findById(TYPER, raw.typ) ? raw.typ : 'ovrigt',
      perioder: Object.freeze(perioder), belopp: str(raw.belopp),
      villkor: Object.freeze(strArr(raw.villkor)), hurDuGor: Object.freeze(strArr(raw.hurDuGor)),
      redovisning: str(raw.redovisning), fallgropar: Object.freeze(strArr(raw.fallgropar)),
      nyckelord: Object.freeze(strArr(raw.nyckelord)), kallor: Object.freeze(kallor),
      senastKontrollerad: isISODate(raw.senastKontrollerad) ? raw.senastKontrollerad : '',
      osakerhet: str(raw.osakerhet)
    });
  }

  function union(a, b) {
    return a.concat(b.filter(function (x, i) { return a.indexOf(x) === -1 && b.indexOf(x) === i; }));
  }
  function richness(g) { return g.perioder.length + g.kallor.length; }

  /** Merge two sanitised grants with the same id into a NEW grant: richest entry wins,
   *  skolformer/omraden/nyckelord become unions, kallor are unioned by url/titel. */
  function mergeGrants(a, b) {
    var primary = richness(b) > richness(a) ? b : a;
    var other = primary === a ? b : a;
    var keyOf = function (k) { return k.url || k.titel; };
    var kallor = primary.kallor.concat(other.kallor.filter(function (k) {
      return !primary.kallor.some(function (p) { return keyOf(p) === keyOf(k); });
    }));
    return Object.freeze(Object.assign({}, primary, {
      skolformer: Object.freeze(union(primary.skolformer, other.skolformer)),
      omraden: Object.freeze(union(primary.omraden, other.omraden)),
      nyckelord: Object.freeze(union(primary.nyckelord, other.nyckelord)),
      kallor: Object.freeze(kallor)
    }));
  }

  /** Merge entries sharing an id (keeps first position). Pure: returns a new array. */
  function dedupeGrants(grants) {
    var order = [];
    var byId = {};
    grants.forEach(function (g) {
      if (byId[g.id]) byId[g.id] = mergeGrants(byId[g.id], g);
      else { byId[g.id] = g; order.push(g.id); }
    });
    return order.map(function (id) { return byId[id]; });
  }

  /** Sanitise a list, dropping invalid entries and merging duplicate ids. */
  function prepareGrants(list) {
    return dedupeGrants((Array.isArray(list) ? list : []).map(sanitizeGrant).filter(Boolean));
  }

  function isEnded(grant) { return grant.giltighet === 'upphort'; }

  /* ---------- Eligibility ---------- */
  function eligibility(grant, organiserId) {
    var org = findById(ORGANISERS, organiserId);
    if (!org || !org.keys.length) {
      var best = 'nej';
      ELIG_KEYS.forEach(function (k) { if (ELIG[grant.sokande[k]].rank > ELIG[best].rank) best = grant.sokande[k]; });
      return best;
    }
    return org.keys.reduce(function (best, k) {
      var v = grant.sokande[k] || 'nej';
      return ELIG[v].rank > ELIG[best].rank ? v : best;
    }, 'nej');
  }
  function canApply(grant, organiserId) { return eligibility(grant, organiserId) !== 'nej'; }

  /* ---------- Status ---------- */
  function applicationWindows(grant) {
    return grant.perioder.filter(function (p) {
      return (p.typ === 'ansokan' || p.typ === 'rekvisition') && (p.fran || p.till);
    });
  }

  /** Status of a grant relative to `today` (ISO). */
  function grantStatus(grant, today) {
    var t = dayNumber(today);
    if (grant.typ === 'automatisk') return { code: 'auto' };
    var windows = applicationWindows(grant);
    if (grant.giltighet === 'upphort') return { code: 'ended' };
    if (grant.giltighet === 'pausad') return { code: 'closed', next: null };
    if (!windows.length) return { code: 'unknown' };
    var active = windows.filter(function (p) {
      return (!p.fran || dayNumber(p.fran) <= t) && (!p.till || t <= dayNumber(p.till));
    }).sort(function (a, b) {
      return (a.till ? dayNumber(a.till) : Infinity) - (b.till ? dayNumber(b.till) : Infinity);
    });
    if (active.length) {
      var w = active[0];
      return { code: 'open', period: w, closes: w.till, daysLeft: w.till ? dayNumber(w.till) - t : null, ungefar: w.ungefar };
    }
    var upcoming = windows.filter(function (p) { return p.fran && dayNumber(p.fran) > t; })
      .sort(function (a, b) { return dayNumber(a.fran) - dayNumber(b.fran); });
    if (upcoming.length && dayNumber(upcoming[0].fran) - t <= SOON_DAYS) {
      var u = upcoming[0];
      return { code: 'soon', period: u, opens: u.fran, daysUntil: dayNumber(u.fran) - t, ungefar: u.ungefar };
    }
    return { code: 'closed', next: upcoming[0] || null };
  }

  function statusText(st) {
    var ca = function (p) { return p && p.ungefar ? 'ca ' : ''; };
    switch (st.code) {
      case 'open': return st.closes ? 'Öppen nu · stänger ' + ca(st.period) + formatDate(st.closes, { noYear: true }) : 'Öppen nu · löpande';
      case 'soon': return 'Öppnar ' + ca(st.period) + formatDate(st.opens, { noYear: true });
      case 'closed': return st.next ? 'Stängd · öppnar ' + ca(st.next) + formatDate(st.next.fran) : 'Stängd';
      case 'auto': return 'Betalas ut utan ansökan';
      case 'ended': return 'Bidraget har upphört';
      default: return 'Datum inte kända';
    }
  }

  /** Earliest application deadline on/after today (ISO) or null. */
  function nextDeadline(grant, today) {
    var t = dayNumber(today);
    var tills = applicationWindows(grant)
      .filter(function (p) { return p.till && dayNumber(p.till) >= t; })
      .map(function (p) { return p.till; })
      .sort();
    return tills[0] || null;
  }

  var api = {
    SKOLFORMER: SKOLFORMER, OMRADEN: OMRADEN, TYPER: TYPER, PERIOD_TYPER: PERIOD_TYPER, ELIG: ELIG,
    SOKANDE: SOKANDE, ORGANISERS: ORGANISERS, DEFAULT_ORGANISER: DEFAULT_ORGANISER, STATUS: STATUS,
    SOON_DAYS: SOON_DAYS, MONTHS: MONTHS, MONTHS_SHORT: MONTHS_SHORT,
    findById: findById, labelOf: labelOf,
    normalize: normalize, tokenize: tokenize, normalizeWithMap: normalizeWithMap, highlightRanges: highlightRanges,
    isISODate: isISODate, dayNumber: dayNumber, isoFromDay: isoFromDay, addDays: addDays, daysBetween: daysBetween,
    isoFromDate: isoFromDate, formatDate: formatDate, relativeDays: relativeDays,
    safeUrl: safeUrl, sanitizeGrant: sanitizeGrant, prepareGrants: prepareGrants,
    mergeGrants: mergeGrants, dedupeGrants: dedupeGrants, isEnded: isEnded,
    eligibility: eligibility, canApply: canApply, applicationWindows: applicationWindows,
    grantStatus: grantStatus, statusText: statusText, nextDeadline: nextDeadline
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (root) { root.SB = root.SB || {}; root.SB.core = Object.assign(root.SB.core || {}, api); }
})(typeof window !== 'undefined' ? window : null);
