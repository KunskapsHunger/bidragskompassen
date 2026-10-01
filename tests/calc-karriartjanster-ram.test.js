'use strict';
/* Räkneexempel hämtade från förlagan (läsguiden till förordning 2019:1288) och förordningens egna exempel. */
const test = require('node:test');
const assert = require('node:assert/strict');
const ram = require('../js/calc/karriartjanster-ram.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const R = (v) => ram.berakna(Object.assign({ pott: 'pott1', medel: 100000000, egnaElever: 1000, allaElever: 100000, forraLasaret: true, harPott2Enhet: true }, v));

test('ram: 1 000 000 kr avrundas till 1 020 000 kr i pott 1', () => {
  const r = R({});
  assert.equal(r.resultat, 1020000);
  assert.equal(sp(r.forklaring), '1 000 000 kr avrundas till närmaste multipel av 85 000 kr: 1 020 000 kr.');
  assert.deepEqual(r.rader.map((x) => sp(x.varde)), ['1 %', '1 000 000 kr', '85 000 kr', '12']);
  assert.equal(sp(r.formel), '100 000 000 × 1 000 ÷ 100 000 = 1 000 000 kr → 1 020 000 kr');
});

test('ram: lägsta nivå 85 000 kr (pott 1) och 170 000 kr (pott 2)', () => {
  const low = R({ egnaElever: 50 });
  assert.equal(low.resultat, 85000);
  assert.match(sp(low.forklaring), /50 000 kr ligger under lägsta nivån/);
  assert.equal(R({ pott: 'pott2', egnaElever: 50 }).resultat, 170000);
  const p2 = R({ pott: 'pott2' });
  assert.equal(p2.resultat, 1020000, '1 000 000 / 170 000 = 5,88 → 6 × 170 000');
  assert.equal(sp(p2.rader[3].varde), '6');
});

test('ram: exakt mittläge avrundas uppåt, och spärrar enligt 17–18 §§', () => {
  assert.equal(R({ medel: 127500, egnaElever: 1, allaElever: 1 }).resultat, 170000, '1,5 × 85 000 → högre multipel');
  const noPrev = R({ forraLasaret: false });
  assert.equal(noPrev.resultat, 0);
  assert.ok(noPrev.blockerad);
  assert.match(noPrev.forklaring, /18 §/);
  assert.equal(R({ pott: 'pott2', harPott2Enhet: false }).resultat, 0);
  assert.equal(R({ pott: 'pott1', harPott2Enhet: false }).resultat, 1020000, 'pott 1 kräver ingen pott 2-enhet');
});

test('ram: ogiltiga värden', () => {
  assert.match(R({ egnaElever: 200000 }).fel, /större än/);
  assert.ok(R({ medel: 0 }).fel);
  assert.ok(R({ medel: 1.5 }).fel);
  assert.ok(R({ allaElever: NaN }).fel);
  assert.equal(R({ egnaElever: 1000.5 }).resultat > 0, true, 'genomsnittliga elevantal får ha decimaler');
});
