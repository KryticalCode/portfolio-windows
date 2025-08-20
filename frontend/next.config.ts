import type { NextConfig } from "next";

// leave empty for SSR, or following to build stati webstie in /out
const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
