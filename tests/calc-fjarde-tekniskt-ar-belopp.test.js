'use strict';
/* Räkneexempel som går att kontrollera mot Skolverkets sida för fjärde tekniskt år (högst 138 350 kr per elev
 * 2026/27 och 166 150 kr 2027/28) och Skolverkets beslutslista för begäran om utbetalning 2025/26
 * (4 december 2025): 13 elever och begärt 4 700 000 kr gav 1 798 550 kr; 11 elever och begärt
 * 1 195 000 kr gav 1 195 000 kr; 15 elever och begärt 2 075 250 kr gav 2 075 250 kr. */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/fjarde-tekniskt-ar-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const B = (v) => belopp.berakna(Object.assign({ lasar: '2627', elever: 13, begart: 4700000 }, v));

test('fjarde-tekniskt-ar: maxbeloppen följer Skolverket', () => {
  assert.equal(belopp.id, 'fjarde-tekniskt-ar-belopp');
  assert.equal(belopp.MAXBELOPP['2627'], 138350);
  assert.equal(belopp.MAXBELOPP['2728'], 166150);
});

test('fjarde-tekniskt-ar: taket per elev begränsar (13 elever, begärt 4,7 mkr)', () => {
  const r = B({});
  assert.equal(r.resultat, 1798550);
  assert.equal(sp(r.formel), 'Lägsta av 4 700 000 kr och 138 350 × 13 = 1 798 550 kr');
  assert.equal(sp(r.rader[2].varde), '2 901 450 kr');
  assert.match(r.forklaring, /Taket/);
});

test('fjarde-tekniskt-ar: begärt belopp under taket gäller (11 elever, 1 195 000 kr)', () => {
  const r = B({ elever: 11, begart: 1195000 });
  assert.equal(r.resultat, 1195000);
  assert.equal(sp(r.rader[0].varde), '1 521 850 kr');
  assert.match(r.forklaring, /begärda belopp/);
});

test('fjarde-tekniskt-ar: begärt lika med taket (15 elever)', () => {
  assert.equal(B({ elever: 15, begart: 2075250 }).resultat, 2075250);
});

test('fjarde-tekniskt-ar: läsåret 2027/28 har högre tak', () => {
  const r = B({ lasar: '2728', elever: 10, begart: 5000000 });
  assert.equal(r.resultat, 1661500);
  assert.equal(sp(r.extra[0].varde), '166 150 kr');
});

test('fjarde-tekniskt-ar: 0 kr begärt ger 0 kr och en varning', () => {
  const r = B({ begart: 0 });
  assert.equal(r.resultat, 0);
  assert.equal(r.varningar.length, 1);
});

test('fjarde-tekniskt-ar: ogiltiga värden ger felmeddelande', () => {
  const ogiltiga = [{ lasar: '2526' }, { elever: 0 }, { elever: 2.5 }, { elever: NaN }, { begart: -1 }, { begart: Infinity }, { begart: '100' }];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
