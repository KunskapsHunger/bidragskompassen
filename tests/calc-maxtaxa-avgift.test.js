'use strict';
/* Räkneexempel för maxtaxan, 3 och 5 §§ förordning (2001:160).
 * Kontrollerbara mot Skolverkets sida "Statsbidrag för maxtaxa 2026": högsta avgiftsgrundande inkomst 51 560 kr
 * från 1 juli 2026, högsta avgift i förskolan 1 547 / 1 031 / 516 kr och i fritidshemmet 1 031 / 516 / 516 kr.
 * Före 1 juli 2026: taket 61 560 kr (51 560 + 10 000) → förskola 1 847 / 1 231 / 616 kr, fritidshem 1 231 / 616 / 616 kr. */
const test = require('node:test');
const assert = require('node:assert/strict');
const mt = require('../js/calc/maxtaxa-avgift.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const R = (v) => mt.berakna(Object.assign({ period: 'jul2026', inkomst: 40000, forskolebarn: 1, fritidsbarn: 0 }, v));

test('maxtaxa: Skolverkets tak från 1 juli 2026', () => {
  const f = R({ inkomst: 100000, forskolebarn: 3 });
  assert.deepEqual(f.rader.map((r) => sp(r.varde)), ['1 547 kr', '1 031 kr', '516 kr']);
  assert.equal(f.resultat, 1547 + 1031 + 516);
  const fr = R({ inkomst: 100000, forskolebarn: 0, fritidsbarn: 3 });
  assert.deepEqual(fr.rader.map((r) => sp(r.varde)), ['1 031 kr', '516 kr', '516 kr']);
  assert.equal(sp(f.extra[0].varde), '51 560 kr');
});

test('maxtaxa: tak januari–juni 2026, utan avdrag', () => {
  const f = R({ period: 'jan2026', inkomst: 100000, forskolebarn: 3 });
  assert.deepEqual(f.rader.map((r) => sp(r.varde)), ['1 847 kr', '1 231 kr', '616 kr']);
  const fr = R({ period: 'jan2026', inkomst: 61560, forskolebarn: 0, fritidsbarn: 2 });
  assert.equal(fr.resultat, 1231 + 616);
});

test('maxtaxa: 10 000 kr dras av från 1 juli 2026', () => {
  const r = R({});
  // (40 000 − 10 000) × 3 % = 900
  assert.equal(r.resultat, 900);
  assert.equal(sp(r.formel), '3 % × 30 000 = 900 kr');
  assert.match(sp(r.forklaring), /40 000 kr − 10 000 kr = 30 000 kr/);
  assert.equal(R({ period: 'jan2026' }).resultat, 1200, 'före 1 juli: 40 000 × 3 %');
  assert.equal(R({ inkomst: 26000 }).resultat, 480);
});

test('maxtaxa: hushåll med högst 10 000 kr betalar ingen avgift från 1 juli 2026', () => {
  const r = R({ inkomst: 10000, forskolebarn: 2 });
  assert.equal(r.resultat, 0);
  assert.ok(r.blockerad);
  assert.match(r.forklaring, /10 001/);
  assert.equal(R({ inkomst: 10001 }).resultat, 0, '1 kr × 3 % avrundas till 0');
  assert.equal(R({ period: 'jan2026', inkomst: 10000 }).resultat, 300, 'före 1 juli fanns inget avdrag');
  assert.ok(!R({ period: 'jan2026', inkomst: 10000 }).blockerad);
});

test('maxtaxa: yngsta barnet betalar mest – förskola före fritidshem', () => {
  const r = R({ inkomst: 70000, forskolebarn: 1, fritidsbarn: 2 });
  // förskola 3 % (1 547) + fritidshem som andra barn 1 % (516) + tredje barn 1 % (516)
  assert.deepEqual(r.rader.map((x) => sp(x.varde)), ['1 547 kr', '516 kr', '516 kr']);
  assert.match(r.rader[1].etikett, /fritidshem · 1 %/);
  assert.equal(r.varningar.length, 1);
});

test('maxtaxa: fjärde barnet är avgiftsfritt', () => {
  const r = R({ inkomst: 70000, forskolebarn: 2, fritidsbarn: 2 });
  assert.equal(r.rader.length, 4);
  assert.equal(sp(r.rader[3].varde), '0 kr');
  assert.match(r.rader[3].etikett, /ingen avgift/);
  assert.equal(r.resultat, 1547 + 1031 + 516);
  assert.ok(r.varningar.some((t) => /fjärde/.test(t)));
  assert.equal(r.delar.length, 3);
});

test('maxtaxa: ogiltiga värden', () => {
  assert.ok(R({ period: 'x' }).fel);
  assert.ok(R({ inkomst: -1 }).fel);
  assert.ok(R({ inkomst: 1000.5 }).fel);
  assert.ok(R({ inkomst: NaN }).fel);
  assert.ok(R({ forskolebarn: 0, fritidsbarn: 0 }).fel);
  assert.ok(R({ forskolebarn: 11 }).fel);
  assert.ok(R({ fritidsbarn: 1.5 }).fel);
});
