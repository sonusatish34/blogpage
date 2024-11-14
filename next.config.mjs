/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ldcars.blr1.digitaloceanspaces.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'ldcars.blr1.cdn.digitaloceanspaces.com',
      },
    ],
  },
  webpack(config) {
    // Fallback fs to empty to prevent errors during client-side bundling
    config.resolve.fallback = {
      fs: false,  // Mock fs module for client-side bundling
      net: false,  // Mock fs module for client-side bundling
    };

    return config;
  },
};

export default nextConfig;