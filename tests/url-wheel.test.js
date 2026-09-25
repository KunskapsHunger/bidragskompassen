'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const u = require('../js/core-url.js');
const w = require('../js/core-wheel.js');
const { grant } = require('./fixtures.js');

/* ---------- URL state ---------- */
test('encode/decode round-trip of catalog state', () => {
  const st = Object.assign(u.defaultCatalogState(), {
    q: 'läs & skriv', sort: 'stanger', view: 'lista',
    filters: { skolform: ['grundskola'], omrade: ['lasning', 'kultur'], myndighet: ['Kulturrådet'], typ: [], status: ['open'] }
  });
  const hash = u.encodeCatalogState(st);
  assert.ok(hash.startsWith('#alla-bidrag?q='));
  const back = u.decodeHash(hash);
  assert.equal(back.route, 'catalog');
  assert.deepEqual(back.state, st);
});

test('default state encodes to bare anchor and is detected as default', () => {
  assert.equal(u.encodeCatalogState(u.defaultCatalogState()), '#alla-bidrag');
  assert.equal(u.isDefaultState(u.defaultCatalogState()), true);
  assert.equal(u.isDefaultState(Object.assign(u.defaultCatalogState(), { q: 'x' })), false);
  assert.deepEqual(u.decodeHash('#alla-bidrag').state, u.defaultCatalogState());
});

test('decodeHash rejects unknown values and malformed input', () => {
  const r = u.decodeHash('#alla-bidrag?skolform=grundskola,hacker,grundskola&status=open,x&sort=evil&vy=3d&q=%E0%A4%A&zzz=1&typ');
  assert.deepEqual(r.state.filters.skolform, ['grundskola']);
  assert.deepEqual(r.state.filters.status, ['open']);
  assert.equal(r.state.sort, 'relevans');
  assert.equal(r.state.view, 'grid');
  assert.equal(r.state.q, '');
  const long = u.decodeHash('#alla-bidrag?q=' + 'a'.repeat(300));
  assert.equal(long.state.q.length, 100);
  assert.equal(u.decodeHash('#alla-bidrag?q=a+b').state.q, 'a b');
});

test('decodeHash routes', () => {
  assert.deepEqual(u.decodeHash(''), { route: 'none' });
  assert.deepEqual(u.decodeHash(undefined), { route: 'none' });
  assert.deepEqual(u.decodeHash('#bidrag/lararloner-2026'), { route: 'grant', id: 'lararloner-2026' });
  assert.deepEqual(u.decodeHash('#bidrag/<img>'), { route: 'none' });
  assert.deepEqual(u.decodeHash('#kompassen'), { route: 'section', id: 'kompassen' });
  assert.deepEqual(u.decodeHash('#Hej Hopp'), { route: 'none' });
  assert.equal(u.grantHash('abc'), '#bidrag/abc');
});

/* ---------- Wheel geometry ---------- */
test('schoolYearWindow picks the läsår containing today', () => {
  assert.deepEqual(w.schoolYearWindow('2026-09-25'), { start: '2026-07-01', end: '2027-06-30', startYear: 2026, label: '2026/27' });
  assert.equal(w.schoolYearWindow('2026-03-01').label, '2025/26');
  assert.equal(w.schoolYearWindow('2026-09-25', 1).label, '2027/28');
  assert.equal(w.schoolYearWindow('2026-09-25', -1).start, '2025-07-01');
});

test('angles: start of window is 0°, full window is 360°', () => {
  const win = w.schoolYearWindow('2026-09-25');
  assert.equal(w.angleFor('2026-07-01', win), 0);
  assert.ok(Math.abs(w.angleForEnd('2027-06-30', win) - 360) < 1e-9);
  const a = w.angleFor('2027-01-01', win);
  assert.ok(a > 175 && a < 185);
  assert.equal(w.inWindow('2026-09-25', win), true);
  assert.equal(w.inWindow('2027-07-01', win), false);
  assert.equal(w.inWindow('nope', win), false);
});

