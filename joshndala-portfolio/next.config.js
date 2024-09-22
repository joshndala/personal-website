/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/personal-website/joshndala-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personal-website/joshndala-portfolio/' : '',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;