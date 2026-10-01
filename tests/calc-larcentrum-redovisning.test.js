'use strict';
/* Kontrollräkning enligt förordning (2017:1303) 8 § 3 (bidrag som inte utnyttjats ska betalas tillbaka)
 * och Skolverkets redovisning per insats. */
const test = require('node:test');
const assert = require('node:assert/strict');
const red = require('../js/calc/larcentrum-redovisning.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const R = (v) => red.berakna(Object.assign({ beviljat: 1000000, insats1: 600000, insats2: 300000, insats3: 0, ingetAnnatBidrag: true }, v));

test('lärcentrum: 1 000 000 beviljat, 900 000 använt → 100 000 kr ej använt', () => {
  const r = R({});
  assert.equal(r.resultat, 100000);
  assert.equal(sp(r.formel), '1 000 000 kr − (600 000 + 300 000 + 0) = 100 000 kr');
  assert.equal(r.varningar.length, 1);
  assert.deepEqual(r.delar.map((d) => d.varde), [600000, 300000, 0, 100000]);
});

test('lärcentrum: allt använt ger 0 och inga varningar', () => {
  const r = R({ insats3: 100000 });
  assert.equal(r.resultat, 0);
  assert.deepEqual(r.varningar, []);
});

test('lärcentrum: kostnader över bidraget ger 0 att betala tillbaka', () => {
  const r = R({ insats3: 250000 });
  assert.equal(r.resultat, 0);
  assert.equal(sp(r.rader[3].varde), '150 000 kr');
  assert.match(sp(r.formel), /→ 0 kr$/);
  assert.match(r.forklaring, /själva/);
});

test('lärcentrum: kostnader med annat bidrag ger en varning', () => {
  assert.equal(R({ ingetAnnatBidrag: false, insats3: 100000 }).varningar.length, 1);
});

test('lärcentrum: ogiltiga värden ger fel', () => {
  for (const v of [{ beviljat: -1 }, { insats1: NaN }, { insats2: Infinity }, { insats3: '5' }]) {
    const r = R(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
