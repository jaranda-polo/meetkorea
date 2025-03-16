/** @type {import('next').NextConfig} */
const nextConfig = {};

if (process.env.NEXT_PUBLIC_TEMPO) {
  nextConfig["experimental"] = {
    // NextJS 13.4.8 up to 14.1.3:
    swcPlugins: [[require.resolve("tempo-devtools/swc/0.86"), {}]],
  };
}

// Add additional configuration to prevent file access conflicts
nextConfig.webpack = (config, { isServer }) => {
  // Optimize file handling
  config.watchOptions = {
    poll: 1000,
    aggregateTimeout: 300,
  };
  return config;
};

module.exports = nextConfig;
