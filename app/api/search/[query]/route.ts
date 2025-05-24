import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoDB";
import Product from "@/lib/models/Product";

export async function GET(request: NextRequest, { params }: { params: { query: string } }) {
  const searchQuery = params.query;

  if (!searchQuery) {
    return NextResponse.json({ error: "Search query is required" }, { status: 400 });
  }

  try {
    await connectToDB();
    
    // Create a case-insensitive regular expression for the search
    const regexSearch = new RegExp(searchQuery, 'i');
    
    // Search in title, description, tags, and categories
    const products = await Product.find({
      $or: [
        { title: { $regex: regexSearch } },
        { description: { $regex: regexSearch } },
        { tags: { $in: [regexSearch] } },
        { category: { $regex: regexSearch } }
      ]
    }).sort({ createdAt: -1 });
      
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error searching products:", error);
    return NextResponse.json({ error: "Failed to search products" }, { status: 500 });
  }
}
