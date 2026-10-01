'use strict';
/* Räkneexempel från förordning (2016:937) 24–31 b §§ (lydelse SFS 2025:892) och Skolverkets sidor
 * för regionalt yrkesvux 2026, 2027 och 2028–2029 (ersättningsnivåer per årsstudieplats). */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/regionalt-yrkesvux-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const NOLL = { lagre: 0, hogre: 0, anpassad: 0, larlingLagre: 0, larlingHogre: 0, kombLagre: 0, kombHogre: 0,
  arbetsplats: 0, handledning: 0, orientering: 0, funktion: 0, buss: 0, lastbil: 0, slap: 0 };
const B = (v) => belopp.berakna(Object.assign({ ar: '2027' }, NOLL, v));

test('yrkesvux: beloppen från 2027 följer 28–31 b §§', () => {
  const n = belopp.NIVAER['2027'];
  assert.deepEqual([n.lagre, n.hogre, n.anpassad], [42000, 90000, 110000]);
  assert.deepEqual([n.larlingLagre, n.larlingHogre], [42000, 90000], '24 §: lärling samma belopp som 28–29 §§');
  assert.deepEqual([n.kombLagre, n.kombHogre], [42000 + 55000, 90000 + 55000], '31 a §: 55 000 kr extra');
  const f = belopp.FASTA;
  assert.deepEqual([f.arbetsplats, f.handledning, f.orientering, f.funktion], [40000, 7000, 36000, 55000]);
  assert.deepEqual([f.buss, f.lastbil, f.slap], [72000, 82800, 114000]);
});

test('yrkesvux: standardexemplet 10 platser lägre + 20 platser högre nivå = 2 220 000 kr', () => {
  const r = B({ lagre: 10, hogre: 20 });
  assert.equal(r.resultat, 2220000);
  assert.equal(sp(r.formel), '10 × 42 000 + 20 × 90 000 = 2 220 000 kr');
  assert.equal(sp(r.sammanfattning), '30 årsstudieplatser · nivåer från 2027');
  assert.deepEqual(r.varningar, []);
  assert.match(sp(r.extra[0].text), /24 000 verksamhetspoäng/);
});

test('yrkesvux: en lärlingsplats inom bygg med arbetsplatsersättning och handledning', () => {
  const r27 = B({ larlingHogre: 1, arbetsplats: 1, handledning: 1 });
  assert.equal(r27.resultat, 90000 + 40000 + 7000);
  assert.equal(r27.resultat, 137000);
  const r26 = B({ ar: '2026', larlingHogre: 1, arbetsplats: 1, handledning: 1 });
  assert.equal(r26.resultat, 50000 + 40000 + 7000, '2026: 50 000 kr per lärlingsplats enligt Skolverket');
  assert.deepEqual(r27.varningar, []);
});

test('yrkesvux: kombinationsutbildning 97 000 / 145 000 kr från 2027, 110 000 kr 2026', () => {
  assert.equal(B({ kombLagre: 1, kombHogre: 1 }).resultat, 97000 + 145000);
  const r26 = B({ ar: '2026', kombLagre: 1, kombHogre: 1 });
  assert.equal(r26.resultat, 220000);
  assert.equal(r26.varningar.length, 1);
});

test('yrkesvux: halva platser, tillägg och yrkesförare', () => {
  const r = B({ lagre: 0.5, funktion: 0.5, orientering: 0.25, lastbil: 1, slap: 1 });
  assert.equal(r.resultat, 21000 + 27500 + 9000 + 82800 + 114000);
  assert.equal(r.delar.find((d) => d.etikett === 'Yrkesförare').varde, 196800);
  assert.equal(r.rader.length, 5);
});

test('yrkesvux: varningar för orimliga kombinationer', () => {
  assert.equal(B({ arbetsplats: 2, larlingLagre: 1 }).varningar.length, 1);
  assert.equal(B({ handledning: 3 }).varningar.length, 1);
  assert.equal(B({ anpassad: 2, funktion: 1 }).varningar.length, 1, 'tillägget ges inte för anpassad utbildning');
});

test('yrkesvux: ogiltiga värden ger ett lugnt felmeddelande', () => {
  for (const v of [{ lagre: -1 }, { hogre: NaN }, { kombHogre: 100001 }, { handledning: 1.5 }, { buss: -1 }, { slap: Infinity }]) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
  assert.equal(B({ ar: 'okant', larlingHogre: 1 }).resultat, 90000, 'okänt år tolkas som 2027 och framåt');
  assert.equal(sp(B({}).formel), 'Inga platser angivna = 0 kr');
});
