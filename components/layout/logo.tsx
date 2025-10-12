import { Box, Flex, Heading, Image, VisuallyHidden } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'

import * as React from 'react'

import siteConfig from '#data/config'

export interface LogoProps {
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export const Logo = ({ href = '/', onClick }: LogoProps) => {
  let logo

  if (typeof siteConfig.logo === 'string') {
    // Si el logo es una ruta de imagen (string)
    logo = (
      <Box
        bg="#0F0D09"
        px="4"
        py="1"
        borderRadius="xl"
        borderWidth="2px"
        borderColor="transparent"
        transition="all 0.3s ease"
        _hover={{
          borderColor: 'cyan.400',
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
        }}
      >
        <Image 
          src={siteConfig.logo} 
          height="56px" 
          width="auto"
          alt={siteConfig.seo?.title || 'Logo'}
          borderRadius="lg"
          objectFit="contain"
        />
      </Box>
    )
  } else if (siteConfig.logo) {
    // Si el logo es un componente React
    logo = React.createElement(siteConfig.logo as React.ComponentType<any>, { height: '48px' })
  } else {
    // Si no hay logo, mostrar el título
    logo = (
      <Heading as="h1" size="md">
        {siteConfig.seo?.title}
      </Heading>
    )
  }

  return (
    <Flex h="auto" flexShrink="0" alignItems="center">
      <Link
        href={href}
        display="flex"
        alignItems="center"
        onClick={onClick}
        _hover={{
          textDecoration: 'none'
        }}
      >
        {logo}
        <VisuallyHidden>{siteConfig.seo?.title}</VisuallyHidden>
      </Link>
    </Flex>
  )
}
