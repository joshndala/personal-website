/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/joshndala-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/joshndala-portfolio/' : '',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },
  output: 'export',
};

module.exports = nextConfig;