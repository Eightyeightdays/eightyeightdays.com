/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // assetPrefix: ".",
  // trailingSlash: true,
  // distDir: "_next"
}

module.exports = nextConfig