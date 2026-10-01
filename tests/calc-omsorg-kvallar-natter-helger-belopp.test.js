'use strict';
/* Uppskattat bidrag för omsorg på kvällar, nätter och helger, förordning (2012:994).
 * Beloppet per plats (1 160 kr) är räknat ur Skolverkets beslutsbilaga för 2026:
 * 78 969 320 kr till 161 huvudmän för 68 077 erbjudna platser januari–december. Exempel ur bilagan:
 * 22 platser → 25 520 kr, 144 platser → 167 040 kr, 840 platser → 974 400 kr. */
const test = require('node:test');
const assert = require('node:assert/strict');
const om = require('../js/calc/omsorg-kvallar-natter-helger-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' ');
const R = (v) => om.berakna(Object.assign({ barn: 10, manader: 12, perPlats: 1160 }, v));

test('omsorg: beloppet per plats stämmer med Skolverkets beslut för 2026', () => {
  assert.equal(om.PER_PLATS_2026 * 68077, 78969320);
  assert.equal(R({ barn: 22, manader: 1 }).resultat, 25520);
  assert.equal(R({ barn: 12, manader: 12 }).resultat, 167040);
  assert.equal(R({ barn: 70, manader: 12 }).resultat, 974400);
});

test('omsorg: tio barn hela året', () => {
  const r = R({});
  assert.equal(r.resultat, 139200);
  assert.equal(sp(r.formel), '10 × 12 × 1 160 kr = 139 200 kr');
  assert.equal(sp(r.rader[0].varde), '120');
  assert.equal(sp(r.rader[2].varde), '13 920 kr');
  assert.deepEqual(r.varningar, []);
});

test('omsorg: ett halvår (begäran om utbetalning)', () => {
  const r = R({ barn: 8, manader: 6 });
  assert.equal(r.resultat, 55680);
  assert.match(sp(r.sammanfattning), /8 barn i 6 månader · 48 erbjudna platser/);
});

test('omsorg: annat belopp per plats ger en varning', () => {
  const r = R({ perPlats: 1000 });
  assert.equal(r.resultat, 120000);
  assert.equal(r.varningar.length, 1);
});

test('omsorg: inga platser', () => {
  const r = R({ barn: 0 });
  assert.equal(r.resultat, 0);
  assert.ok(r.blockerad);
  assert.match(r.forklaring, /30 timmar/);
  assert.ok(R({ manader: 0 }).blockerad);
});

test('omsorg: ogiltiga värden', () => {
  assert.ok(R({ barn: -1 }).fel);
  assert.ok(R({ barn: 2.5 }).fel);
  assert.ok(R({ manader: 13 }).fel);
  assert.ok(R({ perPlats: 0 }).fel);
  assert.ok(R({ perPlats: NaN }).fel);
});
