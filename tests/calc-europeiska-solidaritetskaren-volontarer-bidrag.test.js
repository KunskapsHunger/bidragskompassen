'use strict';
/* Räkneexempel som går att kontrollera mot European Solidarity Corps Guide 2026, volontärprojekt:
 * förvaltning 238 euro (individuellt) och 125 euro (grupper), Sverige 35/12/7 euro per dag (organisatoriskt
 * stöd, inkluderingsstöd, fickpengar), resor 309 euro för 500–1 999 km, språkstöd 150 euro vid minst 60 dagar. */
const test = require('node:test');
const assert = require('node:assert/strict');
const calc = require('../js/calc/europeiska-solidaritetskaren-volontarer-bidrag.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const BAS = { typ: 'individ', antal: 1, dagar: 300, resdagar: 2, avstand: 'b500', gron: false, begransade: 0, sprakstod: true };
const B = (v) => calc.berakna(Object.assign({}, BAS, v));

test('solidaritetskåren: Sveriges dagbelopp och förvaltningskostnader', () => {
  assert.equal(calc.id, 'europeiska-solidaritetskaren-volontarer-bidrag');
  assert.deepEqual(calc.SVERIGE, { org: 35, inkludering: 12, fickpengar: 7 });
  assert.deepEqual(calc.FORVALTNING, { individ: 238, grupp: 125 });
});

test('solidaritetskåren: en volontär i 300 dagar = 13 381 euro', () => {
  const r = B({});
  // 238 + 309 + (35 + 7) × 302 + 150
  assert.equal(r.resultat, 238 + 309 + 42 * 302 + 150);
  assert.equal(r.resultat, 13381);
  assert.equal(r.enhet, 'euro');
  assert.equal(sp(r.formel), '238 euro + 309 euro + (35 + 7) × 302 × 1 + 150 euro = 13 381 euro');
});

test('solidaritetskåren: inkluderingsstöd 12 euro per dag för volontärer med begränsade möjligheter', () => {
  const r = B({ begransade: 1 });
  assert.equal(r.resultat, 13381 + 12 * 302);
});

test('solidaritetskåren: språkstöd bara vid minst 60 dagar', () => {
  const r = B({ dagar: 45 });
  assert.equal(r.resultat, 238 + 309 + 42 * 47);
  assert.ok(r.varningar.some((t) => t.includes('60 dagar')));
});

test('solidaritetskåren: volontärgrupp med fem deltagare och grönt resande', () => {
  const r = B({ typ: 'grupp', antal: 5, dagar: 21, resdagar: 4, gron: true, sprakstod: false });
  assert.equal(r.resultat, 5 * 125 + 5 * 417 + 5 * 42 * 25);
});

test('solidaritetskåren: ogiltiga värden ger ett lugnt felmeddelande', () => {
  const ogiltiga = [
    { typ: 'x' }, { antal: 0 }, { dagar: 13 }, { dagar: 367 }, { typ: 'grupp', antal: 4, dagar: 20 },
    { typ: 'grupp', antal: 5, dagar: 60 }, { resdagar: 3 }, { begransade: 2 }, { avstand: 'b1' }, { gron: 1 }
  ];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
