import Image from "next/image";
import Link from "next/link";

interface CollectionProps {
  collections: CollectionType[];
}

const Collections = ({ collections }: CollectionProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections of industrial equipment and tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link
              href={`/collections/${collection._id}`}
              key={collection._id}
              className="group block"
            >
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{collection.title}</h3>
                  <p className="text-sm text-white line-clamp-2">{collection.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
