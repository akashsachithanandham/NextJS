/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images1-fabric.practo.com'
      }
    ]
  }
}

module.exports = nextConfig
