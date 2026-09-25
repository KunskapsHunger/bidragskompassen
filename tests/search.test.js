'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const s = require('../js/core-search.js');
const { grant } = require('./fixtures.js');

const TODAY = '2026-09-25';
const G = [
  grant({ id: 'lon', kortnamn: 'Lärarlönelyftet', namn: 'Statsbidrag för höjda lärarlöner', omraden: ['lon-karriar'],
    skolformer: ['grundskola', 'gymnasieskola'], typ: 'rekvisition', nyckelord: ['lön', 'karriär'],
    perioder: [{ typ: 'rekvisition', fran: '2026-10-01', till: '2026-11-02' }] }),
  grant({ id: 'las', kortnamn: 'Läslyftet', namn: 'Bidrag för läsning', omraden: ['lasning'],
    sammanfattning: 'Pengar till skolbibliotek och böcker.',
    perioder: [{ typ: 'ansokan', fran: '2026-09-01', till: '2026-10-15' }] }),
  grant({ id: 'yrk', kortnamn: 'Yrkesvux', myndighet: 'Skolverket', omraden: ['yrke'], skolformer: ['komvux'],
    sokande: { fristaende: 'nej', kommun: 'ja', region: 'ja', stat: 'nej', ovriga: 'nej' },
    perioder: [{ typ: 'ansokan', fran: '2026-08-01', till: '2026-09-15' }] }),
  grant({ id: 'kul', kortnamn: 'Skapande skola', myndighet: 'Kulturrådet', omraden: ['kultur'],
    perioder: [{ typ: 'ansokan', fran: '2027-01-10', till: '2027-02-10' }] }),
  grant({ id: 'aut', kortnamn: 'Elevhälsa', typ: 'automatisk', omraden: ['stod'],
    sokande: { fristaende: 'via-kommun', kommun: 'ja', region: 'nej', stat: 'nej', ovriga: 'nej' } })
];
const IDX = s.buildIndex(G);
const CTX = { today: TODAY, organiser: 'fristaende', showIneligible: false };
const state = (patch) => Object.assign({ q: '', filters: s.emptyFilters(), sort: 'relevans' }, patch);
const ids = (items) => items.map((it) => it.grant.id);

test('buildIndex derives normalised fields without mutating grants', () => {
  assert.equal(IDX[0].fields.kortnamn, 'lararlonelyftet');
  assert.equal(IDX[0].fields.omraden, 'lararloner karriar');
  assert.ok(Object.isFrozen(G[0]));
});

test('scoreEntry: diacritic-tolerant, prefix beats partial, AND across tokens', () => {
  const t = (q) => s.scoreEntry(IDX[0], require('../js/core.js').tokenize(q));
  assert.ok(t('lararlon') > 0, 'lararlon finds lärarlön');
  assert.ok(t('lärar') > t('lonelyft'), 'word start ranks above mid-word');
  assert.ok(t('lön') > t('onelyft'), 'exact keyword ranks above partial');
  assert.equal(t('lön zzz'), 0);
  assert.equal(t(''), 0);
  assert.equal(t('ft'), 0, 'two-letter tokens need a word start');
  assert.ok(t('lo') > 0);
});

test('runCatalog: search, eligibility hiding, relevance sort', () => {
  const r = s.runCatalog(G, IDX, state({ q: 'läs' }), CTX);
  assert.deepEqual(ids(r.items), ['las']);
  const all = s.runCatalog(G, IDX, state(), CTX);
  assert.equal(all.hiddenIneligible, 1);
  assert.ok(!ids(all.items).includes('yrk'));
  assert.equal(all.items[0].grant.id, 'las', 'open grants first by default');
  const shown = s.runCatalog(G, IDX, state(), Object.assign({}, CTX, { showIneligible: true }));
  const yrk = shown.items.find((it) => it.grant.id === 'yrk');
  assert.equal(yrk.dim, true);
  assert.equal(shown.hiddenIneligible, 0);
  const alla = s.runCatalog(G, IDX, state(), Object.assign({}, CTX, { organiser: 'alla' }));
  assert.equal(alla.items.length, 5);
});

test('matchesFilters: OR within, AND across categories', () => {
  const f = Object.assign(s.emptyFilters(), { omrade: ['lasning', 'kultur'] });
  assert.deepEqual(ids(s.runCatalog(G, IDX, state({ filters: f }), CTX).items).sort(), ['kul', 'las']);
  const f2 = Object.assign({}, f, { status: ['open'] });
  assert.deepEqual(ids(s.runCatalog(G, IDX, state({ filters: f2 }), CTX).items), ['las']);
  const f3 = Object.assign(s.emptyFilters(), { myndighet: ['Kulturrådet'], typ: ['ansokan'], skolform: ['grundskola'] });
  assert.deepEqual(ids(s.runCatalog(G, IDX, state({ filters: f3 }), CTX).items), ['kul']);
  assert.equal(s.matchesFilters(G[0], undefined, TODAY), true);
});

