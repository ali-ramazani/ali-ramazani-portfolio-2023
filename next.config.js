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
      // Exclude .node files from client-side bundle
      config.module.rules.push({
        test: /\.node$/,
        loader: "ignore-loader",
      });
    }

    // Keep your existing externals configuration
    config.externals.push(
      "@mongodb-js/zstd",
      "snappy",
      "mongodb-client-encryption"
    );

    return config;
  },
};

module.exports = nextConfig;
