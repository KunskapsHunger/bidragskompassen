'use strict';
/* Hela bidraget ska betalas vidare till arbetsgivaren (SKOLFS 2017:95 5 §). Det som inte betalats ut
 * ska betalas tillbaka (8 § förordning (2011:947), Skolverkets redovisning per del). */
const test = require('node:test');
const assert = require('node:assert/strict');
const red = require('../js/calc/gymnasial-larlingsutbildning-redovisning.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const R = (v) => red.berakna(Object.assign({
  beviljatArb: 117200, utbetaltArb: 105480, beviljatHand: 12508, utbetaltHand: 12508,
  beviljatAnst: 0, utbetaltAnst: 0, inomTreManader: true
}, v));

test('redovisning: en arbetsgivare har inte fått sin del → 11 720 kr tillbaka', () => {
  const r = R({});
  assert.equal(r.resultat, 11720);
  assert.equal(sp(r.formel), '(117 200 − 105 480) + (12 508 − 12 508) = 11 720 kr');
  assert.deepEqual(r.delar.map((d) => d.varde), [11720, 0, 0]);
  assert.equal(sp(r.extra[0].varde), '117 988 kr');
  assert.deepEqual(r.varningar, []);
});

test('redovisning: allt betalt vidare → 0 kr', () => {
  const r = R({ utbetaltArb: 117200 });
  assert.equal(r.resultat, 0);
  assert.equal(r.sammanfattning, 'Allt beviljat bidrag är betalt vidare');
  assert.match(sp(r.extra[0].text), /^100 %/);
});

test('redovisning: varje del räknas för sig – överskott kvittas inte', () => {
  const r = R({ utbetaltArb: 120000, utbetaltHand: 10000 });
  assert.equal(r.resultat, 2508);
  assert.equal(r.varningar.length, 1);
});

test('redovisning: sen utbetalning ger en varning men ändrar inte beloppet', () => {
  const r = R({ utbetaltArb: 117200, inomTreManader: false });
  assert.equal(r.resultat, 0);
  assert.equal(r.varningar.length, 1);
  assert.match(r.varningar[0], /tre månader/);
});

test('redovisning: alla tre delarna', () => {
  const r = R({ beviljatAnst: 1577, utbetaltAnst: 0 });
  assert.equal(r.resultat, 11720 + 1577);
  assert.equal(sp(r.formel), '(117 200 − 105 480) + (12 508 − 12 508) + (1 577 − 0) = 13 297 kr');
});

test('redovisning: ogiltiga värden ger ett felmeddelande', () => {
  for (const v of [{ beviljatArb: -1 }, { utbetaltHand: NaN }, { utbetaltAnst: undefined }, { beviljatArb: 1e11 }]) {
    const r = R(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
  const tom = R({ beviljatArb: 0, utbetaltArb: 0, beviljatHand: 0, utbetaltHand: 0 });
  assert.equal(tom.resultat, 0);
  assert.equal(tom.extra[0].text, 'Inget beviljat bidrag har angetts.');
});