test('sorting: A–Ö and closing soon', () => {
  const ao = s.runCatalog(G, IDX, state({ sort: 'ao' }), Object.assign({}, CTX, { organiser: 'alla' }));
  assert.deepEqual(ids(ao.items), ['aut', 'lon', 'las', 'kul', 'yrk']);
  const cl = s.runCatalog(G, IDX, state({ sort: 'stanger' }), Object.assign({}, CTX, { organiser: 'alla' }));
  assert.deepEqual(ids(cl.items).slice(0, 3), ['las', 'lon', 'kul']);
});

test('suggest returns top N and total, eligible first', () => {
  const r = s.suggest(G, IDX, 'skol', CTX, 1);
  assert.equal(r.items.length, 1);
  assert.ok(r.total >= 2);
  assert.deepEqual(s.suggest(G, IDX, '', CTX).items, []);
});

test('uniqueMyndigheter is sorted and unique', () => {
  assert.deepEqual(s.uniqueMyndigheter(G), ['Kulturrådet', 'Skolverket']);
});

test('goalsToOmraden de-duplicates and ignores unknown goals', () => {
  assert.deepEqual(s.goalsToOmraden(['stod', 'loner', 'stod', 'nope']), ['stod', 'likvardighet', 'lon-karriar']);
});

test('rankWizard: filters by skolform/goal/snart, explains, excludes ineligible', () => {
  const r = s.rankWizard(G, { skolformer: ['grundskola'], goals: ['lasning', 'loner'], snart: true }, CTX);
  assert.deepEqual(ids(r.items), ['las', 'lon']);
  assert.ok(r.items[0].reasons.includes('Passar för grundskola'));
  assert.ok(r.items[0].reasons.some((x) => x.startsWith('Öppen nu – stänger 15 okt')));
  assert.ok(r.items[1].reasons.includes('Öppnar 1 okt'));

  const y = s.rankWizard(G, { skolformer: ['komvux'], goals: [], snart: false }, CTX);
  assert.equal(y.items.length, 0);
  assert.equal(y.excluded, 1);
  const k = s.rankWizard(G, { skolformer: ['komvux'], goals: [], snart: false }, Object.assign({}, CTX, { organiser: 'kommun' }));
  assert.deepEqual(ids(k.items), ['yrk']);

  const a = s.rankWizard(G, { skolformer: [], goals: ['stod'], snart: true }, CTX);
  assert.deepEqual(ids(a.items), ['aut']);
  assert.ok(a.items[0].reasons.includes('Går via kommunen'));
  assert.ok(a.items[0].reasons.includes('Ingen ansökan behövs'));

  const later = s.rankWizard(G, { skolformer: [], goals: ['kultur'], snart: false }, CTX);
  assert.deepEqual(ids(later.items), ['kul']);
  const none = s.rankWizard(G, { skolformer: [], goals: ['kultur'], snart: true }, CTX);
  assert.equal(none.items.length, 0);
});

test('ended grants are hidden by default, shown on request, excluded from the finder', () => {
  const ended = grant({ id: 'old', kortnamn: 'Gammalt läsbidrag', giltighet: 'upphort', omraden: ['lasning'] });
  const list = G.concat([ended]);
  const idx = s.buildIndex(list);
  const def = s.runCatalog(list, idx, state(), CTX);
  assert.equal(def.hiddenEnded, 1);
  assert.ok(!ids(def.items).includes('old'));
  const shown = s.runCatalog(list, idx, state(), Object.assign({}, CTX, { showEnded: true }));
  assert.ok(ids(shown.items).includes('old'));
  assert.equal(shown.items[shown.items.length - 1].grant.id, 'old', 'ended sorts last');
  const f = Object.assign(s.emptyFilters(), { status: ['ended'] });
  assert.deepEqual(ids(s.runCatalog(list, idx, state({ filters: f }), CTX).items), ['old']);
  const sug = s.suggest(list, idx, 'läs', CTX);
  assert.equal(sug.items[sug.items.length - 1].grant.id, 'old');
  const wiz = s.rankWizard(list, { skolformer: [], goals: ['lasning'], snart: false }, CTX);
  assert.ok(!ids(wiz.items).includes('old'));
});
