'use client'

import {
  Box,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  StackProps,
  Text,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Badge,
  Divider,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Container,
} from '@chakra-ui/react'
import { FiCheck, FiStar, FiZap, FiShield, FiUsers, FiKey } from 'react-icons/fi'

import React, { memo, useState } from 'react'

import {
  ButtonLink,
  ButtonLinkProps,
} from '#components/button-link/button-link'
import { Section, SectionProps, SectionTitle } from '#components/section'
import { FallInPlace } from '#components/motion/fall-in-place'

export interface PricingSubTier {
  id: string
  name: string
  price: string
  priceRange?: string
  description: string
  features: Array<PricingFeatureProps | null>
  action: ButtonLinkProps & { label?: string }
  isRecommended?: boolean
  badge?: string
  badgeColor?: string
}

export interface PricingTier {
  id: string
  name: string
  description: string
  icon: React.ElementType
  color: string
  subTiers: PricingSubTier[]
}

export interface PricingTabsProps extends Omit<SectionProps, 'title'> {
  title: React.ReactNode
  description: React.ReactNode
  tiers: PricingTier[]
}

export const PricingTabs: React.FC<PricingTabsProps> = memo((props) => {
  const { children, tiers, title, description, ...rest } = props
  const [activeTab, setActiveTab] = useState(0)

  return (
    <Section id="pricing" pos="relative" {...rest}>
      <Box zIndex="2" pos="relative">
        <SectionTitle title={title} description={description} align="left" />

        <Tabs 
          index={activeTab} 
          onChange={setActiveTab}
          variant="soft-rounded"
          colorScheme="primary"
          align="center"
          size="md"
        >
          <TabList 
            mb={6}
            flexWrap="wrap"
            justifyContent="center"
            gap={1}
            maxW="800px"
            mx="auto"
          >
            {tiers.map((tier, index) => (
              <Tab
                key={tier.id}
                px={4}
                py={2}
                borderRadius="lg"
                fontWeight="semibold"
                fontSize="sm"
                _selected={{
                  bg: `${tier.color}.500`,
                  color: 'white',
                  shadow: `0 0 20px ${tier.color}.500`,
                  border: '2px solid',
                  borderColor: `${tier.color}.500`,
                }}
                _hover={{
                  bg: `${tier.color}.50`,
                  border: '2px solid',
                  borderColor: `${tier.color}.300`,
                  _dark: { 
                    bg: `${tier.color}.900`,
                    borderColor: `${tier.color}.600`,
                  },
                }}
                border="2px solid"
                borderColor={`${tier.color}.300`}
                _dark={{ borderColor: `${tier.color}.600` }}
                bg="transparent"
                transition="all 0.3s ease"
              >
                <HStack spacing={2}>
                  <Icon as={tier.icon} />
                  <Text>{tier.name}</Text>
                </HStack>
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {tiers.map((tier, tierIndex) => (
              <TabPanel key={tier.id} px={0}>
                <Box textAlign="center" mb={6}>
                  <Heading size="md" mb={1} color={`${tier.color}.500`}>
                    {tier.name}
                  </Heading>
                  <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                    {tier.description}
                  </Text>
                </Box>

                <SimpleGrid columns={[1, null, 3]} spacing={4}>
                  {tier.subTiers.map((subTier, subIndex) => (
                    <FallInPlace key={subTier.id} delay={subIndex * 0.1}>
                      <PricingBox
                        title={subTier.name}
                        description={subTier.description}
                        price={subTier.price}
                        badge={subTier.badge}
                        badgeColor={subTier.badgeColor}
                        sx={
                          subTier.isRecommended
                            ? {
                                borderColor: `${tier.color}.500`,
                                _dark: {
                                  borderColor: `${tier.color}.500`,
                                  bg: 'blackAlpha.300',
                                },
                                transform: 'scale(1.05)',
                                shadow: `0 0 30px ${tier.color}.500`,
                              }
                            : {}
                        }
                      >
                        <PricingFeatures>
                          {subTier.features.map((feature, i) =>
                            feature ? (
                              <PricingFeature key={i} {...feature} />
                            ) : (
                              <br key={i} />
                            ),
                          )}
                        </PricingFeatures>
                        <ButtonLink 
                          colorScheme={tier.color} 
                          {...subTier.action}
                        >
                          {subTier.action.label || 'Comenzar'}
                        </ButtonLink>
                      </PricingBox>
                    </FallInPlace>
                  ))}
                </SimpleGrid>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>

        {/* Sección de Propiedad y Soporte */}
        <Container maxW="4xl" mt={8} mb={6}>
          <Alert
            status="info"
            variant="left-accent"
            borderRadius="lg"
            bg="transparent"
            border="2px solid"
            borderColor="cyan.400"
            p={4}
            sx={{
              boxShadow: '0 0 30px rgba(0, 217, 255, 0.4), 0 0 60px rgba(0, 217, 255, 0.2)',
              _dark: {
                boxShadow: '0 0 30px rgba(0, 217, 255, 0.6), 0 0 60px rgba(0, 217, 255, 0.3)',
              },
            }}
          >
            <AlertIcon as={FiKey} color="primary.500" />
            <Box>
              <AlertTitle fontSize="md" color="primary.500">
                💼 Propiedad Completa del Proyecto
              </AlertTitle>
              <AlertDescription color="primary.500">
                <Text fontSize="xs" mb={2} fontWeight="semibold">
                  <strong>Todo el trabajo desarrollado es 100% tuyo:</strong>
                </Text>
                <VStack align="start" spacing={0.5} fontSize="xs">
                  <HStack spacing={1.5}>
                    <Icon as={FiCheck} color="cyan.400" boxSize={2.5} />
                    <Text><strong>Código fuente completo</strong> - Sin restricciones</Text>
                  </HStack>
                  <HStack spacing={1.5}>
                    <Icon as={FiCheck} color="cyan.400" boxSize={2.5} />
                    <Text><strong>Nombre de dominio</strong> - Registrado a tu nombre</Text>
                  </HStack>
                  <HStack spacing={1.5}>
                    <Icon as={FiCheck} color="cyan.400" boxSize={2.5} />
                    <Text><strong>Hosting/VPS</strong> - Acceso completo y transferible</Text>
                  </HStack>
                  <HStack spacing={1.5}>
                    <Icon as={FiCheck} color="cyan.400" boxSize={2.5} />
                    <Text><strong>Base de datos</strong> - Exportación completa incluida</Text>
                  </HStack>
                  <HStack spacing={1.5}>
                    <Icon as={FiCheck} color="cyan.400" boxSize={2.5} />
                    <Text><strong>Documentación técnica</strong> - Manuales y guías</Text>
                  </HStack>
                </VStack>
                <Text fontSize="xs" mt={2} fontWeight="medium">
                  📞 <strong>Soporte incluido:</strong> Durante el período especificado, 
                  mantenemos y actualizamos tu proyecto sin costo adicional. 
                  Después, eres libre de continuar con nosotros o llevarlo a otro profesional.
                </Text>
              </AlertDescription>
            </Box>
          </Alert>
        </Container>

        {children}
      </Box>
    </Section>
  )
})
PricingTabs.displayName = 'PricingTabs'

const PricingFeatures: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <VStack
      align="stretch"
      justifyContent="stretch"
      spacing="2"
      mb="6"
      flex="1"
    >
      {children}
    </VStack>
  )
}

export interface PricingFeatureProps {
  title: React.ReactNode
  iconColor?: string
}

const PricingFeature: React.FC<PricingFeatureProps> = (props) => {
  const { title, iconColor = 'primary.500' } = props
  return (
    <HStack spacing={2}>
      <Icon as={FiCheck} color={iconColor} boxSize={3} />
      <Text flex="1" fontSize="xs">
        {title}
      </Text>
    </HStack>
  )
}

export interface PricingBoxProps extends Omit<StackProps, 'title'> {
  title: React.ReactNode
  description: React.ReactNode
  price: React.ReactNode
  badge?: string
  badgeColor?: string
}

const PricingBox: React.FC<PricingBoxProps> = (props) => {
  const { title, description, price, badge, badgeColor, children, ...rest } = props
  return (
    <VStack
      zIndex="2"
      bg="whiteAlpha.600"
      borderRadius="lg"
      p="6"
      flex="1 0"
      alignItems="stretch"
      border="2px solid"
      borderColor="gray.400"
      position="relative"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-3px)',
        shadow: 'md',
      }}
      _dark={{
        bg: 'blackAlpha.300',
        borderColor: 'gray.800',
      }}
      {...rest}
    >
      {badge && (
        <Badge
          position="absolute"
          top={-2}
          right={4}
          colorScheme={badgeColor || 'primary'}
          variant="solid"
          px={3}
          py={1}
          borderRadius="full"
          fontSize="xs"
          fontWeight="bold"
        >
          {badge}
        </Badge>
      )}
      
      <Heading as="h3" size="sm" fontWeight="bold" fontSize="lg" mb={1}>
        {title}
      </Heading>
      <Text color="muted" mb={3} fontSize="xs">
        {description}
      </Text>
      
      <Divider my={3} />
      
      <Box fontSize="xl" fontWeight="bold" py="2" textAlign="center">
        {price}
      </Box>
      
      <VStack align="stretch" justifyContent="stretch" spacing="3" flex="1">
        {children}
      </VStack>
    </VStack>
  )
}
