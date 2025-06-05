import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  
  // Default metadata
  let metadata: Metadata = {
    title: "Blog Post | Smooth Technical Trading",
    description: "Insights and information about industrial products and safety solutions from Smooth Technical Trading.",
  };
  
  // Specific metadata based on slug
  switch(slug) {
    case "windsock-uae-reflective-tape":
      metadata = {
        title: "WINDSOCK UAE – Red Windsock with Reflective Tape For Day & Night",
        description: "Excel Trading UAE provides high-quality red windsocks with reflective features designed for aviation, maritime, and industrial operations, ensuring safety in all weather conditions.",
        keywords: "windsock UAE, reflective windsock, aviation safety equipment, maritime safety, industrial safety indicators, wind direction indicators",
        openGraph: {
          title: "WINDSOCK UAE – Red Windsock with Reflective Tape For Day & Night",
          description: "High-quality red windsocks with reflective features for aviation, maritime, and industrial operations",
          images: [{ url: "/windsock.png" }],
        },
      };
      break;
    case "vaultex-safety-products-uae":
      metadata = {
        title: "Vaultex Safety Products Supplier in Abu Dhabi, UAE",
        description: "Excel Trading proudly serves as a trusted supplier and reseller of Vaultex Products, a renowned name in safety equipment, offering comprehensive safety solutions for diverse needs.",
        keywords: "Vaultex safety products, safety equipment UAE, PPE supplier Abu Dhabi, safety solutions UAE, industrial safety equipment",
        openGraph: {
          title: "Vaultex Safety Products Supplier in Abu Dhabi, UAE",
          description: "Comprehensive safety solutions including PPE, safety helmets, gloves, and eyewear",
          images: [{ url: "/vaultex.png" }],
        },
      };
      break;
    case "tarpaulin-uae-solutions":
      metadata = {
        title: "Tarpaulin In UAE - High-Quality PE Fabric Solutions",
        description: "Excel Trading is one of the leading suppliers of Tarpaulins in Abu Dhabi, Dubai. Discover our range of waterproof tarpaulins stabilized against UV rays for long outdoor exposure.",
        keywords: "tarpaulin UAE, PVC tarpaulin supplier, waterproof tarpaulin, UV resistant tarpaulin, industrial tarpaulin, construction tarpaulin",
        openGraph: {
          title: "Tarpaulin In UAE - High-Quality PE Fabric Solutions",
          description: "Waterproof tarpaulins stabilized against UV rays for long outdoor exposure",
          images: [{ url: "/tarpaulin.png" }],
        },
      };
      break;
  }
  
  return metadata;
}
