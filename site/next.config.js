/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    PUBLIC_URL: '/',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/climate-portal' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/climate-portal/' : '',
}

module.exports = nextConfig
