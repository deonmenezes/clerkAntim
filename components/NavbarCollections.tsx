import { getCollections } from "@/lib/actions/actions";

export interface NavCollection {
  _id: string;
  title: string;
}

export async function NavbarCollections() {
  const collections = await getCollections();
  
  // Return collections data in a format suitable for the navbar
  return {
    collections: collections.map((collection: any) => ({
      _id: collection._id,
      title: collection.title,
    }))
  };
}