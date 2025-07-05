/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@openzeppelin/wizard-mcp"],
  experimental: {
    esmExternals: true,
  },
  webpack: (config) => {
    config.resolve.extensionAlias = {
      ".js": [".js", ".ts"],
      ".jsx": [".jsx", ".tsx"],
    };
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
