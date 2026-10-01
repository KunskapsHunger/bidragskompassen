'use strict';
/* Räkneexempel från förordning (2016:937) 20 § – äldre lydelse (SFS 2024:665, tre sjundedelar) och
 * lydelse SFS 2026:1271 (30 procent från bidragsåret 2028) – samt Skolverkets exempel med 700 platser. */
const test = require('node:test');
const assert = require('node:assert/strict');
const medf = require('../js/calc/regionalt-yrkesvux-medfinansiering.js');

const sp = (s) => String(s).replace(/\s/g, ' ');

test('medfinansiering 2026–2027: 700 platser med bidrag kräver 300 egna (Skolverkets exempel)', () => {
  const r = medf.berakna({ regel: 'fore2028', platser: 700 });
  assert.ok(Math.abs(r.resultat - 300) < 1e-9);
  assert.equal(sp(r.formel), '700 × 3/7 = 300 årsstudieplatser');
  assert.equal(sp(r.rader[2].varde), '1 000');
  assert.equal(r.varningar.length, 1, 'påminnelse om undantagen före 2028');
});

test('medfinansiering från 2028: 30 procent av 700 grundbidragsplatser = 210', () => {
  const r = medf.berakna({ regel: 'fran2028', platser: 700 });
  assert.ok(Math.abs(r.resultat - 210) < 1e-9);
  assert.equal(sp(r.formel), '700 × 30 % = 210 årsstudieplatser');
  assert.equal(sp(r.rader[3].varde), '168 000', '210 × 800 verksamhetspoäng');
  assert.match(r.varningar[0], /300/, 'Skolverkets avvikande exempel nämns');
});

test('medfinansiering: avrundar inte och tål decimaler', () => {
  const r = medf.berakna({ regel: 'fore2028', platser: 100 });
  assert.equal(r.resultat, 300 / 7);
  assert.equal(sp(r.rader[1].varde), '42,86');
  assert.equal(medf.berakna({ regel: 'fran2028', platser: 12.5 }).resultat, 3.75);
  assert.equal(medf.berakna({ regel: 'fran2028', platser: 0 }).resultat, 0);
});

test('medfinansiering: ogiltiga värden ger fel, okänd regel tolkas som 2028', () => {
  for (const p of [-1, NaN, Infinity, 1000001, '700']) {
    const r = medf.berakna({ regel: 'fran2028', platser: p });
    assert.ok(r.fel && r.resultat === undefined, String(p));
  }
  assert.ok(Math.abs(medf.berakna({ regel: 'x', platser: 10 }).resultat - 3) < 1e-9);
});
