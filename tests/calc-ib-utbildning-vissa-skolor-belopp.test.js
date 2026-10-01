'use strict';
/* Räkneexempel som går att kontrollera mot 15–16 §§ förordningen (SKOLFS 2002:7), riksprislistan SKOLFS 2026:7
 * (naturvetenskapsprogrammet inkl. måltider 111 300 kr) och Skolverkets beslut för 2026 (2026-01-20):
 * Göteborg 4 elever = 434 000 kr, Stockholm 44 elever = 4 774 000 kr, Sigtuna skolstiftelse 33 elever = 3 580 500 kr. */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/ib-utbildning-vissa-skolor-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const B = (v) => belopp.berakna(Object.assign({ huvudman: 'stockholm', elever: 44, eleverJan: 30, eleverSep: 30, belopp: 111300 }, v));

test('ib: tak och belopp följer källorna', () => {
  assert.equal(belopp.id, 'ib-utbildning-vissa-skolor-belopp');
  assert.deepEqual(belopp.TAK, { stockholm: 90, goteborg: 90, sshl: 120 });
  assert.equal(belopp.BELOPP_2027, 111300);
});

test('ib: Skolverkets beslut för 2026 går att räkna fram (108 500 kr per elev)', () => {
  assert.equal(B({ huvudman: 'goteborg', elever: 4, belopp: 108500 }).resultat, 434000);
  assert.equal(B({ huvudman: 'stockholm', elever: 44, belopp: 108500 }).resultat, 4774000);
  assert.equal(B({ huvudman: 'sshl', eleverJan: 33, eleverSep: 33, belopp: 108500 }).resultat, 3580500);
});

test('ib: Stockholm 44 elever med beloppet för 2027', () => {
  const r = B({});
  assert.equal(r.resultat, 44 * 111300);
  assert.equal(sp(r.formel), '44 × 111 300 = 4 897 200 kr');
  assert.equal(sp(r.extra[0].varde), '1 224 300 kr');
  assert.deepEqual(r.varningar, []);
});

test('ib: SSHL räknar genomsnittet av 15 januari och 15 september', () => {
  const r = B({ huvudman: 'sshl', eleverJan: 31, eleverSep: 36 });
  assert.equal(r.resultat, Math.round(33.5 * 111300));
  assert.equal(sp(r.forklaring), 'Elevantal för SSHL: (31 + 36) ÷ 2 = 33,5 elever i genomsnitt.');
});

test('ib: bidrag ges för högst 90 respektive 120 årselevplatser', () => {
  const r = B({ huvudman: 'goteborg', elever: 95 });
  assert.equal(r.resultat, 90 * 111300);
  assert.equal(r.varningar.length, 1);
  const s = B({ huvudman: 'sshl', eleverJan: 130, eleverSep: 126 });
  assert.equal(s.resultat, 120 * 111300);
});

test('ib: annat belopp ger en upplysning', () => {
  const r = B({ belopp: 108500 });
  assert.equal(r.varningar.length, 1);
});

test('ib: ogiltiga värden ger ett lugnt felmeddelande i stället för ett belopp', () => {
  const ogiltiga = [
    { huvudman: 'malmo' }, { elever: -1 }, { elever: 1.5 }, { elever: NaN }, { belopp: 0 }, { belopp: '111300' },
    { huvudman: 'sshl', eleverJan: -1 }, { huvudman: 'sshl', eleverSep: 2.5 }
  ];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
