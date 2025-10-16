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
        <MotionBox
          fontSize="4xl"
          fontWeight="bold"
          mb={4}
          bgGradient="linear(to-r, primary.500, cyan.400)"
          bgClip="text"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 } as any}
        >
          &lt;Nexumbra /&gt;
        </MotionBox>

        {/* Texto de carga */}
        <Text
          color="gray.300"
          fontSize="lg"
          mb={8}
          fontFamily="monospace"
        >
          Inicializando sistema...
        </Text>

        {/* Spinner personalizado */}
        <MotionBox
          mb={6}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' } as any}
        >
          <Box
            width="60px"
            height="60px"
            border="3px solid"
            borderColor="primary.900"
            borderTopColor="cyan.400"
            borderRadius="full"
            position="relative"
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
              animation: 'spin 1.5s linear infinite reverse',
            }}
            sx={{
              '@keyframes spin': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
              },
            }}
          />
        </MotionBox>

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
              _after={{
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                width: '20px',
                background: 'linear-gradient(to right, transparent, rgba(0, 217, 255, 0.8))',
                animation: 'shimmer 2s infinite',
              }}
              sx={{
                '@keyframes shimmer': {
                  '0%': { transform: 'translateX(-100%)' },
                  '100%': { transform: 'translateX(100%)' },
                },
              }}
            />
          </Box>
          
          {/* Porcentaje */}
          <Text
            color="cyan.400"
            fontSize="sm"
            fontFamily="monospace"
            mt={2}
            textAlign="center"
          >
            {Math.round(progress)}%
          </Text>
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
