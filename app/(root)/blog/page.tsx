"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import ContactCTA from "@/components/contact-cta";

export default function BlogPage() {
  // Blog posts data based on real products
  const blogPosts = [
    {
      id: 1,
      title: "WINDSOCK UAE – Red Windsock with Reflective Tape For Day & Night",
      excerpt: "Excel Trading UAE provides high-quality red windsocks with reflective features designed for aviation, maritime, and industrial operations, ensuring safety in all weather conditions.",
      category: "Safety",
      date: "April 28, 2025",
      readTime: "5 min read",
      image: "/windsock.png",
      slug: "windsock-uae-reflective-tape"
    },
    {
      id: 2,
      title: "Vaultex Safety Products Supplier in Abu Dhabi, UAE",
      excerpt: "Excel Trading proudly serves as a trusted supplier and reseller of Vaultex Products, a renowned name in safety equipment, offering comprehensive safety solutions for diverse needs.",
      category: "Safety Equipment",
      date: "April 20, 2025",
      readTime: "4 min read",
      image: "/vaultex.png",
      slug: "vaultex-safety-products-uae"
    },
    {
      id: 3,
      title: "Tarpaulin In UAE - High-Quality PE Fabric Solutions",
      excerpt: "Excel Trading is one of the leading suppliers of Tarpaulins in Abu Dhabi, Dubai. Discover our range of waterproof tarpaulins stabilized against UV rays for long outdoor exposure.",
      category: "Products",
      date: "April 15, 2025",
      readTime: "6 min read",
      image: "/tarpaulin.png",
      slug: "tarpaulin-uae-solutions"
    },
   
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Industrial Insights Blog</h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert knowledge, industry trends, and practical advice for industrial professionals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="/windsock.png"
                alt="Red Windsock with Reflective Tape"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-2">
                  SAFETY EQUIPMENT
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                  FEATURED
                </span>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                  SAFETY
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                WINDSOCK UAE – Red Windsock with Reflective Tape For Day & Night
              </h2>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">April 28, 2025</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>5 min read</span>
              </div>
              <p className="text-gray-600 mb-6">
                When it comes to aviation, maritime, and industrial operations, safety is paramount. The Red Windsock with Reflective Tape is an essential signaling device that ensures visibility in various weather conditions. With its vibrant red color and reflective strips, it provides crucial wind direction information for pilots, seafarers, and industrial operators day and night.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  #Aviation
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  #Industrial
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  #SafetyEquipment
                </span>
              </div>
              <Link href="/blog/windsock-uae-reflective-tape" className="inline-flex items-center font-semibold text-red-600 hover:text-red-800 transition-colors bg-red-50 hover:bg-red-100 px-5 py-2 rounded-full">
                Read Full Article <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Latest Articles
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {blogPosts.map((post) => (
              <motion.div 
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-xl hover:-translate-y-1"
                variants={fadeIn}
              >
                <div className="relative h-52">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className={post.slug === "vaultex-safety-products-uae" ? "object-contain bg-white p-3" : "object-cover"}
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`inline-block ${
                      post.category === "Safety" ? "bg-red-100 text-red-800" : 
                      post.category === "Safety Equipment" ? "bg-blue-100 text-blue-800" :
                      "bg-green-100 text-green-800"
                    } text-xs font-semibold px-2.5 py-1 rounded-full`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <Calendar className="h-3.5 w-3.5 mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <Clock className="h-3.5 w-3.5 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className={`inline-flex items-center text-sm font-semibold ${
                    post.category === "Safety" ? "text-red-600 hover:text-red-800" : 
                    "text-green-600 hover:text-green-800"
                  } transition-colors`}>
                    Read More <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
}