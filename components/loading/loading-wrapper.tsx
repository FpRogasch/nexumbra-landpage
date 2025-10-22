/**
 * Wrapper de carga que muestra una pantalla de loading inicial
 * Maneja el estado de hidratación y carga de la aplicación
 * Se muestra durante los primeros segundos para una mejor UX
 */
'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { LoadingScreen } from './loading-screen'
import { useRealHydrationProgress } from '#hooks/use-real-hydration-progress'

interface LoadingWrapperProps {
  children: React.ReactNode
  delay?: number // Tiempo mínimo de visualización del loading
}

export function LoadingWrapper({ children, delay = 1500 }: LoadingWrapperProps) {
  const [showContent, setShowContent] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { isComplete, isHydrated } = useRealHydrationProgress()
  const pathname = usePathname()
  
  // Páginas que no deben mostrar loading screen
  const skipLoadingPages = ['/terminos', '/privacidad']
  const shouldSkipLoading = skipLoadingPages.includes(pathname)

  useEffect(() => {
    // Si estamos en una página que debe saltarse el loading, mostrar contenido inmediatamente
    if (shouldSkipLoading) {
      setShowContent(true)
      setIsLoading(false)
      return
    }
    
    // Pequeño delay para asegurar que el loading screen se renderice inmediatamente
    const showTimer = setTimeout(() => {
      setShowContent(true)
    }, 50)

    return () => clearTimeout(showTimer)
  }, [shouldSkipLoading])

  useEffect(() => {
    // No hacer nada si estamos en una página que debe saltarse el loading
    if (shouldSkipLoading) {
      return
    }
    
    if (isComplete || isHydrated) {
      // Delay reducido para mostrar el 100% antes de ocultar
      // Esto asegura que el usuario vea la animación completa
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 300)
      
      return () => clearTimeout(timer)
    }
  }, [isComplete, isHydrated, shouldSkipLoading])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {!shouldSkipLoading && isLoading && <LoadingScreen onComplete={handleLoadingComplete} delay={delay} />}
      {(showContent && !isLoading) || shouldSkipLoading ? children : null}
    </>
  )
}
