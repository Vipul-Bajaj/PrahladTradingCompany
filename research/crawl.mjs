// Temporary: fetch official manufacturer pages for offline reading.
import { writeFile, mkdir } from 'node:fs/promises';
const seeds = JSON.parse(process.env.SEEDS);
const KEY = new RegExp(process.env.KEY || 'helmet|head', 'i');
const FOLLOW = (process.env.FOLLOW || '').split(',').filter(Boolean);
const seen = new Set(); const queue = seeds.map((u) => [u, 0]); const index = [];
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36';
let n = 0;
while (queue.length && n < 260) {
  const [url, depth] = queue.shift();
  if (seen.has(url)) continue; seen.add(url);
  try {
    const res = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow', signal: AbortSignal.timeout(20000) });
    const type = res.headers.get('content-type') || '';
    const buf = Buffer.from(await res.arrayBuffer());
    const body = /text|html|xml|json/.test(type) ? buf.toString('utf8') : '';
    n++;
    const host = new URL(res.url).host;
    const name = (new URL(res.url).pathname + new URL(res.url).search).replace(/[^a-z0-9]+/gi, '_').slice(0, 120) || '_';
    await mkdir(`research/out/${host}`, { recursive: true });
    if (body) await writeFile(`research/out/${host}/${name}.txt`, `URL: ${res.url}\nSTATUS: ${res.status}\nTYPE: ${type}\n\n${body}`);
    else await writeFile(`research/out/${host}/${name}.bin`, buf);
    index.push({ url, final: res.url, status: res.status, type, bytes: buf.length });
    if (depth < Number(process.env.DEPTH || 1) && /html|xml/.test(type) && FOLLOW.some((h) => host.endsWith(h))) {
      const links = [...body.matchAll(/(?:href|src|loc>)=?["']?([^"'<>\s]+)/g)].map((m) => m[1]);
      for (const l of links) {
        try {
          const abs = new URL(l, res.url);
          abs.hash = '';
          if (abs.host.replace(/^www\./, '') !== host.replace(/^www\./, '')) continue;
          if (/\.(png|jpe?g|webp|gif|svg|css|js|ico|woff2?|pdf)(\?|$)/i.test(abs.pathname)) continue;
          if (KEY.test(abs.href) && !seen.has(abs.href)) queue.push([abs.href, depth + 1]);
        } catch {}
      }
    }
  } catch (e) { index.push({ url, error: String(e) + ' ' + String(e.cause || '') }); }
}
await writeFile('research/out/index.json', JSON.stringify(index, null, 2));
console.log('fetched', n);
