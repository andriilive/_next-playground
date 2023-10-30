/** @type {import('next-sitemap').IConfig} */
const sitemapConfig = {
    // https://github.com/iamvishnusankar/next-sitemap#configuration-options
    siteUrl: process.env.SITE_URL || 'https://example.com',
    generateRobotsTxt: true, // (optional)
    // ...other options
}

module.exports = {
    sitemapConfig,
}
