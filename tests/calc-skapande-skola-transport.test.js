'use strict';
/* Kulturrådets riktlinjer för Skapande skola (2026-06-09), avsnitt 2.4: transporter för elever och lärare får
 * vara högst 20 procent av det totala bidragsbeloppet. Fördelningen 2026/27: 220 001 351 kr till projekt med
 * 863 715 deltagande elever (Kulturrådet 15 april 2026), alltså cirka 254,72 kr per elev i snitt. */
const test = require('node:test');
const assert = require('node:assert/strict');
const transport = require('../js/calc/skapande-skola-transport.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const T = (v) => transport.berakna(Object.assign({ bidrag: 200000, elever: 800, transport: 30000 }, v));
const rad = (r, etikett) => sp(r.rader.find((x) => x.etikett === etikett).varde);

test('transport: 20 % av 200 000 kr = 40 000 kr, 30 000 kr ryms', () => {
  const r = T({});
  assert.equal(r.resultat, 40000);
  assert.equal(r.enhet, 'kr');
  assert.equal(sp(r.formel), '200 000 kr × 20 % = 40 000 kr');
  assert.equal(rad(r, 'Kvar under taket'), '10 000 kr');
  assert.equal(rad(r, 'Bidrag per deltagande elev'), '250,00 kr');
  assert.deepEqual(r.varningar, []);
  assert.deepEqual(r.delar.map((d) => d.varde), [30000, 170000]);
});

test('transport: över taket ger en varning och visar hur mycket', () => {
  const r = T({ bidrag: 50000, elever: 150, transport: 15000 });
  assert.equal(r.resultat, 10000);
  assert.equal(rad(r, 'Över taket'), '5 000 kr');
  assert.equal(r.varningar.length, 1);
  assert.match(sp(r.varningar[0]), /5 000 kr över taket/);
  assert.deepEqual(r.delar.map((d) => d.varde), [10000, 40000]);
});

test('transport: riksnivån 2026/27 ger cirka 254,72 kr per elev och taket avrundas nedåt', () => {
  const r = T({ bidrag: 220001351, elever: 863715, transport: 0 });
  assert.equal(r.resultat, 44000270, '220 001 351 × 0,2 = 44 000 270,2 → 44 000 270');
  assert.equal(rad(r, 'Bidrag per deltagande elev'), '254,72 kr');
  assert.equal(sp(r.sammanfattning), 'Bidrag 220 001 351 kr · 863 715 deltagande elever');
});

test('transport: andelen är 20 procent', () => {
  assert.equal(transport.TRANSPORT_ANDEL, 0.2);
  assert.equal(sp(T({ elever: 1 }).sammanfattning), 'Bidrag 200 000 kr · 1 deltagande elev');
});

test('transport: ogiltiga värden ger ett lugnt felmeddelande i stället för ett belopp', () => {
  for (const v of [{ bidrag: 0 }, { bidrag: 1.5 }, { elever: 0 }, { elever: 2.5 }, { transport: -1 }, { transport: NaN }, { bidrag: '100' }]) {
    const r = T(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
