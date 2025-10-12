import React from 'react'

import { MotionBox, MotionBoxProps } from './box'

export const FallInPlace: React.FC<MotionBoxProps & { delay?: number }> = (
  props,
) => {
  const { children, delay = 0, ...rest } = props
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: 'fade',
        ease: 'easeIn',
        duration: 2,
        delay: Number(delay),
      } as any}
      suppressHydrationWarning
      {...rest}
    >
      {children}
    </MotionBox>
  )
}
