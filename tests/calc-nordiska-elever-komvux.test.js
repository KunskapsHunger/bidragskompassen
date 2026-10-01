'use strict';
/* Räkneexempel från regleringsbrevet för Statens skolverk 2026 (anslag 1:8 ap.2): 53 400 kr per
 * 800 verksamhetspoäng, och Skolverkets sida: högst 800 poäng per elev och år. */
const test = require('node:test');
const assert = require('node:assert/strict');
const calc = require('../js/calc/nordiska-elever-komvux.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const B = (v) => calc.berakna(Object.assign({ huvudman: 'region', elever: 3, poang: 1200 }, v));

test('nordiska komvux: beloppen följer regleringsbrevet 2026', () => {
  assert.equal(calc.id, 'nordiska-elever-komvux');
  assert.equal(calc.BELOPP_PER_800, 53400);
  assert.equal(calc.MAX_POANG_PER_AR, 800);
});

test('nordiska komvux: 1 200 poäng = 80 100 kr', () => {
  const r = B({});
  assert.equal(r.resultat, 80100);
  assert.equal(sp(r.formel), '53 400 ÷ 800 × 1 200 = 80 100 kr');
  assert.equal(sp(r.forklaring), 'Varje verksamhetspoäng ger 66,75 kr.');
  assert.equal(r.varningar.length, 1);
});

test('nordiska komvux: en elev med 800 poäng = 53 400 kr', () => {
  assert.equal(B({ elever: 1, poang: 800 }).resultat, 53400);
});

test('nordiska komvux: udda poäng avrundas till hela kronor', () => {
  assert.equal(B({ elever: 1, poang: 1 }).resultat, 67);
  assert.equal(B({ elever: 1, poang: 2 }).resultat, 134);
});

test('nordiska komvux: kommun får varning om avdrag och nivåer', () => {
  const r = B({ huvudman: 'kommun', elever: 4, poang: 1600 });
  assert.equal(r.resultat, 106800);
  assert.ok(r.varningar.some((w) => /CSN/.test(w)));
  assert.ok(r.varningar.some((w) => /sfi/.test(w)));
});

test('nordiska komvux: fler än 800 poäng per elev ger fel', () => {
  const r = B({ elever: 1, poang: 801 });
  assert.ok(r.fel && r.resultat === undefined);
});

test('nordiska komvux: ogiltiga värden ger ett lugnt felmeddelande', () => {
  for (const v of [{ huvudman: 'enskild' }, { elever: 0 }, { poang: 0 }, { poang: 1.5 }, { elever: 'tre' }]) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
