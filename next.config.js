/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // distDir: 'dist',
  transpilePackages: ["next-image-export-optimizer"],

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });

    return config;
  },
};

module.exports = nextConfig;
