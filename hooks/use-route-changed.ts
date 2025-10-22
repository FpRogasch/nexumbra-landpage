/**
 * Hook personalizado para detectar cambios de ruta
 * Útil para cerrar menús móviles o ejecutar acciones cuando cambia la página
 * Utiliza usePathname de Next.js para detectar cambios de URL
 */
import { usePathname } from 'next/navigation'

import { useEffect, useRef } from 'react'

const useRouteChanged = (fn: () => void) => {
  const pathname = usePathname()

  const lastPathname = useRef(pathname)

  useEffect(() => {
    if (lastPathname.current === null) {
      return
    }

    if (pathname !== lastPathname.current) {
      fn()
    }
  }, [pathname, fn])
}

export default useRouteChanged
