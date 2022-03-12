const withPlugins = require('next-compose-plugins');
const nextBuildId = require('next-build-id');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const isProd = process.env.NEXT_PUBLIC_APP_ENV === 'production';
const nextConfig = {
  reactStrictMode: false,

  // Indicator from next for prerendered page status
  devIndicators: {
    autoPrerender: !isProd,
  },

  // Setting a custom build directory & build id
  generateBuildId: () => nextBuildId({ dir: __dirname, describe: true }),

  // Disabling x-powered-by in response headers
  poweredByHeader: false,
};

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig);
