'use strict';
/* Räkneexempel från förordning (2016:100) 9–11 §§ och Skolverkets sida för Lärarlönelyftet 2026/27:
 * "(3 000 kronor x 12 månader) x 1,42 = 51 120 kronor för ett läsår", 25 560 kr per termin. */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/lararlonelyftet-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const B = (v) => belopp.berakna(Object.assign(
  { ram: 1000000, antal: 1, okning: 3000, tvaGrupper: false, antal2: 5, okning2: 2000, grad: 100, manader: 12 }, v));
const rad = (r, start) => sp(r.rader.find((x) => x.etikett.startsWith(start)).varde);

test('belopp: Skolverkets exempel – 3 000 kr i månaden i ett läsår = 51 120 kr', () => {
  const r = B({ ram: 100000 });
  assert.equal(r.resultat, 51120);
  assert.equal(sp(r.formel), '(1 × 3 000) × 1 × 12 mån × 1,42 = 51 120 kr');
  assert.deepEqual(r.delar.map((d) => Math.round(d.varde)), [36000, 15120]);
  assert.equal(rad(r, 'Högst per begäran'), '50 000 kr');
  assert.equal(r.resultat / 2, 25560, 'Skolverket: 25 560 kr per termin');
  assert.deepEqual(r.varningar, []);
});

test('belopp: 10 lärare à 3 000 kr tar 51,1 % av en ram på 1 000 000 kr', () => {
  const r = B({ antal: 10 });
  assert.equal(r.resultat, 511200);
  assert.equal(sp(r.sammanfattning), '10 lärare · snitt 3 000 kr i månaden · 100 % · 12 månader');
  assert.equal(rad(r, 'Andel av bidragsramen'), '51,1 %');
  assert.equal(rad(r, 'Kvar av ramen'), '488 800 kr');
  assert.equal(sp(r.extra[0].varde), '19 lärare', '1 000 000 / 51 120 = 19,56');
});

test('belopp: snittet räknas över alla lärare (9 §) – 10 × 3 500 + 5 × 2 000 ger 3 000 kr', () => {
  const r = B({ antal: 10, okning: 3500, tvaGrupper: true, antal2: 5, okning2: 2000 });
  assert.equal(r.resultat, 766800);
  assert.equal(sp(r.formel), '(10 × 3 500 + 5 × 2 000) × 1 × 12 mån × 1,42 = 766 800 kr');
  assert.match(rad(r, 'Genomsnittlig'), /^3 000 kr · inom/);
  assert.deepEqual(r.varningar, []);
  assert.equal(B({ antal: 10, okning: 3500, tvaGrupper: false, antal2: 5, okning2: 2000 }).resultat, 596400, 'grupp 2 räknas bara när den är vald');
  assert.equal(B({ tvaGrupper: true, antal2: 0 }).resultat, 51120, 'tom grupp 2 påverkar inte snittet');
});

test('belopp: snitt utanför 2 500–3 500 kr ger en varning', () => {
  for (const okning of [2400, 3600]) {
    const r = B({ okning });
    assert.equal(r.varningar.length, 1, String(okning));
    assert.match(r.varningar[0], /2 500 kr och högst 3 500 kr/);
  }
  assert.deepEqual(B({ okning: 2500 }).varningar, []);
  assert.deepEqual(B({ okning: 3500 }).varningar, []);
});

test('belopp: deltid och del av året minskas i proportion (11 §)', () => {
  const r = B({ antal: 4, okning: 2500, grad: 50, manader: 6, ram: 100000 });
  assert.equal(r.resultat, 42600);
  assert.equal(sp(r.formel), '(4 × 2 500) × 0,5 × 6 mån × 1,42 = 42 600 kr');
  assert.equal(B({ grad: 0 }).resultat, 0);
  assert.equal(sp(B({ manader: 1 }).sammanfattning), '1 lärare · snitt 3 000 kr i månaden · 100 % · 1 månad');
});

test('belopp: kostnad över ramen ger en varning', () => {
  const r = B({ antal: 20, ram: 1000000 });
  assert.equal(r.resultat, 1022400);
  assert.equal(r.varningar.length, 1);
  assert.match(sp(r.varningar[0]), /22 400 kr högre än bidragsramen/);
  const noll = B({ ram: 0 });
  assert.equal(rad(noll, 'Andel av bidragsramen'), '–');
  assert.equal(noll.varningar.length, 1);
});

test('belopp: ogiltiga värden ger ett lugnt felmeddelande', () => {
  for (const v of [{ antal: 0 }, { antal: 1.5 }, { okning: -1 }, { grad: 101 }, { manader: 13 }, { ram: NaN }, { tvaGrupper: true, antal2: -1 }]) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
  assert.equal(B({ antal2: -1 }).resultat, 51120, 'grupp 2 ignoreras när den inte är vald');
});
