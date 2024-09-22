/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/personal-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personal-website/' : '',
  images: {
    unoptimized: true,
    path: '/personal-website/_next/image',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;