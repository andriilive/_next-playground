// Global configuration for the project
const siteConfig = {
  siteUrl:
    process.env.PUBLIC_URL ||
    process.env.VERCEL_DOMAIN ||
    'https://next-playground-khaki-two.vercel.app',
}

/** @type {import('next-seo').DefaultSeoProps} */
// https://www.npmjs.com/package/next-seo#nextseo-options
const seoDefaultConfig = {
  title: 'Next Playground',
  description: 'Next Playground',
}

/** @type {import('next-sitemap').IConfig} */
// https://github.com/iamvishnusankar/next-sitemap#configuration-options
const sitemapConfig = {
  siteUrl: siteConfig.siteUrl,
  generateRobotsTxt: true, // (optional)
}

module.exports = {
  siteConfig,
  sitemapConfig,
  seoDefaultConfig,
}
