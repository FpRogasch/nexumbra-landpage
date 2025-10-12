import { HStack } from '@chakra-ui/react'
import { useDisclosure, useUpdateEffect } from '@chakra-ui/react'
import { useScrollSpy } from 'hooks/use-scrollspy'
import { usePathname, useRouter } from 'next/navigation'

import * as React from 'react'

import { MobileNavButton } from '#components/mobile-nav'
import { MobileNavContent } from '#components/mobile-nav'
import { NavLink } from '#components/nav-link'
import siteConfig from '#data/config'

import ThemeToggle from './theme-toggle'

const Navigation: React.FC = () => {
  const mobileNav = useDisclosure()
  const router = useRouter()
  const path = usePathname()
  const activeId = useScrollSpy(
    siteConfig.header.links
      .filter(({ id }) => id)
      .map(({ id }) => `[id="${id}"]`),
    {
      threshold: 0.75,
    },
  )

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>()

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus()
  }, [mobileNav.isOpen])

  return (
    <HStack spacing="4" flexShrink={0}>
      {siteConfig.header.links.map(({ href, id, ...props }, i) => {
        // Solo mostrar como activo si estamos en la página principal (/) y la sección está visible
        // O si es un enlace a otra página y estamos en esa página
        const isActive = path === '/' 
          ? (id && activeId === id)  // Solo activo por scroll en página principal
          : (href && path === href)  // Solo activo por coincidencia exacta de ruta
        
        return (
          <NavLink
            display={['none', null, 'block']}
            href={href || `/#${id}`}
            key={i}
            isActive={!!isActive}
            {...props}
          >
            {props.label}
          </NavLink>
        )
      })}

      <ThemeToggle />

      <MobileNavButton
        ref={mobileNavBtnRef}
        aria-label="Open Menu"
        onClick={mobileNav.onOpen}
      />

      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </HStack>
  )
}

export default Navigation
