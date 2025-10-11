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
        body: {
          color: 'gray.100',
          bg: '#0a0a0a',
          fontSize: 'lg',
          fontFamily: 'Ubuntu, sans-serif',
          _dark: {
            color: 'gray.100',
            bg: '#0a0a0a',
          },
        },
      }),
    },
    fonts: {
      heading: 'Ubuntu, sans-serif',
      body: 'Ubuntu, sans-serif',
    },
    fontSizes,
    components,
  },
  baseTheme,
)
