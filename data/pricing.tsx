import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Planes y Precios',
  description:
    'Soluciones escalables para cada etapa de tu negocio. Precios competitivos con calidad premium.',
  plans: [
    {
      id: 'starter',
      title: 'Starter',
      description: 'Ideal para emprendimientos y proyectos simples.',
      price: (
        <HStack spacing={1}>
          <Text fontSize="3xl" fontWeight="bold">$350.000</Text>
          <Text fontSize="md" color="gray.400"> - $800.000</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Landing Page o sitio web',
        },
        {
          title: 'Hasta 5 secciones/páginas',
        },
        {
          title: 'Diseño responsive',
        },
        {
          title: 'Formulario de contacto',
        },
        {
          title: 'SEO básico',
        },
        {
          title: 'Hosting 1 año gratis',
        },
        {
          title: 'Entrega: 1-2 semanas',
        },
        {
          title: 'Soporte: 1 mes',
        },
      ],
      action: {
        href: '/contacto',
        label: 'Comenzar Proyecto',
      },
    },
    {
      id: 'professional',
      title: 'Professional',
      description: 'Aplicaciones web completas con funcionalidades avanzadas.',
      price: (
        <HStack spacing={1}>
          <Text fontSize="3xl" fontWeight="bold">$2.500.000</Text>
          <Text fontSize="md" color="gray.400"> - $5.000.000</Text>
        </HStack>
      ),
      isRecommended: true,
      features: [
        {
          title: 'Aplicación web full-stack',
        },
        {
          title: 'Diseño UX/UI personalizado',
        },
        {
          title: 'Panel de administración',
        },
        {
          title: 'Base de datos (SQL/NoSQL)',
        },
        {
          title: 'API REST completa',
        },
        {
          title: 'Autenticación y roles',
        },
        {
          title: 'Testing y documentación',
        },
        {
          title: 'Entrega: 6-12 semanas',
        },
        {
          title: 'Soporte: 3 meses',
        },
      ],
      action: {
        href: '/contacto',
        label: 'Solicitar Cotización',
      },
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      description: 'Sistemas complejos y soluciones escalables a medida.',
      price: (
        <HStack spacing={1}>
          <Text fontSize="3xl" fontWeight="bold">Desde $8.000.000</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Sistema empresarial a medida',
        },
        {
          title: 'Arquitectura escalable',
        },
        {
          title: 'Microservicios',
        },
        {
          title: 'Integraciones complejas',
        },
        {
          title: 'Analytics y reportería avanzada',
        },
        {
          title: 'Seguridad enterprise',
        },
        {
          title: 'DevOps y CI/CD',
        },
        {
          title: 'Capacitación del equipo',
        },
        {
          title: 'SLA personalizado',
        },
        {
          title: 'Soporte: 6+ meses',
          iconColor: 'cyan.500',
        },
      ],
      action: {
        href: '/contacto',
        label: 'Hablemos',
      },
    },
  ],
}
