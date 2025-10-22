import {
  Box,
  BoxProps,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  IconButton,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link, LinkProps } from '@saas-ui/react'
import { 
  FaGithub, 
  FaLinkedin, 
  FaWhatsapp, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaPhone,
  FaArrowUp
} from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MotionBox } from '#components/motion/box'

import siteConfig from '#data/config'

export interface FooterProps extends BoxProps {
  columns?: number
}

// Componente para el botón de scroll to top
const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionBox
          position="fixed"
          bottom="6"
          right="6"
          zIndex={1000}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IconButton
            aria-label="Volver arriba"
            icon={<FaArrowUp />}
            size="lg"
            colorScheme="cyan"
            variant="solid"
            borderRadius="full"
            onClick={scrollToTop}
            boxShadow="0 4px 20px rgba(0, 217, 255, 0.3)"
            _hover={{
              boxShadow: "0 8px 30px rgba(0, 217, 255, 0.5)",
              transform: "translateY(-2px)"
            }}
            transition="all 0.3s ease"
          />
        </MotionBox>
      )}
    </AnimatePresence>
  )
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { columns = 4, ...rest } = props
  
  const bgColor = useColorModeValue('#F8FAFC', 'gray.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const headingColor = useColorModeValue('gray.800', 'gray.100')

  // Enlaces de navegación del header
  const navigationLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Planes', href: '#planes' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Contacto', href: '/contacto' },
  ]

  // Enlaces legales
  const legalLinks = [
    { label: 'Términos de Servicio', href: siteConfig.termsUrl },
    { label: 'Política de Privacidad', href: siteConfig.privacyUrl },
  ]

  return (
    <>
      <Box 
        bg={bgColor} 
        borderTop="1px solid"
        borderColor={borderColor}
        position="relative"
        overflow="hidden"
        {...rest}
      >
        {/* Efecto de partículas sutiles */}
        <Box
          position="absolute"
          inset={0}
          opacity={0.1}
          pointerEvents="none"
        >
           {[...Array(8)].map((_, i) => {
             // Valores fijos para cada partícula para evitar Math.random() en cada render
             const positions = [
               { x: '20%', y: '30%' },
               { x: '80%', y: '20%' },
               { x: '60%', y: '70%' },
               { x: '10%', y: '80%' },
               { x: '90%', y: '60%' },
               { x: '40%', y: '10%' },
               { x: '70%', y: '90%' },
               { x: '30%', y: '50%' }
             ]
             const targetPositions = [
               { x: '80%', y: '70%' },
               { x: '20%', y: '80%' },
               { x: '40%', y: '30%' },
               { x: '90%', y: '20%' },
               { x: '10%', y: '40%' },
               { x: '60%', y: '90%' },
               { x: '30%', y: '10%' },
               { x: '70%', y: '50%' }
             ]
             
             return (
               <MotionBox
                 key={i}
                 position="absolute"
                 width="2px"
                 height="2px"
                 borderRadius="full"
                 bg={i % 2 === 0 ? 'primary.500' : 'cyan.500'}
                 initial={positions[i]}
                 animate={{
                   ...targetPositions[i],
                   opacity: [0.2, 0.8, 0.2],
                 }}
                 transition={{
                   duration: 8,
                   repeat: Infinity,
                   delay: i * 0.5,
                   ease: "linear"
                 } as any}
               />
             )
           })}
        </Box>

        <Container maxW="container.2xl" px="6" py="6">
          <VStack spacing="6" align="stretch">
            
            {/* FILA 1: Logo + Enlaces de navegación + Info de contacto */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 } as any}
              viewport={{ once: true }}
            >
              <Flex 
                direction={{ base: 'column', lg: 'row' }} 
                align={{ base: 'flex-start', lg: 'center' }}
                gap="8"
                justify="space-between"
              >
                {/* Logo + Enlaces de navegación */}
                <Flex align="center" gap="6">
                  {typeof siteConfig.logo === 'string' ? (
                    <Box
                      bg="#0F0D09"
                      px="3"
                      py="2"
                      borderRadius="lg"
                      borderWidth="2px"
                      borderColor="transparent"
                      transition="all 0.3s ease"
                      _hover={{
                        borderColor: 'cyan.400',
                        boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
                        transform: 'translateY(-2px)'
                      }}
                    >
                      <img 
                        src={siteConfig.logo} 
                        alt="Nexumbra Code Logo" 
                        style={{ 
                          height: '35px', 
                          width: 'auto',
                          borderRadius: '8px',
                          objectFit: 'contain'
                        }} 
                      />
                    </Box>
                  ) : (
                    <Box as={siteConfig.logo} flex="1" height="48px" />
                  )}
                  
                  {/* Enlaces de navegación */}
                  <HStack spacing="6" wrap="wrap">
                    {navigationLinks.map((link) => (
                      <FooterLink key={link.href} href={link.href}>
                        {link.label}
                      </FooterLink>
                    ))}
                  </HStack>
                </Flex>

                {/* Información de contacto */}
                <VStack align="flex-start" spacing="2">
                  <HStack>
                    <FaMapMarkerAlt color="var(--chakra-colors-cyan-500)" size="12" />
                    <Text fontSize="xs" color={textColor}>
                      Santiago, Chile
                    </Text>
                  </HStack>
                  <HStack>
                    <FaPhone color="var(--chakra-colors-cyan-500)" size="12" />
                    <Text fontSize="xs" color={textColor}>
                      +56 9 1234 5678
                    </Text>
                  </HStack>
                  <HStack>
                    <FaEnvelope color="var(--chakra-colors-cyan-500)" size="12" />
                    <Text fontSize="xs" color={textColor}>
                      contacto@nexumbra.cl
                    </Text>
                  </HStack>
                </VStack>
              </Flex>
            </MotionBox>

            {/* FILA 2: Descripción + divisor + Legal */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.1 } as any}
              viewport={{ once: true }}
            >
              <Flex 
                direction={{ base: 'column', md: 'row' }} 
                align="center" 
                gap="6"
                justify="space-between"
                wrap="wrap"
              >
                {/* Descripción */}
                <Text fontSize="sm" color={textColor} lineHeight="1.5" maxW="700px" textAlign="left">
                  Desarrollamos soluciones web innovadoras para empresas y emprendimientos en Chile. 
                  Desde landing pages hasta sistemas complejos, transformamos tus ideas en aplicaciones 
                  digitales de alto impacto que impulsan el crecimiento de tu negocio.
                </Text>

                {/* Divisor */}
                <Text color={textColor} fontSize="sm" opacity={0.5}>
                  |
                </Text>

                {/* Enlaces legales */}
                <HStack spacing="6">
                  {legalLinks.map((link) => (
                    <FooterLink key={link.href} href={link.href}>
                      {link.label}
                    </FooterLink>
                  ))}
                </HStack>
              </Flex>
            </MotionBox>

            {/* Línea divisoria */}
            <Divider borderColor={borderColor} />

            {/* FILA 3: Copyright + Enlaces sociales */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 } as any}
              viewport={{ once: true }}
            >
              <Flex 
                direction={{ base: 'column', md: 'row' }} 
                justify="space-between" 
                align="center"
                gap="4"
              >
                {/* Copyright */}
                <Copyright>{siteConfig.footer.copyright}</Copyright>

                {/* Enlaces sociales con colores específicos */}
                <HStack spacing="3">
                  {siteConfig.footer?.links?.map(({ href, label }, index) => (
                    <MotionBox
                      key={href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                       transition={{ duration: 0.2 } as any}
                    >
                      <SocialLink href={href}>
                        {label}
                      </SocialLink>
                    </MotionBox>
                  ))}
                </HStack>
              </Flex>
            </MotionBox>
          </VStack>
        </Container>
      </Box>
      
      {/* Botón de scroll to top */}
      <ScrollToTopButton />
    </>
  )
}

