'use client'

import { Box } from '@chakra-ui/react'

export function ScanLine() {
  return (
    <>
      <Box
        position="absolute"
        inset={0}
        overflow="hidden"
        pointerEvents="none"
        opacity={0.1}
      >
        <Box
          position="absolute"
          width="100%"
          height="2px"
          bg="linear-gradient(90deg, transparent, cyan.500, transparent)"
          animation="scan 4s ease-in-out infinite"
          sx={{
            '@keyframes scan': {
              '0%': { transform: 'translateY(-100%)' },
              '100%': { transform: 'translateY(100vh)' },
            },
          }}
        />
      </Box>
      <Box
        position="absolute"
        inset={0}
        overflow="hidden"
        pointerEvents="none"
        opacity={0.05}
        background="repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(139, 92, 246, 0.03) 2px,
          rgba(139, 92, 246, 0.03) 4px
        )"
      />
    </>
  )
}

