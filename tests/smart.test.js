'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const core = Object.assign({}, require('../js/core.js'), require('../js/core-search.js'));
const smart = require('../js/core-smart.js');
const { grant } = require('./fixtures.js');

const CONFIG = { smartSearchUrl: 'https://example.supabase.co/functions/v1/sok', publishableKey: 'sb_publishable_x' };
const TODAY = '2026-09-25';
const CTX = { today: TODAY, organiser: 'fristaende', showIneligible: false, showEnded: false };
const G = [
  grant({ id: 'personal', kortnamn: 'Personalförstärkning', sammanfattning: 'Anställ fler vuxna, till exempel lärarassistenter.', omraden: ['personal'] }),
  grant({ id: 'lasning', kortnamn: 'Läsning och böcker', sammanfattning: 'Böcker till klassrummet.', omraden: ['lasning'] }),
  grant({ id: 'kultur', kortnamn: 'Skapande skola', sammanfattning: 'Teater och musik.', omraden: ['kultur'] }),
  grant({ id: 'insyn', kortnamn: 'Rätt till insyn', sammanfattning: 'Stöd till föräldrar.', omraden: ['ovrigt'] }),
  grant({ id: 'gammal', kortnamn: 'Gammalt klassrumsbidrag', giltighet: 'upphort', omraden: ['personal'] }),
  grant({ id: 'kommunal', kortnamn: 'Bara för kommuner', omraden: ['personal'],
    sokande: { fristaende: 'nej', kommun: 'ja', region: 'nej', stat: 'nej', ovriga: 'nej' } })
];
const IDX = core.buildIndex(G);
const IDS = G.map((g) => g.id);
const state = (patch) => Object.assign({ q: '', filters: core.emptyFilters(), sort: 'relevans' }, patch);
const run = (q, filters) => core.runCatalog(G, IDX, state({ q, filters: filters || core.emptyFilters() }), CTX);
const pool = (filters) => run('', filters).items;
const answer = (ranking, extra) => smart.parseSmartResponse(Object.assign({
  model: 'jev-latest', ranking, none: 0.05, omrade: { id: null, confidence: 0 }, skolform: { id: null, confidence: 0 }
}, extra), IDS);
const ids = (items) => items.map((it) => it.grant.id);

test('query helpers: cleaning, length limits, word count, cache key', () => {
  assert.equal(smart.cleanQuery('  fler   vuxna \n i skolan '), 'fler vuxna i skolan');
  assert.equal(smart.cleanQuery(42), '');
  assert.equal(smart.isSmartQuery('ab'), false);
  assert.equal(smart.isSmartQuery('abc'), true);
  assert.equal(smart.isSmartQuery('!!!'), false, 'needs at least one real word');
  assert.equal(smart.isSmartQuery('a'.repeat(201)), false);
  assert.equal(smart.wordCount(' elever som inte  går '), 4);
  assert.equal(smart.wordCount(''), 0);
  assert.equal(smart.smartKey('Läxhjälp ', 'fristaende'), smart.smartKey('laxhjalp', 'fristaende'));
  assert.notEqual(smart.smartKey('laxhjalp', 'fristaende'), smart.smartKey('laxhjalp', 'kommun'));
  assert.equal(smart.smartKey('x y z', 'okänd'), 'alla|x y z');
});

test('buildSmartRequest: headers, cleaned body, organiser mapping, refuses bad config', () => {
  const req = smart.buildSmartRequest('  fler vuxna  ', 'region', CONFIG);
  assert.equal(req.url, CONFIG.smartSearchUrl);
  assert.equal(req.init.method, 'POST');
  assert.deepEqual(req.init.headers, { 'Content-Type': 'application/json', apikey: 'sb_publishable_x' });
  assert.deepEqual(JSON.parse(req.init.body), { q: 'fler vuxna', organiser: 'region' });
  assert.equal(JSON.parse(smart.buildSmartRequest('abc', 'hacker', CONFIG).init.body).organiser, 'alla');
  assert.equal(smart.buildSmartRequest('abc', 'alla', undefined), null);
  assert.equal(smart.buildSmartRequest('abc', 'alla', { smartSearchUrl: 'http://insecure.se', publishableKey: 'k' }), null);
  assert.equal(smart.buildSmartRequest('abc', 'alla', { smartSearchUrl: CONFIG.smartSearchUrl, publishableKey: ' ' }), null);
  assert.equal(smart.buildSmartRequest('ab', 'alla', CONFIG), null);
});

