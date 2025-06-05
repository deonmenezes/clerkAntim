export const getCollections = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
    const response = await fetch(`${baseUrl}/collections`, {
      cache: 'no-store',
      next: { revalidate: 0 },
      headers: {
        'X-Meta-Description': 'Browse our premium collections of industrial products, safety equipment, and technical solutions for UAE industries.'
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching collections:', error);
    return [];
  }
}

export const getCollectionDetails = async (collectionId: string) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
    const response = await fetch(`${baseUrl}/collections/${collectionId}`, {
      cache: 'no-store',
      next: { revalidate: 0 },
      headers: {
        'X-Meta-Description': `Detailed information about our premium industrial collection, featuring high-quality products for your specific industry needs in UAE.`
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching collection details:', error);
    return null;
  }
}

export const getProducts = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
    const response = await fetch(`${baseUrl}/products`, {
      cache: 'no-store',
      next: { revalidate: 0 },
      headers: {
        'X-Meta-Description': 'Premium industrial products, safety equipment, and technical solutions for UAE businesses from Smooth Technical Trading and Service LLC.'
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export const getProductDetails = async (productId: string) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
    const response = await fetch(`${baseUrl}/products/${productId}`, {
      cache: 'no-store',
      next: { revalidate: 0 },
      headers: {
        'X-Meta-Description': `Detailed specifications, features, and pricing for this premium industrial product from Smooth Technical Trading and Service LLC.`
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching product details:', error);
    return null;
  }
}

export const getSearchedProducts = async (query: string) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
    const response = await fetch(`${baseUrl}/search/${query}`, {
      cache: 'no-store',
      next: { revalidate: 0 },
      headers: {
        'X-Meta-Description': `Search results for ${query} - Find premium industrial products, safety equipment, and technical solutions from Smooth Technical Trading.`
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error searching products:', error);
    return [];
  }
}

export const getOrders = async (customerId: string) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || process.env.SITE_URL || 'https://smoothtradings.com';
    const response = await fetch(`${baseUrl}/api/orders/customers/${customerId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
}

export const getRelatedProducts = async (productId: string) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || process.env.SITE_URL || 'https://smoothtradings.com';
    const response = await fetch(`${baseUrl}/api/products/${productId}/related`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching related products:', error);
    return [];
  }
}