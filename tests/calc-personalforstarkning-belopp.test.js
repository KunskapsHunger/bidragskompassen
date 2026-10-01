'use strict';
/* Räkneexempel som går att kontrollera mot Skolverkets sidor om personalförstärkning:
 * schablonbeloppen för 2026, räkneregeln (ökning i årsarbetskrafter × schablonbelopp, sidan för 2025)
 * och exemplet om att bibehålla tre skolläkare, eller 2,5 efter återkrav (sidorna för 2026 och 2027). */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/personalforstarkning-belopp.js');
const aak = require('../js/calc/personalforstarkning-arsarbetskraft.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const B = (v) => belopp.berakna(Object.assign({ kategori: 'speciallarare', aaForegaende: 10, aaBidragsar: 12, hadeBidrag: false, bibehall: 0 }, v));

test('belopp: schablonbeloppen för 2026 enligt Skolverket', () => {
  assert.deepEqual(belopp.SCHABLON, {
    skollakare: 878000, skolskoterska: 393000, kurator: 351000, psykolog: 414000,
    speciallarare: 402000, fortbildning: 363000, laravlastande: 302000, lararassistent: 248000
  });
  assert.equal(belopp.SCHABLON_AR, 2026);
  assert.deepEqual(aak.SCHABLON, belopp.SCHABLON, 'båda räknarna använder samma tabell');
});

test('belopp: två nya speciallärare (10 → 12 årsarbetskrafter) = 2 × 402 000 = 804 000 kr', () => {
  const r = B({});
  assert.equal(r.resultat, 804000);
  assert.equal(sp(r.formel), '(2 + 0) × 402 000 = 804 000 kr');
  assert.deepEqual(r.delar.map((d) => d.varde), [804000, 0]);
  assert.ok(!r.blockerad);
  assert.match(sp(r.forklaring), /12 − 10 = 2 årsarbetskrafter/);
});

test('belopp: Skolverkets exempel – bibehålla tre skolläkare = 2 634 000 kr, 2,5 efter återkrav = 2 195 000 kr', () => {
  const tre = B({ kategori: 'skollakare', aaForegaende: 5, aaBidragsar: 5, hadeBidrag: true, bibehall: 3 });
  assert.equal(tre.resultat, 3 * 878000);
  assert.equal(sp(tre.formel), '(0 + 3) × 878 000 = 2 634 000 kr');
  const halv = B({ kategori: 'skollakare', aaForegaende: 5, aaBidragsar: 5, hadeBidrag: true, bibehall: 2.5 });
  assert.equal(halv.resultat, 2195000);
  assert.deepEqual(halv.delar.map((d) => d.varde), [0, 2195000]);
});

test('belopp: bibehållande räknas bara om ni hade bidraget föregående år', () => {
  assert.equal(B({ bibehall: 3, hadeBidrag: false }).resultat, 804000);
  assert.equal(B({ bibehall: 1, hadeBidrag: true }).resultat, 3 * 402000);
});

test('belopp: lärarassistent på heltid från 1 juli (+0,5) = 124 000 kr och golvet 75 000 kr nämns inte', () => {
  const r = B({ kategori: 'lararassistent', aaForegaende: 4, aaBidragsar: 4.5 });
  assert.equal(r.resultat, 124000);
  assert.ok(!r.varningar.some((w) => w.includes('75 000')));
});

test('belopp: litet belopp ger en notis om 75 000 kr vid urval (15 §)', () => {
  const r = B({ kategori: 'speciallarare', aaForegaende: 10, aaBidragsar: 10.19 });
  assert.equal(r.resultat, 76380, '0,19 × 402 000');
  const r2 = B({ kategori: 'kurator', aaForegaende: 2, aaBidragsar: 2.1 });
  assert.equal(r2.resultat, 35100);
  assert.ok(r2.varningar.some((w) => sp(w).includes('75 000 kr')));
});

test('belopp: ingen ökning och inget bibehållande ger 0 kr och blockerad', () => {
  const r = B({ aaForegaende: 12, aaBidragsar: 11 });
  assert.equal(r.resultat, 0);
  assert.equal(r.blockerad, true);
  assert.ok(r.varningar.some((w) => w.includes('minskar')));
  const r2 = B({ aaForegaende: 12, aaBidragsar: 11, hadeBidrag: true, bibehall: 1 });
  assert.equal(r2.resultat, 402000);
  assert.ok(r2.varningar.some((w) => w.includes('finns kvar')));
});

test('belopp: årsarbetskrafter avrundas till två decimaler', () => {
  const r = B({ aaForegaende: 1, aaBidragsar: 1.3333 });
  assert.equal(r.resultat, Math.round(0.33 * 402000));
  assert.ok(r.varningar.some((w) => w.includes('två decimaler')));
  assert.equal(B({ aaForegaende: 10.1, aaBidragsar: 10.3 }).resultat, 80400, 'ingen flyttalsavvikelse');
});

test('belopp: varningar för elevhälsa, speciallärare och fortbildning', () => {
  assert.ok(B({ kategori: 'skolskoterska' }).varningar.some((w) => w.includes('legitimation')));
  assert.ok(B({ kategori: 'kurator' }).varningar.some((w) => w.includes('tillräcklig utbildning')));
  assert.ok(B({}).varningar.some((w) => w.includes('särskilda undervisningsgrupper')));
  assert.ok(B({ kategori: 'fortbildning' }).varningar.some((w) => w.includes('studier')));
  assert.deepEqual(B({ kategori: 'laravlastande' }).varningar, []);
});

test('belopp: ogiltiga värden ger ett lugnt felmeddelande', () => {
  for (const v of [{ kategori: 'logoped' }, { aaForegaende: -1 }, { aaBidragsar: NaN }, { aaBidragsar: 100001 }, { hadeBidrag: true, bibehall: -0.5 }]) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
  assert.equal(B({ hadeBidrag: false, bibehall: -1 }).resultat, 804000, 'bibehållande ignoreras utan bidrag förra året');
});
