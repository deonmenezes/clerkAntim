"use client";

import useCart from "@/lib/hooks/useCart";
import { useUser } from "@clerk/nextjs";
import { MinusCircle, PlusCircle, Trash, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Cart = () => {
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );
  const totalRounded = parseFloat(total.toFixed(2));

  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  };

  const handleCheckout = async () => {
    try {
      if (!user) {
        router.push("sign-in");
      } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
          method: "POST",
          body: JSON.stringify({ cartItems: cart.cartItems, customer }),
        });
        const data = await res.json();
        window.location.href = data.url;
      }
    } catch (err) {
      console.log("[checkout_POST]", err);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {cart.cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <p className="text-xl font-medium mb-4">Your cart is empty</p>
            <Link
              href="/products"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm divide-y">
                {cart.cartItems.map((cartItem) => (
                  <div key={cartItem.item._id} className="p-6 flex gap-6">
                    <Image
                      src={cartItem.item.media[0]}
                      width={120}
                      height={120}
                      alt={cartItem.item.title}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between mb-4">
                        <div>
                          <h3 className="font-medium text-lg">{cartItem.item.title}</h3>
                          <p className="text-gray-600">{cartItem.item.category}</p>
                        </div>
                        <button
                          onClick={() => cart.removeItem(cartItem.item._id)}
                          className="text-gray-400 hover:text-red-600"
                        >
                          <Trash className="w-5 h-5" />
                        </button>
                      </div>
                      
                      {cartItem.color && (
                        <p className="text-sm text-gray-600 mb-2">Color: {cartItem.color}</p>
                      )}
                      {cartItem.size && (
                        <p className="text-sm text-gray-600 mb-2">Size: {cartItem.size}</p>
                      )}
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => cart.decreaseQuantity(cartItem.item._id)}
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <MinusCircle className="w-5 h-5 text-gray-600" />
                          </button>
                          <span className="font-medium">{cartItem.quantity}</span>
                          <button
                            onClick={() => cart.increaseQuantity(cartItem.item._id)}
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <PlusCircle className="w-5 h-5 text-gray-600" />
                          </button>
                        </div>
                        <p className="font-bold text-lg">
                          ${(cartItem.item.price * cartItem.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${totalRounded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <span className="font-bold">Total</span>
                      <span className="font-bold text-xl">${totalRounded}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Including VAT</p>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-red-600 text-white mt-6 py-4 rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
