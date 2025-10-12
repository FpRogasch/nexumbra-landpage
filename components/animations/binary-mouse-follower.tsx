'use client'

import { Text } from '@chakra-ui/react'
import { useEffect, useState, useRef } from 'react'

interface Digit {
  id: number
  x: number
  y: number
  timestamp: number
  value: string
}

const codeSnippets = [
  '0', '1', 'for', 'if', 'else', 'while', 'function', 'const', 'let', 'var',
  '=>', '()', '{}', '[]', '</>', '<>', '&&', '||', '===', '!=', '+', '-', '*', '/',
  'true', 'false', 'null', 'undefined', 'return', 'import', 'export', 'class',
  'async', 'await', 'try', 'catch', 'map', 'filter', 'reduce', 'console.log'
]

export const BinaryMouseFollower = () => {
  const [digits, setDigits] = useState<Digit[]>([])
  const nextIdRef = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newDigits: Digit[] = []
      for (let i = 0; i < 1; i++) { // Add 5 digits per move
        newDigits.push({
          id: nextIdRef.current++,
          x: e.clientX + (Math.random() - 0.5) * 20, // Slight random offset
          y: e.clientY + (Math.random() - 0.5) * 20,
          timestamp: Date.now(),
          value: codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        })
      }
      setDigits(prev => [...newDigits, ...prev.slice(0, 17)]) // Keep 60 digits
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const updateDigits = () => {
      const now = Date.now()
      setDigits(prev => prev.filter(digit => {
        const age = now - digit.timestamp
        return age < 1500 && age >= 0
      }))
      requestAnimationFrame(updateDigits)
    }
    const animationId = requestAnimationFrame(updateDigits)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <>
      {digits.map((digit) => {
        const age = Date.now() - digit.timestamp
        const opacity = Math.max(0, 1 - age / 1500) // Fade out over 1 seconds
        return (
          <Text
            key={digit.id}
            position="fixed"
            left={`${digit.x - 10}px`}
            top={`${digit.y - 10}px`}
            fontSize="sm"
            color="cyan.400"
            opacity={opacity * 0.6}
            pointerEvents="none"
            zIndex="9999"
            fontFamily="mono"
          >
            {digit.value}
          </Text>
        )
      })}
    </>
  )
}