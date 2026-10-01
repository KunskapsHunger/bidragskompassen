'use strict';
/* Räkneexempel: kostnader som hör till bidragsåret (3 § förordning 2025:718 och Skolverkets anvisningar om avskrivning),
 * med bidragsramen (11 §) som tak. Linjär avskrivning per hel månad är räknarens antagande. */
const test = require('node:test');
const assert = require('node:assert/strict');
const calc = require('../js/calc/sakerhetshojande-atgarder-begaran.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const R = (v) => calc.berakna(Object.assign({ ram: 120000, kostnader: 50000, investering: 300000, livslangd: 10, manader: 4 }, v));

test('begäran: kostnader + årets avskrivning, inom ramen', () => {
  const r = R({});
  assert.equal(r.resultat, 60000, '50 000 + 300 000 / 10 × 4/12 = 60 000');
  assert.equal(sp(r.formel), '50 000 + 300 000 ÷ 10 × 4/12 = 60 000 kr (ryms i ramen 120 000 kr)');
  assert.deepEqual(r.rader.map((x) => sp(x.varde)), ['50 000 kr', '10 000 kr', '60 000 kr', '120 000 kr', '60 000 kr', '290 000 kr']);
  assert.deepEqual(r.delar.map((d) => d.varde), [50000, 10000]);
  assert.deepEqual(r.varningar, []);
});

test('begäran: ramen är taket', () => {
  const r = R({ ram: 50000, kostnader: 80000, investering: 0 });
  assert.equal(r.resultat, 50000);
  assert.equal(sp(r.formel), '80 000 kr → högst ramen 50 000 kr');
  assert.equal(sp(r.rader[4].varde), '30 000 kr');
  assert.match(r.rader[4].etikett, /över ramen/);
  assert.ok(r.varningar.some((w) => /större än ramen/.test(w)));
  assert.deepEqual(r.delar.map((d) => d.varde), [50000, 0]);
});

test('begäran: inköp i bruk hela året', () => {
  const r = R({ kostnader: 0, investering: 600000, livslangd: 5, manader: 12 });
  assert.equal(r.resultat, 120000);
  assert.equal(sp(r.rader[5].varde), '480 000 kr');
});

test('begäran: avrundning och varningar om avskrivning', () => {
  assert.equal(R({ kostnader: 0, investering: 100000, livslangd: 3, manader: 1 }).resultat, 2778, '100 000 / 3 / 12 = 2 777,78');
  const small = R({ investering: 29600, livslangd: 5 });
  assert.ok(small.varningar.some((w) => /halvt prisbasbelopp/.test(w)), 'högst halvt prisbasbelopp');
  assert.equal(R({ investering: 29601, livslangd: 5 }).varningar.length, 0);
  assert.ok(R({ livslangd: 3 }).varningar.some((w) => /tre år/.test(w)));
  const unused = R({ manader: 0 });
  assert.equal(unused.resultat, 50000);
  assert.ok(unused.varningar.some((w) => /används inte under 2026/.test(w)));
  assert.equal(calc.HALVT_PBB_2026, 29600);
});

test('begäran: ogiltiga värden', () => {
  assert.ok(R({ ram: 0 }).fel);
  assert.ok(R({ kostnader: -1 }).fel);
  assert.ok(R({ investering: 1.5 }).fel);
  assert.ok(R({ livslangd: 0 }).fel);
  assert.ok(R({ manader: 13 }).fel);
  assert.ok(R({ ram: NaN }).fel);
});
