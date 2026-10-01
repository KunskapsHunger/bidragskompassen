'use strict';
/* Räkneexempel som går att kontrollera mot Nordplus handbok 2026, Nordplus Junior – Funding of mobility projects:
 * resa 330 / 660 / 1 300 euro tur och retur, inrikes 175 euro, uppehälle för personal 100 / 500 / 1 350 euro per dag / vecka / månad.
 * Klassutbyte: högst 30 elever per skola och högst två lärare per tio elever. */
const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('../js/calc/nordplus-junior-mobilitet.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const B = (v) => m.berakna(Object.assign(
  { aktivitet: 'klassutbyte', elever: 20, personal: 4, resvag: 'norden', inrikes: false, enhet: 'vecka', antal: 1 }, v));

test('nordplus-junior: schablonerna följer handboken', () => {
  assert.equal(m.id, 'nordplus-junior-mobilitet');
  assert.deepEqual(m.RESA, { norden: 330, island: 660, gronland: 1300 });
  assert.equal(m.INRIKES, 175);
  assert.deepEqual(m.UPPEHALLE, { dag: 100, vecka: 500, manad: 1350 });
});

test('nordplus-junior: klassutbyte med 20 elever och 4 lärare i en vecka = 9 920 euro', () => {
  const r = B({});
  assert.equal(r.resultat, 24 * 330 + 4 * 500);
  assert.equal(r.resultat, 9920);
  assert.equal(r.enhet, 'euro');
  assert.equal(sp(r.formel), '330 × 24 + 500 × 1 × 4 = 9 920 euro');
});

test('nordplus-junior: handbokens maxexempel, 30 elever och 6 lärare med lång inrikes resa', () => {
  const r = B({ elever: 30, personal: 6, inrikes: true });
  assert.equal(r.resultat, 36 * 330 + 36 * 175 + 6 * 500);
  assert.equal(r.resultat, 21180);
  assert.ok(r.extra.some((e) => /Projektledning/.test(e.rubrik)));
});

test('nordplus-junior: lärarutbyte på Island i två veckor', () => {
  const r = B({ aktivitet: 'lararutbyte', personal: 2, resvag: 'island', antal: 2 });
  assert.equal(r.resultat, 2 * 660 + 2 * 500 * 2);
  assert.equal(r.resultat, 3320);
});

test('nordplus-junior: förberedande besök och studiebesök räknas per dag', () => {
  assert.equal(B({ aktivitet: 'forberedande', personal: 2, enhet: 'dag', antal: 5 }).resultat, 2 * 330 + 2 * 100 * 5);
  assert.equal(B({ aktivitet: 'studiebesok', personal: 4, enhet: 'dag', antal: 4 }).resultat, 4 * 330 + 4 * 100 * 4);
  assert.equal(B({ aktivitet: 'lararutbyte', personal: 1, resvag: 'gronland', enhet: 'manad', antal: 2 }).resultat, 1300 + 2700);
});

test('nordplus-junior: elever räknas bara i klassutbyten', () => {
  const r = B({ aktivitet: 'lararutbyte', elever: 30, personal: 1 });
  assert.equal(r.resultat, 330 + 500);
});

test('nordplus-junior: reglerna för deltagare och längd ger lugna fel', () => {
  const ogiltiga = [
    { elever: 31 }, { elever: 0 }, { elever: 10, personal: 3 }, { enhet: 'dag', antal: 6 }, { enhet: 'dag', antal: 4 },
    { enhet: 'vecka', antal: 4 }, { enhet: 'manad', antal: 1 },
    { aktivitet: 'forberedande', personal: 3, enhet: 'dag', antal: 5 }, { aktivitet: 'forberedande', personal: 2, enhet: 'vecka', antal: 1 },
    { aktivitet: 'studiebesok', personal: 1, enhet: 'dag', antal: 3 }, { aktivitet: 'studiebesok', personal: 6, enhet: 'dag', antal: 3 },
    { aktivitet: 'lararutbyte', personal: 0 }, { aktivitet: 'okand' }, { resvag: 'eu' }, { antal: 1.5 }
  ];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
  assert.equal(B({ elever: 11, personal: 4 }).resultat, 15 * 330 + 4 * 500);
});
