'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const core = require('../js/core.js');
const { grant } = require('./fixtures.js');

test('normalize: case, diacritics, punctuation, whitespace', () => {
  assert.equal(core.normalize('Lärarlönelyftet'), 'lararlonelyftet');
  assert.equal(core.normalize('  ÅÄÖ  é–ü!  '), 'aao e u');
  assert.equal(core.normalize('Skolverket/UHR, 2026'), 'skolverket uhr 2026');
  assert.equal(core.normalize('Øresund Æble Straße'), 'oresund aeble strasse');
  assert.equal(core.normalize(null), '');
  assert.equal(core.normalize(42), '42');
});

test('tokenize splits normalised words', () => {
  assert.deepEqual(core.tokenize(' Läs  lyftet '), ['las', 'lyftet']);
  assert.deepEqual(core.tokenize(''), []);
  assert.deepEqual(core.tokenize('!!'), []);
});

test('normalizeWithMap maps back to original indices', () => {
  const nm = core.normalizeWithMap('Aö ß');
  assert.equal(nm.text, 'ao ss');
  assert.deepEqual(nm.map[1], [1, 2]);
  assert.deepEqual(nm.map[3], [3, 4]);
  assert.deepEqual(nm.map[4], [3, 4]);
});

test('highlightRanges: diacritic-tolerant, merged, ignores 1-char tokens', () => {
  const text = 'Lärarlön och lärare';
  assert.deepEqual(core.highlightRanges(text, 'lararlon'), [[0, 8]]);
  assert.deepEqual(core.highlightRanges(text, 'lär'), [[0, 3], [13, 16]]);
  assert.deepEqual(core.highlightRanges(text, 'lara ararl'), [[0, 6], [13, 17]]);
  assert.deepEqual(core.highlightRanges(text, 'a'), []);
  assert.deepEqual(core.highlightRanges('', 'x'), []);
});

test('date helpers', () => {
  assert.equal(core.isISODate('2026-09-25'), true);
  assert.equal(core.isISODate('2026-02-30'), false);
  assert.equal(core.isISODate('26-9-25'), false);
  assert.equal(core.isISODate(null), false);
  assert.equal(core.dayNumber('bad'), null);
  assert.equal(core.daysBetween('2026-09-25', '2026-10-01'), 6);
  assert.equal(core.addDays('2026-12-31', 1), '2027-01-01');
  assert.equal(core.isoFromDay(core.dayNumber('2026-03-01')), '2026-03-01');
  assert.equal(core.isoFromDate(new Date(2026, 8, 5)), '2026-09-05');
  assert.equal(core.formatDate('2026-10-01'), '1 okt 2026');
  assert.equal(core.formatDate('2026-10-01', { noYear: true }), '1 okt');
  assert.equal(core.formatDate('2026-10-01', { long: true }), '1 oktober 2026');
  assert.equal(core.formatDate('nope'), '');
  assert.equal(core.relativeDays(0), 'i dag');
  assert.equal(core.relativeDays(1), 'i morgon');
  assert.equal(core.relativeDays(-1), 'i går');
  assert.equal(core.relativeDays(5), 'om 5 dagar');
  assert.equal(core.relativeDays(-3), 'för 3 dagar sedan');
});

test('safeUrl only allows https', () => {
  assert.equal(core.safeUrl('https://www.skolverket.se/a'), 'https://www.skolverket.se/a');
  assert.equal(core.safeUrl(' https://x.se '), 'https://x.se');
  assert.equal(core.safeUrl('http://x.se'), null);
  assert.equal(core.safeUrl('javascript:alert(1)'), null);
  assert.equal(core.safeUrl('https://x.se/"><script>'), null);
  assert.equal(core.safeUrl(undefined), null);
});

