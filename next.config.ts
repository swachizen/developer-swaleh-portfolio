import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,

  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
    ],
  },

  images: {
    formats: ["image/avif", "image/webp"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "qzuqmhmcmbfcmhlrmfyt.supabase.co",
      },
    ],
  },
};

export default nextConfig;
