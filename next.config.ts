import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Se estiver no Next.js 13 ou 14, use remotePatterns (mais seguro)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
    // Ou, se preferir o modo antigo/simples:
    // domains: ['randomuser.me'],
  },
};

export default nextConfig;
