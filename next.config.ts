import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.bigmerchant.co',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
