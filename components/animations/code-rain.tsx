'use client'

import { Box, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export function CodeRain() {
  const [columns, setColumns] = useState<number[]>([])
  const chars = '0123456789ABCDEF</>{}[]();'

  useEffect(() => {
    const cols = Math.floor(window.innerWidth / 20)
    setColumns(Array.from({ length: cols }, (_, i) => i))
  }, [])

  return (
    <Box
      position="absolute"
      inset={0}
      overflow="hidden"
      pointerEvents="none"
      opacity={0.15}
    >
      {columns.map((col) => (
        <Box
          key={col}
          position="absolute"
          left={`${col * 20}px`}
          top={-20}
          animation={`fall ${5 + Math.random() * 10}s linear infinite`}
          animationDelay={`${Math.random() * 5}s`}
          sx={{
            '@keyframes fall': {
              '0%': { transform: 'translateY(-100%)' },
              '100%': { transform: 'translateY(100vh)' },
            },
          }}
        >
          {[...Array(20)].map((_, i) => (
            <Text
              key={i}
              color={i === 0 ? 'cyan.500' : 'primary.500'}
              fontSize="14px"
              fontFamily="monospace"
              opacity={i === 0 ? 1 : 0.3 - i * 0.015}
              mb={1}
            >
              {chars[Math.floor(Math.random() * chars.length)]}
            </Text>
          ))}
        </Box>
      ))}
    </Box>
  )
}

