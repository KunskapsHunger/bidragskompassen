'use strict';
/* Räkneexempel som går att kontrollera mot förordning (2023:179) och Skolverkets sida för skolsociala team 2026:
 * bidraget är hälften av kostnaden för skolpersonalen (6 §), och teamet ska ha minst 100 % skolpersonal och
 * minst 100 % personal från socialtjänsten (4 §, Skolverkets förklaring). Gymnasieskolan prioriteras sist (8 §). */
const test = require('node:test');
const assert = require('node:assert/strict');
const calc = require('../js/calc/skolsociala-team-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const B = (v) => calc.berakna(Object.assign({ skolform: 'grundskola', skolGrad: 100, kostnad: 55000, socGrad: 100, manader: 12 }, v));

test('skolsociala team: modulens id', () => {
  assert.equal(calc.id, 'skolsociala-team-belopp');
});

test('skolsociala team: en heltid skolpersonal i ett år = 55 000 × 12 / 2 = 330 000 kr', () => {
  const r = B({});
  assert.equal(r.resultat, 330000);
  assert.equal(sp(r.formel), '55 000 × 100 % × 12 mån × 0,5 = 330 000 kr');
  assert.ok(!r.blockerad);
  assert.deepEqual(r.varningar, []);
  assert.equal(r.extra[0].rubrik, 'Socialtjänstens del');
});

test('skolsociala team: deltid och del av året minskar bidraget i proportion (6 §)', () => {
  assert.equal(B({ manader: 6 }).resultat, 165000);
  assert.equal(B({ skolGrad: 250 }).resultat, 825000);
  assert.equal(B({ skolGrad: 150, kostnad: 50000, manader: 3 }).resultat, 112500);
});

test('skolsociala team: under en årsarbetskraft från skolan eller socialtjänsten ger 0 kr och blockerad', () => {
  const r = B({ socGrad: 50 });
  assert.equal(r.resultat, 0);
  assert.equal(r.blockerad, true);
  assert.match(r.forklaring, /socialtjänsten ska tillsammans ha minst 100 %/);
  assert.match(sp(r.formel), /= 0 kr$/);
  const r2 = B({ skolGrad: 95 });
  assert.equal(r2.resultat, 0);
  assert.match(r2.forklaring, /Skolpersonalen/);
  assert.ok(B({ skolGrad: 100, socGrad: 100 }).resultat > 0, 'exakt 100 % räcker');
});

test('skolsociala team: varning för gymnasieskolan (8 § 4) men inte för team som arbetar mot båda', () => {
  assert.ok(B({ skolform: 'gymnasieskola' }).varningar.some((w) => w.includes('prioriteras team i gymnasieskolan sist')));
  assert.deepEqual(B({ skolform: 'bada' }).varningar, []);
});

test('skolsociala team: varning om sex månader när perioden är kort', () => {
  assert.ok(B({ manader: 4 }).varningar.some((w) => w.includes('sex månader')));
});

test('skolsociala team: ogiltiga värden ger ett lugnt felmeddelande', () => {
  for (const v of [{ skolform: 'forskola' }, { skolGrad: -1 }, { socGrad: NaN }, { kostnad: 300001 }, { manader: 0 }, { manader: 1.5 }]) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
