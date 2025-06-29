import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        hostname: "behance.net",
      },
      {
        hostname: "mir-s3-cdn-cf.behance.net",
      },
    ],
  },
};

export default nextConfig;
