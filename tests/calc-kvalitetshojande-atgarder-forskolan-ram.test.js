'use strict';
/* Räkneexempel för 6 § tredje stycket förordning (2021:848):
 * ram = medel ÷ landets invånare × index × kommunens invånare × korrigeringsfaktor.
 * Medel 2027: 2 886 000 000 kr (Skolverket). Landets invånare 30 juni 2026: 10 610 500 (SCB, avrundat).
 * Kommunens invånare och index är påhittade. */
const test = require('node:test');
const assert = require('node:assert/strict');
const ram = require('../js/calc/kvalitetshojande-atgarder-forskolan-ram.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const R = (v) => ram.berakna(Object.assign({
  medel: 2886000000, landetsInvanare: 10610500, kommunensInvanare: 50000, index: 1, korrigering: 1
}, v));

test('ram: 50 000 invånare, index 1 → 13 599 736 kr', () => {
  const r = R({});
  // 2 886 000 000 ÷ 10 610 500 = 271,9947… kr per invånare; × 50 000 = 13 599 736,1
  assert.equal(r.resultat, 13599736);
  assert.equal(sp(r.formel), '2 886 000 000 kr ÷ 10 610 500 × 1 × 50 000 × 1 = 13 599 736 kr');
  assert.deepEqual(r.rader.map((x) => sp(x.varde)), ['271,99 kr', '271,99 kr', '0,4712 %', '0,4712 %']);
  assert.deepEqual(r.varningar, []);
});

test('ram: högre index ger proportionellt mer per invånare', () => {
  const r = R({ index: 1.15 });
  assert.equal(r.resultat, 15639697);
  assert.equal(sp(r.rader[1].varde), '312,79 kr');
  const dubbel = R({ kommunensInvanare: 100000 });
  assert.ok(Math.abs(dubbel.resultat - 2 * 13599736) <= 1, 'dubbla invånare → dubbel ram');
});

test('ram: 2026 års pengar och invånare 30 juni 2025', () => {
  assert.equal(R({ medel: 3086000000, landetsInvanare: 10592700 }).resultat, 14566636);
});

test('ram: korrigeringsfaktorn multipliceras in och ger en varning', () => {
  const r = R({ korrigering: 0.98 });
  assert.equal(r.resultat, Math.round(13599736.1 * 0.98));
  assert.equal(r.varningar.length, 1);
});

test('ram: ogiltiga värden', () => {
  assert.ok(R({ medel: 0 }).fel);
  assert.ok(R({ medel: 1.5 }).fel);
  assert.ok(R({ landetsInvanare: 0 }).fel);
  assert.ok(R({ kommunensInvanare: 10.5 }).fel);
  assert.ok(R({ kommunensInvanare: 20000000 }).fel);
  assert.ok(R({ landetsInvanare: 1000, kommunensInvanare: 2000 }).fel);
  assert.ok(R({ index: 0 }).fel);
  assert.ok(R({ korrigering: NaN }).fel);
});
