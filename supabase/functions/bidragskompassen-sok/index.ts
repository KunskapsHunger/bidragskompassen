// Edge Function `bidragskompassen-sok`: ranks the Bidragskompassen grant catalogue for a free-text
// question with TypeSafe Jev. The Jev key stays in Vault (reading_runtime_secrets); callers only send
// a short question, never options or state, so the function cannot be used as a general Jev proxy.
//
// POST { q: string (3–200 chars), organiser: 'fristaende' | 'kommun' | 'region' | 'alla' }
// 200  { model, ranking: [{ id, p }], none, omrade: { id, confidence }, skolform: { id, confidence } }
import { CATALOG } from './catalog.ts';

const SB = Deno.env.get('SUPABASE_URL');
const keys = JSON.parse(Deno.env.get('SUPABASE_SECRET_KEYS') || '{}');
const service = keys.default || Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
const serviceHeaders = { apikey: service, ...(service?.startsWith('eyJ') ? { Authorization: `Bearer ${service}` } : {}) };
const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization,apikey,content-type',
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
  'Cache-Control': 'no-store',
};

const ORGANISERS = ['fristaende', 'kommun', 'region', 'alla'];
const OMRADEN = {
  'lon-karriar': 'Lärarlöner, löneökningar och karriärtjänster som förstelärare',
  kompetens: 'Kompetensutveckling, fortbildning och vidareutbildning av personal',
  personal: 'Fler vuxna i skolan: anställa assistenter, elevhälsa eller annan personal',
  lasning: 'Läsning, böcker, skolbibliotek och läromedel',
  stod: 'Särskilt stöd, elevhälsa och elever med funktionsnedsättning',
  likvardighet: 'Likvärdighet, kunskapsresultat och socioekonomiskt utsatta skolor',
  nyanlanda: 'Nyanlända elever, flerspråkighet, modersmål och svenska som andraspråk',
  'utokad-tid': 'Lovskola, sommarskola, läxhjälp och mer undervisningstid',
  yrke: 'Yrkesutbildning, lärlingar, APL och vuxenutbildning för jobb',
  kultur: 'Kultur, konst, teater, musik och skapande',
  'halsa-trygghet': 'Rörelse, hälsa, trygghet, säkerhet och studiero',
  internationellt: 'Internationellt utbyte, resor, Erasmus och samarbete med andra länder',
  digitalt: 'Digitalisering, fjärrundervisning och distansundervisning',
  oklart: 'Frågan handlar inte tydligt om något av områdena ovan',
};
const SKOLFORMER = {
  forskola: 'Förskola (barn 1–5 år)',
  forskoleklass: 'Förskoleklass',
  grundskola: 'Grundskola, lågstadiet, mellanstadiet eller högstadiet',
  'anpassad-grundskola': 'Anpassad grundskola',
  specialskola: 'Specialskola',
  sameskola: 'Sameskola',
  fritidshem: 'Fritidshem',
  gymnasieskola: 'Gymnasieskola',
  'anpassad-gymnasieskola': 'Anpassad gymnasieskola',
  komvux: 'Komvux, vuxenutbildning eller sfi',
  'ej-angiven': 'Frågan nämner ingen särskild skolform',
};
const NONE = 'inget-passar';
const IP_LIMIT = 120;       // per hour
const GLOBAL_LIMIT = 3000;  // per day

class HttpError extends Error {
  constructor(message: string, public status = 400) { super(message); }
}
const fail = (message: string, status = 400): never => { throw new HttpError(message, status); };
const json = (data: unknown, status = 200) => Response.json(data, { status, headers: cors });

