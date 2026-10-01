'use strict';
/* Räkneexempel från förordning (2011:947) 3 § och Skolverkets sida för 2026 (maxbelopp per termin,
 * exemplet med 80 procent och de beviljade beloppen för våren 2026). */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/gymnasial-larlingsutbildning-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const B = (v) => belopp.berakna(Object.assign({ niva: 'max', andel: 80, elever: 10, handledare: 4, anstallda: 0, terminer: 1 }, v));

test('belopp: maxbelopp per termin är halva årsbeloppen i 3 §', () => {
  const m = belopp.MAX_PER_TERMIN;
  assert.deepEqual([m.arbetsgivare * 2, m.handledare * 2, m.anstallning * 2], [37500, 10000, 5000]);
});

test('belopp: 10 elever, 4 med utbildad handledare, en termin = 207 500 kr', () => {
  const r = B({});
  assert.equal(r.resultat, 207500);
  assert.equal(sp(r.formel), '(10 × 18 750 + 4 × 5 000 + 0 × 2 500) × 1 = 207 500 kr');
  assert.equal(sp(r.sammanfattning), '10 elever · 1 termin · maxbelopp');
  assert.deepEqual(r.delar.map((d) => d.varde), [187500, 20000, 0]);
  assert.equal(sp(r.extra[0].varde), '207 500 kr', 'hela beloppet ska betalas vidare');
  assert.deepEqual(r.varningar, []);
});

test('belopp: en elev med alla tre delarna under ett läsår = 52 500 kr (37 500 + 10 000 + 5 000)', () => {
  const r = B({ elever: 1, handledare: 1, anstallda: 1, terminer: 2 });
  assert.equal(r.resultat, 52500);
  assert.deepEqual(r.delar.map((d) => d.varde), [37500, 10000, 5000]);
  assert.equal(sp(r.sammanfattning), '1 elev · 2 terminer · maxbelopp');
  assert.equal(r.varningar.length, 1, 'påminnelse om att introduktionsprogram inte ger anställningsdelen');
});

test('belopp: Skolverkets exempel – 80 % ger 15 000, 4 000 och 2 000 kr per elev och termin', () => {
  const r = B({ niva: 'egen', andel: 80, elever: 1, handledare: 1, anstallda: 1 });
  assert.equal(r.resultat, 21000);
  assert.deepEqual(r.delar.map((d) => d.varde), [15000, 4000, 2000]);
  assert.equal(sp(r.rader[3].varde), '21 000 kr');
  assert.match(r.forklaring, /3 § femte stycket/);
  assert.equal(sp(r.sammanfattning), '1 elev · 1 termin · 80 % av maxbeloppen');
});

test('belopp: nivån våren 2026 – 11 720, 3 127 och 1 577 kr per elev', () => {
  const r = B({ niva: 'vt26' });
  assert.equal(r.resultat, 10 * 11720 + 4 * 3127);
  assert.equal(r.resultat, 129708);
  assert.equal(r.varningar.length, 1);
  assert.equal(B({ niva: 'vt26', elever: 3, handledare: 3, anstallda: 1 }).resultat, 3 * 11720 + 3 * 3127 + 1577);
});

test('belopp: egen nivå avrundas inte', () => {
  const r = B({ niva: 'egen', andel: 33, elever: 1, handledare: 0 });
  assert.equal(r.resultat, 18750 * 0.33);
  assert.equal(B({ niva: 'egen', andel: 100 }).resultat, B({}).resultat);
});

test('belopp: ogiltiga värden ger ett lugnt felmeddelande i stället för ett belopp', () => {
  for (const v of [{ elever: 0 }, { elever: 1.5 }, { handledare: -1 }, { handledare: 11 }, { anstallda: 11 },
    { terminer: 0 }, { terminer: 9 }, { elever: NaN }, { niva: 'egen', andel: 0 }, { niva: 'egen', andel: 101 }]) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
  assert.equal(B({ andel: 0 }).resultat, 207500, 'andelen ignoreras utanför "egen nivå"');
  assert.equal(B({ niva: 'okand' }).resultat, 207500, 'okänd nivå tolkas som maxbelopp');
});
