/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: true,
  },
  transpilePackages: [
    '@ericglau/wizard-mcp',
    '@modelcontextprotocol/sdk'
  ],
}

module.exports = nextConfig