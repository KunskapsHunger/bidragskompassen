'use strict';
/* Brå, översikt över ansökan 2027: lönebikostnader högst 40,66 procent av beviljad utgift för arbetskraft och
 * allmänna omkostnader högst 10 procent av total utgift för arbetskraft. Exemplen går att räkna för hand:
 * 400 000 × 0,4066 = 162 640 kr och 400 000 × 0,10 = 40 000 kr. */
const test = require('node:test');
const assert = require('node:assert/strict');
const budget = require('../js/calc/bra-brottsforebyggande-kommuner-budget.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const B = (v) => budget.berakna(Object.assign({ lon: 400000, bikost: 160000, omkostnader: 40000, externa: 100000, ovriga: 50000, underlag: 'lon' }, v));
const rad = (r, start) => sp(r.rader.find((x) => x.etikett.startsWith(start)).varde);

test('budget: allt inom taken räknas med', () => {
  const r = B({});
  assert.equal(r.resultat, 750000);
  assert.equal(r.enhet, 'kr');
  assert.equal(sp(r.formel), '400 000 kr + 160 000 kr + 40 000 kr + 100 000 kr + 50 000 kr = 750 000 kr');
  assert.equal(rad(r, 'Tak för lönebikostnader'), '162 640 kr');
  assert.equal(rad(r, 'Tak för allmänna omkostnader'), '40 000 kr');
  assert.deepEqual(r.varningar, []);
  assert.match(r.forklaring, /ryms inom taken/);
});

test('budget: belopp över taken räknas bort och varnas för', () => {
  const r = B({ bikost: 180000, omkostnader: 60000 });
  assert.equal(r.resultat, 400000 + 162640 + 40000 + 100000 + 50000);
  assert.equal(r.varningar.length, 2);
  assert.match(sp(r.varningar[0]), /17 360 kr över taket på 40,66 procent/);
  assert.match(sp(r.varningar[1]), /20 000 kr över taket på 10 procent/);
  assert.equal(sp(r.forklaring), 'Er planerade budget är 790 000 kr. 37 360 kr ligger över taken och räknas inte med.');
});

test('budget: omkostnadstaket kan räknas på löner plus lönebikostnader', () => {
  const r = B({ bikost: 180000, omkostnader: 60000, underlag: 'total' });
  assert.equal(rad(r, 'Underlag för omkostnadstaket'), '562 640 kr (löner + lönebikostnader)');
  assert.equal(rad(r, 'Tak för allmänna omkostnader'), '56 264 kr');
  assert.equal(r.resultat, 400000 + 162640 + 56264 + 100000 + 50000);
});

test('budget: taken räknas utan flyttalsfel och avrundas nedåt', () => {
  assert.equal(rad(B({ lon: 300000, bikost: 0 }), 'Tak för lönebikostnader'), '121 980 kr');
  assert.equal(rad(B({ lon: 1001, bikost: 0, omkostnader: 0 }), 'Tak för lönebikostnader'), '407 kr', '1 001 × 0,4066 = 407,0066');
  assert.equal(rad(B({ lon: 1009, bikost: 0, omkostnader: 0 }), 'Tak för allmänna omkostnader'), '100 kr');
});

test('budget: utan löner blir taken 0 kr', () => {
  const r = B({ lon: 0, bikost: 1000, omkostnader: 1000 });
  assert.equal(r.resultat, 150000);
  assert.ok(r.varningar.some((t) => /Utan löner/.test(t)));
});

test('budget: ogiltiga värden ger ett lugnt felmeddelande i stället för ett belopp', () => {
  for (const v of [{ lon: -1 }, { lon: 1.5 }, { bikost: NaN }, { externa: '100' }, { ovriga: 1e11 }, { underlag: 'annat' }]) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
