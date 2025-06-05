export const getCollections = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || process.env.SITE_URL || 'https://smoothtradings.com';
    const response = await fetch(`${baseUrl}/api/collections`);
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
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || process.env.SITE_URL || 'https://smoothtradings.com';
    const response = await fetch(`${baseUrl}/api/collections/${collectionId}`);
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
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || process.env.SITE_URL || 'https://smoothtradings.com';
    const response = await fetch(`${baseUrl}/api/products`);
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
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || process.env.SITE_URL || 'https://smoothtradings.com';
    const response = await fetch(`${baseUrl}/api/products/${productId}`);
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
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || process.env.SITE_URL || 'https://smoothtradings.com';
    const response = await fetch(`${baseUrl}/api/search/${query}`);
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