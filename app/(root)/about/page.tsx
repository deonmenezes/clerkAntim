"use client";

import Image from "next/image";
import { CheckCircle, Award, Users, TrendingUp, Timer } from "lucide-react";
import { motion } from "framer-motion";
import ContactCTA from "@/components/contact-cta";

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Smooth Technical Trading</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your trusted partner for high-quality industrial products and solutions in the UAE and beyond
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/clientAntim_logo.png"
                alt="Smooth Technical Trading"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2015, Smooth Technical Trading and Service LLC has grown from a small trading company to one of the 
                most trusted industrial product suppliers in the UAE. Our journey began with a simple mission: to provide 
                high-quality industrial products coupled with exceptional service.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we proudly serve diverse sectors including oil & gas, manufacturing, construction, and logistics across 
                the UAE and Middle East. Our dedication to quality, reliability, and customer satisfaction has established us 
                as a preferred partner for industrial solutions.
              </p>
              <p className="text-gray-600">
                With an extensive network of global manufacturers and suppliers, we ensure our clients receive the best products 
                at competitive prices, supporting their operational excellence and growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Mission, Vision & Values
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              variants={fadeIn}
            >
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600">
                To be a trusted partner offering reliable, efficient, and cost-effective industrial solutions that enable our clients 
                to achieve operational excellence and sustainable growth.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              variants={fadeIn}
            >
              <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600">
                To become the leading industrial products supplier in the Middle East, recognized for our product quality, 
                technical expertise, and exceptional service standards.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              variants={fadeIn}
            >
              <div className="h-14 w-14 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Integrity in all business dealings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Commitment to excellence</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Customer-centric approach</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Innovation and adaptability</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose Smooth Technical Trading?</h2>
            <p className="text-gray-600">
              We differentiate ourselves through quality, expertise, and commitment to customer satisfaction
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="p-6 text-center"
              variants={fadeIn}
            >
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Premium Quality</h3>
              <p className="text-gray-600">
                We source only the highest quality products from trusted manufacturers and suppliers worldwide
              </p>
            </motion.div>

            <motion.div 
              className="p-6 text-center"
              variants={fadeIn}
            >
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Team</h3>
              <p className="text-gray-600">
                Our technical experts provide personalized advice and support tailored to your specific needs
              </p>
            </motion.div>

            <motion.div 
              className="p-6 text-center"
              variants={fadeIn}
            >
              <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Competitive Pricing</h3>
              <p className="text-gray-600">
                We offer excellent value through competitive pricing without compromising on quality
              </p>
            </motion.div>

            <motion.div 
              className="p-6 text-center"
              variants={fadeIn}
            >
              <div className="h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Timer className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600">
                Our efficient logistics ensure timely delivery of products across the UAE and Middle East
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
}