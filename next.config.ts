import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.weatherapi.com',
        port: '',
        pathname: '/weather/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
