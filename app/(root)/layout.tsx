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
  title: "STTS Store",
  description: "STTS Ecommerce Store",
  icons: {
    icon: "/stts_favicon.ico",
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
            <Footer />
          </div>
          <ToasterProvider />
          <Chatbot />
          <WhatsAppButton phoneNumber="+971545417801" />
        </body>
      </html>
    </ClerkProvider>
  );
}
