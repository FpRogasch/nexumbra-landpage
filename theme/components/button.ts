import { mode } from '@chakra-ui/theme-tools'

type Dict = Record<string, any>

export default {
  variants: {
    'nav-link': (props: Dict) => {
      const { isActive } = props

      const activeColor = mode('purple.600', 'purple.300')(props)
      const inactiveColor = mode('gray.700', 'gray.400')(props)
      const hoverColor = mode('purple.700', 'cyan.300')(props)
      
      return {
        position: 'relative',
        outline: 'none',
        fontWeight: '600',
        fontSize: 'md',
        color: isActive ? activeColor : inactiveColor,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        _before: {
          content: '""',
          position: 'absolute',
          bottom: '-2px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: isActive ? '80%' : '0%',
          height: '2px',
          bg: isActive ? activeColor : 'cyan.400',
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          borderRadius: 'full',
        },
        _hover: {
          textDecoration: 'none',
          color: hoverColor,
          textShadow: mode(
            'none',
            '0 0 8px rgba(0, 255, 255, 0.4)'
          )(props),
          _before: {
            width: '80%',
            bg: 'cyan.400',
            boxShadow: '0 0 8px rgba(0, 255, 255, 0.6)',
          },
        },
        _active: {
          transform: 'scale(0.98)',
        },
      }
    },
    'primary': (props: Dict) => {
      return {
        position: 'relative',
        bg: 'purple.900',
        color: 'white',
        fontSize: 'md',
        fontWeight: '600',
        border: '2px solid',
        borderColor: 'purple.800',
        borderRadius: 'lg',
        px: 4,
        py: 0,
        height: 'auto',
        lineHeight: 'normal',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        _before: {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          bg: 'cyan.400',
          transition: 'left 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: -1,
        },
        _hover: {
          color: 'black',
          borderColor: 'cyan.400',
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
          transform: 'translateY(0px)',
          _before: {
            left: 0,
          },
        },
        _active: {
          transform: 'translateY(0)',
          bg: 'cyan.400',
          borderColor: 'cyan.400',
          color: 'black',
        },
      }
    },
  },
}
