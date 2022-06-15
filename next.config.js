/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  env: {
    NEXT_PUBLIC_API_MOCKING: 'enabled',
  },
};

module.exports = nextConfig;
