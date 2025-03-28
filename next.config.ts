import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true,
    authInterrupts: truee
  }
};

export default nextConfig;
