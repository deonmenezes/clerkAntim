import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    customerClerkId: {
      type: String,
      required: true,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        color: {
          type: String,
          default: "",
        },
        size: {
          type: String,
          default: "",
        },
      },
    ],
    shippingAddress: {
      type: Object,
      required: true,
    },
    shippingRate: {
      type: String,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;
