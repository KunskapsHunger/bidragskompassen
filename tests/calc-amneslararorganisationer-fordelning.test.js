'use strict';
/* Räkneexempel som går att kontrollera mot Skolverkets sidor för ämneslärarorganisationer 2026 och 2027
 * (65 % grundbidrag lika per organisation, 35 % efter bidragsgrundande medlemmar) och beslutet för 2026:
 * 700 000 kr till 13 organisationer → grundbidrag 0,65 × 700 000 ÷ 13 = 35 000 kr per organisation. */
const test = require('node:test');
const assert = require('node:assert/strict');
const calc = require('../js/calc/amneslararorganisationer-fordelning.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const B = (v) => calc.berakna(Object.assign({ ram: 700000, antalOrg: 13, egnaMedlemmar: 400, allaMedlemmar: 10000 }, v));

test('amneslarare: andelarna följer Skolverkets modell', () => {
  assert.equal(calc.id, 'amneslararorganisationer-fordelning');
  assert.equal(calc.GRUND_ANDEL, 0.65);
  assert.equal(calc.RORLIG_ANDEL, 0.35);
});

test('amneslarare: 2026 ger grundbidrag 35 000 kr per organisation', () => {
  const r = B({ egnaMedlemmar: 0 });
  assert.equal(r.resultat, 35000);
  assert.equal(sp(r.rader[0].varde), '35 000 kr');
  assert.equal(sp(r.rader[1].varde), '0 kr');
});

test('amneslarare: standardexemplet 400 av 10 000 medlemmar = 44 800 kr', () => {
  const r = B({});
  // 35 000 + 245 000 × 400 / 10 000 = 35 000 + 9 800
  assert.equal(r.resultat, 44800);
  assert.equal(r.enhet, 'kr');
  assert.equal(sp(r.formel), '0,65 × 700 000 ÷ 13 + 0,35 × 700 000 × 400 ÷ 10 000 = 44 800 kr');
  assert.equal(sp(r.rader[2].varde), '24,5 kr');
  assert.deepEqual(r.delar.map((d) => d.varde), [35000, 9800]);
  assert.deepEqual(r.varningar, []);
});

test('amneslarare: alla organisationers bidrag summerar till ramen', () => {
  const medlemmar = [1200, 300, 500, 800, 150, 2500, 400, 600, 900, 350, 1000, 700, 600];
  const alla = medlemmar.reduce((a, b) => a + b, 0);
  const summa = medlemmar.reduce((s, m) => s + calc.berakna({ ram: 700000, antalOrg: 13, egnaMedlemmar: m, allaMedlemmar: alla }).resultat, 0);
  assert.ok(Math.abs(summa - 700000) <= 13, 'avrundning per organisation högst 1 kr');
});

test('amneslarare: en enda organisation med alla medlemmar får hela ramen', () => {
  const r = B({ antalOrg: 1, egnaMedlemmar: 10000 });
  assert.equal(r.resultat, 700000);
});

test('amneslarare: varning när en ensam organisation inte har alla medlemmar', () => {
  const r = B({ antalOrg: 1 });
  assert.equal(r.varningar.length, 1);
});

test('amneslarare: ogiltiga värden ger fel', () => {
  assert.ok(B({ ram: 0 }).fel);
  assert.ok(B({ antalOrg: 0 }).fel);
  assert.ok(B({ antalOrg: 1.5 }).fel);
  assert.ok(B({ allaMedlemmar: 0 }).fel);
  assert.ok(B({ egnaMedlemmar: -1 }).fel);
  assert.ok(B({ egnaMedlemmar: 20000 }).fel);
  assert.ok(B({ ram: NaN }).fel);
});
