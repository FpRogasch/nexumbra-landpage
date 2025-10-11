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
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
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

import { ButtonLink } from '#components/button-link/button-link'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
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

// Lazy load componentes pesados
const Features = dynamic(() => import('#components/features').then(mod => ({ default: mod.Features })), {
  ssr: true,
})
const Faq = dynamic(() => import('#components/faq').then(mod => ({ default: mod.Faq })), {
  ssr: true,
})
const Pricing = dynamic(() => import('#components/pricing/pricing').then(mod => ({ default: mod.Pricing })), {
  ssr: true,
})
const Testimonials = dynamic(() => import('#components/testimonials').then(mod => ({ default: mod.Testimonials })), {
  ssr: true,
})
const Testimonial = dynamic(() => import('#components/testimonials').then(mod => ({ default: mod.Testimonial })), {
  ssr: true,
})


const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <FeaturesSection />

      <HighlightsSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      {/* Animated Grid Background */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.3}
        pointerEvents="none"
        backgroundImage="linear-gradient(#8B5CF6 1px, transparent 1px), linear-gradient(90deg, #8B5CF6 1px, transparent 1px)"
        backgroundSize="50px 50px"
        animation="gridMove 20s linear infinite"
        sx={{
          '@keyframes gridMove': {
            '0%': { transform: 'translate(0, 0)' },
            '100%': { transform: 'translate(50px, 50px)' },
          },
        }}
      />
      {/* Scanning line effect */}
      <Box
        position="absolute"
        width="100%"
        height="2px"
        bgGradient="linear(to-r, transparent, cyan.500, transparent)"
        opacity={0.3}
        animation="scan 4s ease-in-out infinite"
        sx={{
          '@keyframes scan': {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(100vh)' },
          },
        }}
      />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                <Heading
                  as="h1"
                  size="3xl"
                  bgGradient="linear(to-r, primary.400, cyan.400)"
                  bgClip="text"
                  fontWeight="black"
                  letterSpacing="tight"
                  sx={{
                    textShadow: '0 0 40px rgba(139, 92, 246, 0.3)',
                  }}
                >
                  Transformamos tus ideas
                  <Br /> en soluciones digitales
                </Heading>
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Somos <Em>Nexumbra Code</Em>, una startup chilena especializada
                <Br /> en desarrollo de software y aplicaciones web. <Br />{' '}
                Desde landing pages hasta sistemas empresariales complejos.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
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
                  borderColor="cyan.500"
                  color="cyan.400"
                  _hover={{
                    bg: 'cyan.500',
                    color: 'white',
                    transform: 'translateY(-2px)',
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
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
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
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Equipo Experto',
            icon: FiSmile,
            description: '2 desarrolladores profesionales y 1 diseñador UX/UI dedicados a tu proyecto.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Tecnología Moderna',
            icon: FiSliders,
            description:
              'Utilizamos React, Next.js, Node.js y las mejores prácticas del mercado.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Soluciones Escalables',
            icon: FiGrid,
            description:
              'Código limpio y arquitectura sólida que crece con tu negocio.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Entrega Ágil',
            icon: FiThumbsUp,
            description:
              'Metodología ágil con entregas iterativas y comunicación constante.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('contacto@nexumbra.cl')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Stack Tecnológico Profesional">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Utilizamos las <Em>tecnologías más demandadas del mercado</Em>.
            React, Next.js, TypeScript para el frontend. Node.js, PostgreSQL, MongoDB
            para el backend. Todo con las mejores prácticas y código de calidad.
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
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                contacto:
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
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Equipo Chileno Profesional">
        <Text color="muted" fontSize="lg">
          Somos 3 profesionales apasionados por la tecnología: 2 desarrolladores
          expertos en informática y 1 diseñador especializado en UX/UI. Trabajamos
          unidos para crear soluciones digitales de alto impacto.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="María Fernanda González"
        description="CEO, TechStart Chile"
        avatar="/static/images/avatar.jpg"
        gradient={['pink.200', 'purple.500']}
      >
        &ldquo;Nexumbra Code transformó nuestra idea en una aplicación web funcional 
        en tiempo récord. Su profesionalismo y dedicación superaron nuestras 
        expectativas. El equipo entendió perfectamente nuestra visión.&rdquo;
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Soluciones completas de principio a fin"
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
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="servicios"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
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
      features={[
        {
          title: 'Frontend Development',
          icon: FiCode,
          description:
            'React • Next.js • TypeScript • Responsive Design • PWAs',
          variant: 'inline',
        },
        {
          title: 'Backend & APIs',
          icon: FiTerminal,
          description:
            'Node.js • Express • REST APIs • GraphQL • Microservicios',
          variant: 'inline',
        },
        {
          title: 'Bases de Datos',
          icon: FiBox,
          description:
            'PostgreSQL • MongoDB • Redis • Prisma ORM • Optimización',
          variant: 'inline',
        },
        {
          title: 'UX/UI Design',
          icon: FiUserPlus,
          description:
            'Figma • Prototipos • Wireframes • Design Systems • Usabilidad',
          variant: 'inline',
        },
        {
          title: 'E-Commerce',
          icon: FiSearch,
          description:
            'Shopify • WooCommerce • Custom Solutions • Pasarelas de Pago',
          variant: 'inline',
        },
        {
          title: 'Cloud & DevOps',
          icon: FiLock,
          description:
            'AWS • Vercel • Docker • CI/CD • Monitoreo • Seguridad',
          variant: 'inline',
        },
        {
          title: 'Mobile Development',
          icon: FiToggleLeft,
          description:
            'React Native • Flutter • iOS • Android • Cross-platform',
          variant: 'inline',
        },
        {
          title: 'Testing & QA',
          icon: FiTrendingUp,
          description:
            'Jest • Cypress • Unit Testing • Integration Tests • E2E',
          variant: 'inline',
        },
        {
          title: 'Consultoría Tech',
          icon: FiFlag,
          description:
            'Arquitectura • Code Review • Tech Stack • Optimización • Auditoría',
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
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
}

const PricingSection = () => {
  return (
    <Pricing {...pricing} id="planes">
      <Text p="8" textAlign="center" color="muted">
        Los precios están en pesos chilenos (CLP). Aceptamos transferencias bancarias y emitimos factura electrónica.
        <br />
        <ButtonLink href="/proyectos" variant="link" colorScheme="primary" mt={2}>
          Ver Proyectos Realizados →
        </ButtonLink>
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
