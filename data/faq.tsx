import * as React from 'react'

const faq = {
  title: 'Preguntas Frecuentes',
  description: 'Todo lo que necesitas saber sobre nuestros servicios',
  items: [
    {
      q: '¿Qué tipo de proyectos desarrollan?',
      a: (
        <>
          Desarrollamos todo tipo de soluciones digitales: desde landing pages simples 
          y sitios web corporativos, hasta aplicaciones web complejas, sistemas de gestión 
          empresarial (ERP), plataformas e-commerce y aplicaciones móviles. Nos adaptamos 
          a las necesidades específicas de cada cliente.
        </>
      ),
    },
    {
      q: '¿Cuánto tiempo toma desarrollar un proyecto?',
      a: (
        <>
          Los tiempos varían según la complejidad. Una landing page puede estar lista 
          en 1-2 semanas, un sitio web corporativo en 3-4 semanas, y sistemas más complejos 
          pueden tomar de 2 a 6 meses. Siempre entregamos una estimación detallada después 
          de la primera reunión.
        </>
      ),
    },
    {
      q: '¿Qué tecnologías utilizan?',
      a: (
        <>
          Trabajamos con tecnologías modernas y probadas: React, Next.js, Node.js, 
          TypeScript, PostgreSQL, MongoDB, y más. Elegimos el stack tecnológico más 
          adecuado para cada proyecto, priorizando escalabilidad, rendimiento y mantenibilidad.
        </>
      ),
    },
    {
      q: '¿Ofrecen mantenimiento y soporte después de la entrega?',
      a: (
        <>
          Sí, todos nuestros proyectos incluyen un período de garantía y ofrecemos planes 
          de mantenimiento continuo. Esto incluye actualizaciones de seguridad, corrección 
          de errores, actualizaciones de contenido y mejoras incrementales según tus necesidades.
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
          Seguimos una metodología ágil: 1) Reunión inicial para entender tus necesidades, 
          2) Propuesta y cotización detallada, 3) Diseño UI/UX, 4) Desarrollo iterativo con 
          entregas parciales, 5) Testing y ajustes, 6) Lanzamiento y capacitación. Te mantenemos 
          informado en cada etapa.
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
