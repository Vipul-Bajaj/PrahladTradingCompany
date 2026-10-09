// Static export for GitHub Pages, served from the root of prahladtrading.com.
// Set NEXT_PUBLIC_BASE_PATH only if the site is ever hosted under a sub-path.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
