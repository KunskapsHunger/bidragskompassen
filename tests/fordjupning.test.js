'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fd = require('../js/core-fordjupning.js');

const FALT = [
  { id: 'typ', typ: 'val', etikett: 'Typ', standard: 'a', alternativ: [{ varde: 'a', etikett: 'A' }, { varde: 'b', etikett: 'B' }] },
  { id: 'antal', typ: 'tal', etikett: 'Antal', min: 1, max: 10, steg: 1, standard: 1 },
  { id: 'snitt', typ: 'tal', etikett: 'Snitt', min: 1, max: 100, steg: 'any', standard: 2.5 },
  { id: 'grad', typ: 'reglage', etikett: 'Grad', min: 0, max: 100, steg: 1, standard: 100, enhet: '%', visasOm: { falt: 'typ', ar: 'b' } },
  { id: 'ok', typ: 'kryss', etikett: 'Ok', standard: true }
];

test('ids and urls', () => {
  assert.equal(fd.parseFordjupningId('?id=karriartjanster'), 'karriartjanster');
  assert.equal(fd.parseFordjupningId('?x=1&id=a-b&y'), 'a-b');
  assert.equal(fd.parseFordjupningId('?id=../etc'), null);
  assert.equal(fd.parseFordjupningId('?id=%E0%A4%A'), null);
  assert.equal(fd.parseFordjupningId(''), null);
  assert.equal(fd.parseFordjupningId(undefined), null);
  assert.equal(fd.fordjupningUrl('karriartjanster'), 'fordjupning.html?id=karriartjanster');
  assert.equal(fd.hasFordjupning(['a', 'b'], 'b'), true);
  assert.equal(fd.hasFordjupning(undefined, 'b'), false);
  assert.equal(fd.isSafeId('A'), false);
});

test('paragraph slugs are readable and unique', () => {
  assert.deepEqual(fd.paragraphSlugs([{ ref: '1–2 c §§' }, { ref: '24 a §' }, { ref: '3 §' }, { ref: '3 §' }, {}]),
    ['p-1-2-c', 'p-24-a', 'p-3', 'p-3-2', 'p-5']);
});

test('paragraph search: diacritics, AND, keywords and practice notes', () => {
  const ps = [
    { ref: '5 §', rubrik: 'Förstelärare', text: ['Lärarlegitimation krävs.'], nyckelord: ['behörighet'] },
    { ref: '9 §', rubrik: 'Lön', text: ['Minst 5 000 kr.'], praktik: { rubrik: 'Skolverket', text: 'Medianlön används.' } },
    { ref: '21 §', rubrik: 'Uppföljning', text: ['Spara underlag.'], praktik: 'Dokumentera allt.' }
  ];
  assert.deepEqual(fd.searchParagraphs(ps, 'lararlegitimation').matches, [true, false, false]);
  assert.deepEqual(fd.searchParagraphs(ps, 'behörighet').matches, [true, false, false]);
  assert.deepEqual(fd.searchParagraphs(ps, 'medianlon').matches, [false, true, false]);
  assert.deepEqual(fd.searchParagraphs(ps, 'dokumentera').matches, [false, false, true]);
  assert.equal(fd.searchParagraphs(ps, 'lön zzz').count, 0);
  assert.equal(fd.searchParagraphs(ps, '').count, 3);
  assert.equal(fd.searchParagraphs(undefined, 'x').count, 0);
  assert.deepEqual(fd.praktikOf({ praktik: 'x' }), { rubrik: 'I praktiken', text: 'x' });
  assert.equal(fd.praktikOf({}), null);
});

