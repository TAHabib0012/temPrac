/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_MODEL === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If we are building for production (GitHub), use the repo name. 
  // Otherwise, use nothing (for your local computer).
  basePath: isProd ? '/temPrac' : '',
  assetPrefix: isProd ? '/temPrac' : '',
  trailingSlash: true,
};

export default nextConfig;