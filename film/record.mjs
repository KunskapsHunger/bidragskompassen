#!/usr/bin/env node
// Records the Bidragskompassen demo film: drives the real site in headless Chrome, captures a CDP
// screencast, lays the Gemini narration (film/voice/*.wav) on the shot timeline and encodes an MP4.
//   node film/record.mjs            → film/out/bidragskompassen-demo.mp4 (+ .srt)
// Needs ffmpeg on PATH and the narration generated first (film/gen-voice.mjs).
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { startServer } from './server.mjs';
import { installOverlay } from './overlay.js';
import { SHOTS } from './shots.mjs';
import { VOICE_LINES } from './voicelines.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, 'out');
const FRAMES = join(OUT, 'frames');
const CHROME = process.env.CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const VIEW = { width: 1600, height: 900, scale: 1.2 }; // → 1920×1080 frames
const FPS = 30;
const LEAD_MS = 350;   // voice starts this long after the shot begins
const TAIL_MS = 650;   // minimum breathing room after the voice ends
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const wavSeconds = async (file) => {
  const buf = await readFile(file);
  const rate = buf.readUInt32LE(24);
  const dataAt = buf.indexOf('data', 12);
  return buf.readUInt32LE(dataAt + 4) / (rate * 2);
};

const run = (args) => new Promise((ok, fail) => {
  const p = spawn('ffmpeg', ['-y', '-loglevel', 'error', ...args], { stdio: ['ignore', 'inherit', 'inherit'] });
  p.on('error', fail);
  p.on('close', (code) => (code === 0 ? ok() : fail(new Error(`ffmpeg exited with ${code}`))));
});

function director(page) {
  const d = {
    page,
    wait: sleep,
    async moveTo(x, y) {
      await page.evaluate(([px, py]) => window.FILM.move(px, py), [x, y]);
      await page.mouse.move(Math.max(0, x), Math.max(0, y));
      await sleep(800);
    },
    async center(locator) {
      await locator.scrollIntoViewIfNeeded();
      const box = await locator.boundingBox();
      if (!box) throw new Error(`not visible: ${locator}`);
      return [box.x + box.width / 2, box.y + box.height / 2];
    },
    async hover(locator) {
      try {
        const [x, y] = await d.center(locator);
        await d.moveTo(x, y);
      } catch (err) {
        console.warn(`  hover skipped: ${err.message}`);
      }
    },
    async click(locator) {
      const [x, y] = await d.center(locator);
      await d.moveTo(x, y);
      await page.evaluate(() => window.FILM.click());
      await page.mouse.click(x, y);
      await sleep(350);
    },
    async type(locator, text) {
      await d.click(locator);
      await page.keyboard.type(text, { delay: 110 });
    },
    scroll: (target, ms, selector) => page.evaluate(([t, m, s]) => window.FILM.scroll(t, m, s), [target, ms, selector]),
    scrollBy: (dy, ms) => page.evaluate(([y, m]) => window.FILM.scroll(window.scrollY + y, m), [dy, ms]),
  };
  return d;
}

