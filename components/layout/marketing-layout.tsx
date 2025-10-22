'use client'

import { Box, SkipNavContent, SkipNavLink } from '@chakra-ui/react'

import { ReactNode } from 'react'

// Import removido: AnnouncementBanner no se está utilizando actualmente
import { Footer, FooterProps } from './footer'
import { Header, HeaderProps } from './header'

interface LayoutProps {
  children: ReactNode
  // announcementProps removido: no se está utilizando
  headerProps?: HeaderProps
  footerProps?: FooterProps
}

/**
 * Layout principal para páginas de marketing
 * Proporciona estructura base con header, contenido principal y footer
 * Incluye accesibilidad con SkipNav para navegación por teclado
 */
export const MarketingLayout: React.FC<LayoutProps> = (props) => {
  const { children, headerProps, footerProps } = props
  return (
    <Box>
      {/* Enlace para saltar al contenido principal (accesibilidad) */}
      <SkipNavLink>Ir al contenido</SkipNavLink>
      
      {/* Header principal con navegación */}
      <Header {...headerProps} />
      
      {/* Contenido principal de la página */}
      <Box as="main">
        <SkipNavContent />
        {children}
      </Box>
      
      {/* Footer con enlaces y información de contacto */}
      <Footer {...footerProps} />
    </Box>
  )
}
