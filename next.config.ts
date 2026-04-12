import type { NextConfig } from "next";
import path from "path";

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      tailwindcss: path.resolve(__dirname, "node_modules/tailwindcss"),
    },
  },
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: `${STRAPI_URL}/uploads/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.georgia-app.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
