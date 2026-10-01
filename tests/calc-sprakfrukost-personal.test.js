'use strict';
/* Skolverkets exempel ("Vad menas med befintliga kostnader?", Statsbidrag för språkfrukost 2026):
 * heltidslön 30 000 kr, 25 procent språkfrukost → 7 500 kr med bidraget och 22 500 kr befintliga kostnader. */
const test = require('node:test');
const assert = require('node:assert/strict');
const personal = require('../js/calc/sprakfrukost-personal.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const P = (v) => personal.berakna(Object.assign({ lon: 30000, andel: 25, manader: 1 }, v));

test('personal: Skolverkets exempel med Lisa', () => {
  const r = P({});
  assert.equal(personal.id, 'sprakfrukost-personal');
  assert.equal(r.resultat, 7500);
  assert.equal(r.enhet, 'kr');
  assert.equal(sp(r.formel), '30 000 × 25 % = 7 500 kr');
  assert.equal(sp(r.rader[1].varde), '22 500 kr');
  assert.deepEqual(r.delar.map((d) => d.varde), [7500, 22500]);
  assert.equal(sp(r.sammanfattning), '30 000 kr i månadslön · 25 % språkfrukost · 1 månad');
});

test('personal: flera månader multipliceras', () => {
  const r = P({ lon: 32000, andel: 10, manader: 4 });
  assert.equal(r.resultat, 3200 * 4);
  assert.equal(sp(r.formel), '32 000 × 10 % × 4 = 12 800 kr');
  assert.equal(sp(r.rader[2].varde), '115 200 kr');
});

test('personal: avrundas till hela kronor per månad', () => {
  const r = P({ lon: 30001, andel: 33, manader: 2 });
  assert.equal(r.resultat, Math.round(30001 * 0.33) * 2);
});

test('personal: ogiltiga värden ger ett lugnt felmeddelande', () => {
  for (const v of [{ lon: 0 }, { lon: 1.5 }, { andel: 0 }, { andel: 101 }, { andel: 12.5 }, { manader: 0 }, { manader: 7 }, { lon: '30000' }]) {
    const r = P(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
