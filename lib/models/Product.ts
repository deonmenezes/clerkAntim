import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  cost: {
    type: Number,
    default: 0
  },
  media: [String],
  category: String,
  collections: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Collection'
  }],
  tags: [String],
  sizes: [String],
  colors: [String],
  inStock: {
    type: Boolean,
    default: true
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