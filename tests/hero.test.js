'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const core = Object.assign({}, require('../js/core.js'), require('../js/core-search.js'), require('../js/core-smart.js'));
const hero = require('../js/core-hero.js');
const { grant } = require('./fixtures.js');

const TODAY = '2026-09-25';
const OPEN = [{ typ: 'ansokan', fran: '2026-09-01', till: '2026-10-15' }];
const NEJ_FRI = { fristaende: 'nej', kommun: 'ja', region: 'nej', stat: 'nej', ovriga: 'nej' };
const G = [
  grant({ id: 'laxhjalp', kortnamn: 'Läxhjälp', sammanfattning: 'Stöd efter skoltid.', perioder: OPEN }),
  grant({ id: 'lovskola', kortnamn: 'Lovskola', sammanfattning: 'Undervisning på lov, stöd för elever.' }),
  grant({ id: 'personal', kortnamn: 'Personalförstärkning', sammanfattning: 'Fler vuxna i skolan.', perioder: OPEN }),
  grant({ id: 'kommunstod', kortnamn: 'Stöd för kommuner', sokande: NEJ_FRI, perioder: OPEN }),
  grant({ id: 'gammalt', kortnamn: 'Gammalt stöd', giltighet: 'upphort' })
];
const IDX = core.buildIndex(G);
const IDS = G.map((g) => g.id);
const CTX = { today: TODAY, organiser: 'fristaende', showIneligible: false, showEnded: false };
const answer = (ranking, none) => core.parseSmartResponse({ ranking, none: none || 0 }, IDS);
const ids = (items) => items.map((it) => it.grant.id);

test('heroSuggest: local order, cannot-apply and ended last, empty query gives nothing', () => {
  const r = hero.heroSuggest(G, IDX, 'stöd', CTX, null, 6);
  assert.deepEqual(ids(r.items), ['laxhjalp', 'lovskola', 'kommunstod', 'gammalt']);
  assert.equal(r.items[2].dim, true);
  assert.equal(r.total, 4);
  assert.deepEqual(hero.heroSuggest(G, IDX, '  ', CTX, null).items, []);
  assert.equal(hero.heroSuggest(G, IDX, 'stöd', CTX, null, 2).items.length, 2);
});

test('heroSuggest: smart answer re-ranks and may only add allowed grants', () => {
  const a = answer([{ id: 'personal', p: 0.8 }, { id: 'kommunstod', p: 0.9 }, { id: 'gammalt', p: 0.9 }, { id: 'lovskola', p: 0.7 }]);
  const r = hero.heroSuggest(G, IDX, 'efter skoltid', CTX, a, 6);
  // summary-only local match (0.5) ranks below strong Jev hits – same weights as the catalog
  assert.deepEqual(ids(r.items), ['personal', 'lovskola', 'laxhjalp']);
  assert.equal(r.items.find((it) => it.grant.id === 'personal').smartOnly, true);
  const alla = hero.heroSuggest(G, IDX, 'efter skoltid', Object.assign({}, CTX, { organiser: 'kommun' }), a, 6);
  assert.ok(ids(alla.items).includes('kommunstod'), 'allowed for kommun');
  assert.ok(!ids(alla.items).includes('gammalt'), 'ended never added');
});

test('heroStats: totals without query, matching set with query, smart additions counted', () => {
  assert.deepEqual({ ...hero.heroStats(G, IDX, '', CTX, null) }, { total: 4, open: 3, forOrg: 3 });
  assert.deepEqual({ ...hero.heroStats(G, IDX, '', Object.assign({}, CTX, { showEnded: true }), null) }, { total: 5, open: 3, forOrg: 4 });
  assert.deepEqual({ ...hero.heroStats(G, IDX, 'stöd', CTX, null) }, { total: 3, open: 2, forOrg: 2 });
  const withSmart = hero.heroStats(G, IDX, 'stöd', CTX, answer([{ id: 'personal', p: 0.8 }]));
  assert.deepEqual({ ...withSmart }, { total: 4, open: 3, forOrg: 3 });
  assert.deepEqual({ ...hero.heroStats(G, IDX, 'zzzz', CTX, null) }, { total: 0, open: 0, forOrg: 0 });
  const kommun = hero.heroStats(G, IDX, 'stöd', Object.assign({}, CTX, { organiser: 'kommun' }), null);
  assert.equal(kommun.forOrg, 3);
  assert.ok(Object.isFrozen(withSmart));
});

test('counter labels, caption and screen-reader summary', () => {
  assert.deepEqual(hero.counterLabels('fristaende', false), ['bidrag', 'öppna nu', 'för fristående']);
  assert.deepEqual(hero.counterLabels('kommun', true), ['matchar', 'öppna nu', 'för kommunala']);
  assert.equal(hero.counterLabels('region', true)[2], 'för region/stat');
  assert.equal(hero.counterLabels('alla', true)[2], 'kan sökas');
  assert.equal(hero.counterLabels('okänd', true)[2], 'kan sökas');
  assert.equal(hero.queryCaption('  läxhjälp  '), 'för ”läxhjälp”');
  assert.equal(hero.queryCaption(''), '');
  assert.equal(hero.queryCaption('!!'), '');
  const long = hero.queryCaption('a'.repeat(80));
  assert.ok(long.endsWith('…”') && long.length < 45);
  assert.equal(hero.counterSummary({ total: 3, open: 1, forOrg: 2 }, 'läxhjälp', 'fristaende'),
    '3 bidrag matchar ”läxhjälp”, 1 öppna nu, 2 för fristående.');
  assert.equal(hero.counterSummary({ total: 1, open: 0, forOrg: 1 }, 'x y', 'alla'), '1 bidrag matchar ”x y”, 0 öppna nu, 1 kan sökas.');
  assert.equal(hero.counterSummary({ total: 67, open: 19, forOrg: 54 }, '', 'fristaende'), '67 bidrag, 19 öppna nu, 54 för fristående.');
});
