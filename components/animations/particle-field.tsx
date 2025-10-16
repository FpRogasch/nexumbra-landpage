'use client'

import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { MotionBox } from '#components/motion/box'

export function ParticleField() {
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
      opacity={0.3}
    >
      {[...Array(50)].map((_, i) => (
        <MotionBox
          key={i}
          position="absolute"
          width="2px"
          height="2px"
          borderRadius="full"
          bg={i % 2 === 0 ? 'primary.500' : 'cyan.500'}
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          }}
          animate={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: 'linear',
          } as any}
        />
      ))}
    </Box>
  )
}

