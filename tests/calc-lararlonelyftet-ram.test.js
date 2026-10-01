'use strict';
/* Bidragsramen enligt 13–14 §§ förordning (2016:100): 50 000 kr för huvudmän med färre än 30 elever,
 * övriga får sin elevandel av det som återstår, avrundat till närmaste tal jämnt delbart med 50 000. */
const test = require('node:test');
const assert = require('node:assert/strict');
const ram = require('../js/calc/lararlonelyftet-ram.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const R = (v) => ram.berakna(Object.assign(
  { medel: 3000000000, antalSma: 100, egnaElever: 1000, allaElever: 1500000, forraLasaret: true }, v));

test('ram: färre än 30 elever ger alltid 50 000 kr (13 §)', () => {
  for (const egnaElever of [1, 25, 29.9]) assert.equal(R({ egnaElever }).resultat, 50000, String(egnaElever));
  assert.equal(sp(R({ egnaElever: 25 }).formel), '25 elever < 30 → 50 000 kr');
});

test('ram: avdrag för små huvudmän och elevandel (14 §)', () => {
  const r = R({});
  assert.equal(r.resultat, 2000000);
  assert.equal(sp(r.formel), '(3 000 000 000 − 5 000 000) × 1 000 ÷ 1 500 000 = 1 996 666,67 kr → 2 000 000 kr');
  assert.equal(R({ egnaElever: 5000 }).resultat, 10000000, '9 983 333 → 10 000 000');
  assert.equal(R({ egnaElever: 30, antalSma: 0 }).resultat, 50000, '60 000 → 50 000');
});

test('ram: alltid jämnt delbart med 50 000, mittläget avrundas uppåt', () => {
  for (const egnaElever of [30, 123, 4567, 89012.5]) assert.equal(R({ egnaElever }).resultat % 50000, 0, String(egnaElever));
  // 1 000 000 × 75 ÷ 1 000 = 75 000 → exakt mitt emellan 50 000 och 100 000
  assert.equal(R({ medel: 1000000, antalSma: 0, egnaElever: 75, allaElever: 1000 }).resultat, 100000);
});

test('ram: inga elever läsåret före bidragsåret ger ingen ram', () => {
  const r = R({ forraLasaret: false });
  assert.equal(r.resultat, 0);
  assert.equal(r.blockerad, true);
  assert.match(r.forklaring, /13–14 §§/);
  assert.equal(R({ egnaElever: 0 }).blockerad, true);
});

test('ram: ogiltiga värden ger ett lugnt felmeddelande', () => {
  for (const v of [{ medel: 0 }, { medel: 1.5 }, { antalSma: -1 }, { allaElever: 0 }, { egnaElever: 2000000 }, { medel: 1000000, antalSma: 20 }]) {
    const r = R(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
