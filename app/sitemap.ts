import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.SITE_URL || 'https://smoothtradings.com';
    // Static routes
  const staticRoutes = [
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
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...staticRoutes];
}
