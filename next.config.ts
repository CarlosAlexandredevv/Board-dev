import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  cacheComponents: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

export default nextConfig;
