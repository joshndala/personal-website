/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/personal-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personal-website/' : '',
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