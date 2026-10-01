'use strict';
/* Räkneexempel som går att kontrollera mot UHR:s allmänna villkor för Atlas praktik 2026 (§ 4 och § 7):
 * 18 000 kr (Europa utanför EU/EES) eller 22 000 kr (övriga världen) per elev för minst tre veckor,
 * 2 000 kr per vecka efter tre veckor, högst 15 veckor, och 20 000 kr för en medföljande lärare. */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/atlas-praktik-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const B = (v) => belopp.berakna(Object.assign(
  { elevEuropa: 0, veckorEuropa: 3, elevVarlden: 4, veckorVarlden: 4, anpassad: false, larare: true }, v));

test('atlas-praktik: schablonerna följer villkoren', () => {
  assert.equal(belopp.id, 'atlas-praktik-belopp');
  assert.deepEqual(belopp.GRUND, { europa: 18000, varlden: 22000 });
  assert.equal(belopp.EXTRA_VECKA, 2000);
  assert.equal(belopp.LARARE, 20000);
  assert.equal(belopp.MAX_VECKOR, 15);
});

test('atlas-praktik: fyra elever i övriga världen i fyra veckor + lärare = 116 000 kr', () => {
  const r = B({});
  assert.equal(r.resultat, 4 * (22000 + 2000) + 20000);
  assert.equal(r.resultat, 116000);
  assert.equal(sp(r.formel), '(22 000 + 2 000 × 1) × 4 + 20 000 = 116 000 kr');
  assert.equal(r.forklaring, '');
  assert.equal(sp(r.extra[0].varde), '24 000 kr');
});

test('atlas-praktik: sex elever i Europa utanför EU/EES i tre veckor utan lärare = 108 000 kr', () => {
  const r = B({ elevEuropa: 6, veckorEuropa: 3, elevVarlden: 0, larare: false });
  assert.equal(r.resultat, 108000);
  assert.equal(sp(r.sammanfattning), '6 elever · ingen medföljande lärare');
});

test('atlas-praktik: 15 veckor ger högst 12 extra veckor', () => {
  const r = B({ elevVarlden: 1, veckorVarlden: 15, larare: false });
  assert.equal(r.resultat, 22000 + 12 * 2000);
  assert.equal(r.resultat, 46000);
  const eu = B({ elevEuropa: 1, veckorEuropa: 15, elevVarlden: 0, larare: false });
  assert.equal(eu.resultat, 42000);
});

test('atlas-praktik: båda regionerna redovisas var för sig', () => {
  const r = B({ elevEuropa: 2, veckorEuropa: 5, elevVarlden: 3, veckorVarlden: 3 });
  assert.equal(r.resultat, 2 * 22000 + 3 * 22000 + 20000);
  assert.deepEqual(r.delar.map((d) => d.varde), [44000, 66000, 20000]);
  assert.equal(sp(r.forklaring), 'Europa utanför EU/EES: (18 000 + 2 000 × 2) × 2 elever = 44 000 kr. Övriga världen: (22 000 + 2 000 × 0) × 3 elever = 66 000 kr.');
});

test('atlas-praktik: anpassad gymnasieskola, två veckor ger grundschablonen för tre veckor', () => {
  const r = B({ anpassad: true, elevEuropa: 3, veckorEuropa: 2, elevVarlden: 0 });
  assert.equal(r.resultat, 3 * 18000 + 20000);
  assert.ok(r.varningar.some((t) => /samma grundschablon/.test(t)));
});

test('atlas-praktik: ogiltiga värden ger ett lugnt felmeddelande', () => {
  const ogiltiga = [
    { elevVarlden: 0 }, { veckorVarlden: 2 }, { veckorVarlden: 16 }, { elevVarlden: -1 }, { elevVarlden: 1.5 },
    { elevVarlden: NaN }, { elevEuropa: 1, veckorEuropa: 1, anpassad: true }, { elevVarlden: '4' }
  ];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
  // Veckor för en tom grupp prövas inte.
  assert.equal(B({ elevEuropa: 0, veckorEuropa: 99 }).resultat, 116000);
});
