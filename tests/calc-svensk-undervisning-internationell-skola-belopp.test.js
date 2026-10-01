'use strict';
/* Räkneexempel som går att kontrollera mot Skolverkets sida för 2027 (medelvärdet av antalet elever den 15 oktober
 * de tre närmast föregående åren; 18 310 kr per elev för 2025) och Skolverkets beslutsbilaga för 2026, där
 * 7 elever ger 133 140 kr och 65 elever 1 236 300 kr – alltså 19 020 kr per elev. */
const test = require('node:test');
const assert = require('node:assert/strict');
const calc = require('../js/calc/svensk-undervisning-internationell-skola-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const B = (v) => calc.berakna(Object.assign({ ar: '2026', elever1: 7, elever2: 7, elever3: 7 }, v));

test('internationell skola: beloppen per elev', () => {
  assert.equal(calc.id, 'svensk-undervisning-internationell-skola-belopp');
  assert.equal(calc.BELOPP['2026'], 19020);
  assert.equal(calc.BELOPP['2025'], 18310);
  assert.equal(133140 / 7, 19020);
  assert.equal(1236300 / 65, 19020);
});

test('internationell skola: 7 elever alla tre åren = 133 140 kr för 2026', () => {
  const r = B({});
  assert.equal(r.resultat, 133140);
  assert.equal(sp(r.formel), '19 020 kr × (7 + 7 + 7) ÷ 3 = 133 140 kr');
  assert.deepEqual(r.varningar, []);
});

test('internationell skola: medelvärde som inte är ett heltal ger en varning', () => {
  const r = B({ elever1: 60, elever2: 64, elever3: 70 });
  assert.equal(r.resultat, Math.round((194 / 3) * 19020));
  assert.equal(r.resultat, 1229960);
  assert.equal(sp(r.rader[3].varde), '64,67');
  assert.equal(r.varningar.length, 1);
});

test('internationell skola: 2025 års belopp', () => {
  assert.equal(B({ ar: '2025', elever1: 3, elever2: 4, elever3: 5 }).resultat, 4 * 18310);
});

test('internationell skola: ogiltiga värden ger ett lugnt felmeddelande', () => {
  const ogiltiga = [{ elever1: -1 }, { elever2: 1.5 }, { elever3: NaN }, { elever1: 20000 }, { elever1: '7' }, { ar: '2027' },
    { elever1: 0, elever2: 0, elever3: 0 }];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
