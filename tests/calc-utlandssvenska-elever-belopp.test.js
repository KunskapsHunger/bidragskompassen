'use strict';
/* Räkneexempel som går att kontrollera mot förordning (2015:736) 7–9 §§, regleringsbrevet för Statens skolverk
 * 2026 (42 400 kr per termin och elev i grundskolan), riksprislistan 2026 (SKOLFS 2026:7, inklusive måltider)
 * och Skolverkets beslut för våren 2026 (t.ex. 42 400, 51 300 och 55 650 kr). */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const calc = require('../js/calc/utlandssvenska-elever-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const B = (v) => calc.berakna(Object.assign({ grundElever: 2, gyElever: 3, program: 'sa', egetBelopp: 150000 }, v));

test('utlandssvenska: beloppen följer källorna', () => {
  assert.equal(calc.id, 'utlandssvenska-elever-belopp');
  assert.equal(calc.GRUNDSKOLA_PER_TERMIN, 42400);
  assert.equal(calc.PROGRAM.sa.belopp, 102600);
  assert.equal(calc.PROGRAM.ib.belopp, calc.PROGRAM.na.belopp);
  assert.equal(calc.PROGRAM.agy.belopp, 430800);
});

test('utlandssvenska: programlistan i guiden stämmer med modulen', () => {
  const ctx = vm.createContext({});
  ctx.window = ctx;
  vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'data', 'fordjupning', 'utlandssvenska-elever.js'), 'utf8'), ctx);
  const k = ctx.SB_FORDJUPNING['utlandssvenska-elever'].kalkylatorer[0];
  const alt = k.falt.find((f) => f.id === 'program').alternativ;
  const fmt = (n) => new Intl.NumberFormat('sv-SE').format(n).replace(/\s/g, ' ');
  for (const a of alt) {
    if (a.varde === 'annat') continue;
    const p = calc.PROGRAM[a.varde];
    assert.ok(p, a.varde);
    assert.equal(sp(a.etikett), p.namn + ' · ' + fmt(p.belopp) + ' kr');
  }
  assert.equal(alt.filter((a) => a.varde !== 'annat').length, Object.keys(calc.PROGRAM).length);
});

test('utlandssvenska: 2 elever i åk 7–9 och 3 på samhällsvetenskapsprogrammet = 238 700 kr', () => {
  const r = B({});
  assert.equal(r.resultat, 2 * 42400 + 3 * 51300);
  assert.equal(sp(r.formel), '42 400 × 2 + 102 600 ÷ 2 × 3 = 238 700 kr');
  assert.deepEqual(r.delar.map((d) => d.varde), [84800, 153900]);
  assert.equal(sp(r.extra[0].varde), '477 400 kr');
});

test('utlandssvenska: en elev i årskurs 8 = 42 400 kr', () => {
  const r = B({ grundElever: 1, gyElever: 0 });
  assert.equal(r.resultat, 42400);
  assert.equal(sp(r.formel), '42 400 × 1 = 42 400 kr');
  assert.equal(r.forklaring, '');
});

test('utlandssvenska: IB ger halva naturvetenskapsprogrammets belopp, 55 650 kr', () => {
  const r = B({ grundElever: 0, gyElever: 1, program: 'ib' });
  assert.equal(r.resultat, 55650);
  assert.equal(sp(r.formel), '111 300 ÷ 2 × 1 = 55 650 kr');
  assert.ok(r.varningar.some((w) => /Sigtunaskolan/.test(w)));
});

test('utlandssvenska: anpassade gymnasieskolan = 215 400 kr per elev och termin', () => {
  assert.equal(B({ grundElever: 0, gyElever: 1, program: 'agy' }).resultat, 215400);
});

test('utlandssvenska: eget belopp för särskild variant eller fjärde tekniskt år', () => {
  const r = B({ grundElever: 0, gyElever: 2, program: 'annat', egetBelopp: 138350 });
  assert.equal(r.resultat, 138350);
  assert.equal(r.varningar.length, 1);
});

test('utlandssvenska: programmet spelar ingen roll utan gymnasieelever', () => {
  const r = B({ grundElever: 1, gyElever: 0, program: 'annat', egetBelopp: 0 });
  assert.equal(r.resultat, 42400);
});

test('utlandssvenska: ogiltiga värden ger ett lugnt felmeddelande', () => {
  const ogiltiga = [
    { grundElever: 0, gyElever: 0 }, { grundElever: -1 }, { gyElever: 1.5 }, { grundElever: '2' },
    { program: 'xx' }, { program: 'annat', egetBelopp: 0 }
  ];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
