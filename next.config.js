/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const nextConfig = withBundleAnalyzer({
  experimental: {
    appDir: true,
  },
  swcMinify: true,
  images: {
    domains: ["s4.anilist.co", "media.kitsu.io", "artworks.thetvdb.com"]
  },
})

module.exports = nextConfig

