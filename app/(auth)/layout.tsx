import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smooth Technical Trading and Service LLC - Secure Login",
  description: "Access your Smooth Technical Trading account - Your trusted partner for high-quality industrial products, safety equipment, and technical solutions in UAE and the Middle East.",
  keywords: "Smooth Technical Trading, STTS login, industrial products UAE, safety equipment Abu Dhabi, technical solutions UAE",
  openGraph: {
    title: "Smooth Technical Trading and Service LLC - Secure Login",
    description: "Access your account for industrial products, safety equipment, and technical solutions in UAE",
    url: "https://smoothtradings.com",
    siteName: "Smooth Technical Trading and Service LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