test('clipPeriod clips to window, handles points and outside periods', () => {
  const win = w.schoolYearWindow('2026-09-25');
  const c = w.clipPeriod({ fran: '2026-05-01', till: '2026-08-01' }, win);
  assert.equal(c.from, '2026-07-01');
  assert.equal(c.clippedStart, true);
  assert.equal(c.clippedEnd, false);
  assert.equal(w.clipPeriod({ fran: '2025-01-01', till: '2025-02-01' }, win), null);
  assert.equal(w.clipPeriod({ fran: null, till: null }, win), null);
  const p = w.clipPeriod({ fran: null, till: '2026-12-01' }, win);
  assert.equal(p.point, true);
  assert.equal(p.from, '2026-12-01');
  const swapped = w.clipPeriod({ fran: '2026-12-01', till: '2026-11-01' }, win);
  assert.equal(swapped.from, '2026-11-01');
  const tail = w.clipPeriod({ fran: '2027-06-01', till: '2027-09-01' }, win);
  assert.equal(tail.to, '2027-06-30');
  assert.equal(tail.clippedEnd, true);
});

test('polar and arcPath geometry', () => {
  assert.deepEqual(w.polar(100, 100, 50, 0), { x: 100, y: 50 });
  assert.deepEqual(w.polar(100, 100, 50, 90), { x: 150, y: 100 });
  assert.equal(w.arcPath(100, 100, 50, 0, 90), 'M 100 50 A 50 50 0 0 1 150 100');
  assert.equal(w.arcPath(100, 100, 50, 0, 270), 'M 100 50 A 50 50 0 1 1 50 100');
  assert.match(w.arcPath(100, 100, 50, 0, 360), /A 50 50 0 1 1 100 150 A 50 50 0 1 1 100 50$/);
  assert.equal(w.arcPath(100, 100, 50, 10, 5), 'M 108.68 50.76 A 50 50 0 0 1 108.68 50.76');
});

test('monthSegments: 12 months from July, contiguous', () => {
  const segs = w.monthSegments(w.schoolYearWindow('2026-09-25'));
  assert.equal(segs.length, 12);
  assert.equal(segs[0].label, 'juli');
  assert.equal(segs[0].year, 2026);
  assert.equal(segs[6].label, 'jan');
  assert.equal(segs[6].year, 2027);
  assert.equal(segs[7].last, '2027-02-28');
  for (let i = 1; i < 12; i++) assert.ok(Math.abs(segs[i].a0 - segs[i - 1].a1) < 1e-9);
});

test('wheelRows and periodsByMonth', () => {
  const win = w.schoolYearWindow('2026-09-25');
  const a = grant({ id: 'a', kortnamn: 'A', perioder: [
    { typ: 'ansokan', fran: '2026-09-01', till: '2026-10-15' },
    { typ: 'redovisning', fran: null, till: '2027-09-30' },
    { typ: 'beslut', fran: '2026-12-15', till: null }
  ] });
  const b = grant({ id: 'b', kortnamn: 'B', perioder: [{ typ: 'ansokan', fran: '2026-06-01', till: '2026-07-10' }] });
  const c = grant({ id: 'c', perioder: [{ typ: 'ansokan', fran: '2020-01-01', till: '2020-02-01' }] });
  const rows = w.wheelRows([a, b, c], win);
  assert.deepEqual(rows.map((r) => r.grant.id), ['a', 'b']);
  assert.deepEqual(rows[0].periods.map((p) => p.kind), ['window', 'event']);
  const months = w.periodsByMonth([a, b, c], win);
  assert.equal(months.length, 12);
  assert.deepEqual(months[0].items.map((i) => i.grant.id), ['b']);
  assert.deepEqual(months[2].items.map((i) => i.grant.id), ['a']);
  assert.equal(months[5].items[0].kind, 'event');
  assert.equal(w.periodKind({ typ: 'rekvisition' }), 'window');
  assert.equal(w.periodKind({ typ: 'redovisning' }), 'report');
});
