'use strict';
/* Exempel ur Skolverkets beslutslista för redovisningen av 2025 års bidrag (beslut 29 maj 2026, dnr 2025:0003745):
 * återkrav = beviljat belopp − godkänt belopp. Rader ur listan: 603 000 − 480 126 = 122 874; 127 500 − 67 961 = 59 539;
 * 660 000 − 42 371 = 617 629; 420 000 − 420 000 = 0. Summa: 50 906 000 − 33 195 081 = 17 710 919. */
const test = require('node:test');
const assert = require('node:assert/strict');
const red = require('../js/calc/sprakstarkande-insatser-skollov-redovisning.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const R = (v) => red.berakna(Object.assign({ beviljat: 603000, kostnader: 480126 }, v));

test('redovisning: modulens id', () => {
  assert.equal(red.id, 'sprakstarkande-insatser-skollov-redovisning');
});

test('redovisning: rader ur beslutslistan 2025 räknas som Skolverket räknade', () => {
  const fall = [
    [603000, 480126, 122874],
    [127500, 67961, 59539],
    [660000, 42371, 617629],
    [420000, 420000, 0],
    [50906000, 33195081, 17710919]
  ];
  for (const [beviljat, kostnader, aterkrav] of fall) {
    assert.equal(R({ beviljat, kostnader }).resultat, aterkrav, `${beviljat} / ${kostnader}`);
  }
});

test('redovisning: standardvärdena visar formel och uppställning', () => {
  const r = R({});
  assert.equal(r.enhet, 'kr');
  assert.equal(sp(r.formel), '603 000 − 480 126 = 122 874 kr');
  assert.equal(sp(r.forklaring), 'Ni behåller 480 126 kr, alltså 79,6 % av det beviljade beloppet.');
  assert.equal(sp(r.rader[2].varde), '480 126 kr');
  assert.deepEqual(r.delar.map((d) => d.varde), [480126, 122874]);
  assert.deepEqual(r.varningar, []);
});

test('redovisning: högre kostnader än beviljat ger inget extra', () => {
  const r = R({ beviljat: 150000, kostnader: 190000 });
  assert.equal(r.resultat, 0);
  assert.equal(sp(r.rader[2].varde), '150 000 kr');
  assert.equal(r.forklaring, 'Merkostnaderna täcker hela det beviljade beloppet. Ni behåller allt.');
  assert.equal(r.varningar.length, 1);
});

test('redovisning: inga kostnader – hela beloppet tillbaka', () => {
  const r = R({ beviljat: 90000, kostnader: 0 });
  assert.equal(r.resultat, 90000);
  assert.equal(r.varningar.length, 1);
});

test('redovisning: ogiltiga värden ger ett lugnt felmeddelande', () => {
  for (const v of [{ beviljat: 0 }, { beviljat: -1 }, { kostnader: 1.5 }, { kostnader: NaN }, { beviljat: '1000' }, { kostnader: 2e9 }]) {
    const r = R(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
