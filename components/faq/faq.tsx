import { 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Text,
  VStack
} from '@chakra-ui/react'
import { Section, SectionProps, SectionTitle } from 'components/section'
import { FallInPlace } from '#components/motion/fall-in-place'

interface FaqProps extends Omit<SectionProps, 'title' | 'children'> {
  title?: React.ReactNode
  description?: React.ReactNode
  items: { q: React.ReactNode; a: React.ReactNode }[]
}

export const Faq: React.FC<FaqProps> = (props) => {
  const {
    title = 'Frequently asked questions',
    description,
    items = [],
  } = props
  return (
    <Section id="faq">
      <SectionTitle title={title} description={description} align="left" />

      <Flex justify="center" w="full">
        <VStack spacing={4} w="full" maxW="4xl">
          <Accordion allowMultiple w="full">
            {items?.map(({ q, a }, i) => {
              return (
                <FallInPlace key={i} delay={i * 0.1}>
                  <AccordionItem 
                    border="1px solid" 
                    borderColor="whiteAlpha.200" 
                    borderRadius="lg"
                    mb={4}
                    bg="whiteAlpha.50"
                    _hover={{ bg: "whiteAlpha.100" }}
                  >
                    <AccordionButton py={6} px={6}>
                      <Box flex="1" textAlign="left">
                        <Text fontWeight="semibold" fontSize="lg">
                          {q}
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={6} px={6}>
                      <Text color="muted" lineHeight="1.6">
                        {a}
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                </FallInPlace>
              )
            })}
          </Accordion>
        </VStack>
      </Flex>
    </Section>
  )
}