test('sanitizeGrant fills defaults, validates and freezes without mutating input', () => {
  const raw = {
    id: 'x', sokande: { fristaende: 'ja', kommun: 'bogus' }, typ: 'weird',
    perioder: [{ typ: 'ansokan', fran: '2026-01-01', till: 'bad' }, null],
    kallor: [{ titel: 'A', url: 'http://insecure' }, { url: 'https://ok.se' }],
    omraden: ['kultur', 5], senastKontrollerad: '2026-13-01'
  };
  const copy = JSON.parse(JSON.stringify(raw));
  const g = core.sanitizeGrant(raw);
  assert.deepEqual(raw, copy);
  assert.equal(g.kortnamn, 'x');
  assert.equal(g.typ, 'ovrigt');
  assert.equal(g.sokande.kommun, 'nej');
  assert.equal(g.sokande.region, 'nej');
  assert.equal(g.perioder.length, 1);
  assert.equal(g.perioder[0].till, null);
  assert.equal(g.kallor[0].url, null);
  assert.equal(g.kallor[1].titel, 'https://ok.se');
  assert.deepEqual([...g.omraden], ['kultur']);
  assert.equal(g.senastKontrollerad, '');
  assert.ok(Object.isFrozen(g));
  assert.equal(core.sanitizeGrant(null), null);
  assert.equal(core.sanitizeGrant({ id: '' }), null);
});

test('prepareGrants drops invalid entries and merges duplicate ids', () => {
  const list = core.prepareGrants([{ id: 'a' }, { id: 'a', namn: 'dup' }, {}, 'x', { id: 'b' }]);
  assert.deepEqual(list.map((g) => g.id), ['a', 'b']);
  assert.equal(list[0].namn, 'a', 'tie keeps the first entry');
  assert.deepEqual(core.prepareGrants(undefined), []);
});

test('eligibility per organiser', () => {
  const g = grant({ sokande: { fristaende: 'villkor', kommun: 'ja', region: 'nej', stat: 'via-kommun', ovriga: 'nej' } });
  assert.equal(core.eligibility(g, 'fristaende'), 'villkor');
  assert.equal(core.eligibility(g, 'kommun'), 'ja');
  assert.equal(core.eligibility(g, 'region'), 'via-kommun');
  assert.equal(core.eligibility(g, 'alla'), 'ja');
  assert.equal(core.eligibility(g, 'unknown-org'), 'ja');
  const none = grant({ sokande: { fristaende: 'nej', kommun: 'nej', region: 'nej', stat: 'nej', ovriga: 'nej' } });
  assert.equal(core.canApply(none, 'fristaende'), false);
  assert.equal(core.canApply(g, 'fristaende'), true);
});

test('grantStatus: open, soon, closed, auto, unknown', () => {
  const today = '2026-09-25';
  const open = grant({ perioder: [{ typ: 'ansokan', fran: '2026-09-01', till: '2026-10-15' }] });
  const s1 = core.grantStatus(open, today);
  assert.equal(s1.code, 'open');
  assert.equal(s1.daysLeft, 20);
  assert.equal(core.statusText(s1), 'Öppen nu · stänger 15 okt');

  const soon = grant({ perioder: [{ typ: 'rekvisition', fran: '2026-10-01', till: '2026-11-02', ungefar: true }] });
  const s2 = core.grantStatus(soon, today);
  assert.equal(s2.code, 'soon');
  assert.equal(s2.daysUntil, 6);
  assert.equal(core.statusText(s2), 'Öppnar ca 1 okt');

  const later = grant({ perioder: [{ typ: 'ansokan', fran: '2027-01-15', till: '2027-02-28' }] });
  const s3 = core.grantStatus(later, today);
  assert.equal(s3.code, 'closed');
  assert.equal(core.statusText(s3), 'Stängd · öppnar 15 jan 2027');

  const past = grant({ perioder: [{ typ: 'ansokan', fran: '2026-08-01', till: '2026-09-15' }, { typ: 'redovisning', till: '2027-01-01' }] });
  assert.equal(core.statusText(core.grantStatus(past, today)), 'Stängd');

  assert.equal(core.grantStatus(grant({ typ: 'automatisk' }), today).code, 'auto');
  assert.equal(core.statusText({ code: 'auto' }), 'Betalas ut utan ansökan');
  assert.equal(core.grantStatus(grant({ perioder: [] }), today).code, 'unknown');
  assert.equal(core.statusText({ code: 'unknown' }), 'Datum inte kända');
  assert.equal(core.grantStatus(grant({ giltighet: 'upphort', perioder: open.perioder }), today).code, 'ended');
  assert.equal(core.statusText({ code: 'ended' }), 'Bidraget har upphört');
  assert.equal(core.grantStatus(grant({ giltighet: 'pausad', perioder: open.perioder }), today).code, 'closed');
  assert.equal(core.isEnded(grant({ giltighet: 'upphort' })), true);
  assert.equal(core.isEnded(grant({})), false);
});

