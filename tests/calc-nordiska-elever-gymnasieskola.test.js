'use strict';
/* Räkneexempel som går att kontrollera mot riksprislistan 2026 (SKOLFS 2026:7, inklusive måltider),
 * regleringsbrevet för Statens skolverk 2026 (anslag 1:8 ap.2) och Skolverkets beslut för nordiska elever
 * vårterminen 2026, där t.ex. 57 500 kr = 121 900 ÷ 2 ÷ 1,06 och 48 113 kr = 102 000 ÷ 2 ÷ 1,06 förekommer. */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const calc = require('../js/calc/nordiska-elever-gymnasieskola.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const B = (v) => calc.berakna(Object.assign({ huvudman: 'enskild', program: 'sa', egetBelopp: 150000, elever: 2, avdrag: 0 }, v));

function guide() {
  const ctx = vm.createContext({});
  ctx.window = ctx;
  vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'data', 'fordjupning', 'nordiska-elever.js'), 'utf8'), ctx);
  return ctx.SB_FORDJUPNING['nordiska-elever'];
}

test('nordiska gy: beloppen följer riksprislistan 2026', () => {
  assert.equal(calc.id, 'nordiska-elever-gymnasieskola');
  assert.equal(calc.PROGRAM.sa.belopp, 102600);
  assert.equal(calc.PROGRAM.na.belopp, 111300);
  assert.equal(calc.PROGRAM.ib.belopp, calc.PROGRAM.na.belopp, 'IB får naturvetenskapsprogrammets belopp');
  assert.equal(calc.PROGRAM.te.belopp, 121900);
  assert.equal(calc.PROGRAM['nb-tr'].belopp, 313800);
  assert.equal(calc.MOMS_DIVISOR, 1.06);
});

test('nordiska gy: programlistan i guiden stämmer med modulen', () => {
  const k = guide().kalkylatorer.find((x) => x.modul === 'nordiska-elever-gymnasieskola');
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

test('nordiska gy: enskild huvudman, två elever på samhällsvetenskapsprogrammet = 102 600 kr', () => {
  const r = B({});
  assert.equal(r.resultat, 102600);
  assert.equal(sp(r.formel), '102 600 ÷ 2 × 2 = 102 600 kr');
  assert.equal(sp(r.extra[0].varde), '51 300 kr');
  assert.equal(r.varningar.length, 0);
});

test('nordiska gy: kommun eller region får beloppet utan momsersättning (÷ 1,06)', () => {
  const t = B({ huvudman: 'region', program: 'te', elever: 1 });
  assert.equal(t.resultat, 57500);
  assert.equal(sp(t.formel), '121 900 ÷ 2 ÷ 1,06 × 1 = 57 500 kr');
  const e = B({ huvudman: 'kommun', program: 'ek', elever: 1 });
  assert.equal(e.resultat, 48113);
  assert.ok(e.varningar.some((w) => /interkommunal/.test(w)));
});

test('nordiska gy: kommunens avdrag minskar antalet elever som ger ersättning', () => {
  const r = B({ huvudman: 'kommun', program: 'te', elever: 5, avdrag: 2 });
  assert.equal(r.resultat, 172500);
  assert.equal(sp(r.formel), '121 900 ÷ 2 ÷ 1,06 × 3 = 172 500 kr');
  assert.equal(sp(r.sammanfattning), 'Kommun · 3 elever · en termin');
  assert.ok(r.varningar.some((w) => /CSN/.test(w)));
});

test('nordiska gy: avdrag ignoreras för region och enskild', () => {
  assert.equal(B({ huvudman: 'region', program: 'te', elever: 5, avdrag: 4 }).resultat, 287500);
  assert.equal(B({ huvudman: 'enskild', program: 'sa', elever: 2, avdrag: 2 }).resultat, 102600);
});

test('nordiska gy: avdrag lika stort som eleverna ger 0 kr och en förklaring', () => {
  const r = B({ huvudman: 'kommun', elever: 2, avdrag: 5 });
  assert.equal(r.resultat, 0);
  assert.equal(r.blockerad, true);
  assert.match(r.forklaring, /12 kap\. 8 §/);
});

test('nordiska gy: eget belopp för särskild variant eller riksrekryterande utbildning', () => {
  const r = B({ huvudman: 'region', program: 'annat', egetBelopp: 180000, elever: 1 });
  assert.equal(r.resultat, Math.round(90000 / 1.06));
  assert.ok(r.varningar.some((w) => /beslutet/.test(w)));
  const enskild = B({ program: 'annat', egetBelopp: 180000, elever: 1 });
  assert.equal(enskild.resultat, 90000);
});

test('nordiska gy: ogiltiga värden ger ett lugnt felmeddelande', () => {
  const ogiltiga = [
    { huvudman: 'stat' }, { program: 'xx' }, { elever: 0 }, { elever: 1.5 }, { elever: '2' },
    { huvudman: 'kommun', avdrag: -1 }, { program: 'annat', egetBelopp: 0 }, { program: 'annat', egetBelopp: NaN }
  ];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
