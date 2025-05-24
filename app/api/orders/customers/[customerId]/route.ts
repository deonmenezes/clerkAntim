import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoDB";
import Order from "@/lib/models/Order";

export async function GET(request: NextRequest, { params }: { params: { customerId: string } }) {
  const customerId = params.customerId;

  if (!customerId) {
    return NextResponse.json({ error: "Customer ID is required" }, { status: 400 });
  }

  try {
    await connectToDB();
    
    const orders = await Order.find({ customerClerkId: customerId })
      .populate({
        path: 'products.product',
        model: 'Product'
      })
      .sort({ createdAt: -1 });
      
    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
  }
}
