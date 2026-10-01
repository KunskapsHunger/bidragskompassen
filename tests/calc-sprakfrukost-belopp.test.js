'use strict';
/* Räkneexempel som går att kontrollera mot regleringsbrevet för 2026 avseende Statens skolverk:
 * högst 7 500 kr för varje elev som erbjuds att delta, högst 30 000 000 kr för hela landet. */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/sprakfrukost-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' ');

test('sprakfrukost: konstanterna följer regleringsbrevet', () => {
  assert.equal(belopp.id, 'sprakfrukost-belopp');
  assert.equal(belopp.PER_ELEV, 7500);
  assert.equal(belopp.RAM, 30000000);
  assert.equal(belopp.RAM / belopp.PER_ELEV, 4000);
});

test('sprakfrukost: 40 elever = 300 000 kr', () => {
  const r = belopp.berakna({ elever: 40 });
  assert.equal(r.resultat, 300000);
  assert.equal(r.enhet, 'kr');
  assert.equal(sp(r.formel), '7 500 × 40 = 300 000 kr');
  assert.equal(sp(r.sammanfattning), '40 elever erbjuds språkfrukost');
  assert.equal(sp(r.rader[1].varde), '1 %');
  assert.equal(sp(r.extra[0].varde), '4 000 elever');
  assert.deepEqual(r.varningar, []);
});

test('sprakfrukost: en elev och fler elever än landets ram', () => {
  assert.equal(sp(belopp.berakna({ elever: 1 }).sammanfattning), '1 elev erbjuds språkfrukost');
  const stor = belopp.berakna({ elever: 5000 });
  assert.equal(stor.resultat, 37500000);
  assert.equal(stor.varningar.length, 1);
  assert.equal(belopp.berakna({ elever: 4000 }).varningar.length, 0);
});

test('sprakfrukost: ogiltiga värden ger ett lugnt felmeddelande', () => {
  for (const v of [{ elever: 0 }, { elever: -3 }, { elever: 2.5 }, { elever: NaN }, { elever: '40' }, { elever: 100001 }, {}]) {
    const r = belopp.berakna(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
