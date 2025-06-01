import { getServerSideSitemap } from 'next-sitemap';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.SITE_URL || 'https://smoothtradings.com';
  
  // Static routes
  const routes = [
    '',
    '/about',
    '/blog',
    '/cart',
    '/collections',
    '/contact',
    '/products',
    '/services',
    '/privacy-policy',
    '/terms-of-service',
  ];
  
  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
