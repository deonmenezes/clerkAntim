import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import { NavbarCollections } from "@/components/NavbarCollections";
import Chatbot from "@/components/Chatbot";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://smoothtradings.com'),
  title: "Smooth Technical Trading and Service LLC | Industrial Products & Safety Equipment",
  description: "Smooth Technical Trading and Service LLC is Abu Dhabi's premier supplier of industrial products, safety equipment, windsocks, tarpaulins, and technical solutions. Serving UAE's oil & gas, manufacturing, and construction sectors with high-quality products and exceptional service.",
  keywords: "industrial products UAE, safety equipment, windsocks, tarpaulins, Vaultex products, Abu Dhabi supplier, technical trading, industrial solutions UAE",
  openGraph: {
    title: "Smooth Technical Trading and Service LLC | Industrial Solutions",
    description: "Premium industrial products, safety equipment, and technical solutions in UAE",
    url: "https://smoothtradings.com",
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
  robots: {
    index: true,
    follow: true,
  },  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16" },
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/stts_favicon.ico" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Fetch collections for the navbar
  const { collections } = await NavbarCollections();
  
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="min-h-screen flex flex-col">
            <Navbar collections={collections} />
            <main className="flex-grow">
              {children}
            </main>
            <Footer collections={collections} />
          </div>
          <ToasterProvider />
          <Chatbot />
          <WhatsAppButton phoneNumber="+971545417801" />
        </body>
      </html>
    </ClerkProvider>
  );
}
