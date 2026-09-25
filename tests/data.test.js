'use strict';
/* Validates every data/*.js file against SCHEMA.md. Hard errors fail; style issues are diagnostics. */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const core = require('../js/core.js');

const DATA_DIR = path.join(__dirname, '..', 'data');
const ids = (list) => list.map((x) => x.id);
const SKOLFORMER = ids(core.SKOLFORMER);
const OMRADEN = ids(core.OMRADEN);
const TYPER = ids(core.TYPER);
const GILTIGHET = ['aktiv', 'ny', 'upphor', 'pausad', 'upphort'];
const ELIG = Object.keys(core.ELIG);
const PERIOD_TYPER = Object.keys(core.PERIOD_TYPER);

function loadFile(file, sandbox) {
  vm.runInContext(fs.readFileSync(path.join(DATA_DIR, file), 'utf8'), sandbox, { filename: file });
}

function newSandbox() {
  const ctx = { window: {} };
  ctx.window.window = ctx.window;
  return vm.createContext(ctx.window);
}

function checkGrant(g, where, errors, warnings) {
  const e = (msg) => errors.push(where + ' ' + (g && g.id) + ': ' + msg);
  const w = (msg) => warnings.push(where + ' ' + (g && g.id) + ': ' + msg);
  if (!g || typeof g !== 'object') return e('not an object');
  if (typeof g.id !== 'string' || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(g.id)) e('id must be ascii kebab-case');
  ['namn', 'kortnamn', 'myndighet', 'sammanfattning', 'syfte', 'sokandeNot', 'belopp', 'redovisning', 'osakerhet']
    .forEach((k) => { if (typeof g[k] !== 'string') e(k + ' must be a string'); });
  if (!GILTIGHET.includes(g.giltighet)) e('bad giltighet ' + g.giltighet);
  if (!TYPER.includes(g.typ)) e('bad typ ' + g.typ);
  if (!Array.isArray(g.omraden) || !g.omraden.length || g.omraden.some((o) => !OMRADEN.includes(o))) e('bad omraden');
  else if (g.omraden.length > 3) w('more than 3 omraden');
  if (!Array.isArray(g.skolformer) || !g.skolformer.length || g.skolformer.some((s) => !SKOLFORMER.includes(s))) e('bad skolformer');
  const sok = g.sokande || {};
  ['fristaende', 'kommun', 'region', 'stat', 'ovriga'].forEach((k) => { if (!ELIG.includes(sok[k])) e('sokande.' + k + ' invalid'); });
  (Array.isArray(g.perioder) ? g.perioder : (e('perioder must be array'), [])).forEach((p, i) => {
    if (!PERIOD_TYPER.includes(p.typ)) e('perioder[' + i + '].typ invalid');
    ['fran', 'till'].forEach((k) => { if (p[k] !== null && p[k] !== undefined && !core.isISODate(p[k])) e('perioder[' + i + '].' + k + ' not YYYY-MM-DD'); });
    if (p.fran && p.till && p.fran > p.till) e('perioder[' + i + '] fran after till');
    if (p.ungefar !== undefined && typeof p.ungefar !== 'boolean') e('perioder[' + i + '].ungefar must be boolean');
  });
  ['villkor', 'hurDuGor', 'fallgropar', 'nyckelord'].forEach((k) => {
    if (!Array.isArray(g[k]) || g[k].some((x) => typeof x !== 'string')) e(k + ' must be string[]');
  });
  (Array.isArray(g.kallor) ? g.kallor : (e('kallor must be array'), [])).forEach((k, i) => {
    if (!k || typeof k.url !== 'string') e('kallor[' + i + '].url missing');
    else if (!core.safeUrl(k.url)) w('kallor[' + i + '] is not https – shown as text, not a link');
  });
  if (!core.isISODate(g.senastKontrollerad)) e('senastKontrollerad not YYYY-MM-DD');
  if (typeof g.kortnamn === 'string' && g.kortnamn.length > 40) w('kortnamn > 40 chars');
  if (typeof g.sammanfattning === 'string' && g.sammanfattning.length > 240) w('sammanfattning > 240 chars');
  if (Array.isArray(g.hurDuGor) && (g.hurDuGor.length < 3 || g.hurDuGor.length > 7)) w('hurDuGor should have 3–7 steps');
}

