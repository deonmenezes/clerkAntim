import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoDB";
import Product from "@/lib/models/Product";

export async function GET(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  const productId = params.productId;

  if (!productId) {
    return NextResponse.json(
      { error: "Product ID is required" },
      { status: 400 }
    );
  }

  try {
    await connectToDB();

    // Get the product details to find related products
    const product = await Product.findById(productId);
    
    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    // Find products in the same category or collection
    const relatedProducts = await Product.find({
      $and: [
        { _id: { $ne: productId } }, // Exclude current product
        {
          $or: [
            { category: product.category },
            { collections: { $in: product.collections } },
            { tags: { $in: product.tags } }
          ]
        }
      ]
    }).limit(4);

    return NextResponse.json(relatedProducts);
  } catch (error) {
    console.error("Error fetching related products:", error);
    return NextResponse.json(
      { error: "Failed to fetch related products" },
      { status: 500 }
    );
  }
}
