import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoDB";
import Collection from "@/lib/models/Collection";
import Product from "@/lib/models/Product";

export async function GET(
  request: NextRequest,
  { params }: { params: { collectionId: string } }
) {
  const collectionId = params.collectionId;

  if (!collectionId) {
    return NextResponse.json(
      { error: "Collection ID is required" },
      { status: 400 }
    );
  }

  try {
    await connectToDB();

    // Get the collection details
    const collection = await Collection.findById(collectionId);
    
    if (!collection) {
      return NextResponse.json(
        { error: "Collection not found" },
        { status: 404 }
      );
    }

    // Get all products belonging to this collection
    const products = await Product.find({
      collections: collectionId
    });

    // Return both collection and its products
    return NextResponse.json({
      collection,
      products
    });
  } catch (error) {
    console.error("Error fetching collection details:", error);
    return NextResponse.json(
      { error: "Failed to fetch collection details" },
      { status: 500 }
    );
  }
}
