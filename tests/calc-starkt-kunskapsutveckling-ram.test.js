'use strict';
/* Påhittade räkneexempel för 4 § förordning (2018:49): ramen bestäms proportionellt utifrån indexvärde och elevantal.
 * Proportionaliteten (dubbelt index eller dubbla elever → dubbel ram) beskrivs i Skolverkets rapport om
 * statsbidraget för stärkt kunskapsutveckling (2025), fotnot 10. */
const test = require('node:test');
const assert = require('node:assert/strict');
const ram = require('../js/calc/starkt-kunskapsutveckling-ram.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const R = (v) => ram.berakna(Object.assign({
  medel: 100000000, lasar: 'tre', elever1: 1000, elever2: 1050, elever3: 1100, index: 120, ovrigaElever: 100000, ovrigtIndex: 100
}, v));

test('ram: tre läsår, index 120 → 1 244 322 kr', () => {
  const r = R({});
  // snitt 1 050; 1 050 × 120 = 126 000; 100 000 × 100 = 10 000 000; 1e8 × 126 000 / 10 126 000 = 1 244 321,55
  assert.equal(r.resultat, 1244322);
  assert.equal(sp(r.formel), '100 000 000 × 126 000 ÷ 10 126 000 = 1 244 322 kr');
  assert.deepEqual(r.rader.map((x) => sp(x.varde)), ['1 050', '1,2443 %', '1 185 kr', '988 kr']);
  assert.deepEqual(r.varningar, []);
});

test('ram: bidrag per elev följer indexet', () => {
  const r = R({});
  const per = r.resultat / 1050;
  const ovrig = 100000000 * 100 / 10126000;
  assert.ok(Math.abs(per / ovrig - 1.2) < 1e-6, 'index 120 mot 100 → 1,2 gånger så mycket per elev');
  const lika = R({ index: 100 });
  assert.equal(sp(lika.rader[2].varde), sp(lika.rader[3].varde), 'samma index → samma belopp per elev');
});

test('ram: proportionell – dubbla elever eller dubbelt index ger samma viktade elevantal', () => {
  const a = R({ elever1: 2000, elever2: 2100, elever3: 2200 });
  const b = R({ index: 240 });
  assert.equal(a.resultat, b.resultat);
  assert.match(sp(a.formel), /× 252 000 ÷/);
});

test('ram: kortare tid än tre läsår (4 § tredje stycket)', () => {
  const tva = R({ lasar: 'tva', elever1: 999999 });
  assert.equal(sp(tva.rader[0].varde), '1 075', 'äldsta läsåret räknas inte med');
  assert.match(tva.rader[0].etikett, /2 läsår/);
  assert.equal(tva.varningar.length, 1);
  const ett = R({ lasar: 'ett', elever3: 200 });
  assert.equal(ett.resultat, 239425);
});

test('ram: inga elever läsåret närmast före → ingen ram', () => {
  const r = R({ elever3: 0 });
  assert.equal(r.resultat, 0);
  assert.ok(r.blockerad);
  assert.match(r.forklaring, /4 §/);
  assert.equal(R({ elever1: 0 }).resultat > 0, true, 'noll elever ett äldre läsår spärrar inte');
});

test('ram: ingen lägsta nivå – liten huvudman får ett litet belopp', () => {
  assert.equal(R({ elever1: 40, elever2: 45, elever3: 50, index: 180 }).resultat, 80934);
  assert.equal(R({ lasar: 'ett', elever3: 1, index: 50, ovrigaElever: 1000000 }).resultat, 50);
});

test('ram: ogiltiga värden', () => {
  assert.ok(R({ medel: 0 }).fel);
  assert.ok(R({ medel: 1.5 }).fel);
  assert.ok(R({ elever3: 10.5 }).fel);
  assert.ok(R({ elever2: -1 }).fel);
  assert.ok(R({ index: 0 }).fel);
  assert.ok(R({ ovrigtIndex: NaN }).fel);
  assert.ok(R({ lasar: 'ett', elever1: NaN }).resultat > 0, 'dolda fält ignoreras');
  assert.ok(R({ ovrigaElever: 1234.5 }).resultat > 0, 'övriga elever får vara ett genomsnitt med decimaler');
});
