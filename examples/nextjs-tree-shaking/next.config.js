const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer(nextConfig);
