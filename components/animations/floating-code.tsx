'use client'

import { Box, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { MotionBox } from '#components/motion/box'

// Usamos MotionBox tipado común del proyecto
const codeSnippets = [
  'const',
  'function',
  'import',
  'export',
  'async',
  'await',
  'return',
  '</>',
  '{}',
  '[]',
  '=>',
  '===',
  'React',
  'Next.js',
  'TypeScript',
  'API',
  'useState',
  'useEffect',
]

export function FloatingCode() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Marcar que estamos en el cliente para evitar errores de hidratación
    setIsClient(true)
  }, [])

  // No renderizar nada en el servidor para evitar errores de hidratación
  if (!isClient) {
    return null
  }

  return (
    <Box
      position="absolute"
      inset={0}
      overflow="hidden"
      pointerEvents="none"
      opacity={0.2}
    >
      {codeSnippets.map((code, i) => (
        <MotionBox
          key={i}
          position="absolute"
          left={`${Math.random() * 100}%`}
          top={`${Math.random() * 100}%`}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [-50, -150],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          } as any}
        >
          <Text
            fontFamily="monospace"
            fontSize="sm"
            fontWeight="bold"
            bgGradient="linear(to-r, primary.500, cyan.500)"
            bgClip="text"
          >
            {code}
          </Text>
        </MotionBox>
      ))}
    </Box>
  )
}

