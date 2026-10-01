'use strict';
/* Räkneexempel som går att kontrollera mot Skolverkets sidor: 2026/27 högst 28 000 kr per år för individuell undervisning
 * och 30 800 kr per år för en undervisningsgrupp; 2025/26 högst 14 000 kr per elev och termin, elev 1 = 100 %,
 * elev 2 = 10 %, elev 3+ = 0 %. Beslutslistan 2025/26 (kommunala huvudmän): 21 497 kr per individuell elev och
 * 23 646 kr per grupp, ungefär 76,775 % av schablonen (vår uträkning). */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/fjarrundervisning-minoritetssprak-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const B = (v) => belopp.berakna(Object.assign({ individuella: 2, grupper: 1, terminer: 'lasar', niva: 100 }, v));

test('fjarrundervisning: årsbeloppen följer stegen 100 % och 10 % per termin', () => {
  assert.equal(belopp.id, 'fjarrundervisning-minoritetssprak-belopp');
  assert.equal(belopp.INDIVIDUELL_AR, 2 * 14000);
  assert.equal(belopp.GRUPP_AR, 2 * (14000 + 1400));
});

test('fjarrundervisning: 2 individuella elever och 1 grupp = 86 800 kr', () => {
  const r = B({});
  assert.equal(r.resultat, 2 * 28000 + 30800);
  assert.equal(r.enhet, 'kr');
  assert.equal(sp(r.formel), '28 000 × 2 + 30 800 × 1 = 86 800 kr');
  assert.equal(sp(r.sammanfattning), '2 individuellt · 1 grupp · hela läsåret');
  assert.equal(sp(r.extra[0].varde), '43 400 kr');
  assert.equal(r.forklaring, '');
  assert.deepEqual(r.varningar, []);
});

test('fjarrundervisning: nivån för 2025/26 ger beloppen i beslutslistan', () => {
  assert.equal(B({ individuella: 1, grupper: 0, niva: 76.775 }).resultat, 21497);
  const grupp = B({ individuella: 0, grupper: 1, niva: 76.775 }).resultat;
  assert.ok(Math.abs(grupp - 23646) <= 1, String(grupp));
  const r = B({ individuella: 1, grupper: 1, niva: 76.775 });
  assert.ok(Math.abs(r.resultat - 45144) <= 1, String(r.resultat));
  assert.equal(r.rader.length, 4);
  assert.equal(r.varningar.length, 1);
  assert.equal(sp(r.formel), '28 000 × 1 + 30 800 × 1 = 58 800 kr × 76,775 % = 45 144 kr');
});

test('fjarrundervisning: en termin ger halva beloppet', () => {
  const r = B({ individuella: 0, grupper: 3, terminer: 'termin' });
  assert.equal(r.resultat, 3 * 15400);
  assert.equal(sp(r.formel), '14 000 × 0 + 15 400 × 3 = 46 200 kr');
  assert.equal(sp(r.extra[0].varde), '46 200 kr');
  assert.match(r.forklaring, /halva årsbeloppet/);
});

test('fjarrundervisning: ogiltiga värden ger ett lugnt felmeddelande', () => {
  const ogiltiga = [
    { individuella: 0, grupper: 0 }, { individuella: -1 }, { grupper: 1.5 }, { individuella: NaN }, { grupper: '2' },
    { individuella: 10001 }, { terminer: 'tre' }, { niva: 0 }, { niva: 101 }, { niva: NaN }
  ];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
