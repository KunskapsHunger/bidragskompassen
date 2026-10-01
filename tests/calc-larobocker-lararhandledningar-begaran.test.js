'use strict';
/* Räkneexempel: egen finansiering enligt 6 § förordning (2023:86) och Skolverkets exempel för 2026
 * (1 500 000 kr ÷ 3 000 elever = 500 kr per elev; 1 200 elever 2026 → 600 000 kr i egen finansiering),
 * med bidragsramen (7–9 §§) som tak. */
const test = require('node:test');
const assert = require('node:assert/strict');
const calc = require('../js/calc/larobocker-lararhandledningar-begaran.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const R = (v) => calc.berakna(Object.assign({
  ram: 250000, kostnaderTidigare: 1500000, eleverTidigare: 3000, elever: 1200, kostnader: 800000
}, v));

test('läroböcker: Skolverkets exempel – 500 kr per elev, 600 000 kr i egen finansiering', () => {
  const r = R({});
  assert.equal(r.resultat, 200000, '800 000 − 600 000 = 200 000');
  assert.equal(sp(r.formel), '800 000 − 600 000 = 200 000 kr (ryms i ramen 250 000 kr)');
  assert.deepEqual(r.rader.map((x) => sp(x.varde)), ['500 kr', '600 000 kr', '800 000 kr', '200 000 kr', '250 000 kr', '50 000 kr']);
  assert.match(sp(r.forklaring), /1 500 000 ÷ 3 000 elever = 500 kr per elev × 1 200 elever = 600 000 kr/);
  assert.deepEqual(r.delar.map((d) => d.varde), [600000, 200000]);
  assert.equal(r.blockerad, false);
  assert.deepEqual(r.varningar, []);
});

test('läroböcker: ramen är taket', () => {
  const r = R({ ram: 150000 });
  assert.equal(r.resultat, 150000);
  assert.equal(sp(r.formel), '800 000 − 600 000 = 200 000 kr → högst ramen 150 000 kr');
  assert.equal(sp(r.rader[5].varde), '50 000 kr');
  assert.match(r.rader[5].etikett, /över ramen/);
  assert.ok(r.varningar.some((w) => /större än ramen/.test(w)));
});

test('läroböcker: inga kostnader över den egna nivån ger inget bidrag', () => {
  const r = R({ kostnader: 600000 });
  assert.equal(r.resultat, 0);
  assert.equal(r.blockerad, true);
  assert.ok(r.varningar.some((w) => /ingen rätt/.test(w)));
  const lagre = R({ kostnader: 450000 });
  assert.equal(lagre.resultat, 0);
  assert.deepEqual(lagre.delar.map((d) => d.varde), [450000, 0]);
});

test('läroböcker: kortare historik och avrundning', () => {
  const r = R({ kostnaderTidigare: 100000, eleverTidigare: 300, elever: 310, kostnader: 150000 });
  assert.equal(sp(r.rader[0].varde), '333,33 kr');
  assert.equal(sp(r.rader[1].varde), '103 333 kr', '100 000 × 310 / 300 = 103 333,33');
  assert.equal(r.resultat, 46667);
  const noll = R({ kostnaderTidigare: 0 });
  assert.equal(noll.resultat, 250000);
  assert.ok(noll.varningar.some((w) => /Snittkostnaden blir 0 kr/.test(w)));
});

test('läroböcker: ogiltiga värden', () => {
  assert.ok(R({ ram: 0 }).fel);
  assert.ok(R({ kostnader: -1 }).fel);
  assert.ok(R({ kostnaderTidigare: 1.5 }).fel);
  assert.ok(R({ eleverTidigare: 0 }).fel);
  assert.ok(R({ elever: -1 }).fel);
  assert.ok(R({ ram: NaN }).fel);
});
