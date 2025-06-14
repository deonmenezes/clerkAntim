'use client'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Send } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { NavCollection } from "./NavbarCollections"

interface FooterProps {
  collections?: NavCollection[];
}

export default function Footer({ collections = [] }: FooterProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        toast.success("You've been subscribed to our newsletter!");
        setEmail("");
      } else {
        const error = await response.json();
        toast.error(error.error || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Subscription error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/clientAntim_logo.png"
                alt="Excel Trading LLC"
                width={120}
                height={40}
              />
            </Link>
            <p className="mb-6">
            Smooth Technical Trading and Service LLC is a premier industrial trading company based in Abu Dhabi, UAE. We specialize in sourcing, supplying, and distributing high-quality mechanical and electrical products .
            </p>
            {/* <div className="flex space-x-4">
              <Link href="#" className="hover:text-green-500 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-green-500 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-green-500 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-green-500 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div> */}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-green-500 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-500 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-green-500 transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-500 transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-green-500 transition-colors duration-300">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-500 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Product Collections</h3>
            <ul className="space-y-3">
              {collections.length > 0 ? (
                collections.slice(0, 6).map((collection) => (
                  <li key={collection._id}>
                    <Link 
                      href={`/collections/${collection._id}`} 
                      className="hover:text-green-500 transition-colors duration-300"
                    >
                      {collection.title}
                    </Link>
                  </li>
                ))
              ) : (
                <li>
                  <Link href="/collections" className="hover:text-green-500 transition-colors duration-300">
                    View All Products
                  </Link>
                </li>
              )}
              <li>
                <Link href="/collections" className="hover:text-green-500 transition-colors duration-300">
                  View All Collections
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-green-500 mt-0.5" />
                <span>Sector-M9 - Shop #7 - Bldg. #49 As Salami 6 St - Musaffah - Musaffah Industrial - Abu Dhabi</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-green-500 mt-0.5" />
                <span>+971 545417801/ 0508267792</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-green-500 mt-0.5" />
                <div className="flex flex-col">
                  <span>sales@smoothtradings.com</span>
                  <span>info@smoothtradings.com</span>
                  <span>accounts@smoothtradings.com</span>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Subscribe to Newsletter</h3>
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow bg-gray-800 border-gray-700 text-white"
                  />
                  <Button 
                    type="submit" 
                    className="ml-2 bg-green-600 hover:bg-green-700"
                    disabled={isSubmitting}
                  >
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Subscribe</span>
                  </Button>
                </div>                <p className="text-xs text-gray-400">
                  Subscribe to get updates on new products and special offers
                </p>
              </form>
            </div>

            {/* QR Code Section */}
            <div className="mt-8 flex flex-col items-center">
              <h4 className="text-sm font-medium mb-3 text-green-500">Scan for Quick Access</h4>
              <div className="bg-white p-3 rounded-lg shadow-lg">
                <Image
                  src="/website_qr.png"
                  alt="QR Code - Visit our website"
                  width={120}
                  height={120}
                  className="rounded"
                />
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                Scan to visit our website
              </p>
            </div>
          </div>
        </div>        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Smooth Technical Trading and Service LLC. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/sitemap.xml" className="hover:text-green-500 transition-colors duration-300">
              Sitemap
            </Link>
            <Link href="/privacy-policy" className="hover:text-green-500 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-green-500 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
