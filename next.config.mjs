import withBundleAnalyzer from '@next/bundle-analyzer'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Optimizaciones de producción
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // Optimización de paquetes
  experimental: {
    optimizePackageImports: [
      '@chakra-ui/react',
      'framer-motion',
      'react-icons',
      '@saas-ui/react'
    ],
  },
  
  // Optimización de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Headers para caching
  async headers() {
    return [
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.{jpg,jpeg,png,gif,webp,avif,svg}',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  
  webpack(config, { isServer }) {
    // Configuración SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    })
    
    // Optimizaciones de bundle
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Separar Chakra UI
            chakra: {
              name: 'chakra',
              test: /[\\/]node_modules[\\/](@chakra-ui|@emotion)[\\/]/,
              priority: 40,
            },
            // Separar framer-motion
            framer: {
              name: 'framer',
              test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
              priority: 30,
            },
            // Separar react-icons
            icons: {
              name: 'icons',
              test: /[\\/]node_modules[\\/](react-icons)[\\/]/,
              priority: 25,
            },
            // Librerías comunes
            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 20,
            },
          },
        },
      }
    }
    
    return config
  },
}

export default bundleAnalyzer(nextConfig)
