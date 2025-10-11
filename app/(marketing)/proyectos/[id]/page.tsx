'use client'

import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  FiArrowLeft,
  FiCheckCircle,
  FiExternalLink,
  FiGithub,
  FiZap,
} from 'react-icons/fi'

import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Section } from '#components/section'
import projects from '#data/projects'

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.items.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <Box>
      {/* Hero Section */}
      <Section position="relative" overflow="hidden">
        <BackgroundGradient height="100%" zIndex="-1" />
        <Container maxW="container.xl" pt={{ base: 20, lg: 32 }} pb="20">
          <VStack spacing={6} align="start">
            <Button
              as={Link}
              href="/proyectos"
              leftIcon={<Icon as={FiArrowLeft} />}
              variant="ghost"
              size="sm"
            >
              Volver a Proyectos
            </Button>

            <Badge
              colorScheme={project.color}
              fontSize="md"
              px={4}
              py={2}
              borderRadius="full"
            >
              {project.category}
            </Badge>

            <Heading
              as="h1"
              size="3xl"
              bgGradient={`linear(to-r, ${project.color}.500, cyan.500)`}
              bgClip="text"
            >
              {project.title}
            </Heading>

            <Text fontSize="xl" color="gray.400" maxW="3xl">
              {project.description}
            </Text>

            <Wrap pt={4}>
              {project.tags.map((tag: string) => (
                <Tag
                  key={tag}
                  size="lg"
                  colorScheme={project.color}
                  variant="subtle"
                >
                  {tag}
                </Tag>
              ))}
            </Wrap>

            <HStack spacing={4} pt={4}>
              <Button
                colorScheme={project.color}
                size="lg"
                rightIcon={<Icon as={FiExternalLink} />}
              >
                Ver Demo en Vivo
              </Button>
              <Button
                variant="outline"
                size="lg"
                leftIcon={<Icon as={FiGithub} />}
                borderColor="gray.600"
              >
                Ver Código
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Section>

      {/* Project Image */}
      <Section bg="transparent">
        <Container maxW="container.xl" py={8}>
          <Box
            position="relative"
            h={['300px', '400px', '600px']}
            borderRadius="2xl"
            overflow="hidden"
            borderWidth="1px"
            borderColor="whiteAlpha.200"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Container>
      </Section>

      {/* Project Details */}
      <Section bg="transparent">
        <Container maxW="container.xl" py={12}>
          <SimpleGrid columns={[1, 1, 3]} spacing={12}>
            {/* Main Content */}
            <Box gridColumn={['1', '1', '1 / 3']}>
              <Stack spacing={12}>
                {/* About */}
                <Box>
                  <Heading size="lg" mb={4}>
                    Sobre el Proyecto
                  </Heading>
                  <Text color="gray.400" fontSize="lg" lineHeight="tall">
                    Este proyecto fue desarrollado para resolver desafíos específicos
                    en el sector {project.category.toLowerCase()}. Implementamos
                    tecnologías modernas y mejores prácticas para crear una solución
                    escalable, segura y de alto rendimiento.
                  </Text>
                </Box>

                {/* Features */}
                <Box>
                  <Heading size="lg" mb={6}>
                    Características Principales
                  </Heading>
                  <SimpleGrid columns={[1, 1, 2]} spacing={4}>
                    {project.features.map((feature: string) => (
                      <HStack key={feature} align="start" spacing={3}>
                        <Icon
                          as={FiCheckCircle}
                          color={`${project.color}.500`}
                          boxSize={5}
                          mt={0.5}
                        />
                        <Text>{feature}</Text>
                      </HStack>
                    ))}
                  </SimpleGrid>
                </Box>

                {/* Tech Stack */}
                <Box>
                  <Heading size="lg" mb={6}>
                    Stack Tecnológico
                  </Heading>
                  <Stack spacing={4}>
                    {Object.entries(project.tech).map(([key, value]) => (
                      <Box
                        key={key}
                        p={6}
                        bg="whiteAlpha.50"
                        borderRadius="xl"
                        borderWidth="1px"
                        borderColor="whiteAlpha.100"
                      >
                        <HStack spacing={3} mb={2}>
                          <Icon as={FiZap} color={`${project.color}.500`} />
                          <Text fontWeight="bold" textTransform="capitalize">
                            {key}
                          </Text>
                        </HStack>
                        <Text color="gray.400">{value as string}</Text>
                      </Box>
                    ))}
                  </Stack>
                </Box>

                {/* Process */}
                <Box>
                  <Heading size="lg" mb={6}>
                    Proceso de Desarrollo
                  </Heading>
                  <Stack spacing={6}>
                    {[
                      {
                        title: 'Discovery & Planning',
                        desc: 'Análisis de requerimientos y definición de arquitectura',
                      },
                      {
                        title: 'Design & Prototyping',
                        desc: 'Diseño UX/UI y creación de prototipos interactivos',
                      },
                      {
                        title: 'Development',
                        desc: 'Desarrollo frontend y backend con metodología ágil',
                      },
                      {
                        title: 'Testing & QA',
                        desc: 'Testing exhaustivo y optimización de rendimiento',
                      },
                      {
                        title: 'Deployment & Support',
                        desc: 'Despliegue en producción y soporte continuo',
                      },
                    ].map((step, idx) => (
                      <HStack key={step.title} align="start" spacing={4}>
                        <Box
                          minW={10}
                          h={10}
                          borderRadius="full"
                          bg={`${project.color}.500`}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          fontWeight="bold"
                        >
                          {idx + 1}
                        </Box>
                        <Box>
                          <Text fontWeight="bold" mb={1}>
                            {step.title}
                          </Text>
                          <Text color="gray.400" fontSize="sm">
                            {step.desc}
                          </Text>
                        </Box>
                      </HStack>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Box>

            {/* Sidebar */}
            <Box>
              <Stack spacing={8} position="sticky" top={24}>
                {/* Stats */}
                <Box
                  p={6}
                  bg="whiteAlpha.50"
                  borderRadius="xl"
                  borderWidth="1px"
                  borderColor="whiteAlpha.100"
                >
                  <Heading size="md" mb={6}>
                    Métricas del Proyecto
                  </Heading>
                  <Stack spacing={4}>
                    {Object.entries(project.stats).map(([key, value]) => (
                      <Box key={key}>
                        <Text
                          fontSize="3xl"
                          fontWeight="bold"
                          color={`${project.color}.500`}
                        >
                          {value}
                        </Text>
                        <Text
                          fontSize="sm"
                          color="gray.500"
                          textTransform="capitalize"
                        >
                          {key}
                        </Text>
                      </Box>
                    ))}
                  </Stack>
                </Box>

                {/* CTA */}
                <Box
                  p={6}
                  bg={`${project.color}.500`}
                  bgGradient={`linear(to-br, ${project.color}.500, ${project.color}.700)`}
                  borderRadius="xl"
                >
                  <Heading size="md" mb={4}>
                    ¿Proyecto Similar?
                  </Heading>
                  <Text mb={6} fontSize="sm">
                    Podemos ayudarte a crear algo increíble para tu negocio.
                  </Text>
                  <Button
                    as={Link}
                    href="/contacto"
                    w="full"
                    bg="white"
                    color="gray.900"
                    _hover={{ bg: 'gray.100' }}
                  >
                    Solicitar Cotización
                  </Button>
                </Box>
              </Stack>
            </Box>
          </SimpleGrid>
        </Container>
      </Section>

      {/* Other Projects */}
      <Section bg="transparent">
        <Container maxW="container.xl" py={12}>
          <Heading size="xl" mb={8}>
            Otros Proyectos
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} spacing={8}>
            {projects.items
              .filter((p) => p.id !== project.id)
              .slice(0, 2)
              .map((otherProject) => (
                <Box
                  key={otherProject.id}
                  as={Link}
                  href={`/proyectos/${otherProject.id}`}
                  position="relative"
                  h="300px"
                  borderRadius="xl"
                  overflow="hidden"
                  _hover={{ transform: 'scale(1.02)', transition: 'all 0.3s' }}
                >
                  <Image
                    src={otherProject.image}
                    alt={otherProject.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    p={6}
                    bgGradient="linear(to-t, blackAlpha.900, transparent)"
                  >
                    <Badge colorScheme={otherProject.color} mb={2}>
                      {otherProject.category}
                    </Badge>
                    <Heading size="md">{otherProject.title}</Heading>
                  </Box>
                </Box>
              ))}
          </SimpleGrid>
        </Container>
      </Section>
    </Box>
  )
}

