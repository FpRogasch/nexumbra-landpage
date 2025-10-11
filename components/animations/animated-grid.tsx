'use client'

import { Box } from '@chakra-ui/react'
import { MotionBox } from '#components/motion/box'

export function AnimatedGrid() {
  return (
    <Box
      position="absolute"
      inset={0}
      overflow="hidden"
      pointerEvents="none"
      opacity={0.3}
    >
      {/* Grid lines */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage="linear-gradient(#8B5CF6 1px, transparent 1px), linear-gradient(90deg, #8B5CF6 1px, transparent 1px)"
        backgroundSize="50px 50px"
        opacity={0.1}
        animation="gridMove 20s linear infinite"
        sx={{
          '@keyframes gridMove': {
            '0%': { transform: 'translate(0, 0)' },
            '100%': { transform: 'translate(50px, 50px)' },
          },
        }}
      />

      {/* Animated dots */}
      {[...Array(20)].map((_, i) => (
        <MotionBox
          key={i}
          position="absolute"
          width="4px"
          height="4px"
          borderRadius="full"
          bg="primary.500"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          } as any}
        />
      ))}
    </Box>
  )
}

