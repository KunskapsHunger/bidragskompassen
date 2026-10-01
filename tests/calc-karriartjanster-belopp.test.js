'use strict';
/* Räkneexempel hämtade från förlagan (läsguiden till förordning 2019:1288) och förordningens egna exempel. */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/karriartjanster-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const B = (v) => belopp.berakna(Object.assign({ tjanst: 'forstelarare', antal: 1, pott: 'pott1', andelPott2: 50, grad: 100, manader: 12 }, v));

test('belopp: 1 förstelärare, 100 %, 12 månader, pott 1 = 85 000 kr', () => {
  const r = B({});
  assert.equal(r.resultat, 85000);
  assert.equal(sp(r.formel), '85 000 × 1 × 12/12 × 1 = 85 000 kr');
  assert.equal(sp(r.sammanfattning), '1 förstelärare · 100 % · 12 månader');
  assert.deepEqual(r.delar.map((d) => d.varde), [85000, 0]);
  assert.equal(sp(r.extra[0].varde), '5 000 kr');
  assert.equal(r.forklaring, '');
  assert.deepEqual(r.varningar, []);
});

test('belopp: arbete i båda potterna vägs efter arbetstiden (50/50 → 127 500 kr, lön 7 500 kr)', () => {
  const r = B({ pott: 'bada', andelPott2: 50 });
  assert.equal(r.resultat, 127500);
  assert.equal(sp(r.forklaring), 'Vägt årsbelopp: 85 000 × 0,5 + 170 000 × 0,5 = 127 500 kr.');
  assert.deepEqual(r.delar.map((d) => d.varde), [42500, 85000]);
  assert.equal(sp(r.extra[0].varde), '7 500 kr', '12 §: 5 000 × 0,50 + 10 000 × 0,50 = 7 500');
  assert.equal(r.varningar.length, 1);
  assert.equal(B({ pott: 'bada', andelPott2: 25 }).resultat, 85000 * 0.75 + 170000 * 0.25);
});

test('belopp: två lektorer i pott 2 = 510 000 kr, lön 15 000 kr', () => {
  const r = B({ tjanst: 'lektor', pott: 'pott2', antal: 2 });
  assert.equal(r.resultat, 510000);
  assert.equal(sp(r.sammanfattning), '2 lektorer · 100 % · 12 månader');
  assert.equal(sp(r.formel), '255 000 × 1 × 12/12 × 2 = 510 000 kr');
  assert.equal(sp(r.extra[0].varde), '15 000 kr');
  assert.equal(sp(B({ tjanst: 'lektor' }).sammanfattning), '1 lektor · 100 % · 12 månader');
});

test('belopp: halvtid i sex månader = 21 250 kr, lön 2 500 kr', () => {
  const r = B({ grad: 50, manader: 6 });
  assert.equal(r.resultat, 21250);
  assert.equal(sp(r.formel), '85 000 × 0,5 × 6/12 × 1 = 21 250 kr');
  assert.equal(sp(r.extra[0].varde), '2 500 kr');
  assert.equal(sp(B({ manader: 1 }).sammanfattning), '1 förstelärare · 100 % · 1 månad');
});

test('belopp: deltid 80 % i pott 1 ger lönebeloppet 4 000 kr (12 §)', () => {
  assert.equal(sp(B({ grad: 80 }).extra[0].varde), '4 000 kr');
  assert.equal(B({ grad: 0 }).resultat, 0);
});

test('belopp: ogiltiga värden ger ett lugnt felmeddelande i stället för ett belopp', () => {
  for (const v of [{ antal: 0 }, { antal: 1.5 }, { grad: 101 }, { manader: 13 }, { manader: NaN }, { pott: 'bada', andelPott2: -1 }]) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
  assert.equal(B({ andelPott2: -1 }).resultat, 85000, 'andelen ignoreras utanför "båda potterna"');
});
