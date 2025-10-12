import * as React from 'react'

export function useScrollSpy(
  selectors: string[],
  options?: IntersectionObserverInit
) {
  const [activeId, setActiveId] = React.useState<string | null>()
  const observer = React.useRef<IntersectionObserver | null>(null)
  
  React.useEffect(() => {
    const elements = selectors.map((selector) =>
      document.querySelector(selector)
    )
    
    // Obtener la altura del header para ajustar el threshold
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 100;
    
    observer.current?.disconnect()
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.getAttribute('id'))
        }
      })
    }, {
      ...options,
      // Ajustar el rootMargin para considerar el header fijo
      rootMargin: `-${headerHeight + 20}px 0px -50% 0px`
    })
    
    elements.forEach((el) => {
      if (el) observer.current?.observe(el)
    })
    
    return () => observer.current?.disconnect()
  }, [selectors, options])

  return activeId
}
