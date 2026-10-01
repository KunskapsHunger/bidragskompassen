'use strict';
/* Räkneexempel enligt 11 § förordning (2025:718): proportionell ram efter barn och elever, lägst 30 000 kr,
 * fast 30 000 kr för huvudman för fritidshem utan skolenhet eller förskoleenhet. 400 mnkr = Skolverkets belopp för 2026. */
const test = require('node:test');
const assert = require('node:assert/strict');
const ram = require('../js/calc/sakerhetshojande-atgarder-ram.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const R = (v) => ram.berakna(Object.assign({ huvudman: 'skola', medel: 400000000, egnaBarn: 1000, allaBarn: 2000000 }, v));

test('ram: andel av barn och elever × pengarna att fördela', () => {
  const r = R({});
  assert.equal(r.resultat, 200000);
  assert.equal(sp(r.formel), '400 000 000 × 1 000 ÷ 2 000 000 = 200 000 kr');
  assert.deepEqual(r.rader.map((x) => sp(x.varde)), ['0,05 %', '200 kr', '200 000 kr', '30 000 kr']);
  assert.equal(R({ egnaBarn: 25000 }).resultat, 5000000);
});

test('ram: ingen ram under 30 000 kr', () => {
  const low = R({ egnaBarn: 100 });
  assert.equal(low.resultat, 30000);
  assert.equal(sp(low.formel), '400 000 000 × 100 ÷ 2 000 000 = 20 000 kr → 30 000 kr');
  assert.match(sp(low.forklaring), /20 000 kr är lägre än 30 000 kr/);
  assert.equal(R({ egnaBarn: 0 }).resultat, 30000, 'lägsta nivån gäller även utan barn i underlaget');
  assert.equal(R({ egnaBarn: 150 }).resultat, 30000, 'exakt 30 000 kr');
  assert.equal(R({ egnaBarn: 151 }).resultat, 30200);
});

test('ram: avrundas till hela kronor', () => {
  const r = R({ medel: 1000000, egnaBarn: 1, allaBarn: 3 }); // 333 333,33 kr
  assert.equal(r.resultat, 333333);
  assert.match(r.forklaring, /hela kronor/);
});

test('ram: fritidshem utan skolenhet får alltid 30 000 kr', () => {
  const r = R({ huvudman: 'fritidshem', egnaBarn: 999999999 });
  assert.equal(r.resultat, 30000);
  assert.match(r.formel, /11 § tredje stycket/);
  assert.equal(r.fel, undefined, 'dolda elevfält prövas inte för fritidshem');
});

test('ram: ogiltiga värden', () => {
  assert.match(R({ egnaBarn: 3000000 }).fel, /fler än/);
  assert.ok(R({ medel: 0 }).fel);
  assert.ok(R({ medel: 1.5 }).fel);
  assert.ok(R({ allaBarn: 0 }).fel);
  assert.ok(R({ egnaBarn: 10.5 }).fel);
  assert.ok(R({ allaBarn: NaN }).fel);
  assert.ok(R({ huvudman: 'fritidshem', medel: -1 }).fel);
});