async function db(path: string, data: unknown) {
  const r = await fetch(`${SB}/rest/v1/${path}`, {
    method: 'POST',
    headers: { ...serviceHeaders, 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!r.ok) fail('Tjänsten är inte tillgänglig just nu.', 503);
  return r.json();
}

// Quota keys identify callers by a keyed HMAC of their IP, never the IP itself. The key derives from
// the project's secret service key, so a stored tag cannot be reversed by trying all IPv4 addresses.
let ipKey: CryptoKey | undefined;
async function ipTag(ip: string) {
  ipKey ??= await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(`bidragskompassen-sok:${service}`),
    { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', ipKey, new TextEncoder().encode(ip));
  return Array.from(new Uint8Array(sig), (x) => x.toString(16).padStart(2, '0')).join('').slice(0, 32);
}

// The shared quota table is never swept, so this function removes its own expired rows (bk-sok:* only)
// now and then. That keeps the promise on the site: caller tags disappear shortly after their window.
const SWEEP_CHANCE = 0.1;
function sweepExpired() {
  if (Math.random() > SWEEP_CHANCE) return;
  const now = encodeURIComponent(new Date().toISOString());
  const sweep = fetch(`${SB}/rest/v1/reading_usage?key=like.bk-sok%3A*&expires_at=lt.${now}`, {
    method: 'DELETE',
    headers: { ...serviceHeaders, Prefer: 'return=minimal' },
  }).catch((e) => console.error('bidragskompassen-sok sweep', e));
  // Let the sweep finish after the response has been sent.
  (globalThis as { EdgeRuntime?: { waitUntil(p: Promise<unknown>): void } }).EdgeRuntime?.waitUntil(sweep);
}

async function quota(key: string, limit: number, seconds: number) {
  const window = Math.floor(Date.now() / 1000 / seconds);
  const ok = await db('rpc/reading_take_quota', {
    p_key: `${key}:${window}`, p_limit: limit, p_expires: new Date((window + 1) * seconds * 1000).toISOString(),
  });
  if (!ok) fail('Den smarta sökningen har nått sin gräns för stunden. Den vanliga sökningen fungerar som vanligt.', 429);
}

let jevKey: string | undefined;
async function jevSecret() {
  if (!jevKey) jevKey = (await db('rpc/reading_runtime_secrets', {}))?.reading_typesafe_key;
  if (!jevKey) fail('Den smarta sökningen är inte konfigurerad.', 503);
  return jevKey;
}

async function readInput(req: Request) {
  if (!req.headers.get('content-type')?.includes('application/json')) fail('JSON krävs.', 415);
  const raw = await req.text();
  if (raw.length > 2000) fail('Frågan är för lång.', 413);
  let input: { q?: unknown; organiser?: unknown };
  try { input = JSON.parse(raw); } catch { return fail('Ogiltig JSON.'); }
  const q = typeof input.q === 'string' ? input.q.replace(/\s+/g, ' ').trim() : '';
  if (q.length < 3 || q.length > 200) fail('Skriv en fråga på 3–200 tecken.');
  const organiser = ORGANISERS.includes(input.organiser as string) ? input.organiser as string : 'alla';
  return { q, organiser };
}

const cache = new Map<string, unknown>();
const CACHE_MAX = 300;

// Jev answers choices as { choice, probabilities, confidence }; probabilities may be a map or a list.
function probabilities(answer: any): Record<string, number> {
  const p = answer?.probabilities;
  if (Array.isArray(p)) return Object.fromEntries(p.map((x: any) => [x.option ?? x.choice ?? x.label, Number(x.probability ?? x.p)]));
  return p && typeof p === 'object' ? p : {};
}
const top = (answer: any, fallback: string) => ({
  id: answer?.choice && answer.choice !== fallback ? answer.choice : null,
  confidence: Number(answer?.confidence ?? 0),
});

async function rank(q: string, organiser: string) {
  const criteria = Object.fromEntries(CATALOG.map((g) => [g.id, g.text]));
  criteria[NONE] = 'Inget av bidragen passar det användaren söker efter.';
  const res = await fetch('https://api.typesafe.ai/v1/systemone', {
    method: 'POST',
    headers: { Authorization: `Bearer ${await jevSecret()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'jev-latest',
      state: {
        sokfraga: q,
        soker_for: organiser === 'alla' ? 'ospecificerat' : `${organiser} huvudman`,
        sammanhang: 'En person letar efter statliga bidrag för skola, förskola eller vuxenutbildning i Sverige.',
      },
      questions: {
        bidrag: { type: 'choice', instructions: 'Vilket bidrag letar personen troligast efter?', criteria },
        omrade: { type: 'choice', instructions: 'Vilket område handlar frågan om?', criteria: OMRADEN },
        skolform: { type: 'choice', instructions: 'Vilken skolform gäller frågan?', criteria: SKOLFORMER },
      },
    }),
    signal: AbortSignal.timeout(8000),
  });
  if (res.status === 429 || res.status === 529) fail('Den smarta sökningen är upptagen just nu.', 503);
  if (!res.ok) fail('Den smarta sökningen kunde inte svara.', 502);
  const data = await res.json();
  const probs = probabilities(data?.answers?.bidrag);
  const ranking = CATALOG
    .map((g) => ({ id: g.id, p: Number(probs[g.id] ?? 0) }))
    .filter((x) => x.p >= 0.02)
    .sort((a, b) => b.p - a.p)
    .slice(0, 15)
    .map((x) => ({ id: x.id, p: Math.round(x.p * 1000) / 1000 }));
  return {
    model: data?.model ?? 'jev-latest',
    ranking,
    none: Math.round(Number(probs[NONE] ?? 0) * 1000) / 1000,
    omrade: top(data?.answers?.omrade, 'oklart'),
    skolform: top(data?.answers?.skolform, 'ej-angiven'),
  };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
  try {
    if (req.method !== 'POST') fail('POST krävs.', 405);
    const { q, organiser } = await readInput(req);
    const key = `${organiser}|${q.toLowerCase()}`;
    if (cache.has(key)) return json(cache.get(key));
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    await quota(`bk-sok:ip:${await ipTag(ip)}`, IP_LIMIT, 3600);
    await quota('bk-sok:global', GLOBAL_LIMIT, 86400);
    sweepExpired();
    const result = await rank(q, organiser);
    if (cache.size >= CACHE_MAX) cache.delete(cache.keys().next().value!);
    cache.set(key, result);
    return json(result);
  } catch (e) {
    const status = e instanceof HttpError ? e.status : 500;
    if (!(e instanceof HttpError)) console.error('bidragskompassen-sok', e);
    return json({ error: e instanceof HttpError ? e.message : 'Den smarta sökningen kunde inte svara.' }, status);
  }
});
