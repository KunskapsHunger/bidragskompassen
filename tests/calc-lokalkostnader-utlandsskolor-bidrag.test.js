'use strict';
/* Räkneexempel som går att kontrollera mot 28 § förordning (1994:519) – 50 procent av årskostnaden för lokalerna –
 * och 39 §: utbetalning med en fjärdedel i mars, juni, september och december, justering mot faktiska kostnader. */
const test = require('node:test');
const assert = require('node:assert/strict');
const calc = require('../js/calc/lokalkostnader-utlandsskolor-bidrag.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const B = (v) => calc.berakna(Object.assign(
  { hyra: 1000000, kapital: 0, drift: 200000, fastighet: 0, underhall: 40000, ovrigt: 0, redovisning: false, faktiska: 1240000 }, v));

test('lokalkostnader: andelen är 50 procent (28 §)', () => {
  assert.equal(calc.id, 'lokalkostnader-utlandsskolor-bidrag');
  assert.equal(calc.ANDEL, 0.5);
});

test('lokalkostnader: 1 240 000 kr i beräknade kostnader ger 620 000 kr, 155 000 kr per kvartal', () => {
  const r = B({});
  assert.equal(r.resultat, 620000);
  assert.equal(r.enhet, 'kr');
  assert.equal(sp(r.formel), '50 % × 1 240 000 kr = 620 000 kr');
  const kvartal = r.rader.find((x) => x.etikett.startsWith('Per utbetalning'));
  assert.equal(sp(kvartal.varde), '155 000 kr');
  assert.deepEqual(r.delar.map((d) => d.varde), [500000, 100000, 20000]);
  assert.deepEqual(r.extra, []);
  assert.deepEqual(r.varningar, []);
});

test('lokalkostnader: alla kostnadsposter räknas med', () => {
  const r = B({ hyra: 800000, kapital: 100000, drift: 150000, fastighet: 30000, underhall: 20000, ovrigt: 10000 });
  assert.equal(r.resultat, 555000);
  assert.equal(r.delar.length, 6);
});

test('lokalkostnader: lägre faktiska kostnader ger en justering nedåt', () => {
  const r = B({ redovisning: true, faktiska: 1100000 });
  assert.equal(r.resultat, 620000);
  assert.equal(r.extra[0].rubrik, 'Justering nedåt');
  assert.equal(sp(r.extra[0].varde), '−70 000 kr');
  assert.deepEqual(r.varningar, []);
});

test('lokalkostnader: högre faktiska kostnader ger en justering uppåt med en varning', () => {
  const r = B({ redovisning: true, faktiska: 1300000 });
  assert.equal(r.extra[0].rubrik, 'Justering uppåt');
  assert.equal(sp(r.extra[0].varde), '+30 000 kr');
  assert.equal(r.varningar.length, 1);
});

test('lokalkostnader: samma faktiska kostnader ger ingen justering', () => {
  const r = B({ redovisning: true, faktiska: 1240000 });
  assert.equal(r.extra[0].rubrik, 'Ingen justering');
  assert.equal(sp(r.extra[0].varde), '0 kr');
});

test('lokalkostnader: de faktiska kostnaderna prövas bara när redovisningen är vald', () => {
  assert.equal(B({ redovisning: false, faktiska: NaN }).resultat, 620000);
  assert.ok(B({ redovisning: true, faktiska: NaN }).fel);
});

test('lokalkostnader: ogiltiga värden ger ett lugnt felmeddelande', () => {
  const ogiltiga = [
    { hyra: -1 }, { hyra: 1.5 }, { drift: NaN }, { hyra: 2e9 }, { hyra: '100' },
    { hyra: 0, drift: 0, underhall: 0 }
  ];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
