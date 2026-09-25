// Tiny static server over the site root, used while recording (port 0 = any free port).
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml', '.ttf': 'font/ttf', '.png': 'image/png',
};

export function startServer(port) {
  const server = createServer(async (req, res) => {
    const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    const file = normalize(join(ROOT, path === '/' ? 'index.html' : path));
    if (!file.startsWith(ROOT)) return res.writeHead(403).end();
    try {
      res.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream' }).end(await readFile(file));
    } catch {
      res.writeHead(404).end();
    }
  });
  return new Promise((ok) => server.listen(port, '127.0.0.1', () => {
    ok({ url: `http://127.0.0.1:${server.address().port}/`, close: () => server.close() });
  }));
}
