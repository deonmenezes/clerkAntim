/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://smoothtradings.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://smoothtradings.com/server-sitemap.xml', // Dynamic sitemap
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/sign-in', '/sign-up', '/payment_success'],
      },
    ],
  },
  exclude: [
    '/sign-in', 
    '/sign-up', 
    '/payment_success',
    '/api/*',
    '/server-sitemap.xml',
  ],
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
};
