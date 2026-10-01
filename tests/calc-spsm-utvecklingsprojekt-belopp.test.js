'use strict';
/* Räkneexempel som går att kontrollera mot SPSM:s information om bidraget till utvecklingsprojekt:
 * bidragsår 2027 – högst 778 000 kr per årsarbetare i genomsnitt, högst 1,2 årsarbetare, alltså högst 933 600 kr;
 * bidragsår 2026 – 672 000 kr per heltidsanställd, högst 806 400 kr. Bara faktiska lönekostnader. */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/spsm-utvecklingsprojekt-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const B = (v) => belopp.berakna(Object.assign({ ar: '2027', arsarbetare: 1.2, lonekostnad: 900000 }, v));

test('utvecklingsprojekt: taken följer SPSM (778 000 × 1,2 = 933 600 och 672 000 × 1,2 = 806 400)', () => {
  assert.equal(belopp.id, 'spsm-utvecklingsprojekt-belopp');
  assert.equal(belopp.TAK['2027'], 778000);
  assert.equal(belopp.TAK['2026'], 672000);
  assert.equal(belopp.MAX_ARSARBETARE, 1.2);
  assert.equal(B({ lonekostnad: 2000000 }).resultat, 933600);
  assert.equal(B({ ar: '2026', lonekostnad: 2000000 }).resultat, 806400);
});

test('utvecklingsprojekt: lönekostnad under taket ger hela lönekostnaden', () => {
  const r = B({});
  assert.equal(r.resultat, 900000);
  assert.equal(r.enhet, 'kr');
  assert.equal(sp(r.formel), 'Lägsta av 900 000 kr och 778 000 × 1,2 = 933 600 kr → 900 000 kr');
  assert.deepEqual(r.delar.map((d) => d.varde), [900000, 0]);
  assert.deepEqual(r.varningar, []);
  assert.equal(r.blockerad, false);
});

test('utvecklingsprojekt: hög lön på en heltid stannar vid taket 778 000 kr', () => {
  const r = B({ arsarbetare: 1, lonekostnad: 820000 });
  assert.equal(r.resultat, 778000);
  assert.deepEqual(r.delar.map((d) => d.varde), [778000, 42000]);
  assert.equal(r.varningar.length, 1);
  assert.match(r.forklaring, /Taket avgör/);
});

test('utvecklingsprojekt: deltid – 0,5 årsarbetare med 360 000 kr', () => {
  const r = B({ arsarbetare: 0.5, lonekostnad: 360000 });
  assert.equal(r.resultat, 360000);
  assert.equal(sp(r.rader[2].varde), '389 000 kr');
});

test('utvecklingsprojekt: fler än 1,2 årsarbetare räknas ned i proportion', () => {
  const r = B({ arsarbetare: 1.5, lonekostnad: 1125000 });
  // 1 125 000 × 1,2 / 1,5 = 900 000 kr, under taket 933 600 kr
  assert.equal(r.resultat, 900000);
  assert.equal(sp(r.rader[0].varde), '1,2');
  assert.deepEqual(r.delar.map((d) => d.varde), [900000, 225000]);
  assert.equal(r.varningar.length, 1);
});

test('utvecklingsprojekt: ingen lönekostnad ger 0 kr och blockerad', () => {
  const r = B({ lonekostnad: 0 });
  assert.equal(r.resultat, 0);
  assert.equal(r.blockerad, true);
});

test('utvecklingsprojekt: ogiltiga värden ger ett lugnt felmeddelande', () => {
  const ogiltiga = [
    { ar: '2025' }, { arsarbetare: 0 }, { arsarbetare: -1 }, { arsarbetare: NaN }, { arsarbetare: 25 },
    { lonekostnad: -5 }, { lonekostnad: '900000' }, { lonekostnad: 1e9 }
  ];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
