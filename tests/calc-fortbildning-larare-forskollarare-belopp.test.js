'use strict';
/* Räkneexempel som går att kontrollera mot 11–13 §§ förordning (2023:144) och Skolverkets sida
 * "Statsbidrag för fortbildning av lärare och förskollärare 2026" (exempel 1–4, schablonlöner och delar av terminen). */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/fortbildning-larare-forskollarare-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const B = (v) => belopp.berakna(Object.assign({
  utbildning: 'lararlyftet', modell: 'lon', grad: 100, studietid: 100, hp: 15, terminsandel: 100, antal: 1
}, v));

test('fortbildning: konstanterna följer källorna', () => {
  assert.equal(belopp.id, 'fortbildning-larare-forskollarare-belopp');
  assert.equal(belopp.ANDEL_LON, 0.56);
  assert.equal(belopp.KR_PER_HP, 1000);
  assert.equal(belopp.KR_PER_HP_SVA, 1500);
  assert.deepEqual(belopp.SCHABLON, { lararlyftet: 346000, special: 346000, sva: 346000, forskoleklass: 318000, yrkeslarare: 364000 });
});

test('fortbildning: Skolverkets exempel 1–4 för löneersättning', () => {
  const e1 = B({});
  assert.equal(e1.resultat, 193760, 'exempel 1: 346 000 × 0,56');
  assert.equal(sp(e1.formel), '346 000 × 1 × 1 × 0,56 = 193 760 kr');
  assert.equal(e1.forklaring, '');
  assert.equal(B({ studietid: 50 }).resultat, 96880, 'exempel 2');
  assert.equal(B({ grad: 80, studietid: 50 }).resultat, 77504, 'exempel 3');
  assert.equal(B({ grad: 20, studietid: 100 }).resultat, 38752, 'exempel 4');
});

test('fortbildning: olika schablonlöner för förskoleklass och yrkeslärare', () => {
  assert.equal(B({ utbildning: 'forskoleklass', studietid: 25 }).resultat, 44520, '318 000 × 0,25 × 0,56');
  assert.equal(B({ utbildning: 'forskoleklass', studietid: 25 }).varningar.length, 1);
  assert.equal(B({ utbildning: 'forskoleklass', studietid: 50 }).varningar.length, 2);
  assert.equal(B({ utbildning: 'yrkeslarare' }).resultat, 203840, '364 000 × 0,56');
  assert.equal(B({ utbildning: 'special', antal: 3, studietid: 50 }).resultat, 3 * 96880);
});

test('fortbildning: högskolepoäng – 1 000 kr, eller 1 500 kr för svenska som andraspråk', () => {
  const r = B({ modell: 'hp', hp: 15 });
  assert.equal(r.resultat, 15000);
  assert.equal(sp(r.formel), '1 000 × 15 = 15 000 kr');
  assert.deepEqual(r.varningar, []);
  assert.equal(B({ modell: 'hp', utbildning: 'sva', hp: 7.5 }).resultat, 11250);
  assert.equal(B({ modell: 'hp', utbildning: 'forskoleklass', hp: 15 }).varningar.length, 1);
  assert.equal(B({ modell: 'hp', hp: 45 }).varningar.length, 1);
});

test('fortbildning: del av terminen enligt Skolverkets exempel (15 av 20 veckor)', () => {
  const hp = B({ modell: 'hp', hp: 30, terminsandel: 75 });
  assert.equal(hp.resultat, 22500, '75 % av 30 hp = 22,5 hp');
  assert.equal(sp(hp.rader[1].varde), '22,5');
  const lon = B({ studietid: 20, terminsandel: 75 });
  assert.equal(lon.resultat, Math.round(346000 * 0.15 * 0.56), '0,75 × 20 % = 15 %');
  assert.equal(lon.resultat, 29064);
});

test('fortbildning: avrundning till hela kronor förklaras', () => {
  const r = B({ grad: 33, studietid: 33 });
  assert.equal(r.resultat, Math.round(346000 * 0.33 * 0.33 * 0.56));
  assert.match(r.forklaring, /avrundat/);
});

test('fortbildning: ogiltiga värden ger ett lugnt felmeddelande', () => {
  const ogiltiga = [
    { utbildning: 'annat' }, { modell: 'x' }, { antal: 0 }, { antal: 1.5 }, { grad: 0 }, { studietid: 101 },
    { terminsandel: 0 }, { modell: 'hp', hp: 0 }, { modell: 'hp', hp: NaN }, { grad: '100' }
  ];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
