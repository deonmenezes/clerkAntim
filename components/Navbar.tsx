"use client";

import useCart from "@/lib/hooks/useCart";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Mail, Menu, Phone, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { NavCollection } from "./NavbarCollections";

interface NavbarProps {
  collections: NavCollection[];
}

const Navbar = ({ collections = [] }: NavbarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      {/* Top section with contact info */}
      <div className="hidden md:block border-b py-1">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center text-green-600">
            <p className="text-xs font-semibold">Trusted Industrial Product Supplier in UAE</p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center">
              <Phone className="h-3 w-3 mr-1.5 text-red-600" />
              <p className="font-semibold">+971 545417801 / 0508267792</p>
            </div>
            <div className="flex items-center">
              <Mail className="h-3 w-3 mr-1.5 text-red-600" />
              <p className="font-semibold">sales@smoothtts.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="py-1.5 px-4">
        <div className="container mx-auto flex items-center justify-between gap-4">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-1.5 hover:bg-gray-100 rounded-lg"
            onClick={() => setDropdownMenu(!dropdownMenu)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/clientAntim_logo.png" alt="clientAntim_logo" width={100} height={80} className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className={`hover:text-red-600 transition-colors text-sm ${
                pathname === "/" ? "text-red-600" : ""
              }`}
            >
              Home
            </Link>
            <div className="relative">
              <button
                className={`flex items-center gap-1 hover:text-red-600 transition-colors text-sm ${
                  pathname.startsWith("/collections") ? "text-red-600" : ""
                }`}
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                Products
                <svg
                  className={`h-4 w-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
                  {collections.length > 0 ? (
                    <>
                      {collections.map((collection) => (
                        <Link
                          key={collection._id}
                          href={`/collections/${collection._id}`}
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          {collection.title}
                        </Link>
                      ))}
                      <Link
                        href="/collections"
                        className="block px-4 py-2 text-sm hover:bg-gray-100 border-t"
                      >
                        View All Collections
                      </Link>
                    </>
                  ) : (
                    <Link
                      href="/collections"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      View All Collections
                    </Link>
                  )}
                </div>
              )}
            </div>
            <Link
              href="/about"
              className={`hover:text-red-600 transition-colors text-sm ${
                pathname === "/about" ? "text-red-600" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`hover:text-red-600 transition-colors text-sm ${
                pathname === "/services" ? "text-red-600" : ""
              }`}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className={`hover:text-red-600 transition-colors text-sm ${
                pathname === "/blog" ? "text-red-600" : ""
              }`}
            >
              Blog
            </Link>
            <Link
              href={user ? "/wishlist" : "/sign-in"}
              className={`hover:text-red-600 transition-colors text-sm ${
                pathname === "/wishlist" ? "text-red-600" : ""
              }`}
            >
              Wishlist
            </Link>
            <Link
              href={user ? "/orders" : "/sign-in"}
              className={`hover:text-red-600 transition-colors text-sm ${
                pathname === "/orders" ? "text-red-600" : ""
              }`}
            >
              Orders
            </Link>
            <Link
              href="/contact"
              className={`hover:text-red-600 transition-colors text-sm ${
                pathname === "/contact" ? "text-red-600" : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Search and actions */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                className="p-1.5 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </button>
            </div>

            <Link
              href="/cart"
              className="hidden md:flex items-center gap-2 px-2.5 py-1.5 border rounded-lg hover:bg-black hover:text-white transition-colors text-sm"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="font-semibold">Cart ({cart.cartItems.length})</span>
            </Link>

            {user ? (
              <UserButton afterSignOutUrl="/sign-in" />
            ) : (
              <Link
                href="/sign-in"
                className="p-1.5 hover:bg-gray-100 rounded-lg"
              >
                <CircleUserRound className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {dropdownMenu && (
        <div className="lg:hidden border-t">
          <nav className="container mx-auto py-3 px-4 flex flex-col gap-3">
            <Link href="/" className="hover:text-red-600 transition-colors text-sm">
              Home
            </Link>
            <div className="space-y-2">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center justify-between w-full text-sm hover:text-red-600 transition-colors"
              >
                Products
                <svg
                  className={`h-4 w-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isProductsOpen && (
                <div className="pl-4 space-y-2">
                  {collections.length > 0 ? (
                    <>
                      {collections.map((collection) => (
                        <Link
                          key={collection._id}
                          href={`/collections/${collection._id}`}
                          className="block text-sm hover:text-red-600"
                        >
                          {collection.title}
                        </Link>
                      ))}
                      <Link
                        href="/collections"
                        className="block text-sm hover:text-red-600"
                      >
                        View All Collections
                      </Link>
                    </>
                  ) : (
                    <Link
                      href="/collections"
                      className="block text-sm hover:text-red-600"
                    >
                      View All Collections
                    </Link>
                  )}
                </div>
              )}
            </div>
            <Link
              href="/about"
              className="hover:text-red-600 transition-colors text-sm"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-red-600 transition-colors text-sm"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="hover:text-red-600 transition-colors text-sm"
            >
              Blog
            </Link>
            <Link
              href={user ? "/wishlist" : "/sign-in"}
              className="hover:text-red-600 transition-colors text-sm"
            >
              Wishlist
            </Link>
            <Link
              href={user ? "/orders" : "/sign-in"}
              className="hover:text-red-600 transition-colors text-sm"
            >
              Orders
            </Link>
            <Link
              href="/contact"
              className="hover:text-red-600 transition-colors text-sm"
            >
              Contact
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-2 px-2.5 py-1.5 border rounded-lg hover:bg-black hover:text-white transition-colors text-sm"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="font-semibold">Cart ({cart.cartItems.length})</span>
            </Link>
          </nav>
        </div>
      )}

      {/* Search overlay */}
      {isSearchOpen && (
        <div className="border-t py-2">
          <div className="container mx-auto px-4 flex items-center gap-3">
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-3 py-1.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
            />
            <button
              disabled={query === ""}
              onClick={() => {
                router.push(`/search/${query}`);
                setIsSearchOpen(false);
              }}
              className="px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
