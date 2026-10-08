// Static export for GitHub Pages. In CI, NEXT_PUBLIC_BASE_PATH is set to
// "/PrahladTradingCompany" so links and assets resolve under the repo path.
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
