import type { NextConfig } from "next";

// leave empty for SSR, or following to build static website in /out
const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
