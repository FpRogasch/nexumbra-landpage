import { HStack, IconButton, Text, useColorMode } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  
  return (
    <HStack spacing="2" display={{ base: 'none', md: 'flex' }}>
      <Text
        fontSize="xs"
        color="gray.500"
        fontWeight="medium"
        whiteSpace="nowrap"
      >
        Cambiar a modo:
      </Text>
      <IconButton
        aria-label="toggle theme"
        icon={colorMode === 'light' ? <FiMoon size="16" /> : <FiSun size="16" />}
        onClick={toggleColorMode}
        borderRadius="lg"
        bg="transparent"
        border="2px solid"
        borderColor={colorMode === 'light' ? 'gray.300' : 'purple.700'}
        color={colorMode === 'light' ? 'purple.600' : 'purple.300'}
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        _hover={{
          borderColor: 'cyan.400',
          color: 'cyan.400',
          bg: 'rgba(0, 255, 255, 0.1)',
          boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)',
          transform: 'rotate(180deg) scale(1.05)',
        }}
        _active={{
          transform: 'rotate(180deg) scale(0.95)',
        }}
      />
    </HStack>
  )
}

export default ThemeToggle
