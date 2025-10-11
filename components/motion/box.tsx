'use client'

import { ChakraProps, chakra, shouldForwardProp } from '@chakra-ui/react'
import { HTMLMotionProps, motion, isValidMotionProp } from 'framer-motion'

export type MotionBoxProps = ChakraProps & HTMLMotionProps<'div'>

// Chakra + Framer Motion integration with proper prop forwarding and types
export const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})
