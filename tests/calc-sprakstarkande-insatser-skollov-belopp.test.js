'use strict';
/* Räkneexempel som går att kontrollera mot förordning (2025:49): högst 1 500 kr per elev och vecka (14 §),
 * högst sex veckor på sommaren (6 §), prioritering av förskoleklass och åk 1–3 (16 §). Elevveckor = elever × veckor
 * enligt Skolverkets sida för 2026. */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/sprakstarkande-insatser-skollov-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const B = (v) => belopp.berakna(Object.assign({ elever: 20, veckor: 1, lov: 'lasar', stadium: 'f3' }, v));

test('sprakstarkande: konstanterna följer förordningen', () => {
  assert.equal(belopp.id, 'sprakstarkande-insatser-skollov-belopp');
  assert.equal(belopp.PER_ELEVVECKA, 1500);
  assert.equal(belopp.MAX_SOMMARVECKOR, 6);
});

test('sprakstarkande: 20 elever i en vecka = 30 000 kr', () => {
  const r = B({});
  assert.equal(r.resultat, 30000);
  assert.equal(r.enhet, 'kr');
  assert.equal(sp(r.formel), '20 × 1 × 1 500 = 30 000 kr');
  assert.equal(sp(r.forklaring), '20 elever × 1 vecka = 20 elevveckor.');
  assert.equal(sp(r.sammanfattning), '20 elever · 1 vecka · lov under läsåret');
  assert.deepEqual(r.varningar, []);
});

test('sprakstarkande: Skolverkets exempel – en elev i två veckor blir två elevveckor', () => {
  const r = B({ elever: 1, veckor: 2 });
  assert.equal(r.resultat, 3000);
  assert.equal(sp(r.rader[0].varde), '2');
  assert.equal(sp(r.forklaring), '1 elev × 2 veckor = 2 elevveckor.');
});

test('sprakstarkande: sommarlovet, 30 elever i tre veckor = 135 000 kr', () => {
  const r = B({ elever: 30, veckor: 3, lov: 'sommar' });
  assert.equal(r.resultat, 30 * 3 * 1500);
  assert.equal(sp(r.formel), '30 × 3 × 1 500 = 135 000 kr');
  assert.equal(sp(r.rader[2].varde), '4 500 kr');
  assert.deepEqual(r.varningar, []);
});

test('sprakstarkande: på sommaren räknas högst sex veckor', () => {
  const r = B({ elever: 10, veckor: 8, lov: 'sommar', stadium: 'a46' });
  assert.equal(r.resultat, 10 * 6 * 1500);
  assert.equal(sp(r.formel), '10 × 6 × 1 500 = 90 000 kr');
  assert.equal(r.varningar.length, 2);
  assert.match(r.varningar[0], /sex veckor/);
  assert.match(r.varningar[1], /årskurs 1–3/);
});

test('sprakstarkande: under läsåret räknas alla veckor men långa lov ger en varning', () => {
  const r = B({ elever: 5, veckor: 3 });
  assert.equal(r.resultat, 22500);
  assert.equal(r.varningar.length, 1);
});

test('sprakstarkande: ogiltiga värden ger ett lugnt felmeddelande i stället för ett belopp', () => {
  const ogiltiga = [
    { elever: 0 }, { elever: 1.5 }, { elever: NaN }, { elever: '10' }, { elever: 200000 },
    { veckor: 0 }, { veckor: 13 }, { veckor: 2.5 }, { lov: 'helg' }, { stadium: 'a79' }
  ];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
