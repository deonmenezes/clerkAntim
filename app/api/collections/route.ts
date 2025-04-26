import { connectToDB } from "@/lib/mongoDB";
import Collection from "@/lib/models/Collection";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDB();
    const collections = await Collection.find();
    return NextResponse.json(collections);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to fetch collections" }, { status: 500 });
  }
}