import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  images: [String],
  category: String,
  inStock: {
    type: Boolean,
    default: true
  },
  collection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Collection'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;