'use strict';
/* Exempel ur Skolverkets beslutslista för ansökan om statsbidrag för lovskola 2026 (beslut 2026-03-18):
 * totalt 112 000 000 kr för 437 316 sökta elevdagar, och en huvudman med 25 611 kr för 100 sökta elevdagar. */
const test = require('node:test');
const assert = require('node:assert/strict');
const ansokan = require('../js/calc/lovskola-ansokan.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const A = (v) => ansokan.berakna(Object.assign({ sokta: 100, beviljat: 25611, genomforda: 90 }, v));
const rad = (r, etikett) => sp(r.rader.find((x) => x.etikett === etikett).varde);

test('ansökan: 25 611 kr för 100 sökta elevdagar = 256,11 kr per elevdag', () => {
  const r = A({});
  assert.ok(Math.abs(r.resultat - 256.11) < 1e-9);
  assert.equal(r.enhet, 'kr per elevdag');
  assert.equal(sp(r.formel), '25 611 kr ÷ 100 sökta elevdagar = 256,11 kr per elevdag');
  assert.equal(sp(r.sammanfattning), 'Ansökningsbeslutet motsvarar 85,37 % av schablonen.');
  assert.match(sp(r.forklaring), /^Det är 14,63 % lägre än schablonen på 300 kr\./);
  assert.equal(rad(r, 'Sökta elevdagar × 300 kr'), '30 000 kr');
  assert.equal(rad(r, 'Genomförda elevdagar × 300 kr'), '27 000 kr');
  assert.equal(rad(r, 'Genomförda elevdagar × beslutets nivå'), '23 050 kr');
  assert.deepEqual(r.varningar, []);
});

test('ansökan: hela landet 2026 ger cirka 256 kr per sökt elevdag', () => {
  const r = A({ sokta: 437316, beviljat: 112000000, genomforda: 437316 });
  assert.equal(Math.round(r.resultat * 100) / 100, 256.11);
  assert.equal(rad(r, 'Sökta elevdagar × 300 kr'), '131 194 800 kr');
});

test('ansökan: fler genomförda elevdagar än sökt ger en varning', () => {
  const r = A({ genomforda: 120 });
  assert.equal(r.varningar.length, 1);
  assert.match(r.varningar[0], /7 §/);
});

test('ansökan: över 300 kr per sökt elevdag pekar på särskilda skäl', () => {
  const r = A({ beviljat: 40000 });
  assert.equal(r.resultat, 400);
  assert.equal(r.forklaring, '');
  assert.equal(r.varningar.length, 1);
  assert.match(r.varningar[0], /särskilda skäl/);
});

test('ansökan: avslag (0 kr) blockeras med förklaring', () => {
  const r = A({ beviljat: 0 });
  assert.equal(r.resultat, 0);
  assert.equal(r.blockerad, true);
  assert.match(r.forklaring, /beviljad/);
});

test('ansökan: ogiltiga värden ger ett lugnt felmeddelande', () => {
  for (const v of [{ sokta: 0 }, { sokta: 1.5 }, { beviljat: -1 }, { beviljat: 10.5 }, { genomforda: -1 }, { genomforda: NaN }]) {
    const r = A(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
