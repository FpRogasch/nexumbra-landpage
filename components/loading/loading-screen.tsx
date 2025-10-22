'use client'

import { Box, Text, Spinner } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { MotionBox } from '#components/motion/box'
import { useRealHydrationProgress } from '#hooks/use-real-hydration-progress'

interface LoadingScreenProps {
  onComplete?: () => void
  delay?: number
}

export function LoadingScreen({ onComplete, delay = 2000 }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const { progress, isHydrated, phase, isComplete } = useRealHydrationProgress()

  useEffect(() => {
    if (isComplete || isHydrated) {
      // Esperar un momento para que el usuario vea el 100%
      const timer = setTimeout(() => {
        setIsVisible(false)
        onComplete?.()
      }, 500) // 500ms adicionales para mostrar el 100%
      
      return () => clearTimeout(timer)
    }
  }, [isComplete, isHydrated, onComplete])

  if (!isVisible) {
    return null
  }

  return (
    <MotionBox
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={9999}
      bg="black"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 } as any}
    >
      {/* Grid animado de fondo */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.1}
        sx={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite',
          '@keyframes gridMove': {
            '0%': { transform: 'translate(0, 0)' },
            '100%': { transform: 'translate(50px, 50px)' },
          },
        }}
      />

      {/* Logo y texto principal */}
      <MotionBox
        textAlign="center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 } as any}
      >
        {/* Logo con gradiente */}
        <Box
          fontSize="4xl"
          fontWeight="bold"
          mb={4}
          bgGradient="linear(to-r, primary.500, cyan.400)"
          bgClip="text"
          sx={{
            animation: 'logoPulse 2s ease-in-out infinite',
            '@keyframes logoPulse': {
              '0%': { transform: 'scale(1)', opacity: 1 },
              '50%': { transform: 'scale(1.05)', opacity: 0.8 },
              '100%': { transform: 'scale(1)', opacity: 1 },
            },
          }}
        >
          &lt;Nexumbra /&gt;
        </Box>

        {/* Texto de carga */}
        <Box
          color="gray.300"
          fontSize="lg"
          mb={8}
          fontFamily="monospace"
          sx={{
            animation: 'textBlink 1.5s ease-in-out infinite',
            '@keyframes textBlink': {
              '0%': { opacity: 0.7 },
              '50%': { opacity: 1 },
              '100%': { opacity: 0.7 },
            },
          }}
        >
          Inicializando sistema...
        </Box>

        {/* Spinner personalizado */}
        <Box
          mb={6}
          sx={{
            animation: 'spinnerPulse 2s ease-in-out infinite',
            '@keyframes spinnerPulse': {
              '0%': { transform: 'scale(1)' },
              '50%': { transform: 'scale(1.05)' },
              '100%': { transform: 'scale(1)' },
            },
          }}
        >
          <Box
            width="60px"
            height="60px"
            border="3px solid"
            borderColor="primary.900"
            borderTopColor="cyan.400"
            borderRadius="full"
            position="relative"
            sx={{
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
              animation: 'spinnerGlow 2s ease-in-out infinite alternate, spinnerRotate 3s linear infinite',
              '@keyframes spinnerGlow': {
                '0%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
                '100%': { boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' },
              },
              '@keyframes spinnerRotate': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
              },
            }}
            _before={{
              content: '""',
              position: 'absolute',
              top: '-3px',
              left: '-3px',
              right: '-3px',
              bottom: '-3px',
              border: '1px solid',
              borderColor: 'transparent',
              borderTopColor: 'primary.500',
              borderRadius: 'full',
              animation: 'spinnerInnerRotate 1.5s linear infinite reverse',
            }}
            sx={{
              '@keyframes spinnerInnerRotate': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
              },
            }}
          />
        </Box>

        {/* Barra de progreso */}
        <Box width="300px" mb={4}>
          <Box
            width="100%"
            height="4px"
            bg="gray.800"
            borderRadius="full"
            overflow="hidden"
            position="relative"
          >
            <MotionBox
              height="100%"
              bgGradient="linear(to-r, primary.500, cyan.400)"
              borderRadius="full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 } as any}
              sx={{
                boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)',
                animation: 'progressPulse 1.5s ease-in-out infinite',
                '@keyframes progressPulse': {
                  '0%': { boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)' },
                  '50%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.8)' },
                  '100%': { boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)' },
                },
              }}
              _after={{
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                width: '30px',
                background: 'linear-gradient(to right, transparent, rgba(0, 217, 255, 0.9), transparent)',
                animation: 'progressShimmer 1.5s infinite',
              }}
              sx={{
                '@keyframes progressShimmer': {
                  '0%': { transform: 'translateX(-100%)' },
                  '100%': { transform: 'translateX(100%)' },
                },
              }}
            />
          </Box>
          
          {/* Porcentaje */}
          <Box
            color="cyan.400"
            fontSize="sm"
            fontFamily="monospace"
            mt={2}
            textAlign="center"
            sx={{
              animation: 'percentagePulse 1s ease-in-out infinite',
              '@keyframes percentagePulse': {
                '0%': { opacity: 0.8, transform: 'scale(1)' },
                '50%': { opacity: 1, transform: 'scale(1.05)' },
                '100%': { opacity: 0.8, transform: 'scale(1)' },
              },
            }}
          >
            {Math.round(progress)}%
          </Box>
        </Box>

        {/* Mensajes de estado */}
        <MotionBox
          height="20px"
          overflow="hidden"
        >
          <MotionBox
            key={phase}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 } as any}
          >
            <Text
              color="gray.400"
              fontSize="sm"
              fontFamily="monospace"
              textAlign="center"
              sx={{
                animation: 'statusBlink 2s ease-in-out infinite',
                '@keyframes statusBlink': {
                  '0%': { opacity: 0.7 },
                  '50%': { opacity: 1 },
                  '100%': { opacity: 0.7 },
                },
              }}
            >
              {phase === 'initializing' && 'Inicializando aplicación...'}
              {phase === 'hydrating' && 'Hidratando componentes...'}
              {phase === 'mounting' && 'Montando interfaz...'}
              {phase === 'complete' && '¡Aplicación lista!'}
            </Text>
          </MotionBox>
        </MotionBox>
      </MotionBox>

      {/* Partículas flotantes */}
      {[...Array(8)].map((_, i) => (
        <MotionBox
          key={i}
          position="absolute"
          width="4px"
          height="4px"
          bg={i % 2 === 0 ? "cyan.400" : "primary.500"}
          borderRadius="full"
          left={`${10 + i * 12}%`}
          top={`${20 + (i % 3) * 30}%`}
          opacity={0.6}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [-20, 20],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.2,
          } as any}
          sx={{
            boxShadow: `0 0 ${8 + i * 2}px ${i % 2 === 0 ? 'rgba(0, 217, 255, 0.5)' : 'rgba(139, 92, 246, 0.5)'}`,
          }}
        />
      ))}

      {/* Efecto de escaneo */}
      <MotionBox
        position="absolute"
        top={0}
        left={0}
        right={0}
        height="2px"
        bgGradient="linear(to-r, transparent, cyan.400, transparent)"
        opacity={0.8}
        initial={{ y: 0 }}
        animate={{ y: '100vh' }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
        } as any}
      />
    </MotionBox>
  )
}
