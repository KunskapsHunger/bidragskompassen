'use strict';
/* Räkneexempel som går att kontrollera mot Skolverkets sida för elevers kontakt med arbetslivet 2026 och
 * regleringsbrevet: 30 miljoner kronor fördelas proportionerligt efter elevantal, med ett tak på 3 679 613 kr
 * per huvudman (12,3 procent av anslaget enligt Skolverket). */
const test = require('node:test');
const assert = require('node:assert/strict');
const calc = require('../js/calc/elevers-kontakt-med-arbetslivet-fordelning.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const B = (v) => calc.berakna(Object.assign({ egna: 100, alla: 5000 }, v));

test('arbetslivskontakt: anslag och tak enligt Skolverket', () => {
  assert.equal(calc.id, 'elevers-kontakt-med-arbetslivet-fordelning');
  assert.equal(calc.ANSLAG, 30000000);
  assert.equal(calc.TAK, 3679613);
  assert.ok(Math.abs(calc.TAK / calc.ANSLAG - 0.123) < 0.001, 'taket är ungefär 12,3 procent');
});

test('arbetslivskontakt: 100 av 5 000 elever = 30 000 000 × 100 / 5 000 = 600 000 kr', () => {
  const r = B({});
  assert.equal(r.resultat, 600000);
  assert.equal(sp(r.formel), '30 000 000 × 100 / 5 000 = 600 000 kr');
  assert.match(sp(r.forklaring), /6 000 kr per elev/);
  assert.ok(r.varningar[0].startsWith('Räkneexempel'));
});

test('arbetslivskontakt: fler elever totalt ger lägre belopp per elev', () => {
  assert.equal(B({ alla: 10000 }).resultat, 300000);
});

test('arbetslivskontakt: taket 3 679 613 kr', () => {
  const r = B({ egna: 1500 });
  assert.equal(r.resultat, 3679613);
  assert.match(sp(r.formel), /= 9 000 000 kr, högst 3 679 613 kr$/);
  assert.ok(r.varningar.some((w) => w.includes('taket')));
  assert.equal(B({ egna: 613, alla: 5000 }).resultat, 3678000, 'strax under taket påverkas inte');
});

test('arbetslivskontakt: alla elever hos en huvudman ger ändå bara taket', () => {
  assert.equal(B({ egna: 5000 }).resultat, 3679613);
});

test('arbetslivskontakt: inga elever ger 0 kr och blockerad', () => {
  const r = B({ egna: 0 });
  assert.equal(r.resultat, 0);
  assert.equal(r.blockerad, true);
});

test('arbetslivskontakt: ogiltiga värden ger ett lugnt felmeddelande', () => {
  for (const v of [{ egna: -1 }, { egna: 2.5 }, { alla: 0 }, { alla: NaN }, { egna: 6000, alla: 5000 }]) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
