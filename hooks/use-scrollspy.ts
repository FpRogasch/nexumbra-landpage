/**
 * Hook personalizado para detectar qué sección está visible en el viewport
 * Utiliza IntersectionObserver y scroll listeners para determinar la sección activa
 * Se usa en la navegación para resaltar la sección actual
 * Optimizado para considerar la altura del header fijo
 */
import * as React from 'react'

export function useScrollSpy(
  selectors: string[], // Selectores CSS de las secciones a observar
  options?: IntersectionObserverInit // Opciones del IntersectionObserver
) {
  const [activeId, setActiveId] = React.useState<string | null>()
  const observer = React.useRef<IntersectionObserver | null>(null)

  React.useEffect(() => {
    const elements = selectors.map((selector) =>
      document.querySelector(selector)
    ).filter(Boolean) as Element[]

    // console.log('useScrollSpy - selectors:', selectors)
    // console.log('useScrollSpy - elements found:', elements.length)

    // Obtener la altura del header para ajustar el threshold
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 100;

    observer.current?.disconnect()

    // Función para encontrar la sección más visible
    const findActiveSection = () => {
      const scrollY = window.scrollY + headerHeight + 20 // Considerar header offset
      let currentActiveId: string | null = null
      let maxVisibility = 0

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top + window.scrollY
        const elementBottom = elementTop + rect.height

        // Calcular qué porcentaje del elemento es visible
        const visibleTop = Math.max(scrollY, elementTop)
        const visibleBottom = Math.min(scrollY + window.innerHeight, elementBottom)
        const visibleHeight = Math.max(0, visibleBottom - visibleTop)
        const visibilityRatio = visibleHeight / rect.height

        if (visibilityRatio > maxVisibility && visibilityRatio > 0.3) { // Threshold del 30%
          maxVisibility = visibilityRatio
          currentActiveId = element.getAttribute('id')
        }
      })

      setActiveId(currentActiveId)
    }

    // Usar IntersectionObserver como respaldo, pero también scroll listener
    observer.current = new IntersectionObserver((entries) => {
      // Llamar a findActiveSection para actualizar basado en scroll
      findActiveSection()
    }, {
      ...options,
      rootMargin: `-${headerHeight + 20}px 0px -30% 0px`, // Reducido a 30%
      threshold: 0.3 // Reducido a 30%
    })

    // Agregar listener de scroll
    const handleScroll = () => {
      findActiveSection()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    elements.forEach((el) => {
      if (el) {
        observer.current?.observe(el)
      }
    })

    // Llamar inicialmente
    findActiveSection()

    return () => {
      observer.current?.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [selectors, options])

  return activeId
}
