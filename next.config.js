/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/unser-angebot',
        destination: '/angebot-weg',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