async function capture() {
  await rm(OUT, { recursive: true, force: true });
  await mkdir(FRAMES, { recursive: true });
  const server = await startServer(0);
  const browser = await chromium.launch({ executablePath: CHROME });
  const frames = [];
  const writes = [];
  const shots = [];
  try {
    const context = await browser.newContext({
      viewport: { width: VIEW.width, height: VIEW.height }, deviceScaleFactor: VIEW.scale, locale: 'sv-SE',
    });
    const page = await context.newPage();
    page.on('pageerror', (e) => console.error('[page]', e.message));
    await page.addInitScript(installOverlay);
    const cdp = await context.newCDPSession(page);
    cdp.on('Page.screencastFrame', ({ data, metadata, sessionId }) => {
      const file = join(FRAMES, `f${String(frames.length).padStart(6, '0')}.jpg`);
      frames.push({ file, t: metadata.timestamp });
      writes.push(writeFile(file, Buffer.from(data, 'base64')));
      cdp.send('Page.screencastFrameAck', { sessionId }).catch(() => {});
    });
    await page.goto(server.url, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 92, maxWidth: 1920, maxHeight: 1080, everyNthFrame: 1 });
    // Replay the hero entrance on camera.
    await page.reload({ waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);

    const d = director(page);
    for (const [name, text] of VOICE_LINES) {
      const voice = await wavSeconds(join(HERE, 'voice', `${name}.wav`));
      const start = Date.now() / 1000;
      shots.push({ name, text, start, voice });
      console.log(`shot ${name} (${voice.toFixed(1)}s voice)`);
      await page.evaluate((t) => window.FILM.caption(t), text);
      await SHOTS[name](d);
      const minEnd = start + (LEAD_MS + TAIL_MS) / 1000 + voice;
      const left = minEnd - Date.now() / 1000;
      if (left > 0) await sleep(left * 1000);
      await page.evaluate(() => window.FILM.caption(''));
      await sleep(250);
    }
    await sleep(1500);
    await cdp.send('Page.stopScreencast');
    await Promise.all(writes);
  } finally {
    await browser.close();
    server.close();
  }
  return { frames, shots };
}

const srtTime = (s) => {
  const ms = Math.max(0, Math.round(s * 1000));
  const p = (n, w = 2) => String(n).padStart(w, '0');
  return `${p(Math.floor(ms / 3600000))}:${p(Math.floor(ms / 60000) % 60)}:${p(Math.floor(ms / 1000) % 60)},${p(ms % 1000, 3)}`;
};

async function encode({ frames, shots }) {
  if (frames.length < 2) throw new Error('no frames captured');
  const t0 = frames[0].t;
  const total = frames.at(-1).t - t0 + 1.2;
  const list = frames.map((f, i) => {
    const next = i + 1 < frames.length ? frames[i + 1].t : f.t + 1.2;
    return `file '${f.file.replace(/\\/g, '/')}'\nduration ${Math.max(0.001, next - f.t).toFixed(4)}`;
  });
  list.push(`file '${frames.at(-1).file.replace(/\\/g, '/')}'`);
  await writeFile(join(OUT, 'frames.txt'), list.join('\n'));

  const cues = shots.map((s) => ({ ...s, at: s.start - t0 + LEAD_MS / 1000 }));
  await writeFile(join(OUT, 'bidragskompassen-demo.srt'), cues.map((c, i) =>
    `${i + 1}\n${srtTime(c.at)} --> ${srtTime(c.at + c.voice + 0.3)}\n${c.text}\n`).join('\n'));

  const inputs = cues.flatMap((c) => ['-i', join(HERE, 'voice', `${c.name}.wav`)]);
  const delays = cues.map((c, i) => `[${i + 1}:a]adelay=${Math.round(c.at * 1000)}:all=1[v${i}]`);
  const mix = `${cues.map((_, i) => `[v${i}]`).join('')}amix=inputs=${cues.length}:normalize=0,`
    + `apad,atrim=0:${total.toFixed(3)},loudnorm=I=-16:TP=-1.5:LRA=11,afade=t=out:st=${(total - 1).toFixed(3)}:d=1[a]`;
  const out = join(OUT, 'bidragskompassen-demo.mp4');
  await run([
    '-f', 'concat', '-safe', '0', '-i', join(OUT, 'frames.txt'), ...inputs,
    '-filter_complex', `[0:v]fps=${FPS},scale=1920:1080:flags=lanczos,format=yuv420p,fade=t=in:st=0:d=0.6,`
      + `fade=t=out:st=${(total - 1).toFixed(3)}:d=1[v];${delays.join(';')};${mix}`,
    '-map', '[v]', '-map', '[a]', '-c:v', 'libx264', '-preset', 'slow', '-crf', '18',
    '-c:a', 'aac', '-b:a', '192k', '-ar', '48000', '-t', total.toFixed(3), '-movflags', '+faststart', out,
  ]);
  console.log(`wrote ${out} (${total.toFixed(1)}s, ${frames.length} source frames)`);
}

capture().then(encode).catch((err) => {
  console.error(err);
  process.exit(1);
});
