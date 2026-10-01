'use strict';
/* Räkneexempel: egen finansiering enligt 6 § förordning (2024:62) – minst 20 procent av det belopp som begärs ut –
 * och Skolverkets exempel (ram 100 000 kr, hela ramen begärs ut → minst 20 000 kr egen finansiering),
 * med bidragsramen (8 §) som tak. */
const test = require('node:test');
const assert = require('node:assert/strict');
const calc = require('../js/calc/inkop-av-litteratur-begaran.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const R = (v) => calc.berakna(Object.assign({ ram: 100000, inkop: 120000 }, v));

test('litteratur: Skolverkets exempel – hela ramen kräver inköp för 120 000 kr', () => {
  const r = R({});
  assert.equal(r.resultat, 100000);
  assert.deepEqual(r.rader.map((x) => sp(x.varde)), ['120 000 kr', '100 000 kr', '20 000 kr', '20 000 kr', '100 000 kr', '120 000 kr']);
  assert.equal(sp(r.formel), '120 000 ÷ 1,2 ≥ ramen → högst ramen 100 000 kr');
  assert.deepEqual(r.delar.map((d) => d.varde), [100000, 20000]);
  assert.deepEqual(r.varningar, []);
});

test('litteratur: inköpen sätter taket', () => {
  const r = R({ inkop: 60000 });
  assert.equal(r.resultat, 50000, '60 000 ÷ 1,2 = 50 000');
  assert.equal(sp(r.rader[2].varde), '10 000 kr');
  assert.equal(sp(r.formel), '60 000 ÷ 1,2 = 50 000 kr (mindre än ramen 100 000 kr)');
  assert.ok(r.varningar.some((w) => /120 000 kr totalt/.test(sp(w))));
});

test('litteratur: avrundning håller kravet på 20 procent', () => {
  const r = R({ inkop: 100000 });
  assert.equal(r.resultat, 83333);
  const egen = 100000 - r.resultat;
  assert.equal(egen, 16667);
  assert.ok(egen >= r.resultat * 0.2);
  assert.equal(sp(r.rader[3].varde), '16 667 kr');
});

test('litteratur: minsta ramen och mer inköp än som behövs', () => {
  const minsta = R({ ram: 1500, inkop: 1800 });
  assert.equal(minsta.resultat, 1500);
  assert.equal(sp(minsta.rader[2].varde), '300 kr');
  const mer = R({ inkop: 200000 });
  assert.equal(mer.resultat, 100000);
  assert.equal(sp(mer.rader[2].varde), '100 000 kr');
});

test('litteratur: inga inköp och ogiltiga värden', () => {
  const noll = R({ inkop: 0 });
  assert.equal(noll.resultat, 0);
  assert.equal(noll.blockerad, true);
  assert.ok(noll.varningar.length === 1);
  assert.equal(R({ inkop: 1 }).resultat, 0);
  assert.ok(R({ ram: 0 }).fel);
  assert.ok(R({ inkop: -1 }).fel);
  assert.ok(R({ inkop: 1.5 }).fel);
  assert.ok(R({ ram: NaN }).fel);
});
