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
import { FiLock, FiEye, FiDatabase, FiUserCheck } from 'react-icons/fi'
import { MotionBox } from '#components/motion/box'

const PrivacidadPage = () => {
  const bgColor = useColorModeValue('#F8FAFC', 'gray.900')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const headingColor = useColorModeValue('gray.800', 'gray.100')
  const accentColor = useColorModeValue('primary.500', 'cyan.400')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const privacySections = [
    {
      icon: FiLock,
      title: "1. Información que Recopilamos",
      content: `Recopilamos únicamente la información necesaria para brindar nuestros servicios: datos de contacto (nombre, email, teléfono), información del proyecto, y datos técnicos requeridos para el desarrollo. No recopilamos información personal innecesaria.`,
      highlight: true
    },
    {
      icon: FiDatabase,
      title: "2. Cómo Utilizamos su Información",
      content: `Utilizamos su información exclusivamente para: comunicarnos sobre su proyecto, proporcionar nuestros servicios de desarrollo, enviar actualizaciones importantes, y cumplir con nuestras obligaciones contractuales.`,
      highlight: false
    },
    {
      icon: FiEye,
      title: "3. Protección de Datos",
      content: `Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos contra acceso no autorizado, pérdida, alteración o divulgación. Utilizamos encriptación y protocolos de seguridad estándar de la industria.`,
      highlight: true
    },
    {
      icon: FiUserCheck,
      title: "4. Compartir Información",
      content: `No vendemos, alquilamos ni compartimos su información personal con terceros, excepto cuando sea necesario para completar su proyecto (proveedores de servicios autorizados) o cuando la ley lo requiera.`,
      highlight: false
    },
    {
      icon: FiLock,
      title: "5. Retención de Datos",
      content: `Conservamos su información únicamente durante el tiempo necesario para cumplir con los propósitos descritos en esta política, nuestros requisitos legales y contractuales. Los datos se eliminan de forma segura cuando ya no son necesarios.`,
      highlight: false
    },
    {
      icon: FiEye,
      title: "6. Sus Derechos",
      content: `Tiene derecho a acceder, rectificar, eliminar o limitar el procesamiento de sus datos personales. También puede solicitar la portabilidad de sus datos o presentar una queja ante la autoridad de protección de datos correspondiente.`,
      highlight: true
    },
    {
      icon: FiDatabase,
      title: "7. Cookies y Tecnologías Similares",
      content: `Nuestro sitio web utiliza cookies esenciales para su funcionamiento. No utilizamos cookies de seguimiento o publicitarias. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.`,
      highlight: false
    },
    {
      icon: FiUserCheck,
      title: "8. Transferencias Internacionales",
      content: `Sus datos se procesan principalmente en Chile. Si necesitamos transferir datos internacionalmente, lo haremos únicamente a países con niveles adecuados de protección de datos o con garantías contractuales apropiadas.`,
      highlight: false
    },
    {
      icon: FiLock,
      title: "9. Menores de Edad",
      content: `Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información personal de menores. Si descubrimos que hemos recopilado datos de un menor, los eliminaremos inmediatamente.`,
      highlight: false
    },
    {
      icon: FiEye,
      title: "10. Cambios en esta Política",
      content: `Podemos actualizar esta política de privacidad ocasionalmente. Le notificaremos sobre cambios significativos a través de nuestro sitio web o por email. La fecha de la última actualización se muestra al inicio de este documento.`,
      highlight: false
    }
  ]

  return (
    <Box bg={bgColor} minH="100vh">
      <BackgroundGradient zIndex="-1" />
      
      {/* Efecto visual de privacidad */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="200px"
        background="linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)"
        opacity={0.3}
        zIndex="0"
      />
      
      {/* Patrón de fondo de seguridad */}
      <Box
        position="absolute"
        inset="0"
        opacity={0.05}
        backgroundImage="repeating-linear-gradient(-45deg, transparent, transparent 15px, rgba(0, 217, 255, 0.1) 15px, rgba(0, 217, 255, 0.1) 30px)"
        zIndex="0"
      />

      <Section>
        <Container maxW="4xl" position="relative" zIndex="1">
          <VStack spacing="8" align="stretch">
            
            {/* Header */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              textAlign="center"
              py="8"
            >
              <HStack justify="center" mb="4">
                <Icon as={FiLock} boxSize="8" color={accentColor} />
                <Badge colorScheme="cyan" fontSize="sm" px="3" py="1" borderRadius="full">
                  Protección de Datos
                </Badge>
              </HStack>
              
              <Heading 
                as="h1" 
                size="2xl" 
                color={headingColor}
                mb="4"
                bgGradient="linear(to-r, cyan.400, primary.500)"
                bgClip="text"
              >
                Política de Privacidad
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

            {/* Introducción */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Box
                p="6"
                borderRadius="lg"
                border="1px solid"
                borderColor={borderColor}
                bg={useColorModeValue('cyan.50', 'cyan.900')}
                _dark={{
                  bg: 'cyan.900',
                  borderColor: 'cyan.700'
                }}
                position="relative"
                overflow="hidden"
              >
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  height="3px"
                  bgGradient="linear(to-r, cyan.400, primary.500)"
                />
                
                <VStack spacing="4" align="flex-start">
                  <HStack>
                    <Icon as={FiLock} boxSize="6" color="cyan.500" />
                    <Heading as="h2" size="md" color={headingColor}>
                      Nuestro Compromiso con su Privacidad
                    </Heading>
                  </HStack>
                  
                  <Text color={textColor} lineHeight="1.7">
                    En Nexumbra Code, valoramos y protegemos su privacidad. Esta política explica cómo recopilamos, 
                    utilizamos, almacenamos y protegemos su información personal cuando utiliza nuestros servicios 
                    de desarrollo de software y aplicaciones web.
                  </Text>
                  
                  <Text color={textColor} lineHeight="1.7" fontWeight="medium">
                    Nos comprometemos a ser transparentes sobre nuestras prácticas de privacidad y a mantener 
                    los más altos estándares de protección de datos.
                  </Text>
                </VStack>
              </Box>
            </MotionBox>

            {/* Contenido de Privacidad */}
            <VStack spacing="6" align="stretch">
              {privacySections.map((section, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                >
                  <Box
                    p="6"
                    borderRadius="lg"
                    border="1px solid"
                    borderColor={borderColor}
                    bg={section.highlight ? 
                      useColorModeValue('cyan.50', 'cyan.900') : 
                      useColorModeValue('white', 'gray.800')
                    }
                    _dark={section.highlight ? {
                      bg: 'cyan.900',
                      borderColor: 'cyan.700'
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
                        bgGradient="linear(to-r, cyan.400, primary.500)"
                      />
                    )}
                    
                    <HStack align="flex-start" spacing="4">
                      <Box
                        p="3"
                        borderRadius="lg"
                        bg={section.highlight ? 'cyan.500' : 'gray.100'}
                        _dark={{ bg: section.highlight ? 'cyan.500' : 'gray.700' }}
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
              transition={{ duration: 0.6, delay: 1.0 }}
              textAlign="center"
              py="8"
            >
              <Divider borderColor={borderColor} mb="6" />
              
              <VStack spacing="4">
                <Text color={textColor} fontSize="sm">
                  Si tienes preguntas sobre esta política de privacidad o sobre tus datos personales:
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

export default PrivacidadPage
