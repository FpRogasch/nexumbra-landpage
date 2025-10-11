'use client'

import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
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
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  FiArrowRight,
  FiAward,
  FiCheckCircle,
  FiCode,
  FiExternalLink,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from 'react-icons/fi'

import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Section, SectionTitle } from '#components/section'
import projects from '#data/projects'

const MotionBox = motion(Box)

export default function ProyectosPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Section position="relative" overflow="hidden">
        <BackgroundGradient height="100%" zIndex="-1" />
        <Container maxW="container.xl" pt={{ base: 20, lg: 32 }} pb="20">
          <VStack spacing={6} textAlign="center">
            <Badge
              colorScheme="primary"
              fontSize="md"
              px={4}
              py={2}
              borderRadius="full"
            >
              Portafolio
            </Badge>
            <Heading
              as="h1"
              size="3xl"
              bgGradient="linear(to-r, primary.500, cyan.500)"
              bgClip="text"
            >
              {projects.title}
            </Heading>
            <Text fontSize="xl" color="gray.400" maxW="2xl">
              {projects.description}
            </Text>

            {/* Stats */}
            <SimpleGrid
              columns={[2, 2, 4]}
              spacing={8}
              pt={8}
              w="full"
              maxW="4xl"
            >
              <VStack>
                <Icon as={FiCode} boxSize={8} color="primary.500" />
                <Text fontSize="2xl" fontWeight="bold">
                  50+
                </Text>
                <Text color="gray.400">Proyectos</Text>
              </VStack>
              <VStack>
                <Icon as={FiUsers} boxSize={8} color="cyan.500" />
                <Text fontSize="2xl" fontWeight="bold">
                  30+
                </Text>
                <Text color="gray.400">Clientes</Text>
              </VStack>
              <VStack>
                <Icon as={FiAward} boxSize={8} color="primary.500" />
                <Text fontSize="2xl" fontWeight="bold">
                  100%
                </Text>
                <Text color="gray.400">Satisfacción</Text>
              </VStack>
              <VStack>
                <Icon as={FiTrendingUp} boxSize={8} color="cyan.500" />
                <Text fontSize="2xl" fontWeight="bold">
                  3 años
                </Text>
                <Text color="gray.400">Experiencia</Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Section>

      {/* Projects Grid */}
      <Section bg="transparent">
        <Container maxW="container.xl" py={20}>
          <Stack spacing={16}>
            {projects.items.map((project, index) => (
              <MotionBox
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} index={index} />
              </MotionBox>
            ))}
          </Stack>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section position="relative" overflow="hidden">
        <BackgroundGradient height="100%" zIndex="-1" />
        <Container maxW="container.xl" py={20}>
          <VStack spacing={6} textAlign="center">
            <Heading size="2xl">¿Listo para iniciar tu proyecto?</Heading>
            <Text fontSize="xl" color="gray.400" maxW="2xl">
              Trabajemos juntos para crear algo increíble
            </Text>
            <HStack spacing={4}>
              <Button
                as={Link}
                href="/contacto"
                size="lg"
                colorScheme="primary"
                rightIcon={<Icon as={FiArrowRight} />}
              >
                Iniciar Proyecto
              </Button>
              <Button
                as={Link}
                href="/#planes"
                size="lg"
                variant="outline"
                borderColor="cyan.500"
                color="cyan.500"
                _hover={{ bg: 'cyan.500', color: 'white' }}
              >
                Ver Planes
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Section>
    </Box>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const isEven = index % 2 === 0

  return (
    <Box
      bg="whiteAlpha.50"
      borderRadius="2xl"
      overflow="hidden"
      borderWidth="1px"
      borderColor="whiteAlpha.100"
      _hover={{
        borderColor: `${project.color}.500`,
        transform: 'translateY(-4px)',
        transition: 'all 0.3s',
      }}
    >
      <Flex
        direction={{ base: 'column', md: isEven ? 'row' : 'row-reverse' }}
        gap={0}
      >
        {/* Image */}
        <Box
          position="relative"
          h={['300px', '400px', '500px']}
          flex="1"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
          />
          <Box
            position="absolute"
            top={4}
            left={4}
            bg="blackAlpha.700"
            px={4}
            py={2}
            borderRadius="full"
            backdropFilter="blur(10px)"
          >
            <HStack>
              <Icon as={FiZap} color={`${project.color}.500`} />
              <Text fontSize="sm" fontWeight="bold">
                {project.category}
              </Text>
            </HStack>
          </Box>
        </Box>

        {/* Content */}
        <VStack
          align="start"
          spacing={6}
          p={[6, 8, 12]}
          flex="1"
        >
          <VStack align="start" spacing={4} w="full">
            <Heading size="xl">{project.title}</Heading>
            <Text color="gray.400" fontSize="lg">
              {project.description}
            </Text>

            {/* Tags */}
            <Wrap>
              {project.tags.map((tag: string) => (
                <Tag
                  key={tag}
                  size="md"
                  colorScheme={project.color}
                  variant="subtle"
                >
                  {tag}
                </Tag>
              ))}
            </Wrap>
          </VStack>

          {/* Stats */}
          <SimpleGrid columns={3} spacing={4} w="full" pt={4}>
            {Object.entries(project.stats).map(([key, value]) => (
              <VStack key={key} align="start" spacing={1}>
                <Text fontSize="2xl" fontWeight="bold" color={`${project.color}.500`}>
                  {String(value)}
                </Text>
                <Text fontSize="sm" color="gray.500" textTransform="capitalize">
                  {key}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>

          {/* Features */}
          <VStack align="start" spacing={2} w="full" pt={4}>
            {project.features.slice(0, 3).map((feature: string) => (
              <HStack key={feature} spacing={2}>
                <Icon as={FiCheckCircle} color={`${project.color}.500`} />
                <Text fontSize="sm">{feature}</Text>
              </HStack>
            ))}
          </VStack>

          {/* Tech Stack */}
          <Box w="full" pt={4}>
            <Text fontSize="sm" color="gray.500" mb={2}>
              Stack Tecnológico:
            </Text>
            <VStack align="start" spacing={1}>
              {Object.entries(project.tech).map(([key, value]) => (
                <Text key={key} fontSize="sm">
                  <Text as="span" fontWeight="bold" color={`${project.color}.500`}>
                    {key}:
                  </Text>{' '}
                  {value as string}
                </Text>
              ))}
            </VStack>
          </Box>

          {/* CTA Button */}
          <Button
            as={Link}
            href={`/proyectos/${project.id}`}
            colorScheme={project.color}
            rightIcon={<Icon as={FiExternalLink} />}
            size="lg"
            mt={4}
          >
            Ver Caso de Estudio
          </Button>
        </VStack>
      </Flex>
    </Box>
  )
}

