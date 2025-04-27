"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import ContactCTA from "@/components/contact-cta";

export default function BlogPage() {
  // Sample blog posts data 
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Safety Equipment Every Industrial Facility Should Have",
      excerpt: "Ensuring workplace safety is paramount in industrial settings. Discover the essential safety equipment that every facility should have to protect workers and comply with regulations.",
      category: "Safety",
      date: "April 15, 2025",
      readTime: "5 min read",
      image: "/banner.png",
      slug: "top-10-safety-equipment"
    },
    {
      id: 2,
      title: "Maintenance Tips for Industrial Machinery That Extend Equipment Life",
      excerpt: "Proper maintenance is crucial for maximizing the lifespan of industrial machinery. Learn effective maintenance strategies to reduce downtime and save on replacement costs.",
      category: "Maintenance",
      date: "April 10, 2025",
      readTime: "7 min read",
      image: "/clientAntim_logo.png",
      slug: "maintenance-tips-industrial-machinery"
    },
    {
      id: 3,
      title: "The Future of Industrial Automation: Trends to Watch",
      excerpt: "Industrial automation continues to evolve rapidly. Stay ahead of the curve by understanding the latest trends and technologies shaping the future of manufacturing and production.",
      category: "Technology",
      date: "April 5, 2025",
      readTime: "6 min read",
      image: "/heroimg2.jpg",
      slug: "future-industrial-automation"
    },
    {
      id: 4,
      title: "Selecting the Right Industrial Tools for Your Project",
      excerpt: "Choosing the appropriate tools for industrial projects can significantly impact efficiency and outcomes. Our guide helps you make informed decisions for your specific requirements.",
      category: "Tools",
      date: "March 28, 2025",
      readTime: "8 min read",
      image: "/banner.png",
      slug: "selecting-right-industrial-tools"
    },
    {
      id: 5,
      title: "How Sustainable Practices Are Reshaping Industrial Operations",
      excerpt: "Sustainability is no longer optional in industrial sectors. Discover how companies are implementing eco-friendly practices while maintaining productivity and profitability.",
      category: "Sustainability",
      date: "March 22, 2025",
      readTime: "6 min read",
      image: "/clientAntim_logo.png",
      slug: "sustainable-practices-industrial-operations"
    },
    {
      id: 6,
      title: "Essential PPE for Chemical Handling in Industrial Environments",
      excerpt: "Chemical handling requires strict safety protocols and appropriate personal protective equipment. Learn about the essential PPE needed to ensure worker safety when handling hazardous chemicals.",
      category: "Safety",
      date: "March 15, 2025",
      readTime: "5 min read",
      image: "/heroimg2.jpg",
      slug: "essential-ppe-chemical-handling"
    }
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
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/heroimg2.jpg"
                alt="Featured blog post"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
                FEATURED
              </span>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Industrial Technology Innovations That Will Transform Manufacturing in 2025
              </h2>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">April 20, 2025</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>10 min read</span>
              </div>
              <p className="text-gray-600 mb-6">
                The manufacturing landscape is rapidly evolving with groundbreaking technologies. From AI-powered predictive maintenance to advanced robotics and IoT integration, 
                discover the key innovations that are set to revolutionize industrial operations and provide competitive advantages in the coming year.
              </p>
              <Link href="/blog/industrial-technology-innovations" className="inline-flex items-center font-semibold text-green-600 hover:text-green-800 transition-colors">
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
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full">
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
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-800 transition-colors">
                    Read More <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Link 
              href="/blog/archive" 
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              View All Articles
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Browse by Category
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {["Safety", "Maintenance", "Technology", "Tools", "Sustainability", "Industry News", "Tips & Tricks", "Case Studies"].map((category, index) => (
              <motion.div 
                key={index}
                className="bg-white p-5 rounded-lg shadow-md text-center hover:shadow-lg hover:bg-gray-50 transition-all cursor-pointer"
                variants={fadeIn}
              >
                <div className="flex items-center justify-center mb-3">
                  <Tag className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{category}</h3>
                <p className="text-xs text-gray-500 mt-1">12 Articles</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Industry Insights</h2>
            <p className="text-lg mb-8 opacity-90">
              Subscribe to our newsletter and receive the latest industrial news, product updates, and expert advice directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-green-600 font-semibold rounded-md hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs mt-3 opacity-80">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
}