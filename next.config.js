const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  openAnalyzer: false,
  enabled: process.env.ANALYZE === 'true',
})

const withTranslate = require('next-translate-plugin')

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
})

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  // i18n: {
  //     localeDetection: false,
  // },
  async redirects() {
    return [
      {
        source: '/test',
        destination: '/test-worked',
        permanent: true,
      },
    ]
  },
}

module.exports = withPlugins(
  [
    [withMDX],
    [withTranslate],
    // add a plugin with specific configuration

    // add it like this if no plugin configuration is needed
    [withBundleAnalyzer],
  ],
  nextConfig
)
