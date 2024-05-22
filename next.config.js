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
      // Use function format to finely control the exclusion of native modules
      config.externals.push((context, request, callback) => {
        if (
          request === "@mongodb-js/zstd" ||
          request === "snappy" ||
          request === "mongodb-client-encryption"
        ) {
          // Exclude these modules from client-side bundles
          return callback(null, "commonjs " + request);
        }
        callback();
      });
    }

    // Add a rule for .node files
    config.module.rules.push({
      test: /\.node$/,
      loader: "node-loader",
    });

    return config;
  },
};

module.exports = nextConfig;
