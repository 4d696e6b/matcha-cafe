import type { NextConfig } from "next";

// Build the two routes as static HTML for the school's local submission.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  // Photos are already optimized local JPEGs, so no image server is needed.
  images: { unoptimized: true },
};

export default nextConfig;
