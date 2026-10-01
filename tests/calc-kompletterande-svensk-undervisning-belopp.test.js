'use strict';
/* Räkneexempel som går att kontrollera mot SKOLFS 2025:456 (4 510 kr per elev för 2026), SKOLFS 2024:667 (4 280 kr för 2025),
 * 33 § förordning (1994:519) – minst fem elever för en huvudman för enbart kompletterande svenska – och 40 §
 * (hälften i juni, hälften i december). Skolverkets beslutsbilaga för 2026: 72 160 kr = 16 elever × 4 510 kr. */
const test = require('node:test');
const assert = require('node:assert/strict');
const calc = require('../js/calc/kompletterande-svensk-undervisning-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const B = (v) => calc.berakna(Object.assign({ huvudman: 'forening', ar: '2026', elever: 12 }, v));

test('kompletterande svenska: beloppen följer SKOLFS', () => {
  assert.equal(calc.id, 'kompletterande-svensk-undervisning-belopp');
  assert.equal(calc.BELOPP['2026'], 4510);
  assert.equal(calc.BELOPP['2025'], 4280);
  assert.equal(calc.MIN_FORENING, 5);
});

test('kompletterande svenska: 12 elever 2026 = 54 120 kr, hälften i juni och december', () => {
  const r = B({});
  assert.equal(r.resultat, 54120);
  assert.equal(sp(r.formel), '4 510 × 12 = 54 120 kr');
  assert.equal(sp(r.rader[2].varde), '27 060 kr');
  assert.equal(sp(r.rader[3].varde), '27 060 kr');
  assert.deepEqual(r.varningar, []);
});

test('kompletterande svenska: 16 elever 2026 = 72 160 kr (som i Skolverkets beslut)', () => {
  assert.equal(B({ elever: 16 }).resultat, 72160);
});

test('kompletterande svenska: 2025 års belopp', () => {
  const r = B({ ar: '2025', elever: 10 });
  assert.equal(r.resultat, 42800);
});

test('kompletterande svenska: en förening med färre än fem elever får inget bidrag', () => {
  const r = B({ elever: 4 });
  assert.equal(r.resultat, 0);
  assert.equal(r.blockerad, true);
  assert.match(r.forklaring, /minst fem elever/);
});

test('kompletterande svenska: exakt fem elever ger bidrag men en varning', () => {
  const r = B({ elever: 5 });
  assert.equal(r.resultat, 22550);
  assert.equal(r.varningar.length, 1);
});

test('kompletterande svenska: en utlandsskola får bidrag redan för en elev', () => {
  const r = B({ huvudman: 'utlandsskola', elever: 1 });
  assert.equal(r.resultat, 4510);
  assert.equal(sp(r.sammanfattning), '1 elev den 15 oktober · 4 510 kr per elev (2026)');
  assert.equal(r.extra[0].varde, 'Skolans verksamhet');
  assert.equal(B({ huvudman: 'utlandsskola', elever: 0 }).blockerad, true);
});

test('kompletterande svenska: ogiltiga värden ger ett lugnt felmeddelande', () => {
  for (const v of [{ elever: -1 }, { elever: 2.5 }, { elever: NaN }, { elever: '10' }, { huvudman: 'kommun' }, { ar: '2027' }]) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
