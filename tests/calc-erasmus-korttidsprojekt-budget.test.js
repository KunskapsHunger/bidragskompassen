'use strict';
/* Räkneexempel som går att kontrollera mot Erasmus+ programguide 2026 (skola, "What are the funding rules?")
 * och UHR:s Bilaga 3 – tillämpliga bidragssatser KA122 skola 2026:
 * resor 309 euro (500–1 999 km) och 417 euro grönt, dagbelopp personal 172/152/133 och elever 85/74/64 euro,
 * organisatoriskt stöd 100/350/500 euro, kursavgift 80 euro/dag, 70 % från dag 15. */
const test = require('node:test');
const assert = require('node:assert/strict');
const calc = require('../js/calc/erasmus-korttidsprojekt-budget.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const BAS = { typ: 'jobbskuggning', antal: 4, medfoljande: 0, dagar: 5, resdagar: 2, avstand: 'b500', gron: false, landgrupp: 'g1', begransade: 0, sprakstod: false };
const B = (v) => calc.berakna(Object.assign({}, BAS, v));

test('erasmus-korttids: satserna följer UHR:s bilaga 3 för 2026', () => {
  assert.equal(calc.id, 'erasmus-korttidsprojekt-budget');
  assert.deepEqual(calc.DAGBELOPP.g1, { personal: 172, elev: 85 });
  assert.deepEqual(calc.DAGBELOPP.g2, { personal: 152, elev: 74 });
  assert.deepEqual(calc.DAGBELOPP.g3, { personal: 133, elev: 64 });
  assert.deepEqual([calc.RESOR.b500.vanlig, calc.RESOR.b500.gron], [309, 417]);
  assert.equal(calc.RESOR.b4000.vanlig, 1188);
  assert.equal(calc.KURSAVGIFT, 80);
});

test('erasmus-korttids: 70 % från dag 15, avrundat till hel euro', () => {
  assert.equal(calc.individuelltStod(172, 14).summa, 14 * 172);
  assert.equal(calc.individuelltStod(85, 20).summa, 14 * 85 + 6 * 60); // 59,5 avrundas till 60
  assert.equal(calc.individuelltStod(172, 16).summa, 14 * 172 + 2 * 120); // 120,4 → 120
});

test('erasmus-korttids: jobbskuggning, fyra lärare i fem dagar i grupp 1 = 7 452 euro', () => {
  const r = B({});
  assert.equal(r.resultat, 4 * 309 + 4 * 7 * 172 + 4 * 350);
  assert.equal(r.resultat, 7452);
  assert.equal(r.enhet, 'euro');
  assert.equal(sp(r.formel), '1 236 euro + 4 816 euro + 1 400 euro = 7 452 euro');
  assert.deepEqual(r.varningar, []);
});

test('erasmus-korttids: gruppmobilitet med två medföljande lärare och grönt resande', () => {
  const r = B({ typ: 'grupp', antal: 12, medfoljande: 2, dagar: 6, resdagar: 2, gron: true, landgrupp: 'g2' });
  // elever 12 × 8 × 74, medföljande 2 × 8 × 152, resor 14 × 417, organisatoriskt stöd 12 × 100
  assert.equal(r.resultat, 7104 + 2432 + 5838 + 1200);
  assert.equal(r.resultat, 16574);
});

test('erasmus-korttids: kurs i fem dagar ger kursavgift och en varning om kursgränsen', () => {
  const r = B({ typ: 'kurs', antal: 2, dagar: 5, landgrupp: 'g3' });
  assert.equal(r.resultat, 2 * 7 * 133 + 2 * 309 + 2 * 100 + 2 * 5 * 80);
  assert.equal(r.resultat, 3480);
  assert.ok(r.varningar.some((t) => t.includes('20 000 euro')));
});

test('erasmus-korttids: långvarig elevmobilitet med språkstöd och förstärkt språkstöd', () => {
  const r = B({ typ: 'langelev', antal: 1, dagar: 60, resdagar: 2, avstand: 'b2000', landgrupp: 'g2', sprakstod: true });
  // 62 dagar: 14 × 74 + 48 × 52 = 3 532; resa 395; organisatoriskt stöd 500; språkstöd 150 + 150
  assert.equal(r.resultat, 3532 + 395 + 500 + 300);
  assert.equal(r.resultat, 4727);
});

test('erasmus-korttids: inkluderingsstöd 125 euro per deltagare med begränsade möjligheter', () => {
  const r = B({ begransade: 2 });
  assert.equal(r.resultat, 7452 + 250);
});

test('erasmus-korttids: ogiltiga värden ger ett lugnt felmeddelande', () => {
  const ogiltiga = [
    { typ: 'okand' }, { antal: 31 }, { antal: 0 }, { dagar: 1 }, { typ: 'kurs', dagar: 11 },
    { typ: 'kortelev', dagar: 9 }, { resdagar: 3 }, { begransade: 5 }, { typ: 'grupp', antal: 1 },
    { avstand: 'x' }, { landgrupp: 'g4' }, { gron: 'ja' }, { dagar: 2.5 }
  ];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
  assert.equal(B({ resdagar: 6, gron: true }).fel, undefined);
});
