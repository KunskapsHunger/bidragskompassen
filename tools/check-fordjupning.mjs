#!/usr/bin/env node
// Validates one fördjupning without it being listed in data/fordjupning/index.js yet:
//   node tools/check-fordjupning.mjs <id>
// Runs the same checks as tests/fordjupning-data.test.js (schema, grant id, calculator modules on
// defaults and examples, freshness) and prints every calculator's result for the defaults.
import { createRequire } from 'node:module';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const require = createRequire(import.meta.url);
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const core = require(join(ROOT, 'js', 'core.js'));
const fd = require(join(ROOT, 'js', 'core-fordjupning.js'));

const id = process.argv[2];
if (!id || !fd.isSafeId(id)) {
  console.error('Usage: node tools/check-fordjupning.mjs <id>');
  process.exit(1);
}

const ctx = vm.createContext({});
ctx.window = ctx;
const load = (file) => vm.runInContext(readFileSync(file, 'utf8'), ctx, { filename: file });
readdirSync(join(ROOT, 'data')).filter((f) => /^grants-.*\.js$/.test(f)).forEach((f) => load(join(ROOT, 'data', f)));
const grantIds = (ctx.SB_GRANTS || []).map((g) => g.id);
const calcDir = join(ROOT, 'js', 'calc');
const calcIds = readdirSync(calcDir).filter((f) => f.endsWith('.js')).map((f) => f.replace(/\.js$/, ''));

const problems = [];
const file = join(ROOT, 'data', 'fordjupning', `${id}.js`);
if (!existsSync(file)) problems.push(`saknar data/fordjupning/${id}.js`);
else load(file);
const guide = ctx.SB_FORDJUPNING && ctx.SB_FORDJUPNING[id];
if (existsSync(file) && !guide) problems.push(`filen registrerar inte window.SB_FORDJUPNING["${id}"]`);
if (guide) {
  if (guide.id !== id) problems.push(`guide.id är "${guide.id}", ska vara "${id}"`);
  if (!grantIds.includes(id)) problems.push(`inget bidrag med id ${id} i data/grants-*.js`);
  problems.push(...fd.validateGuide(guide, { grantIds, calcIds }));
  for (const k of guide.kalkylatorer || []) {
    if (!calcIds.includes(k.modul)) continue;
    const mod = require(join(calcDir, `${k.modul}.js`));
    if (mod.id !== k.modul) problems.push(`${k.modul}: modulens id ska vara filnamnet`);
    const runs = [['standardvärden', fd.fieldDefaults(k.falt)]]
      .concat((k.exempel || []).map((e) => [`exempel "${e.etikett}"`, fd.applyExample(k.falt, e)]));
    for (const [label, values] of runs) {
      const r = mod.berakna(values);
      if (!r || r.fel || typeof r.resultat !== 'number' || !isFinite(r.resultat)) {
        problems.push(`${k.modul} (${label}): ${r && r.fel ? r.fel : 'ogiltigt resultat'}`);
      } else {
        console.log(`  ${k.modul} · ${label}: ${r.formel || r.resultat}`);
      }
    }
  }
  if (fd.isStale(guide.kontrollerad, core.isoFromDate(new Date()))) problems.push('kontrollerad är för gammal');
}

if (problems.length) {
  console.error(`\n${id}: ${problems.length} problem`);
  problems.forEach((p) => console.error(`  - ${p}`));
  process.exit(1);
}
console.log(`\n${id}: OK`);
