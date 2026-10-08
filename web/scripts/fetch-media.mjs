// Downloads official brand logos and product photos listed in media-manifest.json
// into public/media/, and records what was saved in src/data/media.json.
// Runs before `next build`. It never fails the build: an asset that can't be
// fetched is recorded as null and the page shows a text fallback for it.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public', 'media');
const mapFile = path.join(root, 'src', 'data', 'media.json');

const EXT = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  'image/webp': 'webp',
  'image/svg+xml': 'svg',
  'image/gif': 'gif',
  'image/avif': 'avif',
};

function sniff(buf) {
  if (buf[0] === 0x89 && buf[1] === 0x50) return 'png';
  if (buf[0] === 0xff && buf[1] === 0xd8) return 'jpg';
  if (buf.slice(0, 4).toString() === 'RIFF' && buf.slice(8, 12).toString() === 'WEBP') return 'webp';
  if (buf.slice(0, 3).toString() === 'GIF') return 'gif';
  const head = buf.slice(0, 512).toString('utf8').trimStart();
  if (head.startsWith('<svg') || (head.startsWith('<?xml') && head.includes('<svg'))) return 'svg';
  return null;
}

async function tryFetch(url) {
  const res = await fetch(url, {
    redirect: 'follow',
    signal: AbortSignal.timeout(20000),
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36',
      Accept: 'image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5',
      Referer: new URL(url).origin + '/',
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const type = (res.headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
  const ext = EXT[type] || sniff(buf);
  if (!ext) throw new Error(`not an image (${type || 'no content-type'})`);
  if (buf.length < 300) throw new Error(`too small (${buf.length} bytes)`);
  return { buf, ext };
}

const manifest = JSON.parse(await readFile(path.join(root, 'scripts', 'media-manifest.json'), 'utf8'));
await mkdir(outDir, { recursive: true });
await mkdir(path.dirname(mapFile), { recursive: true });

const map = {};
let ok = 0;
for (const item of manifest.items) {
  map[item.id] = null;
  for (const url of item.candidates) {
    try {
      const { buf, ext } = await tryFetch(url);
      const file = `${item.id}.${ext}`;
      await writeFile(path.join(outDir, file), buf);
      map[item.id] = `/media/${file}`;
      ok++;
      console.log(`media ok    ${item.id.padEnd(16)} ${file} (${Math.round(buf.length / 1024)} KB) <- ${url}`);
      break;
    } catch (err) {
      console.log(`media retry ${item.id.padEnd(16)} ${err.message} <- ${url}`);
    }
  }
  if (!map[item.id]) console.log(`media FAIL  ${item.id} (text fallback will be shown)`);
}

await writeFile(mapFile, JSON.stringify(map, null, 2) + '\n');
console.log(`media: ${ok}/${manifest.items.length} assets saved`);
