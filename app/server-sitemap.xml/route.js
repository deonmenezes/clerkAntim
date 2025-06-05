import { getServerSideSitemap } from 'next-sitemap';
import { connectToDB } from '@/lib/mongoDB';
import mongoose from 'mongoose';

// Check if models are already defined to prevent overwrite warnings
const Product = mongoose.models.Product || mongoose.model('Product', new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  updatedAt: Date,
}));

const Collection = mongoose.models.Collection || mongoose.model('Collection', new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  updatedAt: Date,
}));

export async function GET(request) {
  try {
    await connectToDB();
    
    // Fetch all products
    const products = await Product.find({}).select('_id updatedAt').lean();
    const productUrls = products.map((product) => ({
      loc: `https://smoothtradings.com/products/${product._id}`,
      lastmod: new Date(product.updatedAt || new Date()).toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    }));
    
    // Fetch all collections
    const collections = await Collection.find({}).select('_id updatedAt').lean();
    const collectionUrls = collections.map((collection) => ({
      loc: `https://smoothtradings.com/collections/${collection._id}`,
      lastmod: new Date(collection.updatedAt || new Date()).toISOString(),
      changefreq: 'weekly',
      priority: 0.7,
    }));

    // Combine all URLs
    const allUrls = [...productUrls, ...collectionUrls];
    
    return getServerSideSitemap(allUrls);
  } catch (error) {
    console.error('Error generating server sitemap:', error);
    
    // Return a basic sitemap with just main site links if database fetch fails
    const fallbackUrls = [
      {
        loc: 'https://smoothtradings.com',
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 1.0,
      },
      {
        loc: 'https://smoothtradings.com/products',
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 0.9,
      },
      {
        loc: 'https://smoothtradings.com/collections',
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 0.9,
      },
    ];
    
    return getServerSideSitemap(fallbackUrls);
  }
}
