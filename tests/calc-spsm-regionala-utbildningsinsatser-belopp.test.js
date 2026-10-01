'use strict';
/* Räkneexempel som går att kontrollera mot SPSM:s information om bidraget Regionala utbildningsinsatser,
 * bidragsår 2027: upp till 25 000 kr per elev och termin (minst 30 kalenderdagar för hel termin), och vid
 * ett begränsat antal tillfällen högst 750 kr per tillfälle och elev, upp till 25 000 kr per termin. */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/spsm-regionala-utbildningsinsatser-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const B = (v) => belopp.berakna(Object.assign({ modell: 'terminer', elevVt: 8, elevHt: 8, elever: 10, tillfallen: 6, terminer: 2 }, v));

test('regionala: beloppen följer SPSM (25 000 kr per termin, 750 kr per tillfälle)', () => {
  assert.equal(belopp.id, 'spsm-regionala-utbildningsinsatser-belopp');
  assert.equal(belopp.PER_TERMIN, 25000);
  assert.equal(belopp.PER_TILLFALLE, 750);
});

test('regionala: 8 elever båda terminerna = 400 000 kr', () => {
  const r = B({});
  assert.equal(r.resultat, 16 * 25000);
  assert.equal(r.resultat, 400000);
  assert.equal(sp(r.formel), '25 000 × (8 + 8) = 400 000 kr');
  assert.deepEqual(r.delar.map((d) => d.varde), [200000, 200000]);
});

test('regionala: olika antal elever per termin', () => {
  const r = B({ elevVt: 5, elevHt: 7 });
  assert.equal(r.resultat, 300000);
  assert.equal(sp(r.rader[0].etikett), 'Vårterminen, 5 elever');
  assert.equal(sp(r.rader[1].varde), '175 000 kr');
});

test('regionala: tillfällen – 10 elever, 6 tillfällen, 2 terminer = 90 000 kr', () => {
  const r = B({ modell: 'tillfallen' });
  assert.equal(r.resultat, 750 * 6 * 10 * 2);
  assert.equal(sp(r.formel), 'min(750 × 6, 25 000) × 10 × 2 = 90 000 kr');
  assert.deepEqual(r.varningar, []);
});

test('regionala: 33 tillfällen ligger under taket, 34 når taket 25 000 kr', () => {
  assert.equal(B({ modell: 'tillfallen', elever: 1, terminer: 1, tillfallen: 33 }).resultat, 24750);
  const r = B({ modell: 'tillfallen', elever: 1, terminer: 1, tillfallen: 34 });
  assert.equal(r.resultat, 25000);
  assert.equal(r.varningar.length, 1);
});

test('regionala: ogiltiga värden ger ett lugnt felmeddelande', () => {
  const ogiltiga = [
    { modell: 'annat' }, { elevVt: 0, elevHt: 0 }, { elevVt: -1 }, { elevHt: 1.5 }, { elevVt: '3' },
    { modell: 'tillfallen', elever: 0 }, { modell: 'tillfallen', tillfallen: 0 }, { modell: 'tillfallen', terminer: 3 },
    { modell: 'tillfallen', elever: NaN }
  ];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
