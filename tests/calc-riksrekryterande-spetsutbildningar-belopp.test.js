'use strict';
/* Räkneexempel för 16 § förordning (2024:675) och 5 § förordning (2024:677): belopp per elev × elever den 15 oktober.
 * Kontroll mot Skolverkets beslut för 2025/26: Danderyds kommun (grundskolan) 738 512 kr = 30 elever,
 * Härnösands kommun (gymnasieskolan) 98 468 kr = 4 elever – båda motsvarar cirka 24 617 kr per elev. */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/riksrekryterande-spetsutbildningar-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const B = (v) => belopp.berakna(Object.assign({ elever: 30, belopp: 24617 }, v));

test('spets: konstanterna följer källorna', () => {
  assert.equal(belopp.id, 'riksrekryterande-spetsutbildningar-belopp');
  assert.equal(belopp.RAM_2026_27, 45000000);
  assert.equal(belopp.BELOPP_2025_26, 24617);
});

test('spets: besluten för 2025/26 stämmer med cirka 24 617 kr per elev', () => {
  // Skolverkets belopp per elev har decimaler; skillnaden mot vår uträkning är under 10 öre per elev.
  const nara = (elever, beslut) => Math.abs(B({ elever }).resultat - beslut) / elever < 0.1;
  assert.ok(nara(30, 738512));
  assert.ok(nara(4, 98468));
  assert.ok(nara(160, 3938730));
});

test('spets: en klass med 30 elever', () => {
  const r = B({});
  assert.equal(r.resultat, 738510);
  assert.equal(r.enhet, 'kr');
  assert.equal(sp(r.formel), '30 × 24 617 = 738 510 kr');
  assert.equal(sp(r.extra[0].varde), '1 828 elever');
  assert.equal(r.varningar.length, 1);
});

test('spets: eget antagande om belopp', () => {
  const r = B({ elever: 90, belopp: 20000 });
  assert.equal(r.resultat, 1800000);
  assert.equal(r.forklaring, 'Räknat med ert eget antagande om belopp per elev.');
});

test('spets: varning när beloppet är större än hela ramen', () => {
  const r = B({ elever: 2000, belopp: 30000 });
  assert.equal(r.varningar.length, 2);
});

test('spets: ogiltiga värden ger ett lugnt felmeddelande i stället för ett belopp', () => {
  const ogiltiga = [{ elever: 0 }, { elever: -1 }, { elever: 2.5 }, { elever: NaN }, { belopp: 0 }, { belopp: '24617' }, { elever: 20000 }];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
