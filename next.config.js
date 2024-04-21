/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Ensure that Webpack resolves `.js` extensions
      config.resolve.extensions.push('.js');
      config.module.rules.push({
        test: /\.js$/,
        include: /node_modules\/react-focus-lock/,
        type: 'javascript/auto'
      });
    }

    // Optionally, configure the handling of module paths
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules/,
      type: 'javascript/auto'
    });

    return config;
  },
};

module.exports = nextConfig;