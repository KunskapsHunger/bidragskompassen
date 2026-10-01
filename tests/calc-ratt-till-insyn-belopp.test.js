'use strict';
/* Räkneexempel som går att kontrollera mot Skolverkets sida "Statsbidrag för införande av rätt till insyn 2026":
 * 88 miljoner kr fördelas med samma belopp till alla som beviljas. Listan över huvudmän som kan ansöka har 1 848 rader. */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/ratt-till-insyn-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const B = (v) => belopp.berakna(Object.assign({ antal: 1848 }, v));

test('insyn: konstanterna följer Skolverket', () => {
  assert.equal(belopp.id, 'ratt-till-insyn-belopp');
  assert.equal(belopp.MEDEL, 88000000);
  assert.equal(belopp.PA_LISTAN, 1848);
});

test('insyn: om alla på listan beviljas blir det 47 619 kr var', () => {
  const r = B({});
  assert.equal(r.resultat, 47619);
  assert.equal(sp(r.formel), '88 000 000 ÷ 1 848 = 47 619 kr');
  assert.equal(sp(r.sammanfattning), 'Om 1 848 huvudmän beviljas');
  assert.deepEqual(r.varningar, []);
  assert.ok(r.resultat * 1848 <= 88000000, 'summan överstiger aldrig medlen');
});

test('insyn: färre beviljade ger mer per huvudman', () => {
  assert.equal(B({ antal: 1000 }).resultat, 88000);
  assert.equal(B({ antal: 500 }).resultat, 176000);
  assert.equal(B({ antal: 1 }).sammanfattning, 'Om 1 huvudman beviljas');
  assert.equal(B({ antal: 3 }).resultat, 29333333, 'avrundas nedåt');
});

test('insyn: fler än listan ger en varning, ogiltiga värden ett fel', () => {
  assert.equal(B({ antal: 2000 }).varningar.length, 1);
  for (const v of [{ antal: 0 }, { antal: 1.5 }, { antal: NaN }, { antal: '100' }, { antal: 20000 }]) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
