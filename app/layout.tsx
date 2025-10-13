import { ColorModeScript, theme } from '@chakra-ui/react'
import { Ubuntu, Space_Grotesk } from 'next/font/google'

import { Provider } from './provider'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-ubuntu',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export default function Layout(props: { children: React.ReactNode }) {
  const colorMode = theme.config.initialColorMode

  return (
    <html lang="es" data-theme={colorMode} style={{ colorScheme: colorMode }} className={`${ubuntu.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/manifest.json" />
      </head>
      <body className={`chakra-ui-${colorMode} ${ubuntu.variable} ${spaceGrotesk.variable}`}>
        <ColorModeScript initialColorMode={colorMode} />
        <Provider>{props.children}</Provider>
      </body>
    </html>
  )
}
