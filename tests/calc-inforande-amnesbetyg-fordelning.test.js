'use strict';
/* Räkneexempel mot 5 § förordning (2023:889): belopp per elev och årsstudieplats, men minst 20 000 kr
 * per huvudman och bidragsår. Beloppet per elev är ett antagande – Skolverket publicerar det inte. */
const test = require('node:test');
const assert = require('node:assert/strict');
const fordelning = require('../js/calc/inforande-amnesbetyg-fordelning.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const F = (v) => fordelning.berakna(Object.assign({ elever: 400, arsstudieplatser: 100, perElev: 80 }, v));

test('amnesbetyg: lägsta belopp enligt 5 §', () => {
  assert.equal(fordelning.id, 'inforande-amnesbetyg-fordelning');
  assert.equal(fordelning.GOLV, 20000);
});

test('amnesbetyg: 500 elever och årsstudieplatser × 80 kr = 40 000 kr', () => {
  const r = F({});
  assert.equal(r.resultat, 40000);
  assert.equal(sp(r.formel), '80 × 500 = 40 000 kr');
  assert.equal(sp(r.extra[0].varde), '250 elever');
  assert.equal(r.varningar.length, 1);
});

test('amnesbetyg: liten huvudman får lägsta beloppet 20 000 kr', () => {
  const r = F({ elever: 150, arsstudieplatser: 0 });
  assert.equal(r.resultat, 20000);
  assert.equal(sp(r.formel), '80 × 150 = 12 000 kr → lägsta beloppet 20 000 kr');
  assert.match(r.forklaring, /lägsta belopp/);
});

test('amnesbetyg: precis på gränsen', () => {
  assert.equal(F({ elever: 250, arsstudieplatser: 0 }).resultat, 20000);
  assert.equal(F({ elever: 251, arsstudieplatser: 0 }).resultat, 20080);
});

test('amnesbetyg: decimaler i beloppet per elev avrundas till hela kronor', () => {
  const r = F({ elever: 1000, arsstudieplatser: 0, perElev: 82.5 });
  assert.equal(r.resultat, 82500);
  assert.equal(sp(r.extra[0].varde), '243 elever');
});

test('amnesbetyg: ogiltiga värden ger felmeddelande', () => {
  const ogiltiga = [{ elever: -1 }, { elever: 1.5 }, { elever: 0, arsstudieplatser: 0 }, { perElev: 0 }, { perElev: -5 }, { perElev: NaN }, { perElev: 20000 }, { arsstudieplatser: '5' }];
  for (const v of ogiltiga) {
    const r = F(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
