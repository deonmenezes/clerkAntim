import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Smooth Technical Trading and Service LLC | Industrial Solutions Provider",
  description: "Smooth Technical Trading and Service LLC is a premier industrial trading company in Abu Dhabi, UAE specializing in high-quality mechanical and electrical products for oil & gas, manufacturing, construction, and logistics sectors.",
  keywords: "industrial trading company UAE, Abu Dhabi industrial supplier, mechanical products UAE, electrical products supplier, industrial solutions Middle East, technical trading company, oil gas industrial products, manufacturing equipment supplier",
  openGraph: {
    title: "About Smooth Technical Trading and Service LLC",
    description: "Your trusted partner for high-quality industrial products and solutions in the UAE and beyond.",
    url: "https://smoothtradings.com/about",
    siteName: "Smooth Technical Trading and Service LLC",
    images: [
      {
        url: "/clientAntim_logo.png",
        width: 1200,
        height: 630,
        alt: "Smooth Technical Trading and Service LLC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Smooth Technical Trading and Service LLC",
    description: "Premier industrial trading company in Abu Dhabi, UAE specializing in mechanical and electrical products.",
    images: ["/clientAntim_logo.png"],
  },
  alternates: {
    canonical: "https://smoothtradings.com/about",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};