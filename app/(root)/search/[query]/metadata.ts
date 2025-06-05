import { Metadata } from "next";

type Props = {
  params: { query: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const decodedQuery = decodeURIComponent(params.query);
  
  return {
    title: `Search Results for "${decodedQuery}" | Smooth Technical Trading`,
    description: `Find premium industrial products, safety equipment, and technical solutions matching "${decodedQuery}" from Abu Dhabi's leading supplier, Smooth Technical Trading.`,
    keywords: `${decodedQuery}, industrial products UAE, safety equipment search, technical solutions Abu Dhabi`,
    openGraph: {
      title: `Search Results for "${decodedQuery}" | Smooth Technical Trading`,
      description: `Discover industrial products and safety equipment matching "${decodedQuery}" from Smooth Technical Trading in UAE.`,
      url: `https://smoothtradings.com/search/${params.query}`,
      siteName: "Smooth Technical Trading and Service LLC",
      locale: "en_US",
      type: "website",
    },
    robots: {
      index: false, // Don't index search result pages
      follow: true,
    },
  };
}
