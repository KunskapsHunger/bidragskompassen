'use strict';
/* Räkneexempel som går att kontrollera mot 6–7 §§ förordning (2021:316), Skolverkets sida för 2026/27
 * (487,5 miljoner kr: 285 miljoner hösten 2026 och 202,5 miljoner våren 2027) och beslutsbilagan med
 * bidragsramar 2026/27 (dnr 2026:1626, 2026-05-20). */
const test = require('node:test');
const assert = require('node:assert/strict');
const ram = require('../js/calc/battre-arbetsmiljo-larare-ram.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const R = (v) => ram.berakna(Object.assign({ egnaElever: 400, allaElever: 60000, forraLasaret: true }, v));

test('arbetsmiljö: medlen för 2026/27 följer Skolverket', () => {
  assert.equal(ram.id, 'battre-arbetsmiljo-larare-ram');
  assert.equal(ram.MEDEL, 487500000);
  assert.equal(ram.HOST + ram.VAREN, ram.MEDEL);
});

test('arbetsmiljö: terminsfördelningen stämmer med beslutsbilagan', () => {
  assert.deepEqual(ram.terminer(1283820), { host: 750541, varen: 533279 }, 'Apolloniosskolan AB');
  assert.deepEqual(ram.terminer(30123258), { host: 17610520, varen: 12512738 }, 'Botkyrka kommun');
  assert.deepEqual(ram.terminer(68887184), { host: 40272508, varen: 28614676 }, 'Göteborgs kommun');
});

test('arbetsmiljö: ramen är huvudmannens andel av eleverna gånger medlen', () => {
  const r = R({});
  assert.equal(r.resultat, 3250000, '487 500 000 × 400 ÷ 60 000');
  assert.equal(sp(r.formel), '487 500 000 × 400 ÷ 60 000 = 3 250 000 kr');
  assert.deepEqual(r.delar.map((d) => d.varde), [1900000, 1350000]);
  assert.equal(sp(r.rader[0].varde), '0,6667 %');
  assert.equal(sp(r.extra[0].varde), '8 125 kr');
});

test('arbetsmiljö: genomsnittliga elevantal får ha decimaler', () => {
  const r = R({ egnaElever: 412.33, allaElever: 61234.67 });
  assert.equal(r.resultat, r.delar[0].varde + r.delar[1].varde);
  assert.ok(Math.abs(r.resultat - 487500000 * 412.33 / 61234.67) <= 1);
});

test('arbetsmiljö: ingen ram utan elever läsåret före (7 §)', () => {
  const r = R({ forraLasaret: false });
  assert.equal(r.resultat, 0);
  assert.ok(r.blockerad);
  assert.match(r.forklaring, /7 §/);
});

test('arbetsmiljö: ogiltiga värden', () => {
  assert.match(R({ egnaElever: 70000 }).fel, /fler än/);
  for (const v of [{ egnaElever: 0 }, { allaElever: NaN }, { egnaElever: '400' }, { allaElever: 2e7 }]) {
    assert.ok(R(v).fel, JSON.stringify(v));
  }
});
