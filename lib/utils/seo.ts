// SEO utility functions for generating consistent metadata

/**
 * Generates standard meta descriptions for API response data
 * @param entityType - The type of entity (product, collection, etc.)
 * @param count - Number of entities in the response
 * @returns Formatted meta description
 */
export const generateApiMetaDescription = (entityType: string, count?: number): string => {
  const countText = count !== undefined ? `${count} ` : '';
  return `High-quality ${countText}${entityType} from Smooth Technical Trading and Service LLC, Abu Dhabi's premier supplier of industrial products, safety equipment, and technical solutions for UAE's demanding industries.`;
};

/**
 * Generates JSON-LD structured data for different entity types
 */

// For Product
export const generateProductJsonLd = (product: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.images?.[0] || '',
    sku: product._id,
    brand: {
      '@type': 'Brand',
      name: product.brand || 'Smooth Technical Trading and Service LLC',
    },
    offers: {
      '@type': 'Offer',
      url: `https://smoothtradings.com/products/${product._id}`,
      priceCurrency: 'AED',
      price: product.price,
      availability: product.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    },
  };
};

// For Collection
export const generateCollectionJsonLd = (collection: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: collection.title,
    description: collection.description,
    image: collection.image || '',
    url: `https://smoothtradings.com/collections/${collection._id}`,
  };
};

// For Organization
export const generateOrganizationJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Smooth Technical Trading and Service LLC',
    url: 'https://smoothtradings.com',
    logo: 'https://smoothtradings.com/clientAntim_logo.png',
    sameAs: [
      'https://www.facebook.com/smoothtechnicaltrading',
      'https://www.linkedin.com/company/smooth-technical-trading-and-service-llc',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+971-2-555-0000',
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sector-M9 - Shop #7 - Bldg. #49 As Salami 6 St - Musaffah - Musaffah Industrial - Abu Dhabi'
    },
  };
};

// For Blog Post
export const generateBlogPostJsonLd = (post: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.image || '',
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Smooth Technical Trading and Service LLC',
      logo: {
        '@type': 'ImageObject',
        url: 'https://smoothtradings.com/clientAntim_logo.png',
      },
    },
    description: post.excerpt || post.description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://smoothtradings.com/blog/${post.slug}`,
    },
  };
};

// For BreadcrumbList
export const generateBreadcrumbJsonLd = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};
