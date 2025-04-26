import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  const products = await getProducts();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our selection of premium industrial equipment and tools
          </p>
        </div>

        {!products || products.length === 0 ? (
          <p className="text-body-bold text-center">No products found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product: ProductType) => (
              <ProductCard key={product._id} product={product}/>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
