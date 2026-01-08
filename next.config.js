/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Improve performance
  poweredByHeader: false,

  // Enable compression
  compress: true,

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Experimental performance features
  experimental: {
    optimizePackageImports: [
      '@phosphor-icons/react',
      'framer-motion',
      'date-fns',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-label',
      '@radix-ui/react-popover',
      '@radix-ui/react-progress',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-select',
      '@radix-ui/react-separator',
      '@radix-ui/react-slider',
      '@radix-ui/react-switch',
      '@radix-ui/react-tabs',
      '@radix-ui/react-tooltip',
      'sonner',
      'lucide-react',
    ],
  },

  // Modularize imports for better tree-shaking
  modularizeImports: {
    '@phosphor-icons/react': {
      transform: '@phosphor-icons/react/dist/ssr/{{member}}',
    },
  },

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
