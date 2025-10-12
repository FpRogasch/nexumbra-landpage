import { extendTheme } from '@chakra-ui/react'
import { theme as baseTheme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'

export const theme = extendTheme(
  {
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    colors: {
      primary: {
        50: '#f5f3ff',
        100: '#ede9fe',
        200: '#ddd6fe',
        300: '#c4b5fd',
        400: '#a78bfa',
        500: '#8B5CF6', // Color principal del logo (púrpura)
        600: '#7c3aed',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#4c1d95',
      },
      cyan: {
        50: '#edfdff',
        100: '#c7f7ff',
        200: '#9eecff',
        300: '#6de2ff',
        400: '#35d6ff',
        500: '#00D9FF', // Cian predominante
        600: '#00b8e0',
        700: '#0092b5',
        800: '#0b6f89',
        900: '#124f63',
      },
    },
    styles: {
      global: (props: any) => ({
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          fontSize: 'lg',
          fontFamily: 'Ubuntu, sans-serif',
          // Modo claro - Gris muy claro futurista
          color: 'gray.800',
          bg: '#F5F7FA',
          transition: 'background-color 0.3s ease, color 0.3s ease',
          _dark: {
            // Modo oscuro
            color: 'gray.100',
            bg: '#0a0a0a',
          },
        },
        // Ajustes para elementos en modo claro
        ':root': {
          '--chakra-colors-gray-50': '#F9FAFB',
          '--chakra-colors-gray-100': '#F3F4F6',
          '--chakra-colors-gray-200': '#E5E7EB',
          '--chakra-colors-gray-300': '#D1D5DB',
        },
      }),
    },
    fonts: {
      heading: 'Ubuntu, sans-serif',
      body: 'Ubuntu, sans-serif',
      mono: `'JetBrains Mono', 'Fira Code', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace`,
    },
    fontSizes,
    components,
  },
  baseTheme,
)
