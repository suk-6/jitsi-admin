/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'file.suk.kr',
        port: '',
      },
    ],
  },
};

export default nextConfig;
