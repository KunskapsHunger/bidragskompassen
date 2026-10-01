'use strict';
/* Räkneexempel som går att kontrollera mot Skolverkets sida för teknik- och naturvetenskapscentrum 2026:
 * grunden för beräkningen är det lägsta av sökt belopp och 49 procent av förra årets intäkter
 * (exklusive statsbidraget från Skolverket). */
const test = require('node:test');
const assert = require('node:assert/strict');
const calc = require('../js/calc/teknik-naturvetenskapscentrum-tak.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const B = (v) => calc.berakna(Object.assign({ intakter: 4000000, sokt: 1500000 }, v));

test('science center: andelen är 49 procent', () => {
  assert.equal(calc.id, 'teknik-naturvetenskapscentrum-tak');
  assert.equal(calc.ANDEL, 0.49);
});

test('science center: sökt belopp under taket gäller', () => {
  const r = B({});
  // 0,49 × 4 000 000 = 1 960 000 > 1 500 000
  assert.equal(r.resultat, 1500000);
  assert.equal(r.enhet, 'kr');
  assert.equal(sp(r.formel), 'lägsta av 1 500 000 och 0,49 × 4 000 000 = 1 500 000 kr');
  assert.equal(sp(r.rader[1].varde), '1 960 000 kr');
  assert.deepEqual(r.varningar, []);
  assert.equal(r.blockerad, false);
});

test('science center: 49-procentsregeln begränsar ett för högt sökt belopp', () => {
  const r = B({ intakter: 2000000, sokt: 1500000 });
  assert.equal(r.resultat, 980000);
  assert.equal(r.varningar.length, 1);
  assert.match(sp(r.varningar[0]), /980 000 kr/);
});

test('science center: exakt på taket är inte begränsat', () => {
  const r = B({ intakter: 1000000, sokt: 490000 });
  assert.equal(r.resultat, 490000);
  assert.deepEqual(r.varningar, []);
});

test('science center: kronor avrundas nedåt så taket inte överskrids', () => {
  const r = B({ intakter: 1001, sokt: 1000 });
  // 0,49 × 1 001 = 490,49 → 490
  assert.equal(r.resultat, 490);
});

test('science center: inga intäkter ger 0 och blockering', () => {
  const r = B({ intakter: 0 });
  assert.equal(r.resultat, 0);
  assert.equal(r.blockerad, true);
  assert.equal(r.varningar.length, 2);
});

test('science center: ogiltiga värden ger fel', () => {
  assert.ok(B({ sokt: 0 }).fel);
  assert.ok(B({ sokt: -5 }).fel);
  assert.ok(B({ intakter: 1.5 }).fel);
  assert.ok(B({ intakter: NaN }).fel);
  assert.ok(B({ sokt: 1e11 }).fel);
});