test('field defaults, visibility, parsing, validation and examples', () => {
  const d = fd.fieldDefaults(FALT);
  assert.deepEqual(d, { typ: 'a', antal: 1, snitt: 2.5, grad: 100, ok: true });
  assert.equal(fd.isFieldVisible(FALT[3], d), false);
  assert.equal(fd.isFieldVisible(FALT[3], { typ: 'b' }), true);
  assert.equal(fd.isFieldVisible({ visasOm: { falt: 'typ', ar: ['a', 'b'] } }, { typ: 'a' }), true);
  assert.equal(fd.parseFieldValue(FALT[1], '1 000'), 1000);
  assert.equal(fd.parseFieldValue(FALT[2], '2,5'), 2.5);
  assert.ok(Number.isNaN(fd.parseFieldValue(FALT[1], '')));
  assert.equal(fd.parseFieldValue(FALT[1], 7), 7);
  assert.equal(fd.parseFieldValue(FALT[4], true), true);
  assert.equal(fd.parseFieldValue(FALT[4], 'false'), false);
  assert.equal(fd.parseFieldValue(FALT[0], 'b'), 'b');
  assert.deepEqual(fd.validateFields(FALT, d), []);
  const bad = fd.validateFields(FALT, Object.assign({}, d, { antal: 1.5, snitt: 0, typ: 'b', grad: 120 }));
  assert.deepEqual(bad.map((e) => e.id), ['antal', 'snitt', 'grad']);
  assert.match(bad[0].text, /heltal från 1 till 10/);
  assert.match(bad[2].text, /0 till 100 %/);
  assert.equal(fd.validateFields(FALT, Object.assign({}, d, { typ: 'x' }))[0].text, 'Typ: välj ett av alternativen.');
  assert.equal(fd.validateFields(FALT, Object.assign({}, d, { grad: 500 })).length, 0, 'hidden fields are not validated');
  const ex = fd.applyExample(FALT, { varden: { antal: 3, okand: 9 } });
  assert.deepEqual(ex, { typ: 'a', antal: 3, snitt: 2.5, grad: 100, ok: true });
  assert.deepEqual(fd.applyExample(FALT, null), d);
});

test('formatting, staleness, sections, checklist text', () => {
  const sp = (s) => s.replace(/\s/g, ' ');
  assert.equal(sp(fd.formatNumber(1234567.891)), '1 234 567,89');
  assert.equal(sp(fd.formatKr(85000)), '85 000 kr');
  assert.equal(fd.formatNumber(NaN), '–');
  assert.equal(fd.daysSince('2026-10-01', '2027-10-01'), 365);
  assert.equal(fd.daysSince('bad', '2027-10-01'), Infinity);
  assert.equal(fd.isStale('2026-10-01', '2027-11-04'), false);
  assert.equal(fd.isStale('2026-10-01', '2027-11-06'), true);
  assert.equal(fd.isStale('2026-10-01', '2026-12-01', 30), true);
  const s = fd.guideSections({ kalkylatorer: [{ id: 'belopp', flik: 'Räkna' }, { id: 'ram', rubrik: 'Ram' }] });
  assert.deepEqual(s.map((x) => x.number + ' ' + x.id + ' ' + x.label),
    ['01 regler Reglerna', '02 rakna-belopp Räkna', '03 rakna-ram Ram', '04 praktiken I praktiken']);
  assert.equal(fd.guideSections({}).length, 2);
  assert.equal(fd.checklistText(2, 5), '2 av 5 förberedda');
});

test('validateGuide reports missing parts and broken references', () => {
  assert.deepEqual(fd.validateGuide(null), ['fördjupningen saknas']);
  const problems = fd.validateGuide({
    id: 'x', rubrik: 'R', ingress: 'I', kontrollerad: '2026-13-01', forordning: { namn: 'F', url: 'http://x' },
    paragrafer: [{ ref: '1 §', rubrik: 'A' }],
    kalkylatorer: [{ id: 'k', modul: 'm', falt: [
      { id: 'a', typ: 'tal', etikett: 'A', min: 1, max: 2, standard: 5 },
      { id: 'b', typ: 'okand', etikett: 'B', visasOm: { falt: 'zzz', ar: 1 } },
      { id: 'c', typ: 'kryss', etikett: 'C', standard: 'ja' },
      { id: 'd', typ: 'val', etikett: 'D' },
      { typ: 'tal' }
    ], exempel: [{ etikett: '', varden: { q: 1 } }] }, { id: 'Bad' }],
    process: [{}], underlag: 'x', kallor: [{ titel: 'K', url: 'ftp://x' }]
  }, { grantIds: ['y'], calcIds: [] });
  const text = problems.join('\n');
  ['id matchar inget bidrag', 'kontrollerad', 'forordning', 'paragrafer[0]', 'räknarmodul saknas', 'ogiltigt standardvärde',
    'okänd typ', 'okänt fält', 'standard ska vara true/false', 'alternativ saknas', 'fält saknar id', 'exempel[0]: okänt fält q',
    'etikett saknas', 'id och modul krävs', 'process ska ha 3–6 steg', 'underlag saknas', 'kallor[0]'].forEach((needle) => {
    assert.ok(text.includes(needle), 'expected problem: ' + needle);
  });
  assert.ok(fd.validateGuide({ id: 'x' }).includes('paragrafer saknas'));
});
