'use strict';
/* Räkneexempel som går att kontrollera mot 7 och 9 §§ förordning (2021:237) – högst 15 % av lönen vid minst 30 %
 * forskningstid, lägre tid minskar ersättningen i samma proportion, huvudmannen betalar minst lika mycket – och
 * Skolverkets sida för 2026/27 (utbetalning per termin i proportion till antal månader, exempel 1 och 2). */
const test = require('node:test');
const assert = require('node:assert/strict');
const belopp = require('../js/calc/praktiknara-forskning-belopp.js');

const sp = (s) => String(s).replace(/\s/g, ' '); // sv-SE groups digits with a no-break space
const B = (v) => belopp.berakna(Object.assign({ arslon: 600000, tid: 30, host: 6, varen: 6 }, v));

test('praktiknära: konstanterna följer 9 §', () => {
  assert.equal(belopp.id, 'praktiknara-forskning-belopp');
  assert.equal(belopp.MAX_TID, 30);
  assert.equal(belopp.ANDEL_BIDRAG, 0.5);
});

test('praktiknära: 30 % forskning hela året ger 15 % av årslönen', () => {
  const r = B({});
  assert.equal(r.resultat, 90000);
  assert.equal(sp(r.formel), '600 000 × 0,3 × 0,5 × 12/12 = 90 000 kr');
  assert.deepEqual(r.delar.map((d) => d.varde), [45000, 45000]);
  assert.equal(sp(r.rader[2].varde), '180 000 kr', 'lönekostnad för forskningstiden');
  assert.equal(sp(r.rader[3].varde), '90 000 kr', 'huvudmannens egen del (7 §)');
  assert.equal(sp(r.extra[0].varde), '15 %');
  assert.deepEqual(r.varningar, []);
});

test('praktiknära: lägre forskningstid minskar bidraget i samma proportion', () => {
  const r = B({ tid: 15 });
  assert.equal(r.resultat, 45000);
  assert.equal(sp(r.extra[0].varde), '7,5 %');
  assert.equal(r.varningar.length, 1);
});

test('praktiknära: Skolverkets exempel – hela beloppet på hösten, eller 4 + 5 månader', () => {
  const e1 = B({ host: 6, varen: 0 });
  assert.equal(e1.resultat, 45000);
  assert.deepEqual(e1.delar.map((d) => d.varde), [45000, 0]);
  const e2 = B({ host: 4, varen: 5 });
  assert.equal(e2.resultat, 67500);
  assert.deepEqual(e2.delar.map((d) => d.varde), [30000, 37500], 'lägre på hösten, högre på våren');
  assert.equal(sp(e2.sammanfattning), '30 % forskningstid · 9 månader');
});

test('praktiknära: ogiltiga värden ger ett lugnt felmeddelande', () => {
  const ogiltiga = [
    { arslon: 0 }, { arslon: 1.5 }, { tid: 0 }, { tid: 31 }, { tid: NaN },
    { host: 7 }, { varen: -1 }, { host: 0, varen: 0 }, { host: 2.5 }, { arslon: '600000' }
  ];
  for (const v of ogiltiga) {
    const r = B(v);
    assert.ok(r.fel && r.resultat === undefined, JSON.stringify(v));
  }
});
