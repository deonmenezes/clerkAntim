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
  // Handle edge runtime warnings for middleware
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...config.externals, 'canvas', 'jsdom'];
    }
    return config;
  },
};

export default nextConfig;
