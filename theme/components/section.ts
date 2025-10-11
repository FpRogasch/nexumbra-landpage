const Section = {
  baseStyle: {
    pt: 28,
    pb: 28,
    px: [4, null],
  },
  variants: {
    subtle: {
      // Fondo transparente, deja ver el gradient global fijo
      bg: 'transparent',
    },
    solid: {
      // Reducimos el uso de fondos sólidos; mantenemos coherencia con cian predominante
      bg: 'cyan.900',
    },
    alternate: ({ colorMode }: any) => ({
      // Suave variación para secciones alternas con cian muy oscuro
      bg: colorMode === 'dark' ? 'rgba(0, 217, 255, 0.04)' : 'rgba(0, 217, 255, 0.06)',
      transition: 'background 600ms ease',
    }),
  },
  defaultProps: {
    variant: 'subtle',
  },
}

export default Section
