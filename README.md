# Prahlad Trading Company

Website for Prahlad Trading Company, an industrial safety equipment supplier in Raipur, Chhattisgarh.

The live site is a Next.js app in [`web/`](web/), exported as static files and deployed to GitHub Pages by
[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) on every push to `main`.

## Brand logos and product photos

Official logos and product photos are downloaded from each manufacturer's website during the build
(`web/scripts/fetch-media.mjs`, URLs in `web/scripts/media-manifest.json`). If a download fails, the build
still succeeds and the page shows the brand or category name in its place; the build log lists each asset as
`media ok` or `media FAIL`.

To use your own photo for a category, add the image to `web/public/` and point that entry's first candidate
URL at it, or replace the URL in the manifest.

## Run locally

```bash
cd web
npm install
npm run build      # downloads media, then builds into web/out
npm run dev        # development server at http://localhost:3000
```

## Older versions

`index.html` and `index_v2.html` in the repo root are the earlier single-file HTML versions. They are kept
for reference and published at `/old/` on the live site.

## Contact

- Phone: [081090 47714](tel:+918109047714)
- Email: [prahladtrading@yahoo.co.in](mailto:prahladtrading@yahoo.co.in)
- Hours: Monday to Saturday, 10:30 AM – 7:30 PM
- Location: Raipur, Chhattisgarh, India
