"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2, Download, Bookmark, ChevronRight } from "lucide-react";
import ContactCTA from "@/components/contact-cta";
import Loader from "@/components/Loader";

// Define a type for the blog post data structure
type BlogPost = {
  title: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  additionalImages?: string[];
  category: string;
  content: string;
};

// Define a type for the blog post data object with string index signature
type BlogPostData = {
  [key: string]: BlogPost;
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Blog post data based on slug
  const blogPostData: BlogPostData = {
    "windsock-uae-reflective-tape": {
      title: "WINDSOCK UAE – Red Windsock with Reflective Tape For Day & Night",
      date: "April 28, 2025",
      readTime: "5 min read",
      author: "Excel Trading UAE Team",
      image: "/windsock.png",
      additionalImages: ["/banner.png"],
      category: "Safety",
      content: `
        <h2>Introduction</h2>
        <p>When it comes to aviation, maritime, and various industrial operations, security is always of utmost importance. The use of high-quality signaling devices such as the Red Windsock with Reflective Tape is a crucial aspect of ensuring the safety of such environments. Excel Trading UAE provides a wide range of windsocks, including those with reflective features to mimic the wind sock and also be useful in different weather conditions mainly through illumination.</p>
        
        <figure class="my-8">
          <img src="/windsock.png" alt="Red and White Windsock" class="rounded-lg mx-auto" />
          <figcaption class="text-center text-sm text-gray-500 mt-2">Red and White Windsock with Reflective Strips for Optimal Visibility</figcaption>
        </figure>
        
        <h2>Key Features</h2>
        
        <h3>1. Vibrant Red Color</h3>
        <p>The red color of the windsock is selected deliberately; it is highly visible in adverse weather conditions. The incentive of painting the wind sock in a vibrant color guarantees that the wind sock is easily identified from a distance to be used as a pointer of wind direction and speed.</p>
        
        <h3>2. Reflective Strips</h3>
        <p>Persons intending to use the windsock gain further visibility when reflective stripes are incorporated into the fabric of the windsock. They are also installed to reflect light on the strip, therefore the appearance of the windsock is dramatic when it is dawn or at dusk. This feature is particularly of great help to businesses that are in operation 24 hours a day.</p>
        
        <h3>3. Durable Construction</h3>
        <p>Red Windsocks with Reflective sleeves are made from highly genuine, and thick materials that will not break easily and can withstand extreme and regular adverse situations. This ensures that they can last for long and can be considered as an economic solution to safety-headed organizations.</p>
        
        <h3>4. Easy Installation</h3>
        <p>Uniquely, the windsock does not require a complicated and time-consuming setup process, they can be installed easily. When installed, the system usually gets fastened on a strong pole or frame to allow it to be stable during different wind conditions.</p>
        
        <h3>5. Wind Direction Indication</h3>
        <p>The primary purpose of a windsock is to show the direction of the wind and its strength. This information is vital for pilots, seafarers, and industrial operators to enable them to make some important decisions such as take-offs and landings among others.</p>
        
        <h2>Applications</h2>
        
        <h3>1. Aviation</h3>
        <p>Red Windsocks with Reflective comprise crucial signaling for pilots while undertaking take-off and landing at airports and helipads. The strips provide visibility particularly during such conditions of low light or at night to such vehicles as cars, buses, and trucks.</p>
        
        <h3>2. Maritime Operations</h3>
        <p>These are specifically employed at ports and many facilities in the maritime industry to provide information concerning wind conditions to the ship captains and other flag officers entrusted with the responsibilities of controlling and managing the process of ship docking as well as movement at sea.</p>
        
        <h3>3. Industrial Settings</h3>
        <p>These windsocks also find application in factories, construction sites, and other such industries that involve heavy plants and machinery as are hazardous.</p>
        
        <h2>Conclusion</h2>
        <p>The Red Windsock with Reflective Tape is a classical windsock with additional safety functions. The integration of a brightly shining red color and reflective strips in appropriate positions means that this device guarantees effective signs of the wind in various conditions. It is relevant and logical to invest in such a long-lasting and safe tool for increasing the operational safety of working conditions.</p>
      `
    },
    "vaultex-safety-products-uae": {
      title: "Vaultex Safety Products Supplier in Abu Dhabi, UAE",
      date: "April 20, 2025",
      readTime: "4 min read",
      author: "Excel Trading UAE Team",
      image: "/vaultex.png",
      category: "Safety Equipment",
      content: `
        <h2>Secure Your Workplace: Your Trusted Vaultex Safety Products Supplier in Abu Dhabi, UAE</h2>
        
        <figure class="my-8">
          <img src="/vaultex.png" alt="Vaultex Safety Products" class="rounded-lg mx-auto" />
          <figcaption class="text-center text-sm text-gray-500 mt-2">Vaultex - Leading Safety Equipment Provider in the UAE</figcaption>
        </figure>
        
        <p>Excel Trading proudly serves as a trusted supplier and reseller of Vaultex Products, a renowned name in safety equipment, in Abu Dhabi. Our unwavering commitment to providing superior safety solutions is reflected in our extensive range of high-quality products. From essential personal protective equipment (PPE) like safety helmets, gloves, and eyewear to safety signage, fire extinguishers, and first aid kits, we offer a comprehensive selection to meet diverse safety needs.</p>
        
        <p>At Excel Trading, we take pride in offering Vaultex Safety Products, including specially designed PPE such as safety helmets, glasses, face masks, ear-muffs, gloves, vests, jackets, and safety harnesses. With years of industry experience, we understand the paramount importance of reliable safety measures. Our dedicated team stands ready to guide and assist clients in selecting the right products for their specific requirements.</p>
        
        <p>Partner with Excel Trading for a safer and more secure work environment, trusting our commitment to safety excellence.</p>
      `
    },
    "tarpaulin-uae-solutions": {
      title: "Tarpaulin In UAE - High-Quality PE Fabric Solutions",
      date: "April 15, 2025",
      readTime: "6 min read",
      author: "Excel Trading UAE Team",
      image: "/tarpaulin.png",
      category: "Products",
      content: `
        <h2>Excel Trading: Leading Tarpaulin Supplier in UAE</h2>
        
        <figure class="my-8">
          <img src="/tarpaulin.png" alt="High-Quality Tarpaulins" class="rounded-lg mx-auto" />
          <figcaption class="text-center text-sm text-gray-500 mt-2">Premium Blue and Orange Tarpaulin Solutions Available at Excel Trading UAE</figcaption>
        </figure>
        
        <p>Excel Trading is one of the leading suppliers of Tarpaulins in Abu Dhabi, Dubai. Tarpaulins are made of high-quality PE Fabric. They are Waterproof, stabilized against ultraviolet rays & excess heat for long outdoor exposure.</p>
        
        <p>Tarpaulins are made of high-quality PE Fabric. They are Waterproof, stabilized against ultraviolet rays & excess heat for long outdoor exposure. We are Specialized PVC Tarpaulin Supplier in UAE. Fire Rated Tarpaulin, Blue and Orange. Provide a Comfortably Shaded Area at Your Hotel, Aquatic Center, or Car Parking bays. Best Quality. High Quality. PVC, PU PTFE, HDPE, UV.</p>
        
        <p>We have steadily grown over the years while maintaining our commitment to providing all customers with solutions of the highest quality. Additionally, we are always focused on developing creative solutions to meet the demands of our consumers. Our Strength is in our business ethics, dedication, the efficacy of our employees, and our ability to anticipate & react to changing trends & customer expectations. We take a more comprehensive approach to sales and give clients solutions that match their needs.</p>
        
        <p>We are here to stay and will continue to provide sustainable, high-quality, and reputable items.</p>
        
        <h2>Get The Best Quote</h2>
        <ul>
          <li>2102 – FIRE RETARDANT TARPAULINS 400 GSM</li>
          <li>PAF-12 PVC TARPAULIN 400 GSM</li>
          <li>FR2219 420 GSM</li>
          <li>PAF-16 – PVC COATED FABRIC 580 GSM</li>
          <li>2006 – PVC COATED FABRIC 580 GSM</li>
          <li>PAA-20 PVC COATED FABRIC 680 GSM</li>
          <li>7705 PVC COATED BLOCKOUT FABRIC 850 GSM</li>
          <li>B6000 PVC COATED PANAMA FABRIC 900 GSM</li>
          <li>B7195 – PVC COATED FABRIC 1100 GSM</li>
          <li>PE TARPAULIN</li>
          <li>SCAFFOLDING SHEETS</li>
          <li>FRC 22 – FIRE RETARDANT CANVAS</li>
          <li>COTTON CANVAS</li>
          <li>TARPAULIN ACCESSORIES</li>
        </ul>
      `
    },
    // Default content for other slugs
    "default": {
      title: "Blog Post Not Found",
      date: "",
      readTime: "",
      author: "",
      image: "/banner.png",
      category: "",
      content: "<p>Sorry, the requested blog post could not be found.</p>"
    }
  };

  // Get the blog post data or use default if not found
  const post = blogPostData[slug] || blogPostData["default"];

  // If slug doesn't match any posts, show a loader briefly then redirect
  if (!blogPostData[slug]) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader size="large" />
      </div>
    );
  }

  // For the windsock article, create a more enhanced layout
  if (slug === "windsock-uae-reflective-tape") {
    return (
      <div className="bg-white pb-16">
        {/* Enhanced Header for Windsock Article */}
        <section className="relative">
          <div className="h-[500px] relative">
            <Image 
              src={post.image} 
              alt={post.title}
              fill
              className="object-cover object-center" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 -mt-32 relative z-10">
              <div className="flex items-center justify-between mb-6">
                <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-green-600 text-sm font-medium">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Link>
                <span className="inline-flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">{post.title}</h1>
              
              <div className="flex items-center justify-between border-y border-gray-200 py-4 my-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.readTime}</span>
                  <span>By {post.author}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button className="inline-flex items-center text-gray-500 hover:text-gray-700">
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button className="inline-flex items-center text-gray-500 hover:text-gray-700">
                    <Bookmark className="h-5 w-5" />
                  </button>
                  <button className="inline-flex items-center text-gray-500 hover:text-gray-700">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <div className="bg-red-50 border-l-4 border-red-500 p-5 mb-8 rounded-r-lg">
                  <p className="text-red-800 font-medium">
                    Excel Trading UAE provides high-quality red windsocks with reflective features designed for aviation, maritime, and industrial operations, ensuring safety in all weather conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Article Content */}
        <div className="container mx-auto px-4 py-10">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8 py-4 border-b border-gray-200">
              <ol className="flex items-center text-sm">
                <li className="flex items-center">
                  <Link href="/" className="text-gray-500 hover:text-green-600">Home</Link>
                  <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
                </li>
                <li className="flex items-center">
                  <Link href="/blog" className="text-gray-500 hover:text-green-600">Blog</Link>
                  <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
                </li>
                <li className="text-gray-900 font-medium">Windsock UAE</li>
              </ol>
            </nav>
            
            <motion.article 
              className="prose prose-lg prose-green lg:prose-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-3">
                  {/* Blog Content */}
                  <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                  
                  {/* Tags */}
                  <div className="mt-12 pt-6 border-t border-gray-200">
                    <h4 className="text-base font-semibold text-gray-700 mb-3">Related Topics</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Safety Equipment
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Aviation
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Excel Trading
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Maritime
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Industrial
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-1">
                  <div className="sticky top-24">
                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h4 className="font-medium text-lg mb-4 text-gray-900">Table of Contents</h4>
                      <nav className="space-y-3 text-sm">
                        <a href="#introduction" className="block text-gray-600 hover:text-green-600">Introduction</a>
                        <a href="#key-features" className="block text-gray-600 hover:text-green-600">Key Features</a>
                        <a href="#applications" className="block text-gray-600 hover:text-green-600">Applications</a>
                        <a href="#conclusion" className="block text-gray-600 hover:text-green-600">Conclusion</a>
                      </nav>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-medium text-lg mb-4 text-gray-900">Contact Us</h4>
                      <p className="text-gray-600 text-sm mb-4">
                        Interested in our Windsock products? Get in touch with our team for more information.
                      </p>
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded">
                        Request Information
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
            
            {/* Author Info */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-green-100 p-3">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">About the Author</h4>
                  <p className="text-gray-600">
                    The Excel Trading UAE Team comprises industry experts with extensive experience in industrial safety and equipment solutions. We're committed to providing valuable insights and information to help businesses make informed decisions.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Related Posts */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">More Safety Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link href="/blog/vaultex-safety-products-uae" className="group">
                  <div className="relative h-60 mb-4 overflow-hidden rounded-lg">
                    <Image 
                      src="/vaultex.png" 
                      alt="Vaultex Safety Products" 
                      fill
                      className="object-contain bg-white p-2 transition-transform group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-xs font-medium text-green-600 mb-2 block">Safety Equipment</span>
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    Vaultex Safety Products Supplier in Abu Dhabi, UAE
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">
                    Explore our comprehensive range of Vaultex safety equipment, from PPE to fire safety solutions.
                  </p>
                </Link>
                
                <Link href="/blog/tarpaulin-uae-solutions" className="group">
                  <div className="relative h-60 mb-4 overflow-hidden rounded-lg">
                    <Image 
                      src="/tarpaulin.png" 
                      alt="Tarpaulin Solutions" 
                      fill
                      className="object-contain bg-white p-2 transition-transform group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-xs font-medium text-green-600 mb-2 block">Products</span>
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    Tarpaulin In UAE - High-Quality PE Fabric Solutions
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">
                    Discover our range of waterproof tarpaulins stabilized against UV rays for long outdoor exposure.
                  </p>
                </Link>
              </div>
            </div>
            
            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link 
                href="/blog" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-20">
          <ContactCTA />
        </div>
      </div>
    );
  }

  // Default layout for other articles
  return (
    <div className="bg-white pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog" className="inline-flex items-center text-green-600 hover:text-green-800 mb-4 font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">{post.title}</h1>
            
            <div className="flex items-center justify-center text-sm text-gray-500 mb-6">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="mr-4">{post.date}</span>
              <Clock className="h-4 w-4 mr-1" />
              <span className="mr-4">{post.readTime}</span>
              <span>By {post.author}</span>
            </div>
            
            <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full mb-12">
        <Image 
          src={post.image} 
          alt={post.title}
          fill
          className={slug === "vaultex-safety-products-uae" ? "object-contain bg-white p-4" : "object-cover"} 
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Social Share */} 
          <div className="flex justify-end mb-8">
            <button className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
              <Share2 className="h-4 w-4 mr-2" />
              Share this article
            </button>
          </div>
          
          {/* Blog Content */}
          <motion.article 
            className="prose prose-green lg:prose-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-500 mb-3">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {post.category && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {post.category}
                </span>
              )}
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                Excel Trading
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                UAE
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                Industrial
              </span>
            </div>
          </div>
          
          {/* Author Info */}
          <div className="mt-10 p-6 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-lg mb-2">About the Author</h4>
            <p className="text-gray-600">
              The Excel Trading UAE Team comprises industry experts with extensive experience in industrial safety and equipment solutions. We're committed to providing valuable insights and information to help businesses make informed decisions.
            </p>
          </div>
          
          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">You Might Also Like</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {slug !== "windsock-uae-reflective-tape" && (
                <Link href="/blog/windsock-uae-reflective-tape" className="group">
                  <div className="relative h-48 mb-3 overflow-hidden rounded-lg">
                    <Image 
                      src="/windsock.png" 
                      alt="Windsock" 
                      fill
                      className="object-cover transition-transform group-hover:scale-105" 
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    WINDSOCK UAE – Red Windsock with Reflective Tape For Day & Night
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">April 28, 2025</p>
                </Link>
              )}
              
              {slug !== "vaultex-safety-products-uae" && (
                <Link href="/blog/vaultex-safety-products-uae" className="group">
                  <div className="relative h-48 mb-3 overflow-hidden rounded-lg bg-white">
                    <Image 
                      src="/vaultex.png" 
                      alt="Vaultex Safety Products" 
                      fill
                      className="object-contain p-2 transition-transform group-hover:scale-105" 
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    Vaultex Safety Products Supplier in Abu Dhabi, UAE
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">April 20, 2025</p>
                </Link>
              )}
              
              {slug !== "tarpaulin-uae-solutions" && (
                <Link href="/blog/tarpaulin-uae-solutions" className="group">
                  <div className="relative h-48 mb-3 overflow-hidden rounded-lg">
                    <Image 
                      src="/tarpaulin.png" 
                      alt="Tarpaulin Solutions" 
                      fill
                      className="object-contain bg-white p-2 transition-transform group-hover:scale-105" 
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    Tarpaulin In UAE - High-Quality PE Fabric Solutions
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">April 15, 2025</p>
                </Link>
              )}
            </div>
          </div>
          
          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="mt-20">
        <ContactCTA />
      </div>
    </div>
  );
}