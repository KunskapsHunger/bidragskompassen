#!/usr/bin/env node
// Generates the demo-film narration with Gemini TTS into film/voice/*.wav.
// The API key is read from the environment only — never commit it.
//
//   GEMINI_API_KEY=... node film/gen-voice.mjs            (only missing lines)
//   GEMINI_API_KEY=... node film/gen-voice.mjs --force    (regenerate all)
//   GEMINI_API_KEY=... node film/gen-voice.mjs intro sok  (specific lines)
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { VOICE_LINES } from './voicelines.js';

const MODEL = process.env.TTS_MODEL || 'gemini-3.8-flash-tts';
const VOICE = process.env.TTS_VOICE || 'Sulafat';
const SAMPLE_RATE = 24000;
const MIN_SPACING_MS = 7000; // quota is roughly 10 requests / minute / model
const MAX_RETRIES = 6;
const OUT_DIR = join(dirname(fileURLToPath(import.meta.url)), 'voice');

class QuotaError extends Error {}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function pcmToWav(pcm, sampleRate) {
  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + pcm.length, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(1, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(sampleRate * 2, 28);
  header.writeUInt16LE(2, 32);
  header.writeUInt16LE(16, 34);
  header.write('data', 36);
  header.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([header, pcm]);
}

const parseRate = (mime) => Number(/rate=(\d+)/.exec(mime || '')?.[1] || SAMPLE_RATE);

async function synth(apiKey, text) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;
  const body = {
    contents: [{ parts: [{ text }] }],
    generationConfig: {
      responseModalities: ['AUDIO'],
      speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: VOICE } } },
    },
  };
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
      body: JSON.stringify(body),
    });
    const json = await res.json().catch(() => ({}));
    if (res.ok) {
      const part = json?.candidates?.[0]?.content?.parts?.find((p) => p.inlineData);
      if (!part) throw new Error(`No audio in response: ${JSON.stringify(json).slice(0, 300)}`);
      const audio = Buffer.from(part.inlineData.data, 'base64');
      return audio.subarray(0, 4).toString() === 'RIFF' ? audio : pcmToWav(audio, parseRate(part.inlineData.mimeType));
    }
    const message = json?.error?.message || '';
    if (/per_day/.test(message)) throw new QuotaError(`Daily quota exhausted for ${MODEL}.`);
    const retryable = res.status === 429 || res.status >= 500;
    const delay = /retry in ([\d.]+)s/i.exec(message);
    console.warn(`  ${res.status} ${json?.error?.status || ''} (attempt ${attempt}/${MAX_RETRIES})`);
    if (!retryable || attempt === MAX_RETRIES) throw new Error(`TTS failed: ${res.status} ${message.slice(0, 200)}`);
    await sleep(delay ? Math.ceil(Number(delay[1]) * 1000) + 1000 : 15000 * attempt);
  }
  throw new Error('unreachable');
}

const exists = (p) => access(p).then(() => true, () => false);

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('Set GEMINI_API_KEY in the environment.');
    process.exit(1);
  }
  const args = process.argv.slice(2);
  const force = args.includes('--force');
  const only = args.filter((a) => !a.startsWith('--'));
  const lines = new Map(VOICE_LINES);
  const unknown = only.filter((n) => !lines.has(n));
  if (unknown.length) {
    console.error(`Unknown line(s): ${unknown.join(', ')}`);
    process.exit(1);
  }
  await mkdir(OUT_DIR, { recursive: true });
  const names = only.length ? only : [...lines.keys()];
  let last = 0;
  let failed = 0;
  for (const name of names) {
    const file = join(OUT_DIR, `${name}.wav`);
    if (!force && !only.length && (await exists(file))) continue;
    const wait = last + MIN_SPACING_MS - Date.now();
    if (wait > 0) await sleep(wait);
    last = Date.now();
    process.stdout.write(`- ${name} ... `);
    try {
      const wav = await synth(apiKey, lines.get(name));
      await writeFile(file, wav);
      console.log(`ok (${(wav.length / 1024).toFixed(0)} KB)`);
    } catch (err) {
      failed++;
      console.log(`FAILED: ${err.message}`);
      if (err instanceof QuotaError) break;
    }
  }
  console.log(failed ? `Done with ${failed} failure(s).` : 'Done.');
  process.exit(failed ? 2 : 0);
}

main();
