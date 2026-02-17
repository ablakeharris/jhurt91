import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // Needed for a hydration issue with NextJS and Chakra UI
    optimizePackageImports: ['@chakra-ui/react'],
  },
};

export default nextConfig;
