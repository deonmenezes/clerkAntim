import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*', '/sign-in', '/sign-up', '/payment_success'],
    },
    sitemap: 'https://smoothtradings.com/sitemap.xml',
  };
}
