import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
    ],
    
  },
};

export default nextConfig;