test('parseSmartResponse: drops unknown/duplicate ids, clamps, sorts, validates vocab', () => {
  const r = smart.parseSmartResponse({
    model: 'jev-latest',
    ranking: [{ id: 'kultur', p: 0.2 }, { id: 'okand', p: 0.9 }, { id: 'personal', p: '0.66' }, { id: 'kultur', p: 0.99 },
      { id: 'lasning', p: 7 }, { id: 'insyn', p: 'x' }, null, { p: 0.5 }],
    none: -3,
    omrade: { id: 'personal', confidence: 1.4 },
    skolform: { id: 'hittepa', confidence: 0.9 }
  }, IDS);
  assert.deepEqual(r.ranking.map((x) => [x.id, x.p]), [['lasning', 1], ['personal', 0.66], ['kultur', 0.2]]);
  assert.equal(r.none, 0);
  assert.deepEqual(r.omrade, { id: 'personal', confidence: 1 });
  assert.deepEqual(r.skolform, { id: null, confidence: 0 });
  assert.ok(Object.isFrozen(r) && Object.isFrozen(r.ranking));
  assert.equal(smart.parseSmartResponse(null, IDS), null);
  assert.equal(smart.parseSmartResponse({ error: 'x' }, IDS), null);
  assert.equal(smart.parseSmartResponse({ ranking: 'nope' }, IDS), null);
  const empty = smart.parseSmartResponse({ ranking: [] }, undefined);
  assert.deepEqual([...empty.ranking], []);
  assert.equal(empty.model, '');
  assert.deepEqual(empty.omrade, { id: null, confidence: 0 });
});

test('mergeSmart: without an answer the local order is kept untouched', () => {
  const local = run('klassrum').items;
  const m = smart.mergeSmart(local, pool(), null, 1);
  assert.deepEqual(ids(m.items), ids(local));
  assert.equal(m.changed, false);
  assert.deepEqual(smart.mergeSmart(undefined, undefined, null, 0).items, []);
});

test('mergeSmart: a strong intent hit rises above a weak local match', () => {
  const res = run('till'); // one short-name match, two weak summary matches
  assert.deepEqual(ids(res.items), ['insyn', 'lasning', 'personal']);
  const m = smart.mergeSmart(res.items, pool(), answer([{ id: 'personal', p: 0.66 }]), res.tokens.length);
  assert.equal(m.items[0].grant.id, 'personal');
  assert.ok(m.items[0].smartP === 0.66 && m.items[0].smartOnly === false);
});

test('mergeSmart: a confident Jev-only intent hit beats a mediocre local match', () => {
  // real case: "elever som inte går till skolan" → skolsociala-team p 0.82, none 0.01 vs an all-token summary match
  const res = run('till');
  const m = smart.mergeSmart(res.items.slice(1), pool(), answer([{ id: 'kultur', p: 0.82 }], { none: 0.01 }), res.tokens.length);
  assert.equal(m.items[0].grant.id, 'kultur');
  assert.equal(m.items[0].smartOnly, true);
});

test('mergeSmart: Jev alone cannot beat a strong local match (confidently wrong case)', () => {
  const res = run('skapande skola');
  assert.equal(res.items[0].grant.id, 'kultur');
  const m = smart.mergeSmart(res.items, pool(), answer([{ id: 'insyn', p: 0.77 }], { none: 0.16 }), res.tokens.length);
  assert.equal(m.items[0].grant.id, 'kultur');
  const added = m.items.find((it) => it.grant.id === 'insyn');
  assert.equal(added.smartOnly, true);
  assert.equal(m.added, 1);
  assert.equal(m.changed, true);
});

test('mergeSmart: additions need p ≥ 0.10 and must be allowed by filters, organiser and ended rules', () => {
  const res = run('teater');
  const a = answer([{ id: 'insyn', p: 0.09 }, { id: 'gammal', p: 0.9 }, { id: 'kommunal', p: 0.8 }, { id: 'lasning', p: 0.3 }]);
  const m = smart.mergeSmart(res.items, pool(), a, res.tokens.length);
  assert.deepEqual(ids(m.items).sort(), ['kultur', 'lasning']);
  const onlyKultur = Object.assign(core.emptyFilters(), { omrade: ['kultur'] });
  const f = smart.mergeSmart(run('teater', onlyKultur).items, pool(onlyKultur), a, 1);
  assert.deepEqual(ids(f.items), ['kultur'], 'filtered-out grants never come back');
  const noFit = smart.mergeSmart(res.items, pool(), answer([{ id: 'lasning', p: 0.8 }], { none: 0.6 }), 1);
  assert.deepEqual(ids(noFit.items), ['kultur'], 'nothing is added when Jev says no grant fits');
});

