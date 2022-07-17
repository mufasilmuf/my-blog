/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STRAPI_URL: process.env.STRAPI_URL
  }
}
module.exports = nextConfig
