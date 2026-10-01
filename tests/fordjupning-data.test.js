'use strict';
/* Every fördjupning listed in data/fordjupning/index.js must have a valid data file for a real grant,
 * its calculator modules must exist and run on their defaults and examples, and the content must not
 * be older than 400 days (kontrollerad) – stale guides fail here so someone re-checks the sources. */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const core = require('../js/core.js');
const fd = require('../js/core-fordjupning.js');

const ROOT = path.join(__dirname, '..');
const DATA = path.join(ROOT, 'data');
const today = core.isoFromDate(new Date());

function sandbox() { const w = {}; w.window = w; return vm.createContext(w); }
function load(file, ctx) { vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file }); }

const ctx = sandbox();
fs.readdirSync(DATA).filter((f) => /^grants-.*\.js$/.test(f)).forEach((f) => load(path.join(DATA, f), ctx));
const grantIds = (ctx.SB_GRANTS || []).map((g) => g.id);
load(path.join(DATA, 'fordjupning', 'index.js'), ctx);
const index = ctx.SB_FORDJUPNING_INDEX;
const calcDir = path.join(ROOT, 'js', 'calc');
const calcIds = fs.readdirSync(calcDir).filter((f) => f.endsWith('.js')).map((f) => f.replace(/\.js$/, ''));

test('the fördjupning index is a list of unique, safe ids', () => {
  assert.ok(Array.isArray(index) && index.length > 0);
  assert.equal(new Set(index).size, index.length);
  index.forEach((id) => assert.ok(fd.isSafeId(id), id));
});

for (const id of index || []) {
  test('fördjupning "' + id + '": data file, grant, schema, calculators, freshness', (t) => {
    const file = path.join(DATA, 'fordjupning', id + '.js');
    assert.ok(fs.existsSync(file), 'saknar ' + path.relative(ROOT, file));
    load(file, ctx);
    const guide = ctx.SB_FORDJUPNING && ctx.SB_FORDJUPNING[id];
    assert.ok(guide, 'filen registrerar inte window.SB_FORDJUPNING["' + id + '"]');
    assert.equal(guide.id, id);
    assert.ok(grantIds.includes(id), 'inget bidrag med id ' + id + ' i data/grants-*.js');
    assert.deepEqual(fd.validateGuide(guide, { grantIds, calcIds }), []);

    for (const k of guide.kalkylatorer || []) {
      const mod = require(path.join(calcDir, k.modul + '.js'));
      assert.equal(mod.id, k.modul, 'modulens id ska vara filnamnet');
      assert.equal(typeof mod.berakna, 'function');
      const runs = [fd.fieldDefaults(k.falt)].concat((k.exempel || []).map((e) => fd.applyExample(k.falt, e)));
      runs.forEach((values) => {
        const r = mod.berakna(values);
        assert.ok(r && !r.fel && typeof r.resultat === 'number' && isFinite(r.resultat), k.modul + ': ' + JSON.stringify(values));
      });
    }

    const age = fd.daysSince(guide.kontrollerad, today);
    t.diagnostic(id + ': kontrollerad ' + guide.kontrollerad + ' (' + age + ' dagar sedan)');
    assert.ok(!fd.isStale(guide.kontrollerad, today), id + ' är äldre än ' + fd.FD_STALE_DAYS + ' dagar – stäm av mot källorna och uppdatera "kontrollerad".');
  });
}

test('every calculator module in js/calc is used by some fördjupning', () => {
  const used = new Set();
  (index || []).forEach((id) => {
    const g = ctx.SB_FORDJUPNING && ctx.SB_FORDJUPNING[id];
    (g && g.kalkylatorer || []).forEach((k) => used.add(k.modul));
  });
  calcIds.forEach((c) => assert.ok(used.has(c), 'oanvänd räknarmodul: ' + c));
});
