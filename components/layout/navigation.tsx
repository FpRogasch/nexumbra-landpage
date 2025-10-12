import { HStack, Icon, Flex } from '@chakra-ui/react'
import { useDisclosure, useUpdateEffect } from '@chakra-ui/react'
import { useScrollSpy } from 'hooks/use-scrollspy'
import { usePathname, useRouter } from 'next/navigation'
import { FiMail, FiThumbsUp, FiTool, FiCreditCard, FiHelpCircle, FiFolder } from 'react-icons/fi'

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
  const [contactoHover, setContactoHover] = React.useState(false)
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

  const getIcon = (label: string) => {
    switch (label) {
      case 'Servicios':
        return FiTool
      case 'Planes':
        return FiCreditCard
      case 'FAQ':
        return FiHelpCircle
      case 'Proyectos':
        return FiFolder
      case 'Contacto':
        return contactoHover ? FiThumbsUp : FiMail
      default:
        return undefined
    }
  }

  return (
    <HStack spacing="4" flexShrink={0} alignItems="center">
      {siteConfig.header.links.map(({ href, id, ...props }, i) => {
        // Lógica corregida para navegación activa:
        // - En página principal (/): Solo secciones con id pueden estar activas por scroll
        // - En otras páginas: Solo páginas con href pueden estar activas por ruta exacta
        // - Los enlaces de sección (id sin href) nunca están activos fuera de la página principal
        let isActive = false

        if (path === '/') {
          // En página principal: solo activo si tiene id y coincide con la sección visible
          isActive = !!(id && activeId === id)
        } else {
          // En otras páginas: solo activo si tiene href y coincide exactamente con la ruta actual
          isActive = !!(href && path === href)
        }
        
        const icon = getIcon(props.label as string)
        return (
          <NavLink
            display={['none', null, 'block']}
            href={href || `/#${id}`}
            key={i}
            isActive={!!isActive}
            onMouseEnter={props.label === 'Contacto' ? () => setContactoHover(true) : undefined}
            transition="all 0.3s"
            onMouseLeave={props.label === 'Contacto' ? () => setContactoHover(false) : undefined}
            {...props}
          >
            <Flex alignItems="center" gap="2" position="relative">
              <span>{props.label}</span>
              {icon && <Icon as={icon} />}
            </Flex>
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
