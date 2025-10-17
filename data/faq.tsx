import * as React from 'react'
import { Heading } from '@chakra-ui/react'

const faq = {
  title: (
    <Heading
      lineHeight="short"
      fontSize="6xl"
      textAlign="left"
      as="p"
      sx={{
        textShadow: '0 0 50px rgba(0, 255, 255, 0.95)',
      }}
    >
      Preguntas Frecuentes
    </Heading>
  ),
  description: 'Todo lo que necesitas saber sobre nuestros servicios',
  items: [
    {
      q: '¿Qué tipo de proyectos desarrollan?',
      a: (
        <>
          Nos especializamos en ayudar a emprendedores y empresas a implementar soluciones 
          digitales integrales para sus negocios. Desde landing pages optimizadas para conversión 
          y sitios web con WordPress, hasta sistemas financieros complejos, intranets corporativas 
          y plataformas de gestión empresarial. Nuestro enfoque es crear herramientas digitales 
          que impulsen el crecimiento de tu negocio, adaptándonos a tu presupuesto y objetivos 
          específicos.
        </>
      ),
    },
    {
      q: '¿Cuánto tiempo toma desarrollar un proyecto?',
      a: (
        <>
          Como muchas respuestas, depende claramente del proceso. Nuestro enfoque es hacer 
          nuestro trabajo de forma profesional, por lo que realizamos reuniones y juntas, 
          ya sea online o presencial, para poder captar toda la idea y necesidades de tu proyecto. 
          Solo después de esta fase de análisis y planificación, entregamos una estimación 
          detallada de tiempos y costos adaptada a tu proyecto específico.
        </>
      ),
    },
    {
      q: '¿Qué tecnologías utilizan?',
      a: (
        <>
          Nos adaptamos a todas las tecnologías según las necesidades del proyecto. 
          Sin embargo, cuando el código es personalizado, solemos utilizar React, Redux, 
          Next.js, NestJS, Node.js Express, PostgreSQL o MongoDB. Siempre recomendamos 
          a nuestros clientes tener un VPS para poder hacer deploy con Dokploy y GitHub, 
          lo que nos permite tener el control necesario para instalar en el servidor del 
          cliente todas las aplicaciones y funciones que necesitamos para tu proyecto.
        </>
      ),
    },
    {
      q: '¿Ofrecen mantenimiento y soporte después de la entrega?',
      a: (
        <>
          Sí, todos nuestros proyectos incluyen un período de soporte y mantenimiento gratuito. 
          Una vez finalizado este período, continuamos brindando servicios de mantenimiento 
          y soporte técnico con costos que varían según la complejidad de los cambios requeridos. 
          
          Además, te entregamos el proyecto con total libertad de uso, acompañado de una 
          capacitación completa que incluye el manejo de las plataformas utilizadas y los 
          conceptos esenciales para mantener tu sitio web o aplicación en línea, como la 
          gestión de dominios, hosting, VPS, certificados SSL y configuraciones básicas de servidor.
        </>
      ),
    },
    {
      q: '¿Puedo ver ejemplos de proyectos anteriores?',
      a: (
        <>
          Por supuesto. Podemos mostrarte nuestro portafolio con proyectos reales que hemos 
          desarrollado. Algunos incluyen casos de estudio detallados. Contáctanos para agendar 
          una reunión donde te mostraremos ejemplos relevantes a tu industria.
        </>
      ),
    },
    {
      q: '¿Cómo funciona el proceso de desarrollo?',
      a: (
        <>
          Siempre seguimos una metodología ágil, manteniendo comunicación constante con reuniones 
          cada 2 semanas mínimo para asegurar que el proyecto evolucione según tus expectativas. 
          Comenzamos con una propuesta y cotización detallada basada en tus necesidades específicas. 
          Posteriormente, desarrollamos el diseño UI/UX personalizado que refleje la identidad de 
          tu marca. El desarrollo se realiza de forma iterativa con entregas parciales regulares, 
          permitiendo feedback continuo y ajustes en tiempo real. Una vez completado, realizamos 
          testing exhaustivo y refinamos todos los detalles antes del lanzamiento final. 
          Te proporcionamos capacitación completa para que puedas gestionar tu proyecto de forma 
          independiente. Te mantenemos informado en cada etapa del proceso para garantizar 
          transparencia total.
        </>
      ),
    },
    {
      q: '¿Trabajan con clientes fuera de Chile?',
      a: (
        <>
          Sí, aunque somos una startup chilena, trabajamos con clientes de toda Latinoamérica 
          y otros países. Toda nuestra comunicación puede ser remota a través de videollamadas, 
          herramientas de gestión de proyectos y plataformas colaborativas.
        </>
      ),
    },
    {
      q: '¿Cuál es su forma de pago?',
      a: (
        <>
          Trabajamos con pagos por hitos: generalmente 40% al inicio, 30% en la mitad del 
          proyecto y 30% al finalizar. Para proyectos pequeños puede ser 50% inicio y 50% 
          al entregar. Aceptamos transferencias bancarias y también podemos emitir factura 
          electrónica.
        </>
      ),
    },
  ],
}

export default faq
