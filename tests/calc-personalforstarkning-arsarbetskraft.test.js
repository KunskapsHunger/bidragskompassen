'use strict';
/* Exemplen kommer från Skolverkets "Beräkningsstöd för årsarbetskrafter" (xlsx, länkat från sidorna om
 * personalförstärkning 2026 och 2027) och sidans regel att 1 700 timmar motsvarar 1,0 årsarbetskraft. */
const test = require('node:test');
const assert = require('node:assert/strict');
const aak = require('../js/calc/personalforstarkning-arsarbetskraft.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const A = (v) => aak.berakna(Object.assign({ satt: 'tid', kategori: 'speciallarare', antal: 1, grad: 100, manader: 12, timmar: 1700, minstSexManader: true }, v));
const aa = (r) => Number(sp(r.rader[0].varde).replace(',', '.'));

test('årsarbetskraft: heltid hela året = 1,0 och 402 000 kr för en speciallärare', () => {
  const r = A({});
  assert.equal(aa(r), 1);
  assert.equal(r.resultat, 402000);
  assert.equal(sp(r.formel), '1 × 402 000 = 402 000 kr');
  assert.match(sp(r.sammanfattning), /^1 årsarbetskraft/);
});

test('årsarbetskraft: Skolverkets exempel – heltid sex månader 0,5, halvtid sex månader 0,25', () => {
  assert.equal(aa(A({ manader: 6 })), 0.5);
  assert.equal(aa(A({ grad: 50, manader: 6 })), 0.25);
});

test('årsarbetskraft: Skolverkets exempel – 75 % i tre månader = 0,1875 ≈ 0,19', () => {
  const r = A({ grad: 75, manader: 3 });
  assert.equal(aa(r), 0.19);
  assert.equal(sp(r.rader[1].varde), '0,1875');
  assert.equal(r.resultat, 76380, '0,19 × 402 000');
  assert.match(sp(r.forklaring), /1 × 0,75 × 3\/12 = 0,1875, avrundat till 0,19/);
  assert.ok(r.varningar.some((w) => w.includes('minst sex månader totalt')));
});

test('årsarbetskraft: Skolverkets sammansatta exempel ger 1,81', () => {
  const delar = [A({ antal: 2, manader: 6 }), A({ grad: 50, manader: 6 }), A({ grad: 75, manader: 9 })].map(aa);
  assert.deepEqual(delar, [1, 0.25, 0.56]);
  assert.equal(Math.round(delar.reduce((s, x) => s + x, 0) * 100) / 100, 1.81);
});

test('årsarbetskraft: timavlönade – 1 700 timmar = 1,0 och 850 timmar = 0,5', () => {
  assert.equal(aa(A({ satt: 'timmar', timmar: 1700 })), 1);
  const r = A({ satt: 'timmar', timmar: 850, kategori: 'lararassistent' });
  assert.equal(aa(r), 0.5);
  assert.equal(r.resultat, 124000);
  assert.match(sp(r.forklaring), /850 ÷ 1 700 = 0,5/);
});

test('årsarbetskraft: anställning kortare än sex månader räknas inte', () => {
  const r = A({ minstSexManader: false });
  assert.equal(r.resultat, 0);
  assert.equal(r.blockerad, true);
});

test('årsarbetskraft: fortbildning påminner om att studietiden inte räknas', () => {
  assert.ok(A({ kategori: 'fortbildning' }).varningar.some((w) => w.includes('studier')));
});

test('årsarbetskraft: ogiltiga värden ger ett lugnt felmeddelande', () => {
  for (const v of [{ antal: 0 }, { antal: 1.5 }, { grad: 101 }, { manader: 13 }, { satt: 'timmar', timmar: -1 }, { kategori: 'x' }]) {
    const r = A(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
  assert.equal(A({ satt: 'tid', timmar: -1 }).resultat, 402000, 'timmar ignoreras när tjänstgöringsgrad används');
});
