'use strict';
/* Påhittade exempel på Skolverkets förklaring om avskrivning (sidan för stärkt kunskapsutveckling 2027):
 * över ett halvt prisbasbelopp (29 400 kr för 2025) och livslängd över tre år → bara årets avskrivning räknas. */
const test = require('node:test');
const assert = require('node:assert/strict');
const avs = require('../js/calc/starkt-kunskapsutveckling-avskrivning.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const A = (v) => avs.berakna(Object.assign({ kostnad: 60000, livslangd: 5, grans: 29400, manader: 12 }, v));

test('avskrivning: 60 000 kr på fem år, hela året → 12 000 kr', () => {
  const r = A({});
  assert.equal(r.resultat, 12000);
  assert.equal(sp(r.formel), '60 000 ÷ 5 år × 12/12 = 12 000 kr');
  assert.deepEqual(r.rader.map((x) => sp(x.varde)), ['12 000 kr', '48 000 kr']);
  assert.equal(r.varningar.length, 1);
});

test('avskrivning: del av året', () => {
  assert.equal(A({ manader: 5 }).resultat, 5000);
  assert.equal(A({ manader: 0 }).resultat, 0);
  assert.equal(A({ kostnad: 100000, livslangd: 4, manader: 6 }).resultat, 12500);
});

test('avskrivning: båda gränserna måste överskridas', () => {
  const billig = A({ kostnad: 20000 });
  assert.equal(billig.resultat, 20000);
  assert.match(billig.forklaring, /inte mer än gränsbeloppet/);
  assert.equal(A({ kostnad: 29400 }).resultat, 29400, 'exakt ett halvt prisbasbelopp är inte "mer än"');
  const kort = A({ livslangd: 3 });
  assert.equal(kort.resultat, 60000, 'tre år är inte "mer än tre år"');
  assert.match(kort.forklaring, /tre år/);
  assert.equal(A({ grans: 30000, kostnad: 29400 }).resultat, 29400, 'eget gränsbelopp används');
});

test('avskrivning: ogiltiga värden', () => {
  assert.ok(A({ kostnad: 0 }).fel);
  assert.ok(A({ livslangd: 2.5 }).fel);
  assert.ok(A({ manader: 13 }).fel);
  assert.ok(A({ grans: NaN }).fel);
});
