'use strict';
/* Räkneexempel som går att kontrollera mot UHR:s sida och allmänna villkor för Atlas partnerskap 2026:
 * 20 000 kr (Europa utanför EU/EES) och 22 000 kr (övriga världen) per deltagare, medfinansiering lika stor som bidraget.
 * UHR:s eget exempel: 10 × 22 000 = 220 000 kr, medfinansiering 220 000 kr, projektet värt 440 000 kr. */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/atlas-partnerskap-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const B = (v) => belopp.berakna(Object.assign({ schablonerEuropa: 0, schablonerVarlden: 10, resenarer: 10 }, v));

test('atlas-partnerskap: schablonerna följer villkoren', () => {
  assert.equal(belopp.id, 'atlas-partnerskap-belopp');
  assert.deepEqual(belopp.SCHABLON, { europa: 20000, varlden: 22000 });
});

test('atlas-partnerskap: UHR:s räkneexempel, 10 schabloner utanför Europa', () => {
  const r = B({});
  assert.equal(r.resultat, 220000);
  assert.equal(sp(r.formel), '22 000 × 10 = 220 000 kr');
  assert.equal(sp(r.rader[1].varde), '220 000 kr');
  assert.equal(sp(r.rader[2].varde), '440 000 kr');
  assert.deepEqual(r.varningar, []);
});

test('atlas-partnerskap: båda områdena', () => {
  const r = B({ schablonerEuropa: 4, schablonerVarlden: 6, resenarer: 10 });
  assert.equal(r.resultat, 4 * 20000 + 6 * 22000);
  assert.equal(sp(r.formel), '20 000 × 4 + 22 000 × 6 = 212 000 kr');
});

test('atlas-partnerskap: färre resenärer än schabloner varnar för återkrav, fler ger inte mer', () => {
  const farre = B({ resenarer: 9 });
  assert.equal(farre.resultat, 220000);
  assert.match(sp(farre.varningar[0]), /1 schablon blir oanvänd|1 schablon/);
  const fler = B({ resenarer: 15 });
  assert.equal(fler.resultat, 220000);
  assert.match(fler.varningar[0], /bidraget blir inte större/);
});

test('atlas-partnerskap: ogiltiga värden ger ett lugnt felmeddelande', () => {
  for (const v of [{ schablonerVarlden: 0 }, { schablonerVarlden: -1 }, { schablonerEuropa: 0.5 }, { resenarer: NaN }, { schablonerVarlden: '10' }]) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
