import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true)

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    const mongoUrl = process.env.MONGODB_URL;
    if (!mongoUrl) {
      console.error("MongoDB URL not provided in environment variables");
      throw new Error("MongoDB URL not provided");
    }

    await mongoose.connect(mongoUrl, {
      dbName: "Borcelle_Store"
    })

    isConnected = true;
    console.log("MongoDB is connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw new Error("Failed to connect to MongoDB");
  }
}