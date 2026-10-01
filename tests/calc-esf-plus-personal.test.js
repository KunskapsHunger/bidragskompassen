'use strict';
/* Räkneexempel som går att kontrollera mot Svenska ESF-rådets "Enhetskostnader" (personal – funktion,
 * kronor per timme) och regeln att en heltid är 1 720 timmar per år. */
const test = require('node:test');
const assert = require('node:assert/strict');
const calc = require('../js/calc/esf-plus-personal.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const BAS = { funktion: 'medarbetare', region: 'riket', schablon: 's40', antal: 2, grad: 50, manader: 24, medfinansiering: 46 };
const B = (v) => calc.berakna(Object.assign({}, BAS, v));

test('esf: enhetskostnaderna följer ESF-rådets tabell', () => {
  assert.equal(calc.id, 'esf-plus-personal');
  assert.equal(calc.TIMMAR_PER_AR, 1720);
  assert.deepEqual(calc.ENHETSKOSTNAD.riket.pl, { s15: 680.80, s40: 828.80 });
  assert.deepEqual(calc.ENHETSKOSTNAD.stockholm.medarbetare, { s15: 589.95, s40: 718.20 });
});

test('esf: två projektmedarbetare på halvtid i 24 månader = 2 321 312 kr', () => {
  const r = B({});
  // 1 720 × 2 år × 0,5 × 2 personer = 3 440 timmar × 674,80 kr
  assert.equal(r.resultat, 2321312);
  assert.equal(r.enhet, 'kr');
  assert.equal(sp(r.formel), '3 440 timmar × 674,80 kr = 2 321 312 kr');
  assert.equal(sp(r.rader[1].varde), '1 067 804 kr'); // 46 % medfinansiering, avrundat
  assert.equal(sp(r.rader[2].varde), '1 253 508 kr');
});

test('esf: projektledare på heltid i 36 månader med 15 % schablon', () => {
  const r = B({ funktion: 'pl', schablon: 's15', antal: 1, grad: 100, manader: 36, medfinansiering: 0 });
  assert.equal(r.resultat, Math.round(5160 * 680.80));
  assert.deepEqual(r.delar.map((d) => d.varde), [r.resultat, 0]);
});

test('esf: Stockholm har egna enhetskostnader', () => {
  const r = B({ region: 'stockholm', antal: 1, grad: 100, manader: 12 });
  assert.equal(r.resultat, Math.round(1720 * 718.20));
});

test('esf: projektledare i större projekt ger en varning under 20 miljoner kr', () => {
  const r = B({ funktion: 'plStor', antal: 1 });
  assert.ok(r.varningar.some((t) => t.includes('20 miljoner')));
});

test('esf: ogiltiga värden ger ett lugnt felmeddelande', () => {
  const ogiltiga = [
    { region: 'malmo' }, { funktion: 'chef' }, { schablon: 's20' }, { antal: 0 }, { grad: 0 },
    { grad: 101 }, { manader: 37 }, { medfinansiering: -5 }, { manader: 1.5 }
  ];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
