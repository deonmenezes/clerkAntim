import Collections from "@/components/Collections";
import { getCollections } from "@/lib/actions/actions";

const CollectionsPage = async () => {
  const collections = await getCollections();

  return (
    <div>
      <Collections collections={collections} />
    </div>
  );
};

export default CollectionsPage;

export const dynamic = "force-dynamic";