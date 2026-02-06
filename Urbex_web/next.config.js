/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // 允许本地图片不优化，确保图片能正常显示
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig







