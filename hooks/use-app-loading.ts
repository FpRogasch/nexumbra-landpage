'use client'

import { useEffect, useState } from 'react'

export function useAppLoading() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Marcar que el componente está montado
    setIsMounted(true)
    
    // Tiempo mínimo de carga para una mejor UX
    // La pantalla de carga se ocultará automáticamente cuando llegue al 100%
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 segundos máximo como fallback

    return () => clearTimeout(timer)
  }, [])

  return {
    isLoading,
    isMounted,
    setIsLoading
  }
}
