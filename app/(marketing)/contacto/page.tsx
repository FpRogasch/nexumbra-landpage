'use client'

import {
  Badge,
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VStack,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import {
  FiCalendar,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Section } from '#components/section'

export default function ContactoPage() {
  const toast = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    tipoProyecto: '',
    presupuesto: '',
    mensaje: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simular envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: '¡Mensaje enviado!',
      description: 'Nos pondremos en contacto contigo pronto.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })

    setLoading(false)
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      empresa: '',
      tipoProyecto: '',
      presupuesto: '',
      mensaje: '',
    })
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Box>
      {/* Hero Section */}
      <Section position="relative" overflow="hidden">
        <BackgroundGradient height="100%" zIndex="-1" />
        <Container maxW="container.xl" pt={{ base: 20, lg: 32 }} pb="12">
          <VStack spacing={6} textAlign="center">
            <Badge
              colorScheme="primary"
              fontSize="md"
              px={4}
              py={2}
              borderRadius="full"
            >
              Contáctanos
            </Badge>
            <Heading
              as="h1"
              size="3xl"
              bgGradient="linear(to-r, primary.500, cyan.500)"
              bgClip="text"
            >
              Trabajemos Juntos
            </Heading>
            <Text fontSize="xl" color="gray.400" maxW="2xl">
              Cuéntanos sobre tu proyecto y te responderemos en menos de 24
              horas
            </Text>
          </VStack>
        </Container>
      </Section>

      {/* Contact Form & Info */}
      <Section bg="transparent" id="contacto">
        <Container maxW="container.xl" py={12}>
          <SimpleGrid columns={[1, 1, 2]} spacing={12}>
            {/* Contact Info */}
            <VStack align="start" spacing={8}>
              <Box>
                <Heading size="lg" mb={4}>
                  Información de Contacto
                </Heading>
                <Text color="gray.400" fontSize="lg">
                  Estamos disponibles para responder tus consultas y comenzar a
                  trabajar en tu proyecto.
                </Text>
              </Box>

              <Stack spacing={6} w="full">
                <ContactInfoItem
                  icon={FiMail}
                  title="Email"
                  value="contacto@nexumbra.cl"
                  href="mailto:contacto@nexumbra.cl"
                  color="primary"
                />
                <ContactInfoItem
                  icon={FaWhatsapp}
                  title="WhatsApp"
                  value="+56 9 1234 5678"
                  href="https://wa.me/56912345678"
                  color="green"
                />
                <ContactInfoItem
                  icon={FiPhone}
                  title="Teléfono"
                  value="+56 9 1234 5678"
                  href="tel:+56912345678"
                  color="cyan"
                />
                <ContactInfoItem
                  icon={FiMapPin}
                  title="Ubicación"
                  value="Santiago, Chile"
                  color="primary"
                />
                <ContactInfoItem
                  icon={FiCalendar}
                  title="Horario"
                  value="Lun - Vie: 9:00 - 18:00"
                  color="cyan"
                />
              </Stack>

              {/* Social Links */}
              <Box w="full" pt={8}>
                <Heading size="md" mb={4}>
                  Síguenos
                </Heading>
                <HStack spacing={4}>
                  <SocialButton
                    icon={FiLinkedin}
                    href="https://linkedin.com/company/nexumbra-code"
                    label="LinkedIn"
                  />
                  <SocialButton
                    icon={FiGithub}
                    href="https://github.com/nexumbra-code"
                    label="GitHub"
                  />
                </HStack>
              </Box>

              {/* Stats */}
              <Box
                w="full"
                p={8}
                mt={8}
                bg="whiteAlpha.50"
                borderRadius="2xl"
                borderWidth="1px"
                borderColor="whiteAlpha.100"
              >
                <Heading size="md" mb={6}>
                  ¿Por qué elegirnos?
                </Heading>
                <Stack spacing={4}>
                  <HStack>
                    <Box
                      w={2}
                      h={2}
                      borderRadius="full"
                      bg="primary.500"
                    />
                    <Text>Respuesta en menos de 24 horas</Text>
                  </HStack>
                  <HStack>
                    <Box w={2} h={2} borderRadius="full" bg="cyan.500" />
                    <Text>Cotización sin compromiso</Text>
                  </HStack>
                  <HStack>
                    <Box
                      w={2}
                      h={2}
                      borderRadius="full"
                      bg="primary.500"
                    />
                    <Text>Equipo 100% chileno</Text>
                  </HStack>
                  <HStack>
                    <Box w={2} h={2} borderRadius="full" bg="cyan.500" />
                    <Text>Metodología ágil</Text>
                  </HStack>
                </Stack>
              </Box>
            </VStack>

            {/* Contact Form */}
            <Box
              as="form"
              onSubmit={handleSubmit}
              p={[6, 8, 10]}
              bg="whiteAlpha.50"
              borderRadius="2xl"
              borderWidth="1px"
              borderColor="whiteAlpha.100"
              backdropFilter="blur(10px)"
            >
              <VStack spacing={6} align="stretch">
                <Heading size="lg">Envíanos un mensaje</Heading>

                <FormControl isRequired>
                  <FormLabel>Nombre Completo</FormLabel>
                  <Input
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Juan Pérez"
                    size="lg"
                    bg="whiteAlpha.100"
                    borderColor="whiteAlpha.200"
                    _hover={{ borderColor: 'primary.500' }}
                    _focus={{
                      borderColor: 'primary.500',
                      boxShadow: '0 0 0 1px var(--chakra-colors-primary-500)',
                    }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@empresa.cl"
                    size="lg"
                    bg="whiteAlpha.100"
                    borderColor="whiteAlpha.200"
                    _hover={{ borderColor: 'primary.500' }}
                    _focus={{
                      borderColor: 'primary.500',
                      boxShadow: '0 0 0 1px var(--chakra-colors-primary-500)',
                    }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Teléfono</FormLabel>
                  <Input
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+56 9 1234 5678"
                    size="lg"
                    bg="whiteAlpha.100"
                    borderColor="whiteAlpha.200"
                    _hover={{ borderColor: 'cyan.500' }}
                    _focus={{
                      borderColor: 'cyan.500',
                      boxShadow: '0 0 0 1px var(--chakra-colors-cyan-500)',
                    }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Empresa</FormLabel>
                  <Input
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Mi Empresa S.A."
                    size="lg"
                    bg="whiteAlpha.100"
                    borderColor="whiteAlpha.200"
                    _hover={{ borderColor: 'cyan.500' }}
                    _focus={{
                      borderColor: 'cyan.500',
                      boxShadow: '0 0 0 1px var(--chakra-colors-cyan-500)',
                    }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Tipo de Proyecto</FormLabel>
                  <Select
                    name="tipoProyecto"
                    value={formData.tipoProyecto}
                    onChange={handleChange}
                    placeholder="Selecciona una opción"
                    size="lg"
                    bg="whiteAlpha.100"
                    borderColor="whiteAlpha.200"
                    _hover={{ borderColor: 'primary.500' }}
                  >
                    <option value="landing">Landing Page</option>
                    <option value="webapp">Aplicación Web</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="mobile">App Móvil</option>
                    <option value="sistema">Sistema Empresarial</option>
                    <option value="otro">Otro</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>Presupuesto Estimado</FormLabel>
                  <Select
                    name="presupuesto"
                    value={formData.presupuesto}
                    onChange={handleChange}
                    placeholder="Selecciona un rango"
                    size="lg"
                    bg="whiteAlpha.100"
                    borderColor="whiteAlpha.200"
                    _hover={{ borderColor: 'cyan.500' }}
                  >
                    <option value="300-800">$300.000 - $800.000</option>
                    <option value="800-2500">$800.000 - $2.500.000</option>
                    <option value="2500-5000">$2.500.000 - $5.000.000</option>
                    <option value="5000+">Más de $5.000.000</option>
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Mensaje</FormLabel>
                  <Textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    size="lg"
                    rows={6}
                    bg="whiteAlpha.100"
                    borderColor="whiteAlpha.200"
                    _hover={{ borderColor: 'primary.500' }}
                    _focus={{
                      borderColor: 'primary.500',
                      boxShadow: '0 0 0 1px var(--chakra-colors-primary-500)',
                    }}
                  />
                </FormControl>

                <Button
                  type="submit"
                  size="lg"
                  colorScheme="primary"
                  rightIcon={<Icon as={FiSend} />}
                  isLoading={loading}
                  loadingText="Enviando..."
                  bgGradient="linear(to-r, primary.500, cyan.500)"
                  _hover={{
                    bgGradient: 'linear(to-r, primary.600, cyan.600)',
                  }}
                >
                  Enviar Mensaje
                </Button>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Section>
    </Box>
  )
}

function ContactInfoItem({
  icon,
  title,
  value,
  href,
  color = 'primary',
}: {
  icon: any
  title: string
  value: string
  href?: string
  color?: string
}) {
  const content = (
    <HStack
      spacing={4}
      p={4}
      borderRadius="xl"
      bg="whiteAlpha.50"
      borderWidth="1px"
      borderColor="whiteAlpha.100"
      _hover={{
        borderColor: `${color}.500`,
        bg: 'whiteAlpha.100',
        transition: 'all 0.3s',
      }}
    >
      <Box
        p={3}
        borderRadius="lg"
        bg={`${color}.500`}
        bgGradient={`linear(to-br, ${color}.500, ${color}.600)`}
      >
        <Icon as={icon} boxSize={5} />
      </Box>
      <VStack align="start" spacing={0}>
        <Text fontSize="sm" color="gray.400">
          {title}
        </Text>
        <Text fontWeight="medium">{value}</Text>
      </VStack>
    </HStack>
  )

  if (href) {
    return (
      <Box as="a" href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </Box>
    )
  }

  return content
}

function SocialButton({
  icon,
  href,
  label,
}: {
  icon: any
  href: string
  label: string
}) {
  return (
    <Button
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      size="lg"
      variant="outline"
      borderColor="whiteAlpha.200"
      leftIcon={<Icon as={icon} />}
      _hover={{
        borderColor: 'primary.500',
        bg: 'whiteAlpha.100',
      }}
    >
      {label}
    </Button>
  )
}

