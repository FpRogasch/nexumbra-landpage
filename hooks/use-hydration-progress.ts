'use client'

import { useEffect, useState, useRef } from 'react'

interface HydrationProgress {
  progress: number
  isComplete: boolean
  mountedComponents: number
  totalComponents: number
}

export function useHydrationProgress() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [mountedComponents, setMountedComponents] = useState(0)
  const [totalComponents, setTotalComponents] = useState(0)
  
  const observerRef = useRef<MutationObserver | null>(null)
  const startTime = useRef<number>(Date.now())
  const componentCountRef = useRef<Set<Element>>(new Set())

  useEffect(() => {
    // Función para estimar el progreso basado en componentes montados
    const updateProgress = () => {
      const elapsed = Date.now() - startTime.current
      const baseProgress = Math.min((elapsed / 2000) * 60, 60) // 60% base en 2 segundos
      const componentProgress = (mountedComponents / Math.max(totalComponents, 1)) * 40 // 40% por componentes
      const totalProgress = Math.min(baseProgress + componentProgress, 100)
      
      setProgress(totalProgress)
      
      if (totalProgress >= 100 || (elapsed > 1500 && mountedComponents > 0)) {
        setIsComplete(true)
      }
    }

    // Observer para detectar elementos que se montan
    observerRef.current = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element
            if (!componentCountRef.current.has(element)) {
              componentCountRef.current.add(element)
              setMountedComponents(prev => prev + 1)
            }
            
            // Buscar elementos hijos
            const children = element.querySelectorAll('*')
            children.forEach(child => {
              if (!componentCountRef.current.has(child)) {
                componentCountRef.current.add(child)
                setMountedComponents(prev => prev + 1)
              }
            })
          }
        })
      })
      updateProgress()
    })

    // Estimar total de componentes basado en elementos comunes
    const estimateTotalComponents = () => {
      const commonSelectors = [
        'div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'button', 'input', 'img', 'svg', 'path', 'rect', 'circle',
        '[data-testid]', '[class*="chakra"]', '[class*="motion"]'
      ]
      
      let total = 0
      commonSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector)
        total += elements.length
      })
      
      setTotalComponents(Math.max(total, 50)) // Mínimo 50 componentes estimados
    }

    // Iniciar observación
    if (typeof window !== 'undefined') {
      observerRef.current.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
      })

      // Estimar componentes después de un pequeño delay
      setTimeout(estimateTotalComponents, 100)
      
      // Actualizar progreso periódicamente
      const progressInterval = setInterval(updateProgress, 100)
      
      // Cleanup
      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect()
        }
        clearInterval(progressInterval)
      }
    }
  }, [mountedComponents, totalComponents])

  // Simular progreso inicial si no hay actividad
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (progress < 20) {
        setProgress(prev => Math.max(prev, 20))
      }
    }, 500)

    return () => clearTimeout(fallbackTimer)
  }, [progress])

  return {
    progress: Math.round(progress),
    isComplete,
    mountedComponents,
    totalComponents: Math.max(totalComponents, 50),
    startTime: startTime.current
  }
}
