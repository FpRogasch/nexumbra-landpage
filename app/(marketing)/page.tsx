'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
  useColorModeValue,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'
import { useEffect } from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import { BinaryMouseFollower, EdgeCodeRain } from '#components/animations'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'
import { Features } from '#components/features'
import { Faq } from '#components/faq'
import { Pricing } from '#components/pricing/pricing'
import { Testimonials } from '#components/testimonials'
import { Testimonial } from '#components/testimonials'


const Home: NextPage = () => {
  // Manejar scroll suave cuando se carga la página con hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      // Esperar a que el DOM esté completamente cargado
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Box position="relative">
      {/* Static Background for entire page */}
      <BackgroundGradient height="100vh" zIndex="-2" position="fixed" inset={0} />
      {/* Animated Grid Background */}
      <Box
        position="fixed"
        inset={0}
        opacity={0.3}
        pointerEvents="none"
        backgroundImage="linear-gradient(#8B5CF6 1px, transparent 1px), linear-gradient(90deg, #8B5CF6 1px, transparent 1px)"
        backgroundSize="50px 50px"
        zIndex="-1"
      />
      {/* Scanning line effect */}
      <Box
        position="fixed"
        width="100%"
        height="2px"
        bgGradient="linear(to-r, transparent, cyan.500, transparent)"
        opacity={0.3}
        zIndex="-1"
        sx={{
          animation: 'scan 3s linear infinite',
          '@keyframes scan': {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(100%)' },
          },
        }}
      />
      {/* Binary Mouse Follower */}
      <BinaryMouseFollower />
      
      {/* Edge Code Rain Animation */}
      <EdgeCodeRain position="both" width={125} />

      <HeroSection />

      <FallInPlace delay={0.4}>
        <AboutUsSection />
      </FallInPlace>

      <FallInPlace delay={0.2}>
        <FeaturesSection />
      </FallInPlace>

      {/* <FallInPlace delay={0.6}>
        <TestimonialsSection />
      </FallInPlace> */}

      <FallInPlace delay={0.2}>
        <PricingSection />
      </FallInPlace>

      <FallInPlace delay={0.2}>
        <FaqSection />
      </FallInPlace>
    </Box>
  )
}

