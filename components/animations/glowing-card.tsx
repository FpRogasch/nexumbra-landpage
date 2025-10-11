'use client'

import { Box, BoxProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const MotionBox = motion(Box)

interface GlowingCardProps extends BoxProps {
  children: ReactNode
  glowColor?: string
}

export function GlowingCard({
  children,
  glowColor = 'primary',
  ...props
}: GlowingCardProps) {
  return (
    <MotionBox
      position="relative"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {/* Glow effect */}
      <Box
        position="absolute"
        inset="-2px"
        bg={`${glowColor}.500`}
        borderRadius="inherit"
        opacity={0}
        filter="blur(20px)"
        transition="opacity 0.3s"
        _groupHover={{ opacity: 0.6 }}
      />

      {/* Content */}
      <Box
        position="relative"
        bg="whiteAlpha.50"
        backdropFilter="blur(10px)"
        borderWidth="1px"
        borderColor="whiteAlpha.200"
        borderRadius="xl"
        overflow="hidden"
        _hover={{
          borderColor: `${glowColor}.500`,
          boxShadow: `0 0 30px ${glowColor}.500`,
        }}
        transition="all 0.3s"
      >
        {children}
      </Box>
    </MotionBox>
  )
}

