'use client'

import React, { useEffect, useState } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import { MotionBox, MotionBoxProps } from './box'

export const SafeFallInPlace: React.FC<BoxProps & { delay?: number }> = (
  props,
) => {
  const { children, delay = 0, ...rest } = props
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Durante la hidratación, mostrar el contenido sin animación
  if (!isClient) {
    return <Box {...rest}>{children}</Box>
  }

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.6,
        delay: isFinite(Number(delay)) ? Number(delay) : 0,
      } as any}
      {...rest}
    >
      {children}
    </MotionBox>
  )
}
