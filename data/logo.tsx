import { chakra, HTMLChakraProps } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 50"
      {...props}
    >
      {/* Código binario estilizado con gradiente */}
      <defs>
        <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#00D9FF" />
        </linearGradient>
      </defs>
      
      {/* Símbolos de código < > */}
      <path
        d="M15 15 L8 25 L15 35"
        stroke="url(#codeGradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 15 L32 25 L25 35"
        stroke="url(#codeGradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Texto "NEXUMBRA" */}
      <text
        x="45"
        y="32"
        fill="#8B5CF6"
        fontFamily="Ubuntu, sans-serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="1"
      >
        NEXUMBRA
      </text>
      
      {/* Subtexto "code" */}
      <text
        x="175"
        y="32"
        fill="#00D9FF"
        fontFamily="Ubuntu, sans-serif"
        fontSize="22"
        fontWeight="300"
        letterSpacing="2"
      >
        code
      </text>
    </chakra.svg>
  )
}
