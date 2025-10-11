import { Box, useTheme, useColorModeValue } from '@chakra-ui/react'

export const BackgroundGradient = ({ hideOverlay, ...props }: any) => {
  const theme = useTheme()
  const colors = {
    purpleDark: theme.colors.primary['800'],
    cyan: theme.colors.cyan['500'],
    cyanLight: theme.colors.cyan['400'],
    teal: theme.colors.teal['500'],
  }

  // Fondo con predominancia de cian y acentos sutiles púrpura.
  // Usamos gradientes radiales grandes para transiciones suaves.
  const fallbackBackground = `
    radial-gradient(at 10% 10%, ${colors.cyan} 0%, transparent 50%),
    radial-gradient(at 80% 20%, ${colors.cyanLight} 0%, transparent 55%),
    radial-gradient(at 20% 80%, ${colors.teal} 0%, transparent 55%),
    radial-gradient(at 90% 70%, ${colors.purpleDark} 0%, transparent 45%)
  `

  // Overlay sutil para suavizar el contraste entre secciones.
  const gradientOverlay = `linear-gradient(0deg, var(--chakra-colors-${useColorModeValue(
    'blackAlpha-300',
    'blackAlpha-700'
  )}) 0%, rgba(0, 0, 0, 0) 60%)`

  return (
    <Box
      backgroundImage={fallbackBackground}
      backgroundBlendMode="screen"
      position="fixed"
      top="0"
      left="0"
      zIndex="0"
      opacity={useColorModeValue('0.25', '0.45')}
      height="100%"
      width="100%"
      overflow="hidden"
      pointerEvents="none"
      style={{
        backgroundAttachment: 'fixed',
        transition: 'background 600ms ease',
      }}
      {...props}
    >
      <Box
        backgroundImage={!hideOverlay ? gradientOverlay : undefined}
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        zIndex="1"
      ></Box>
    </Box>
  )
}