test('mergeSmart: weak p only nudges, never mutates inputs, reports unchanged order', () => {
  const res = run('skola');
  const before = JSON.stringify(res.items);
  const m = smart.mergeSmart(res.items, pool(), answer([{ id: res.items[0].grant.id, p: 0.05 }]), 1);
  assert.equal(JSON.stringify(res.items), before);
  assert.equal(m.changed, false);
  assert.equal(smart.smartBoost(0.1, 0), 0.05);
  assert.equal(smart.smartBoost(0.5, 0.25), 0.25);
  assert.equal(smart.smartBoost(0.8, 0.6), 0, 'a likely no-fit answer gives no boost');
  assert.equal(smart.smartLocalNorm(12, 1), 1);
  assert.equal(smart.smartLocalNorm(3, 1), 0.5);
  assert.equal(smart.smartLocalNorm(3, 0), 0);
});

test('suggestFilters: confident area/school form, not when that filter group is already used', () => {
  const a = answer([], { omrade: { id: 'lasning', confidence: 0.8 }, skolform: { id: 'grundskola', confidence: 0.61 } });
  assert.deepEqual(smart.suggestFilters(a, core.emptyFilters()).map((c) => [c.key, c.id, c.label]),
    [['omrade', 'lasning', 'Läsning, bibliotek & läromedel'], ['skolform', 'grundskola', 'Grundskola']]);
  const used = Object.assign(core.emptyFilters(), { omrade: ['kultur'] });
  assert.deepEqual(smart.suggestFilters(a, used).map((c) => c.key), ['skolform']);
  const unsure = answer([], { omrade: { id: 'lasning', confidence: 0.59 } });
  assert.deepEqual(smart.suggestFilters(unsure, undefined), []);
  assert.deepEqual(smart.suggestFilters(null, core.emptyFilters()), []);
  // consistency guard: the chip must not contradict the strong hits (real case: "komvux" at 0.98)
  const byId = Object.fromEntries(G.map((g) => [g.id, g]));
  const wrong = answer([{ id: 'personal', p: 0.72 }, { id: 'insyn', p: 0.1 }],
    { omrade: { id: 'personal', confidence: 0.75 }, skolform: { id: 'komvux', confidence: 0.98 } });
  assert.deepEqual(smart.suggestFilters(wrong, core.emptyFilters(), byId).map((c) => c.id), ['personal']);
  const weakOnly = answer([{ id: 'insyn', p: 0.1 }], { omrade: { id: 'ovrigt', confidence: 0.9 } });
  assert.deepEqual(smart.suggestFilters(weakOnly, core.emptyFilters(), byId), [], 'needs a strong hit');
});

test('isNoFit: high "none" and few local hits', () => {
  assert.equal(smart.isNoFit(answer([], { none: 0.7 }), 1), true);
  assert.equal(smart.isNoFit(answer([], { none: 0.7 }), 5), false);
  assert.equal(smart.isNoFit(answer([], { none: 0.3 }), 0), false);
  assert.equal(smart.isNoFit(null, 0), false);
});

test('hero: asks Jev only for real questions with few local suggestions; picks allowed extras', () => {
  assert.equal(smart.wantsHeroSmart('laxhjalp', 0), false, 'single word (film storyboard) stays local');
  assert.equal(smart.wantsHeroSmart('fler vuxna i klassrummet', 2), true);
  assert.equal(smart.wantsHeroSmart('fler vuxna i klassrummet', 3), false);
  const a = answer([{ id: 'personal', p: 0.6 }, { id: 'kultur', p: 0.3 }, { id: 'insyn', p: 0.2 }, { id: 'lasning', p: 0.05 }]);
  assert.deepEqual(smart.heroSmartIds(a, ['personal', 'kultur', 'insyn', 'lasning'], ['kultur'], 2), ['personal', 'insyn']);
  assert.deepEqual(smart.heroSmartIds(a, ['kultur'], [], undefined), ['kultur']);
  assert.deepEqual(smart.heroSmartIds(null, IDS, [], 3), []);
});
