'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Divider,
  Badge,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { Section } from '#components/section'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { FiShield, FiFileText, FiAlertTriangle } from 'react-icons/fi'
import { MotionBox } from '#components/motion/box'

const TerminosPage = () => {
  const bgColor = useColorModeValue('#F8FAFC', 'gray.900')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const headingColor = useColorModeValue('gray.800', 'gray.100')
  const accentColor = useColorModeValue('primary.500', 'cyan.400')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  
  // Colores para las secciones destacadas
  const highlightBg = useColorModeValue('primary.50', 'primary.900')
  const normalBg = useColorModeValue('white', 'gray.800')

  const legalSections = [
    {
      icon: FiShield,
      title: "1. Aceptación de los Términos",
      content: `Al acceder y utilizar los servicios de Nexumbra Code, usted acepta estar sujeto a estos términos de servicio. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.`,
      highlight: false
    },
    {
      icon: FiFileText,
      title: "2. Descripción del Servicio",
      content: `Nexumbra Code es una startup chilena especializada en desarrollo de software y aplicaciones web. Ofrecemos servicios de desarrollo de sitios web, aplicaciones móviles, sistemas empresariales y consultoría tecnológica.`,
      highlight: false
    },
    {
      icon: FiAlertTriangle,
      title: "3. Responsabilidades del Cliente",
      content: `El cliente se compromete a proporcionar información precisa y actualizada, cumplir con los plazos acordados, y utilizar los servicios de manera responsable y conforme a la ley chilena.`,
      highlight: true
    },
    {
      icon: FiShield,
      title: "4. Propiedad Intelectual",
      content: `Todos los derechos de propiedad intelectual del código desarrollado permanecen con el cliente una vez completado el proyecto y pagado en su totalidad. Nexumbra Code conserva los derechos sobre metodologías y herramientas internas.`,
      highlight: false
    },
    {
      icon: FiFileText,
      title: "5. Confidencialidad",
      content: `Nos comprometemos a mantener la confidencialidad de toda la información proporcionada por el cliente durante el desarrollo del proyecto, según las mejores prácticas de la industria y la legislación vigente.`,
      highlight: false
    },
    {
      icon: FiAlertTriangle,
      title: "6. Limitación de Responsabilidad",
      content: `Nexumbra Code no será responsable por daños indirectos, incidentales o consecuenciales que puedan surgir del uso de nuestros servicios, dentro de los límites permitidos por la ley chilena.`,
      highlight: true
    },
    {
      icon: FiShield,
      title: "7. Modificaciones",
      content: `Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.`,
      highlight: false
    },
    {
      icon: FiFileText,
      title: "8. Legislación Aplicable",
      content: `Estos términos se rigen por las leyes de la República de Chile. Cualquier disputa será resuelta en los tribunales competentes de Santiago, Chile.`,
      highlight: false
    }
  ]

  return (
    <Box bg={bgColor} minH="100vh">
      <BackgroundGradient zIndex="-1" />
      
      {/* Efecto visual legal */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="200px"
        background="linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(0, 217, 255, 0.1) 100%)"
        opacity={0.3}
        zIndex="0"
      />
      
      {/* Patrón de fondo legal */}
      <Box
        position="absolute"
        inset="0"
        opacity={0.05}
        backgroundImage="repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(139, 92, 246, 0.1) 10px, rgba(139, 92, 246, 0.1) 20px)"
        zIndex="0"
      />

      <Section>
        <Container maxW="4xl" position="relative" zIndex="1">
          <VStack spacing="8" align="stretch">
            
            {/* Header */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 } as any}
              textAlign="center"
              py="8"
            >
              <HStack justify="center" mb="4">
                <Icon as={FiFileText} boxSize="8" color={accentColor} />
                <Badge colorScheme="primary" fontSize="sm" px="3" py="1" borderRadius="full">
                  Documento Legal
                </Badge>
              </HStack>
              
              <Heading 
                as="h1" 
                size="2xl" 
                color={headingColor}
                mb="4"
                bgGradient="linear(to-r, primary.500, cyan.400)"
                bgClip="text"
              >
                Términos de Servicio
              </Heading>
              
              <Text fontSize="lg" color={textColor} maxW="600px" mx="auto">
                Última actualización: {new Date().toLocaleDateString('es-CL', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </Text>
              
              <Divider borderColor={borderColor} mt="6" />
            </MotionBox>

            {/* Contenido Legal */}
            <VStack spacing="6" align="stretch">
              {legalSections.map((section, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 } as any}
                >
                  <Box
                    p="6"
                    borderRadius="lg"
                    border="1px solid"
                    borderColor={borderColor}
                    bg={section.highlight ? highlightBg : normalBg}
                    _dark={section.highlight ? {
                      bg: 'primary.900',
                      borderColor: 'primary.700'
                    } : {}}
                    position="relative"
                    overflow="hidden"
                  >
                    {/* Efecto visual para secciones importantes */}
                    {section.highlight && (
                      <Box
                        position="absolute"
                        top="0"
                        left="0"
                        right="0"
                        height="3px"
                        bgGradient="linear(to-r, primary.500, cyan.400)"
                      />
                    )}
                    
                    <HStack align="flex-start" spacing="4">
                      <Box
                        p="3"
                        borderRadius="lg"
                        bg={section.highlight ? accentColor : 'gray.100'}
                        _dark={{ bg: section.highlight ? accentColor : 'gray.700' }}
                        color={section.highlight ? 'white' : accentColor}
                      >
                        <Icon as={section.icon} boxSize="5" />
                      </Box>
                      
                      <VStack align="flex-start" spacing="3" flex="1">
                        <Heading as="h2" size="md" color={headingColor}>
                          {section.title}
                        </Heading>
                        <Text color={textColor} lineHeight="1.7">
                          {section.content}
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                </MotionBox>
              ))}
            </VStack>

            {/* Footer del documento */}
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 } as any}
              textAlign="center"
              py="8"
            >
              <Divider borderColor={borderColor} mb="6" />
              
              <VStack spacing="4">
                <Text color={textColor} fontSize="sm">
                  Si tienes preguntas sobre estos términos de servicio, puedes contactarnos:
                </Text>
                
                <HStack spacing="6" fontSize="sm">
                  <Text color={accentColor}>📧 contacto@nexumbra.cl</Text>
                  <Text color={accentColor}>📞 +56 9 1234 5678</Text>
                  <Text color={accentColor}>📍 Santiago, Chile</Text>
                </HStack>
                
                <Text color={textColor} fontSize="xs" opacity={0.7}>
                  © 2025 Nexumbra Code - Startup Chilena de Desarrollo de Software
                </Text>
              </VStack>
            </MotionBox>
          </VStack>
        </Container>
      </Section>
    </Box>
  )
}

export default TerminosPage