test('grantStatus: boundaries, open-ended windows and earliest closing wins', () => {
  const g = grant({ perioder: [{ typ: 'ansokan', fran: '2026-09-25', till: '2026-09-25' }] });
  assert.equal(core.grantStatus(g, '2026-09-25').code, 'open');
  assert.equal(core.grantStatus(g, '2026-09-26').code, 'closed');
  const noEnd = grant({ perioder: [{ typ: 'ansokan', fran: '2026-01-01', till: null }] });
  const st = core.grantStatus(noEnd, '2026-09-25');
  assert.equal(st.code, 'open');
  assert.equal(core.statusText(st), 'Öppen nu · löpande');
  const two = grant({ perioder: [
    { typ: 'ansokan', fran: '2026-09-01', till: '2026-12-01' },
    { typ: 'rekvisition', fran: '2026-09-10', till: '2026-10-01' }
  ] });
  assert.equal(core.grantStatus(two, '2026-09-25').closes, '2026-10-01');
  const edge = grant({ perioder: [{ typ: 'ansokan', fran: core.addDays('2026-09-25', 60), till: '2027-01-01' }] });
  assert.equal(core.grantStatus(edge, '2026-09-25').code, 'soon');
  const beyond = grant({ perioder: [{ typ: 'ansokan', fran: core.addDays('2026-09-25', 61), till: '2027-01-01' }] });
  assert.equal(core.grantStatus(beyond, '2026-09-25').code, 'closed');
});

test('nextDeadline picks earliest future application deadline', () => {
  const g = grant({ perioder: [
    { typ: 'ansokan', fran: '2026-01-01', till: '2026-02-01' },
    { typ: 'ansokan', fran: '2026-09-01', till: '2026-11-01' },
    { typ: 'rekvisition', fran: '2026-09-01', till: '2026-10-01' },
    { typ: 'redovisning', till: '2026-09-30' }
  ] });
  assert.equal(core.nextDeadline(g, '2026-09-25'), '2026-10-01');
  assert.equal(core.nextDeadline(g, '2026-12-01'), null);
});

test('lookups', () => {
  assert.equal(core.labelOf(core.SKOLFORMER, 'komvux'), 'Komvux och sfi');
  assert.equal(core.labelOf(core.SKOLFORMER, 'nope'), 'nope');
  assert.equal(core.findById(core.ORGANISERS, 'fristaende').short, 'Fristående');
  assert.equal(core.DEFAULT_ORGANISER, 'fristaende');
});

test('mergeGrants / dedupeGrants: richest entry wins, lists become unions, inputs untouched', () => {
  const thin = grant({ id: 'dup', namn: 'Tunn', skolformer: ['grundskola'], omraden: ['kultur'], nyckelord: ['a'],
    kallor: [{ titel: 'S', url: 'https://s.se' }] });
  const rich = grant({ id: 'dup', namn: 'Rik', skolformer: ['gymnasieskola', 'grundskola'], omraden: ['yrke'], nyckelord: ['b', 'a'],
    perioder: [{ typ: 'ansokan', fran: '2026-01-01', till: '2026-02-01' }, { typ: 'ansokan', fran: '2027-01-01', till: '2027-02-01' }],
    kallor: [{ titel: 'S', url: 'https://s.se' }, { titel: 'T', url: 'https://t.se' }] });
  const other = grant({ id: 'x' });
  const out = core.dedupeGrants([thin, other, rich]);
  assert.deepEqual(out.map((g) => g.id), ['dup', 'x']);
  const m = out[0];
  assert.equal(m.namn, 'Rik');
  assert.equal(m.perioder.length, 2);
  assert.deepEqual([...m.skolformer], ['gymnasieskola', 'grundskola']);
  assert.deepEqual([...m.omraden], ['yrke', 'kultur']);
  assert.deepEqual([...m.nyckelord], ['b', 'a']);
  assert.deepEqual(m.kallor.map((k) => k.url), ['https://s.se', 'https://t.se']);
  assert.ok(Object.isFrozen(m));
  assert.equal(thin.namn, 'Tunn');
  assert.deepEqual([...thin.skolformer], ['grundskola']);
  assert.equal(core.mergeGrants(rich, thin).namn, 'Rik');
});