export interface CopyrightProps {
  title?: React.ReactNode
  children: React.ReactNode
}

export const Copyright: React.FC<CopyrightProps> = ({
  title,
  children,
}: CopyrightProps) => {
  let content
  if (title && !children) {
    content = `&copy; ${new Date().getFullYear()} - ${title}`
  }
  return (
    <Text color="muted" fontSize="sm">
      {content || children}
    </Text>
  )
}

export const FooterLink: React.FC<LinkProps> = (props) => {
  const { children, ...rest } = props
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const hoverColor = useColorModeValue('primary.500', 'cyan.400')
  
  return (
    <Link
      color={textColor}
      fontSize="sm"
      textDecoration="none"
      position="relative"
      transition="all 0.3s ease"
      _hover={{
        color: hoverColor,
        transform: 'translateX(4px)',
      }}
      _before={{
        content: '""',
        position: 'absolute',
        left: '-8px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '0',
        height: '2px',
        bg: hoverColor,
        transition: 'width 0.3s ease',
      }}
      _hoverBefore={{
        width: '4px',
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}

// Componente para enlaces sociales con box shadow
export const SocialLink: React.FC<LinkProps> = (props) => {
  const { children, href, ...rest } = props
  const textColor = useColorModeValue('gray.600', 'gray.300')
  
  // Box shadow con colores de la empresa
  const shadowStyle = useColorModeValue(
    '0 0 20px rgba(139, 92, 246, 0.8)', // primary.500 en modo claro
    '0 0 20px rgba(0, 217, 255, 0.8)'   // cyan.400 en modo oscuro
  )
  
  return (
    <Link
      href={href}
      color={textColor}
      fontSize="sm"
      textDecoration="none"
      display="inline-block"
      borderRadius="md"
      px="2"
      py="1"
      transition="all 0.3s ease"
      _hover={{
        transform: 'scale(1.1)',
        boxShadow: shadowStyle,
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}
