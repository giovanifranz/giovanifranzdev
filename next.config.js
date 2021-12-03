/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    GITHUB_TOKEN_API: process.env.GITHUB_TOKEN_API,
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
}
