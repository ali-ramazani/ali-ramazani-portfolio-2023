/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals.push(
        "@mongodb-js/zstd",
        "snappy",
        "mongodb-client-encryption"
      );
    }
    return config;
  },
};

module.exports = nextConfig;
