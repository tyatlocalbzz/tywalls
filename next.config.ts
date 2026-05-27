import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silence workspace root warning (this is a standalone personal site)
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
