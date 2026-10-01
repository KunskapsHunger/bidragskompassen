'use strict';
/* Räkneexempel som går att kontrollera mot Nordplus handbok 2026, Nordplus Adult – Funding, Mobility projects:
 * resa 330 / 660 / 1 300 euro, inrikes 175 euro, uppehälle för vuxenstuderande 70 / 250 / 750 euro
 * och för lärare och personal 100 / 500 / 1 350 euro per dag / vecka / månad. */
const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('../js/calc/nordplus-vuxen-mobilitet.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const B = (v) => m.berakna(Object.assign(
  { aktivitet: 'personal', studerande: 0, personal: 2, resvag: 'norden', inrikes: false, enhet: 'vecka', antal: 1 }, v));

test('nordplus-vuxen: schablonerna följer handboken', () => {
  assert.equal(m.id, 'nordplus-vuxen-mobilitet');
  assert.deepEqual(m.RESA, { norden: 330, island: 660, gronland: 1300 });
  assert.equal(m.INRIKES, 175);
  assert.deepEqual(m.UPPEHALLE.studerande, { dag: 70, vecka: 250, manad: 750 });
  assert.deepEqual(m.UPPEHALLE.personal, { dag: 100, vecka: 500, manad: 1350 });
});

test('nordplus-vuxen: två lärare i en vecka = 1 660 euro', () => {
  const r = B({});
  assert.equal(r.resultat, 2 * 330 + 2 * 500);
  assert.equal(sp(r.formel), '330 × 2 + 500 × 1 × 2 = 1 660 euro');
  assert.equal(r.enhet, 'euro');
});

test('nordplus-vuxen: åtta studerande och två lärare i en vecka = 6 300 euro', () => {
  const r = B({ aktivitet: 'studerande', studerande: 8, personal: 2 });
  assert.equal(r.resultat, 10 * 330 + 8 * 250 + 2 * 500);
  assert.equal(r.resultat, 6300);
  assert.equal(sp(r.formel), '330 × 10 + 250 × 1 × 8 + 500 × 1 × 2 = 6 300 euro');
});

test('nordplus-vuxen: förberedande besök och längre vistelser', () => {
  assert.equal(B({ aktivitet: 'forberedande', enhet: 'dag', antal: 4 }).resultat, 660 + 800);
  assert.equal(B({ personal: 1, resvag: 'island', antal: 2 }).resultat, 660 + 1000);
  assert.equal(B({ personal: 1, resvag: 'gronland', inrikes: true, enhet: 'manad', antal: 3 }).resultat, 1300 + 175 + 3 * 1350);
});

test('nordplus-vuxen: projektledning visas vid minst 15 resenärer eller 10 000 euro', () => {
  const r = B({ aktivitet: 'studerande', studerande: 13, personal: 2 });
  assert.ok(r.extra.some((e) => /Projektledning/.test(e.rubrik)));
  assert.ok(!B({}).extra.some((e) => /Projektledning/.test(e.rubrik)));
});

test('nordplus-vuxen: varningar för kort vistelse och många lärare', () => {
  assert.ok(B({ enhet: 'dag', antal: 3 }).varningar.some((t) => /tre hela arbetsdagar/.test(t)));
  assert.ok(B({ personal: 3 }).varningar.some((t) => /högst två personer/.test(t)));
  assert.equal(B({ aktivitet: 'personal', studerande: 50 }).resultat, 1660);
});

test('nordplus-vuxen: ogiltiga värden ger lugna fel', () => {
  const ogiltiga = [
    { personal: 0 }, { aktivitet: 'studerande', studerande: 0 }, { aktivitet: 'forberedande', personal: 3, enhet: 'dag', antal: 3 },
    { aktivitet: 'forberedande', enhet: 'vecka', antal: 1 }, { enhet: 'manad', antal: 25 }, { enhet: 'dag', antal: 40 },
    { personal: -1 }, { antal: 0 }, { resvag: 'eu' }, { enhet: 'ar' }, { aktivitet: 'kurs' }
  ];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
