/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Ensure API routes are properly handled during static generation
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
