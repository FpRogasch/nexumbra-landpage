'use client'

import { useEffect, useState, useCallback } from 'react'

export function useRealHydrationProgress() {
  const [progress, setProgress] = useState(0)
  const [isHydrated, setIsHydrated] = useState(false)
  const [phase, setPhase] = useState<'initializing' | 'hydrating' | 'mounting' | 'complete'>('initializing')

  // Función para actualizar el progreso
  const updateProgress = useCallback((newProgress: number, newPhase?: string) => {
    setProgress(prev => Math.max(prev, Math.min(newProgress, 100)))
    if (newPhase) {
      setPhase(newPhase as any)
    }
  }, [])

  useEffect(() => {
    let progressTimer: NodeJS.Timeout
    let phaseTimer: NodeJS.Timeout
    const startTime = Date.now()

    // Fase 1: Inicialización (0-25%)
    updateProgress(5, 'initializing')
    
    phaseTimer = setTimeout(() => {
      updateProgress(25, 'hydrating')
      
      // Fase 2: Hidratación (25-60%)
      progressTimer = setInterval(() => {
        const elapsed = Date.now() - startTime
        const hydrationProgress = 25 + (elapsed / 1500) * 35 // 35% en 1.5 segundos
        
        updateProgress(hydrationProgress)
        
        if (elapsed > 1200) {
          updateProgress(60, 'mounting')
          clearInterval(progressTimer)
          
          // Fase 3: Montaje de componentes (60-90%)
          progressTimer = setInterval(() => {
            const mountingElapsed = Date.now() - (startTime + 1200)
            const mountingProgress = 60 + (mountingElapsed / 800) * 30 // 30% en 0.8 segundos
            
            updateProgress(mountingProgress)
            
            if (mountingElapsed > 600) {
              updateProgress(90, 'complete')
              clearInterval(progressTimer)
              
              // Fase 4: Finalización (90-100%)
              setTimeout(() => {
                updateProgress(100)
                setIsHydrated(true)
              }, 300)
            }
          }, 50)
        }
      }, 100)
    }, 200)

    // Detectar cuando React está realmente hidratado
    const checkHydration = () => {
      // Verificar si hay elementos con data-reactroot (indicador de hidratación)
      const reactRoot = document.querySelector('[data-reactroot]')
      if (reactRoot) {
        updateProgress(85)
      }
      
      // Verificar si hay elementos de Chakra UI montados
      const chakraElements = document.querySelectorAll('[class*="chakra-"]')
      if (chakraElements.length > 10) {
        updateProgress(90)
      }
      
      // Verificar si hay elementos de animación montados
      const motionElements = document.querySelectorAll('[class*="motion-"]')
      if (motionElements.length > 0) {
        updateProgress(95)
      }
    }

    // Verificar hidratación periódicamente
    const hydrationCheckInterval = setInterval(checkHydration, 200)

    // Cleanup
    return () => {
      clearTimeout(phaseTimer)
      clearInterval(progressTimer)
      clearInterval(hydrationCheckInterval)
    }
  }, [updateProgress])

  return {
    progress: Math.round(progress),
    isHydrated,
    phase,
    isComplete: progress >= 100
  }
}
