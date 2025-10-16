'use client'

import { useEffect, useState } from 'react'
import { LoadingScreen } from './loading-screen'
import { useRealHydrationProgress } from '#hooks/use-real-hydration-progress'

interface LoadingWrapperProps {
  children: React.ReactNode
  delay?: number
}

export function LoadingWrapper({ children, delay = 2500 }: LoadingWrapperProps) {
  const [showContent, setShowContent] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { isComplete, isHydrated } = useRealHydrationProgress()

  useEffect(() => {
    // Pequeño delay para asegurar que el loading screen se renderice inmediatamente
    const showTimer = setTimeout(() => {
      setShowContent(true)
    }, 100)

    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (isComplete || isHydrated) {
      // Delay adicional para mostrar el 100% antes de ocultar
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 600)
      
      return () => clearTimeout(timer)
    }
  }, [isComplete, isHydrated])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} delay={delay} />}
      {showContent && !isLoading && children}
    </>
  )
}
