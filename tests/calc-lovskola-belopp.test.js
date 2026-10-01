'use strict';
/* Räkneexempel från Skolverkets sida för lovskola 2026 (5 × 10 = 50 elevdagar, 5 × 5 = 25 elevdagar,
 * 300 kr per elevdag) och förordning (2014:47) 6 § (högst 1 500 kr per elev och vecka). */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/lovskola-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const B = (v) => belopp.berakna(Object.assign({ elever: 5, dagar: 10, belopp: 300, ak89: false, obligKlar: false }, v));
const rad = (r, etikett) => sp(r.rader.find((x) => x.etikett === etikett).varde);

test('belopp: Skolverkets exempel 5 elever × 10 dagar = 50 elevdagar = 15 000 kr', () => {
  const r = B({});
  assert.equal(r.resultat, 15000);
  assert.equal(r.enhet, 'kr');
  assert.equal(sp(r.formel), '5 × 10 = 50 elevdagar × 300 kr = 15 000 kr');
  assert.equal(sp(r.sammanfattning), '5 elever · 10 dagar · 50 elevdagar');
  assert.equal(rad(r, 'Elevdagar'), '50');
  assert.equal(rad(r, 'Bidrag per elev'), '3 000 kr');
  assert.equal(r.forklaring, 'Summan är avrundad till hela kronor.');
  assert.deepEqual(r.varningar, []);
});

test('belopp: läslovsexemplet 5 × 5 = 25 elevdagar = 7 500 kr', () => {
  const r = B({ dagar: 5 });
  assert.equal(r.resultat, 7500);
  assert.equal(sp(B({ elever: 1, dagar: 1 }).sammanfattning), '1 elev · 1 dag · 1 elevdag');
});

test('belopp: 300 kr per dag i fem dagar motsvarar förordningens tak på 1 500 kr per vecka', () => {
  assert.equal(belopp.SCHABLON * 5, belopp.TAK_VECKA);
  assert.equal(rad(B({}), 'Per elev och vecka med fem lovskoledagar'), '1 500 kr (tak 1 500 kr)');
});

test('belopp: lägre belopp per elevdag avrundas till hela kronor och sänkningen visas', () => {
  const r = B({ elever: 100, dagar: 1, belopp: 112000000 / 437316 });
  assert.equal(r.resultat, 25611, 'samma nivå som i ansökningsbeslutet 2026: 100 elevdagar ≈ 25 611 kr');
  const s = B({ elever: 40, dagar: 10, belopp: 256.11 });
  assert.equal(s.resultat, 102444);
  assert.equal(sp(s.forklaring), 'Beloppet per elevdag är 14,63 % lägre än schablonen på 300 kr. Summan är avrundad till hela kronor.');
  assert.equal(B({ belopp: 0 }).resultat, 0);
});

test('belopp: årskurs 8–9 utan genomförd obligatorisk lovskola blockeras', () => {
  const r = B({ ak89: true, obligKlar: false });
  assert.equal(r.resultat, 0);
  assert.equal(r.blockerad, true);
  assert.match(r.forklaring, /genomförd/);
  assert.equal(rad(r, 'Elevdagar'), '50');
  assert.equal(B({ ak89: true, obligKlar: true }).resultat, 15000);
  assert.equal(B({ ak89: false, obligKlar: false }).resultat, 15000, 'kryssrutan om genomförd spelar ingen roll utan årskurs 8–9');
});

test('belopp: ogiltiga värden ger ett lugnt felmeddelande i stället för ett belopp', () => {
  for (const v of [{ elever: 0 }, { elever: 2.5 }, { dagar: 0 }, { dagar: 61 }, { belopp: 301 }, { belopp: -1 }, { belopp: NaN }, { elever: '5' }]) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
