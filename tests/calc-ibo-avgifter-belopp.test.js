'use strict';
/* Räkneexempel för 3 § förordning (1993:795): basavgift + anslutningsavgift (bara första gången, enligt Skolverket)
 * + examensavgift per elev, men bara för elever som hemkommunen var skyldig att erbjuda gymnasieutbildning.
 * Avgiftsbeloppen i testerna är påhittade – förordningen anger inga belopp. */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/ibo-avgifter-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const B = (v) => belopp.berakna(Object.assign({
  basavgift: 100000, forstaGangen: false, anslutningsavgift: 0, examensavgift: 2000, elever: 25, berattigade: 25
}, v));

test('ibo: modulens id', () => {
  assert.equal(belopp.id, 'ibo-avgifter-belopp');
});

test('ibo: basavgift + examensavgift för 25 elever = 150 000 kr', () => {
  const r = B({});
  assert.equal(r.resultat, 100000 + 2000 * 25);
  assert.equal(r.enhet, 'kr');
  assert.equal(sp(r.formel), '100 000 + 2 000 × 25 = 150 000 kr');
  assert.deepEqual(r.delar.map((d) => d.varde), [100000, 0, 50000]);
  assert.equal(r.rader[1].varde, 'ersätts inte');
  assert.equal(r.varningar.length, 1); // anslutningsavgiften är inte med
});

test('ibo: första gången kommer anslutningsavgiften med', () => {
  const r = B({ forstaGangen: true, anslutningsavgift: 40000 });
  assert.equal(r.resultat, 190000);
  assert.equal(sp(r.formel), '100 000 + 40 000 + 2 000 × 25 = 190 000 kr');
  assert.deepEqual(r.varningar, []);
});

test('ibo: examensavgift ersätts bara för elever som hemkommunen var skyldig att erbjuda utbildning', () => {
  const r = B({ elever: 30, berattigade: 26 });
  assert.equal(r.resultat, 100000 + 2000 * 26);
  assert.equal(sp(r.extra[0].varde), '8 000 kr');
  assert.equal(r.varningar.length, 2);
  assert.match(sp(r.varningar[0]), /4 elever \(8 000 kr\)/);
});

test('ibo: anslutningsavgiften ignoreras när det inte är första gången', () => {
  const r = B({ forstaGangen: false, anslutningsavgift: 40000 });
  assert.equal(r.resultat, 150000);
});

test('ibo: ogiltiga värden ger ett lugnt felmeddelande i stället för ett belopp', () => {
  const ogiltiga = [
    { basavgift: -1 }, { basavgift: NaN }, { examensavgift: '2000' }, { forstaGangen: true, anslutningsavgift: NaN },
    { elever: 1.5 }, { elever: -1 }, { berattigade: 26 }, { elever: 20000, berattigade: 0 }
  ];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
