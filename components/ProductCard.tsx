"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  return (
    <div className="group">
      <Link
        href={`/products/${product._id}`}
        className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.media[0]}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="mb-3">
            <h3 className="text-lg font-semibold line-clamp-1">{product.title}</h3>
            <p className="text-sm text-gray-600">{product.category}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold text-green-600">AED {product.price}</p>
            <HeartFavorite product={product} updateSignedInUser={updateSignedInUser} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
