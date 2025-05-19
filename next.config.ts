import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.pokemondb.net',
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;


