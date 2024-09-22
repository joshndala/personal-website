/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/personal-website/joshndala-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personal-website/joshndala-portfolio/' : '',
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