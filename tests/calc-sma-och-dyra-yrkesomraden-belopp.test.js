'use strict';
/* Räkneexempel som går att kontrollera mot förordning (2026:1751): 35 000 kr per elev och läsår (11 och 13 §§),
 * 75 000 kr per elev och läsår (12 och 14 §§) och proportionerlig minskning (17 §). Skolverkets exempel:
 * beviljas 80 procent blir varje del 80 procent av maxbeloppet. */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/sma-och-dyra-yrkesomraden-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const B = (v) => belopp.berakna(Object.assign({ niva: 'max', andel: 80, elever35: 0, elever75: 10 }, v));

test('sma-och-dyra: beloppen följer förordningen', () => {
  assert.equal(belopp.id, 'sma-och-dyra-yrkesomraden-belopp');
  assert.equal(belopp.LAGRE, 35000);
  assert.equal(belopp.HOGRE, 75000);
});

test('sma-och-dyra: 10 elever på 75 000 kr-nivån = 750 000 kr', () => {
  const r = B({});
  assert.equal(r.resultat, 750000);
  assert.equal(r.enhet, 'kr');
  assert.equal(sp(r.formel), '(35 000 × 0 + 75 000 × 10) = 750 000 kr');
  assert.deepEqual(r.delar.map((d) => d.varde), [0, 750000]);
  assert.deepEqual(r.varningar, []);
});

test('sma-och-dyra: blandade nivåer', () => {
  const r = B({ elever35: 4, elever75: 6 });
  assert.equal(r.resultat, 4 * 35000 + 6 * 75000);
  assert.equal(r.resultat, 590000);
  assert.equal(sp(r.extra[0].varde), '59 000 kr');
});

test('sma-och-dyra: 80 % beviljas – alla delar minskas lika', () => {
  const r = B({ niva: 'egen', andel: 80, elever35: 1, elever75: 1 });
  assert.equal(r.resultat, 28000 + 60000);
  assert.deepEqual(r.delar.map((d) => d.varde), [28000, 60000]);
  assert.equal(sp(r.formel), '(35 000 × 1 + 75 000 × 1) × 80 % = 88 000 kr');
  assert.match(sp(r.forklaring), /110 000 kr/);
  assert.equal(r.varningar.length, 1);
});

test('sma-och-dyra: andelen ignoreras vid maxbelopp', () => {
  assert.equal(B({ niva: 'max', andel: 10 }).resultat, 750000);
});

test('sma-och-dyra: ogiltiga värden ger felmeddelande', () => {
  const ogiltiga = [
    { elever75: -1 }, { elever75: 1.5 }, { elever75: NaN }, { elever35: 0, elever75: 0 },
    { elever75: '3' }, { niva: 'x' }, { niva: 'egen', andel: 0 }, { niva: 'egen', andel: 101 }, { elever35: 200000 }
  ];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
