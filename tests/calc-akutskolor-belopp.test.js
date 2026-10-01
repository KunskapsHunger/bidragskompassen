'use strict';
/* Räkneexempel som går att kontrollera mot förordning (2024:1340) och Skolverkets sida för akutskolor 2026:
 * bidraget är hälften av personalkostnaden (6 §), sociala avgifter räknas till 42 % (Skolverket), och
 * akutskolan ska ha minst 200 % tjänstgöringsgrad, varav minst 100 % lärare med legitimation (4 § 1). */
const test = require('node:test');
const assert = require('node:assert/strict');
const calc = require('../js/calc/akutskolor-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const B = (v) => calc.berakna(Object.assign({ larGrad: 100, larLon: 45000, psyGrad: 100, psyLon: 38000, manader: 12, tvaElever: true }, v));

test('akutskolor: modulens id och påslaget för sociala avgifter', () => {
  assert.equal(calc.id, 'akutskolor-belopp');
  assert.equal(calc.SOCIALA_AVGIFTER, 0.42);
});

test('akutskolor: en lärare och en behandlingspedagog i ett år = (45 000 + 38 000) × 1,42 × 12 / 2', () => {
  const r = B({});
  assert.equal(r.resultat, 707160);
  assert.equal(sp(r.formel), '(45 000 × 100 % + 38 000 × 100 %) × 1,42 × 12 mån × 0,5 = 707 160 kr');
  assert.deepEqual(r.delar.map((d) => d.varde), [383400, 323760]);
  assert.equal(sp(r.extra[0].varde), '707 160 kr', 'huvudmannen betalar den andra halvan');
  assert.ok(!r.blockerad);
});

test('akutskolor: två lärare på heltid i sex månader = 90 000 × 1,42 × 6 / 2 = 383 400 kr', () => {
  const r = B({ larGrad: 200, psyGrad: 0, manader: 6 });
  assert.equal(r.resultat, 383400);
  assert.ok(r.varningar.length === 0, 'inga varningar vid sex månader och bara lärare');
});

test('akutskolor: deltid minskar bidraget i samma proportion (6 § andra stycket)', () => {
  const hel = B({ larGrad: 100, psyGrad: 100 }).resultat;
  const tre = B({ larGrad: 150, psyGrad: 150 }).resultat;
  assert.equal(tre, Math.round(hel * 1.5));
});

test('akutskolor: för lite lärartid eller under två årsarbetskrafter ger 0 kr och blockerad', () => {
  const r = B({ larGrad: 50, psyGrad: 200 });
  assert.equal(r.resultat, 0);
  assert.equal(r.blockerad, true);
  assert.match(r.forklaring, /lärarlegitimation ska tillsammans ha minst 100 %/);
  const r2 = B({ larGrad: 100, psyGrad: 50 });
  assert.equal(r2.resultat, 0);
  assert.match(r2.forklaring, /minst 200 %/);
  assert.match(sp(r2.formel), /= 0 kr$/);
  const r3 = B({ tvaElever: false });
  assert.equal(r3.resultat, 0);
  assert.match(r3.forklaring, /två elever/);
});

test('akutskolor: exakt gränsen 100 % lärare och 200 % totalt räcker', () => {
  assert.ok(B({ larGrad: 100, psyGrad: 100 }).resultat > 0);
  assert.ok(B({ larGrad: 200, psyGrad: 0 }).resultat > 0);
});

test('akutskolor: varningar om sex månader och psykosocial utbildning', () => {
  assert.ok(B({ manader: 5 }).varningar.some((w) => w.includes('sex månader')));
  assert.ok(B({}).varningar.some((w) => w.includes('psykosocialt arbete')));
});

test('akutskolor: ogiltiga värden ger ett lugnt felmeddelande', () => {
  for (const v of [{ larGrad: -1 }, { psyGrad: NaN }, { larLon: 200001 }, { psyLon: -5 }, { manader: 0 }, { manader: 13 }, { manader: 2.5 }]) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
