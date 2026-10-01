'use strict';
/* Räkneexempel som går att kontrollera mot UHR:s "Rules of budget allocation for accredited applicants",
 * skola, 2026: grundbidrag 20 000 euro (konsortium 20 000 × organisationer, högst 100 000), tak 200 000 euro
 * (konsortium 200 000 × organisationer, högst 600 000), 80 % av högsta förbrukade bidrag, −20 % vid under 25 poäng. */
const test = require('node:test');
const assert = require('node:assert/strict');
const calc = require('../js/calc/erasmus-ackreditering-ram.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const BAS = { typ: 'egen', organisationer: 3, behov: 60000, tidigare: false, hogsta: 50000, lagPoang: false };
const B = (v) => calc.berakna(Object.assign({}, BAS, v));

test('ackreditering: ny organisation får grundbidraget 20 000 euro', () => {
  const r = B({});
  assert.equal(calc.id, 'erasmus-ackreditering-ram');
  assert.equal(r.resultat, 20000);
  assert.equal(r.enhet, 'euro');
  assert.equal(sp(r.rader[2].varde), '200 000 euro');
  assert.equal(sp(r.extra[0].varde), '40 000 euro');
});

test('ackreditering: grundbidraget kan inte bli större än budgeten för de sökta aktiviteterna', () => {
  assert.equal(B({ behov: 12000 }).resultat, 12000);
});

test('ackreditering: konsortium med tre organisationer = 60 000 euro i grund och 600 000 euro i tak', () => {
  const r = B({ typ: 'konsortium', organisationer: 3, behov: 900000 });
  assert.equal(r.resultat, 60000);
  assert.equal(sp(r.rader[2].varde), '600 000 euro');
  assert.ok(r.varningar.some((t) => t.includes('större än taket')));
});

test('ackreditering: grundbidraget för konsortier är högst 100 000 euro', () => {
  assert.equal(B({ typ: 'konsortium', organisationer: 8, behov: 500000 }).resultat, 100000);
});

test('ackreditering: 80 % av högsta förbrukade bidrag, men aldrig under golvet', () => {
  assert.equal(B({ tidigare: true, hogsta: 50000 }).resultat, 40000);
  assert.equal(B({ tidigare: true, hogsta: 10000 }).resultat, 20000);
});

test('ackreditering: under 25 poäng i senaste rapporten ger 20 % avdrag', () => {
  const r = B({ lagPoang: true });
  assert.equal(r.resultat, 16000);
  assert.equal(sp(r.formel), 'Grundbidrag 20 000 euro − 20 % = 16 000 euro');
});

test('ackreditering: ogiltiga värden ger ett lugnt felmeddelande', () => {
  const ogiltiga = [
    { typ: 'annan' }, { typ: 'konsortium', organisationer: 1 }, { behov: -1 }, { behov: 1.5 },
    { tidigare: true, hogsta: NaN }, { lagPoang: 'nej' }
  ];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
