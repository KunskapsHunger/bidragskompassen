'use strict';
/* Räkneexempel som går att kontrollera mot 8 § förordning (2014:144) – högst 1 000 kr per elev som erbjuds läxhjälp –
 * och Skolverkets sida för 2026: extra 1 500 kr, totalt 2 500 kr per elev, vid samarbete eller särskilda skäl. */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/laxhjalp-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const B = (v) => belopp.berakna(Object.assign({ lagElever: 60, lagExtra: 0, gyElever: 0, gyExtra: 0 }, v));

test('laxhjalp: beloppen följer källorna (1 000 kr + 1 500 kr extra = 2 500 kr)', () => {
  assert.equal(belopp.id, 'laxhjalp-belopp');
  assert.equal(belopp.GRUNDBELOPP, 1000);
  assert.equal(belopp.EXTRABELOPP, 1500);
  assert.equal(belopp.GRUNDBELOPP + belopp.EXTRABELOPP, 2500);
});

test('laxhjalp: 60 elever i lågstadiet i egen regi = 60 000 kr', () => {
  const r = B({});
  assert.equal(r.resultat, 60000);
  assert.equal(r.enhet, 'kr');
  assert.equal(sp(r.formel), '1 000 × 60 + 1 500 × 0 = 60 000 kr');
  assert.equal(sp(r.sammanfattning), '60 elever erbjuds läxhjälp · 0 med extra belopp');
  assert.deepEqual(r.delar.map((d) => d.varde), [60000, 0]);
  assert.equal(sp(r.extra[0].varde), '1 000 kr');
  assert.equal(r.forklaring, '');
  assert.deepEqual(r.varningar, []);
});

test('laxhjalp: samarbete med förening, 80 elever varav 30 med extra belopp = 125 000 kr', () => {
  const r = B({ lagElever: 80, lagExtra: 30 });
  assert.equal(r.resultat, 80 * 1000 + 30 * 1500);
  assert.equal(r.resultat, 125000);
  assert.equal(sp(r.formel), '1 000 × 80 + 1 500 × 30 = 125 000 kr');
  assert.equal(sp(r.rader[0].varde), '80 000 kr');
  assert.equal(sp(r.rader[1].varde), '45 000 kr');
  assert.equal(r.varningar.length, 1);
});

test('laxhjalp: alla elever med extra belopp ger 2 500 kr per elev', () => {
  const r = B({ lagElever: 10, lagExtra: 10 });
  assert.equal(r.resultat, 25000);
  assert.equal(sp(r.extra[0].varde), '2 500 kr');
});

test('laxhjalp: båda skolformerna redovisas var för sig', () => {
  const r = B({ lagElever: 50, lagExtra: 0, gyElever: 200, gyExtra: 40 });
  assert.equal(r.resultat, 50000 + 200000 + 60000);
  assert.equal(sp(r.formel), '1 000 × 250 + 1 500 × 40 = 310 000 kr');
  assert.deepEqual(r.delar.map((d) => d.varde), [50000, 260000]);
  assert.equal(sp(r.forklaring), 'Lågstadiet: 1 000 × 50 + 1 500 × 0 = 50 000 kr. Gymnasieskolan: 1 000 × 200 + 1 500 × 40 = 260 000 kr.');
  assert.equal(sp(r.rader[2].varde), '50 000 kr');
  assert.equal(sp(r.rader[3].varde), '260 000 kr');
});

test('laxhjalp: bara gymnasieskolan, en elev', () => {
  const r = B({ lagElever: 0, gyElever: 1 });
  assert.equal(r.resultat, 1000);
  assert.equal(sp(r.sammanfattning), '1 elev erbjuds läxhjälp · 0 med extra belopp');
  assert.equal(r.forklaring, '');
});

test('laxhjalp: ogiltiga värden ger ett lugnt felmeddelande i stället för ett belopp', () => {
  const ogiltiga = [
    { lagElever: -1 }, { lagElever: 1.5 }, { lagElever: NaN }, { gyElever: 2000000 },
    { lagExtra: 61 }, { gyElever: 5, gyExtra: 6 }, { lagElever: 0, gyElever: 0 }, { lagElever: '10' }
  ];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
