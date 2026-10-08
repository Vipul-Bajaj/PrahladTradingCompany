# Prahlad Trading Company

Website for Prahlad Trading Company, an industrial safety equipment supplier in Raipur, Chhattisgarh.

The live site is a Next.js app in [`web/`](web/), exported as static files and deployed to GitHub Pages by
[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) on every push to `main`.

## Product category pages

Each category page (for example `/products/safety-shoes/`, `/products/helmets/`) is driven by one data file in
`web/src/data/categories/`: its models, specifications, and the fields the WhatsApp enquiry form asks for. To
add a category, copy one of those files, add a route under `web/src/app/products/`, and set `page` on the
category in `web/src/data/site.js` so the home page tile links to it.

## Brand logos and product photos

All images are stored in the repo under `web/public/media/`, so the site and its build don't depend on any
other website. They were downloaded once from the manufacturers' sites (and a few retailer listings for shoe
photos); the source URLs are in `web/scripts/media-manifest.json`.

To add an image, add an entry to the manifest and push: the deploy workflow downloads anything missing and
commits it. To use your own photo, put it in `web/public/media/` and point that entry in
`web/src/data/media.json` at it.

## Run locally

```bash
cd web
npm install
npm run media      # download any images missing from the repo
npm run build      # build into web/out
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
