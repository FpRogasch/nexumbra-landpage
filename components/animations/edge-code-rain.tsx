'use client'

import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

interface EdgeCodeRainProps {
  position?: 'left' | 'right' | 'both'
  width?: number
}

export function EdgeCodeRain({ position = 'both', width = 100 }: EdgeCodeRainProps) {
  const [columns, setColumns] = useState<number[]>([])
  const [windowWidth, setWindowWidth] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  
  // Caracteres relacionados con programación y tecnología
  const chars = '0123456789ABCDEF<>{}[]();constletvarfunctionifelseforwhileimportexportreturnclassinterfaceextendsimplements</>{}[]();'
  
  useEffect(() => {
    // Marcar que el componente está montado en el cliente
    setIsMounted(true)
    
    const updateColumns = () => {
      const ww = window.innerWidth
      setWindowWidth(ww)
      
      // Calcular número de columnas basado en el ancho disponible
      const columnWidth = width / 2 // Exactamente 2 columnas en el ancho total
      const cols = 2 // Siempre 2 columnas
      setColumns(Array.from({ length: cols }, (_, i) => i))
    }

    updateColumns()
    window.addEventListener('resize', updateColumns)
    
    return () => window.removeEventListener('resize', updateColumns)
  }, [width])

  const generateRandomCode = () => {
    // Solo generar código aleatorio si el componente está montado
    if (!isMounted) {
      return 'Loading...'
    }
    
    const codeSnippets = [
      // Variables y funciones básicas
      'const user = {', 'let data = []', 'var config = {}', 'function handleClick()', 'if (isLoading)', 'else return null', 'for (let i = 0)', 'while (condition)',
      
      // React/Next.js específico
      'import React from', 'export default function', 'useState(initial)', 'useEffect(() =>', 'return <div>', 'className="flex"', 'onClick={handleClick}', 'props.children',
      '<Component />', 'const [state, setState]', 'useRouter()', 'getServerSideProps', 'getStaticProps', 'dynamic import', 'Image from next/image',
      
      // TypeScript
      'interface Props {', 'type User = {', 'const user: User =', 'string | number', 'Array<string>', 'Promise<void>', 'React.FC<Props>',
      
      // Backend/API
      'app.get("/api"', 'res.json(data)', 'req.body', 'middleware()', 'await fetch(url)', 'const response = await', 'POST /api/users', 'GET /api/data',
      'mongoose.connect()', 'prisma.user.find()', 'JWT token', 'bcrypt.hash()', 'cors()', 'helmet()',
      
      // Base de datos
      'SELECT * FROM', 'INSERT INTO users', 'UPDATE table SET', 'DELETE FROM', 'WHERE id = ?', 'JOIN tables', 'GROUP BY', 'ORDER BY',
      'CREATE TABLE', 'ALTER TABLE', 'INDEX ON', 'FOREIGN KEY', 'PRIMARY KEY',
      
      // DevOps/Herramientas
      'npm install', 'yarn add', 'pnpm i', 'git commit -m', 'git push origin', 'docker build', 'kubectl apply', 'terraform plan',
      'npm run dev', 'npm run build', 'npm test', 'eslint --fix', 'prettier --write', 'webpack.config.js',
      
      // CSS/Estilos
      'display: flex', 'justify-content: center', 'align-items: center', 'margin: 0 auto', 'padding: 1rem', 'border-radius: 8px',
      'background: linear-gradient', 'box-shadow: 0 4px', 'transition: all 0.3s', '@media (max-width:', 'flex-direction: column',
      
      // Algoritmos y lógica
      'const result = array.map(', 'array.filter(item =>', 'array.reduce((acc', 'array.find(user =>', 'array.sort((a, b) =>',
      'Object.keys(obj)', 'Object.values(data)', 'JSON.stringify()', 'JSON.parse()', 'localStorage.getItem',
      
      // Errores y debugging
      'try { } catch (error)', 'console.log(data)', 'console.error(err)', 'throw new Error(', 'if (error) {', 'return { error: true }',
      
      // Patrones comunes
      'const { data, error } =', 'return data ? (', 'isLoading && <Spinner />', 'error && <ErrorMessage />', 'onSuccess: (data) =>',
      'onError: (error) =>', 'useCallback(() =>', 'useMemo(() =>', 'React.memo(', 'forwardRef<HTMLDivElement>'
    ]
    
    return codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
  }

  const renderColumn = (col: number, side: 'left' | 'right', isSecond = false, instance = 0, columnWidth?: number) => {
    // Usar valores consistentes cuando no está montado para evitar errores de hidratación
    const columnChars = isMounted ? 30 + Math.floor(Math.random() * 25) : 40 // 30-55 caracteres por columna (aún más texto para continuidad)
    const actualColumnWidth = columnWidth || (width / 2) // Usar el ancho pasado o calcularlo
    
    return (
      <Box
        key={`${side}-${col}-${instance}`}
        position="absolute"
        left={`${col * actualColumnWidth}px`}
        top={-20}
        sx={{
          animation: `fall${side} ${isMounted ? 12 + Math.random() * 16 : 20}s linear infinite`, // Velocidad reducida a la mitad (12-28s)
          animationDelay: `${isMounted ? instance * 0.4 + Math.random() * 0.6 : instance * 0.5}s`, // Delays escalonados para mayor frecuencia
          [`@keyframes fall${side}`]: {
            '0%': { 
              transform: 'translateY(-120vh)', // Empezar más arriba
              opacity: 0
            },
            '5%': { 
              opacity: 1
            },
            '95%': { 
              opacity: 1
            },
            '100%': { 
              transform: 'translateY(120vh)', // Terminar más abajo
              opacity: 0
            },
          },
        }}
      >
        {[...Array(columnChars)].map((_, i) => {
          const isLeading = i === 0
          // Usar valores consistentes cuando no está montado
          const isCode = isMounted ? Math.random() > 0.15 : true // 85% chance de mostrar código real (más continuidad)
          const shouldBeCyan = isLeading || (isMounted ? Math.random() > 0.6 : i % 3 === 0)
          const shouldHaveGlow = isLeading || (isMounted ? Math.random() > 0.6 : i % 4 === 0)
          
          return (
            <Text
              key={i}
              color={shouldBeCyan ? 'cyan.400' : 'primary.500'} // 40% más cyan (60% de probabilidad)
              fontSize="13px" // Texto ligeramente más grande
              fontFamily="monospace"
              opacity={isLeading ? 1 : Math.max(0.3, 0.9 - i * 0.04)} // Más visible (0.3 en lugar de 0.1)
              mb={0.5}
              fontWeight={isLeading ? 'bold' : 'normal'}
              textShadow={shouldHaveGlow ? '0 0 12px rgba(0, 217, 255, 0.8)' : '0 0 4px rgba(139, 92, 246, 0.3)'} // Brillo cyan más frecuente
              sx={{
                transition: 'opacity 0.1s ease',
                '&:hover': {
                  opacity: 1,
                }
              }}
            >
              {isCode ? generateRandomCode() : chars[Math.floor(Math.random() * chars.length)]}
            </Text>
          )
        })}
      </Box>
    )
  }

  const renderSide = (side: 'left' | 'right') => {
    // Usar valores consistentes cuando no está montado para evitar errores de hidratación
    const randomWidth = isMounted ? 100 + Math.floor(Math.random() * 51) : 125 // 100-150px aleatorio
    const localColumns = 2 // Siempre 2 columnas
    const columnWidth = randomWidth / localColumns // Ancho por columna
    
    return (
      <Box
        position="fixed"
        top={0}
        bottom={0}
        width={`${randomWidth}px`}
        left={side === 'left' ? 0 : undefined}
        right={side === 'right' ? 0 : undefined}
        overflow="hidden"
        pointerEvents="none"
        opacity={0.6}
        zIndex={-1}
        sx={{
          background: `linear-gradient(to ${side === 'left' ? 'right' : 'left'}, 
            transparent 0%, 
            rgba(139, 92, 246, 0.15) 30%, 
            rgba(0, 217, 255, 0.15) 70%, 
            transparent 100%)`, // Fondo más visible
        }}
      >
      {Array.from({ length: localColumns }, (_, col) => (
        <React.Fragment key={`${side}-${col}`}>
          {renderColumn(col, side, false, 0, columnWidth)}
          {renderColumn(col, side, true, 1, columnWidth)}
          {renderColumn(col, side, false, 2, columnWidth)} {/* Tercera instancia para mayor frecuencia */}
          {renderColumn(col, side, true, 3, columnWidth)} {/* Cuarta instancia para mayor frecuencia */}
        </React.Fragment>
      ))}
      
      {/* Línea central que aparece y desaparece */}
      <Box
        position="absolute"
        top={0}
        bottom={0}
        width="1px"
        left={`${randomWidth / 2}px`}
        bgGradient="linear(to-b, transparent, cyan.400, transparent)"
        opacity={0}
        sx={{
          animation: `pulse${side} 3s ease-in-out infinite`,
          [`@keyframes pulse${side}`]: {
            '0%': { opacity: 0 },
            '50%': { opacity: 0.8 },
            '100%': { opacity: 0 },
          },
        }}
      />
    </Box>
    )
  }

  if (position === 'left') {
    return renderSide('left')
  }
  
  if (position === 'right') {
    return renderSide('right')
  }

  return (
    <>
      {renderSide('left')}
      {renderSide('right')}
    </>
  )
}
