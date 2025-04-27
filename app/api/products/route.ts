import { NextResponse } from "next/server";
import Product from "@/lib/models/Product";
import { connectToDB } from "@/lib/mongoDB";

export async function GET() {
  try {
    await connectToDB();
    const products = await Product.find().populate('collection');
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}