const HeroSection: React.FC = () => {
  const borderColor = useColorModeValue('cyan.600', 'cyan.500')
  const color = useColorModeValue('cyan.700', 'cyan.400')
  const bg = useColorModeValue('cyan.50', 'transparent')
  const hoverBg = useColorModeValue('cyan.500', 'cyan.500')
  const hoverColor = useColorModeValue('white', 'white')

  return (
    <Box position="relative" overflow="hidden">
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <FallInPlace delay={0.2}>
            <Hero
              id="home"
              justifyContent="flex-start"
              px="0"
              title={
                  <VStack spacing={2} align="flex-start">
                    <Heading
                      as="h1"
                      size="3xl"
                      bgGradient="linear(to-r, primary.400, cyan.600)"
                      bgClip="text"
                      fontWeight="black"
                      letterSpacing="tight"
                      sx={{
                        textShadow: '0 0 40px rgba(139, 92, 246, 0.3)',
                        fontVariantLigatures: 'common-ligatures',
                        fontFeatureSettings: '"liga" 1, "calt" 1',
                        fontFamily: 'Rajdhani, sans-serif',
                      }}
                    >
                      Transformamos tus{' '}
                      <Text
                        as="span"
                        color="cyan.400"
                        sx={{
                          animation: 'glow 2s ease-in-out infinite alternate',
                          '@keyframes glow': {
                            '0%': { textShadow: '0 0 5px rgba(0, 217, 255, 0.5)' },
                            '100%': { textShadow: '0 0 20px rgba(0, 217, 255, 0.8), 0 0 30px rgba(0, 217, 255, 0.6)' },
                          },
                        }}
                      >
                        {'<'}
                      </Text>
                      Ideas
                      <Text
                        as="span"
                        color="cyan.400"
                        sx={{
                          animation: 'glow 2s ease-in-out infinite alternate',
                          '@keyframes glow': {
                            '0%': { textShadow: '0 0 5px rgba(0, 217, 255, 0.5)' },
                            '100%': { textShadow: '0 0 20px rgba(0, 217, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.6)' },
                          },
                        }}
                      >
                        {' />'}
                      </Text>
                    </Heading>
                    <Heading
                      as="h2"
                      size="xl"
                      color="gray.600"
                      _dark={{ color: 'gray.300' }}
                      fontWeight="medium"
                      letterSpacing="wide"
                    >
                      en soluciones digitales
                    </Heading>
                  </VStack>
              }
              description={
                <>
                  Somos{' '}
                  <Text
                    as="span"
                    color="primary.400"
                    sx={{
                      animation: 'glow 2s ease-in-out infinite alternate',
                      '@keyframes glow': {
                        '0%': { textShadow: '0 0 5px rgba(139, 92, 246, 0.5)' },
                        '100%': { textShadow: '0 0 20px rgba(139, 92, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.6)' },
                      },
                    }}
                  >
                    Nexumbra
                  </Text>{' '}
                  <Text
                    as="span"
                    color="cyan.400"
                    sx={{
                      animation: 'glow 2s ease-in-out infinite alternate',
                      '@keyframes glow': {
                        '0%': { textShadow: '0 0 5px rgba(0, 217, 255, 0.5)' },
                        '100%': { textShadow: '0 0 20px rgba(0, 217, 255, 0.8), 0 0 30px rgba(0, 217, 255, 0.6)' },
                      },
                    }}
                  >
                    Code
                  </Text>
                  , una startup chilena especializada
                  en desarrollo de software y aplicaciones web.
                  <Br />{' '}
                  Te ayudaremos a crear herramientas para mejorar tus proyectos y negocios.
                </>
              }
            >
                {/*
                <HStack pt="4" pb="12" spacing="8">
                  <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
                </HStack>
                */}

                <ButtonGroup pt="4" pb="12" mt="12" spacing={4} alignItems="center">
                  <ButtonLink
                    size="lg"
                    href="/contacto"
                    bgGradient="linear(to-r, primary.500, cyan.500)"
                    color="white"
                    _hover={{
                      bgGradient: 'linear(to-r, primary.600, cyan.600)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 40px rgba(139, 92, 246, 0.4)',
                    }}
                    transition="all 0.3s"
                  >
                    Comenzar Proyecto
                  </ButtonLink>
                  <ButtonLink
                    size="lg"
                    href="#planes"
                    variant="outline"
                    borderColor={borderColor}
                    color={color}
                    bg={bg}
                    _hover={{
                      bg: hoverBg,
                      color: hoverColor,
                      transform: 'translateY(-2px)',
                      borderColor: 'cyan.500',
                      boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)',
                    }}
                    transition="all 0.3s"
                    rightIcon={
                      <Icon
                        as={FiArrowRight}
                        sx={{
                          transitionProperty: 'common',
                          transitionDuration: 'normal',
                          '.chakra-button:hover &': {
                            transform: 'translate(5px)',
                          },
                        }}
                      />
                    }
                  >
                    Ver Planes
                  </ButtonLink>
                </ButtonGroup>
            </Hero>
          </FallInPlace>
          <Box
            height="650px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '55%', xl: '50%' }}
            width="70vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={0}>
              <Box overflow="hidden" height="100%" borderRadius="lg" boxShadow="0 0 30px rgba(25, 255, 255, 0.9)">
                <Image
                  src="/static/screenshots/hero-2.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={5}
        innerWidth="container.xl"
        pt="16"
        features={[
          {
            title: 'Profesionales con Pasión',
            icon: FiSmile,
            description: 'Nuestro equipo de 3 profesionales apasionados por la tecnología combina experiencia técnica con creatividad para transformar tus ideas en realidad.',
            iconPosition: 'left',
            delay: 0.5,
          },
          {
            title: 'Tecnología Moderna',
            icon: FiSliders,
            description:
              'Utilizamos React, Next.js, Node.js y las mejores prácticas del mercado para crear soluciones robustas y eficientes.',
            iconPosition: 'left',
            delay: 0.7,
          },
          {
            title: 'Soluciones Escalables',
            icon: FiGrid,
            description:
              'Desarrollamos código limpio y arquitectura sólida que crece con tu negocio, asegurando un rendimiento óptimo a largo plazo.',
            iconPosition: 'left',
            delay: 0.9,
          },
          {
            title: 'Trabajo Codo a Codo',
            icon: FiThumbsUp,
            description:
              'Trabajamos estrechamente contigo en cada etapa del proyecto, manteniendo una comunicación constante y adaptándonos a tus necesidades.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const AboutUsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('contacto@nexumbra.cl')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Sobre Nosotros" titleColor="cyan.400">
        <Text color="muted" fontSize="lg">
          Somos 2 hermanos apasionados por el desarrollo de aplicaciones web,
          con el compromiso de ayudar a empresas y emprendimientos a crear
          sistemas innovadores que impulsen el crecimiento de sus negocios.
          Nuestra experiencia técnica, creatividad y dedicación nos permiten
          transformar ideas visionarias en soluciones digitales de alto impacto
          que generan resultados reales y duraderos.
          <Br /><Br />
          Nos enfocamos en guiar a nuestros clientes hacia las mejores tecnologías
          disponibles, asegurando que cada proyecto sea construido con las herramientas
          más adecuadas para sus necesidades específicas. Trabajamos con nuestro propio
          código de calidad y, aunque podemos implementar soluciones en plataformas
          como WordPress, siempre garantizamos que el cliente mantenga el control
          total sobre sus servicios y código fuente. Esta libertad significa que
          nunca quedarán &ldquo;atados&rdquo; a nosotros: una vez terminado el proyecto,
          tienen la opción de que nosotros continuemos con el mantenimiento, o pueden
          elegir que otras entidades se encarguen de los servicios y el sitio web.
          De cualquier manera, el cliente siempre mantiene la propiedad completa
          de su proyecto.
        </Text>
        <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            mt="20"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                Trabajemos juntos:
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                contacto@nexumbra.cl
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copiar email de contacto"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
      </HighlightsItem>
      <HighlightsItem title="Stack Tecnológico Profesional" titleColor="cyan.400">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="lg">
            Utilizamos las <Em><b>tecnologías más demandadas del mercado</b></Em> con
            arquitectura limpia y mejores prácticas para garantizar soluciones robustas y escalables.
          </Text>

          <VStack spacing={4} alignItems="flex-start" w="full">
            <Text fontSize="lg" fontWeight="semibold" color="purple.400">
              Frontend
            </Text>
            <Wrap spacing={3}>
              {[
                { name: 'React', color: 'gray.800' },
                { name: 'Next.js', color: 'gray.800' },
                { name: 'TypeScript', color: 'gray.800' },
                { name: 'Tailwind CSS', color: 'gray.800' },
              ].map((tech) => (
                <Tag
                  key={tech.name}
                  size="lg"
                  variant="solid"
                  bg={tech.color}
                  color="white"
                  px={4}
                  py={2}
                  borderRadius="full"
                  boxShadow="0 0 10px rgb(255, 255, 255, 0.5)"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                  transition="all 0.2s"
                >
                  {tech.name}
                </Tag>
              ))}
            </Wrap>

            <Text fontSize="lg" fontWeight="semibold" color="purple.400">
              Backend
            </Text>
            <Wrap spacing={3}>
              {[
                { name: 'NestJS', color: 'gray.800' },
                { name: 'Node.js', color: 'gray.800' },
                { name: 'Express', color: 'gray.800' },
                { name: 'Clean Architecture', color: 'gray.800' },
              ].map((tech) => (
                <Tag
                  key={tech.name}
                  size="lg"
                  variant="solid"
                  bg={tech.color}
                  color="white"
                  px={4}
                  py={2}
                  borderRadius="full"
                  boxShadow="0 0 10px rgb(255, 255, 255, 0.5)"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                  transition="all 0.2s"
                >
                  {tech.name}
                </Tag>
              ))}
            </Wrap>

            <Text fontSize="lg" fontWeight="semibold" color="purple.400">
              Base de Datos
            </Text>
            <Wrap spacing={3}>
              {[
                { name: 'PostgreSQL', color: 'gray.800' },
                { name: 'MongoDB', color: 'gray.800' },
              ].map((tech) => (
                <Tag
                  key={tech.name}
                  size="lg"
                  variant="solid"
                  bg={tech.color}
                  color="white"
                  px={4}
                  py={2}
                  borderRadius="full"
                  boxShadow="0 0 10px rgb(255, 255, 255, 0.5)"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                  transition="all 0.2s"
                >
                  {tech.name}
                </Tag>
              ))}
            </Wrap>
          </VStack>
        </VStack>
      </HighlightsItem>
      

      


      
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <>
      <Features
        id="servicios"
        title={
          <Heading
            lineHeight="short"
            fontSize="6xl"
            textAlign="left"
            as="p"
            sx={{
              textShadow: '0 0 50px rgba(0, 255, 255, 0.95)',
            }}
          >
            Nuestros Servicios
            <Br /> de Desarrollo
          </Heading>
        }
        description={
          <>
            Ofrecemos soluciones completas de software para empresas y emprendedores.
            <Br />
            Desde proyectos simples hasta sistemas complejos, nos adaptamos a tus necesidades.
          </>
        }
        align="left"
        columns={[1, 2, 3]}
        iconSize={4}
        mb="-28"
        mt="-8"
        features={[
          {
            title: 'Frontend Development',
            icon: FiCode,
            description: <><Br />
              React • Next.js • TypeScript • Responsive Design • PWAs</>,
            variant: 'inline',
          },
          {
            title: 'Backend & APIs',
            icon: FiTerminal,
            description: <><Br />
              Node.js • Express • REST APIs • GraphQL • Microservicios</>,
            variant: 'inline',
          },
          {
            title: 'Bases de Datos',
            icon: FiBox,
            description: <><Br />
              PostgreSQL • MongoDB • Redis • Prisma ORM • Optimización</>,
            variant: 'inline',
          },
          {
            title: 'UX/UI Design',
            icon: FiUserPlus,
            description: <><Br />
              Figma • Prototipos • Wireframes • Design Systems • Usabilidad</>,
            variant: 'inline',
          },
          {
            title: 'E-Commerce',
            icon: FiSearch,
            description: <><Br />
              Shopify • WooCommerce • Custom Solutions • Pasarelas de Pago</>,
            variant: 'inline',
          },
          {
            title: 'Cloud & DevOps',
            icon: FiLock,
            description: <><Br />
              AWS • Vercel • Docker • CI/CD • Monitoreo • Seguridad</>,
            variant: 'inline',
          },
          {
            title: 'Mobile Development',
            icon: FiToggleLeft,
            description: <><Br />
              React Native • Flutter • iOS • Android • Cross-platform</>,
            variant: 'inline',
          },
          {
            title: 'Testing & QA',
            icon: FiTrendingUp,
            description: <><Br />
              Jest • Cypress • Unit Testing • Integration Tests • E2E</>,
            variant: 'inline',
          },
          {
            title: 'Consultoría Tech',
            icon: FiFlag,
            description: <><Br />
              Arquitectura • Code Review • Tech Stack • Optimización • Auditoría</>,
            variant: 'inline',
          },
        ]}
      />

      <Highlights>
        <Box
          borderRadius="lg"
          overflow="hidden"
          height="395px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 0 30px rgba(139, 92, 246, 0.4)"
        >
          <Image
            src="/static/screenshots/section-01.png"
            alt="Dashboard screenshot"
            width={432}
            height={432}
            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
          />
        </Box>
        <HighlightsItem
          colSpan={[1, null, 2]}
          title="Soluciones completas de principio a fin"
          boxShadow="0 0 30px rgba(139, 92, 246, 0.4)"
        >
          <VStack alignItems="flex-start" spacing="4">
            <Text color="muted" fontSize="lg">
              Nos encargamos de todo el proceso de desarrollo, desde la idea inicial
              hasta el despliegue y mantenimiento. Tú enfócate en tu negocio.
            </Text>
            <ButtonLink href="/proyectos" colorScheme="primary" size="md">
              Ver Nuestros Proyectos
            </ButtonLink>
          </VStack>
          <Wrap mt="8">
            {[
              'landing pages',
              'sitios web',
              'e-commerce',
              'aplicaciones web',
              'sistemas empresariales',
              'APIs REST',
              'bases de datos',
              'diseño UX/UI',
              'responsive design',
              'SEO optimización',
              'hosting',
              'mantenimiento',
              'integraciones',
              'dashboards',
              'autenticación',
              'reportes',
              'analytics',
              'soporte continuo',
            ].map((value) => (
              <Tag
                key={value}
                variant="subtle"
                colorScheme="purple"
                rounded="full"
                px="3"
              >
                {value}
              </Tag>
            ))}
          </Wrap>
        </HighlightsItem>
      </Highlights>
    </>
  )
}

/* const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
} */

const PricingSection = () => {
  return (
    <FallInPlace delay={0.2}>
      <Pricing {...pricing} id="planes">
        <Text p="8" textAlign="center" color="muted">
          Los precios están en pesos chilenos (CLP). Aceptamos transferencias bancarias y emitimos factura electrónica.
          <br />
          <ButtonLink href="/proyectos" variant="link" colorScheme="primary" mt={2}>
            Ver Proyectos Realizados →
          </ButtonLink>
        </Text>
      </Pricing>
    </FallInPlace>
  )
}

const FaqSection = () => {
  return <FallInPlace><Faq {...faq} /></FallInPlace>
}

export default Home
