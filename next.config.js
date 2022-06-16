/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'moon-wine.myshopify.com', 'cdn.shopify.com'],
  },
  webpack: (config) => {
    config.experiments = { topLevelAwait: true };
    return config;
  }
}

module.exports = nextConfig