function checkGuide(guide, errors) {
  const e = (msg) => errors.push('guide: ' + msg);
  if (!guide || typeof guide !== 'object') return e('SB_GUIDE missing');
  ['steg', 'fristaende', 'ordlista', 'faq', 'kallor'].forEach((k) => { if (!Array.isArray(guide[k])) e(k + ' must be array'); });
  (guide.steg || []).forEach((s, i) => { if (typeof s.rubrik !== 'string' || typeof s.text !== 'string') e('steg[' + i + '] needs rubrik+text'); });
  (guide.ordlista || []).forEach((o, i) => { if (typeof o.term !== 'string' || typeof o.forklaring !== 'string') e('ordlista[' + i + ']'); });
  (guide.faq || []).forEach((f, i) => { if (typeof f.fraga !== 'string' || typeof f.svar !== 'string') e('faq[' + i + ']'); });
  (guide.kallor || []).forEach((k, i) => { if (!core.safeUrl(k && k.url)) e('kallor[' + i + '].url must be https'); });
  if (typeof guide.kalenderNot !== 'string') e('kalenderNot must be a string');
}

const files = fs.existsSync(DATA_DIR) ? fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.js')) : [];
const grantFiles = files.filter((f) => /^grants-.*\.js$/.test(f));

test('sample data is valid and only fills empty globals', (t) => {
  const sb = newSandbox();
  loadFile('_sample.js', sb);
  const errors = [];
  const warnings = [];
  sb.SB_GRANTS.forEach((g) => checkGrant(g, '_sample.js', errors, warnings));
  checkGuide(sb.SB_GUIDE, errors);
  warnings.forEach((m) => t.diagnostic(m));
  assert.deepEqual(errors, []);
  assert.equal(sb.SB_SAMPLE.grants, true);

  const sb2 = newSandbox();
  vm.runInContext('window.SB_GRANTS = [{ id: "real" }]; window.SB_GUIDE = { steg: [] };', sb2);
  loadFile('_sample.js', sb2);
  assert.equal(sb2.SB_GRANTS.length, 1);
  assert.equal(sb2.SB_SAMPLE.grants, false);
  assert.equal(sb2.SB_SAMPLE.guide, false);
});

test('research data files follow SCHEMA.md', (t) => {
  if (!grantFiles.length && !files.includes('guide.js')) {
    t.diagnostic('No research data files yet – skipped.');
    return;
  }
  const sb = newSandbox();
  const errors = [];
  const warnings = [];
  grantFiles.forEach((f) => {
    const before = (sb.SB_GRANTS || []).length;
    try { loadFile(f, sb); } catch (err) { errors.push(f + ': ' + err.message); return; }
    (sb.SB_GRANTS || []).slice(before).forEach((g) => checkGrant(g, f, errors, warnings));
  });
  const all = sb.SB_GRANTS || [];
  const seen = new Set();
  all.forEach((g) => { if (seen.has(g.id)) warnings.push('duplicate id ' + g.id + ' (merged by core.dedupeGrants)'); seen.add(g.id); });
  if (files.includes('guide.js')) {
    try { loadFile('guide.js', sb); checkGuide(sb.SB_GUIDE, errors); } catch (err) { errors.push('guide.js: ' + err.message); }
  }
  t.diagnostic(all.length + ' grants in ' + grantFiles.length + ' file(s)');
  warnings.forEach((m) => t.diagnostic('warning: ' + m));
  assert.deepEqual(errors, []);
});
