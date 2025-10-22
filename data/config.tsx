/**
 * Configuración central del sitio web
 * Contiene toda la información de navegación, SEO, footer y enlaces
 * Este archivo es la fuente única de verdad para la configuración del sitio
 */
import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

const siteConfig = {
  logo: '/static/images/logos/logo.png',
  seo: {
    title: 'Nexumbra Code - Desarrollo de Software y Aplicaciones Web en Chile',
    description: 'Startup chilena especializada en desarrollo de software y aplicaciones web. Desde landing pages simples hasta sistemas complejos para empresas. Equipo profesional de desarrolladores y diseñadores.',
  } as NextSeoProps,
  termsUrl: '/terminos',
  privacyUrl: '/privacidad',
  header: {
    links: [
      {
        id: 'servicios',
        label: 'Servicios',
      },
      {
        id: 'planes',
        label: 'Planes',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Proyectos',
        href: '/proyectos',
      },
      {
        label: 'Contacto',
        href: '/contacto',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        © 2025 Nexumbra Code - Startup Chilena de Desarrollo de Software{' '}
        <br />
        Hecho con ❤️ en Chile
      </>
    ),
    links: [
      {
        href: 'mailto:contacto@nexumbra.cl',
        label: 'contacto@nexumbra.cl',
      },
      {
        href: 'https://wa.me/56912345678',
        label: <FaWhatsapp size="14" />,
      },
      {
        href: 'https://linkedin.com/company/nexumbra-code',
        label: <FaLinkedin size="14" />,
      },
      {
        href: 'https://github.com/nexumbra-code',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Comienza tu proyecto con Nexumbra Code',
    features: [
      {
        icon: FiCheck,
        title: 'Equipo Profesional',
        description: '2 desarrolladores expertos y 1 diseñador UX/UI trabajando en tu proyecto.',
      },
      {
        icon: FiCheck,
        title: 'Tecnología Moderna',
        description:
          'Utilizamos las últimas tecnologías: React, Next.js, Node.js y más para crear soluciones robustas.',
      },
      {
        icon: FiCheck,
        title: 'Desde Simple a Complejo',
        description:
          'Desde landing pages hasta sistemas empresariales complejos, nos adaptamos a tus necesidades.',
      },
      {
        icon: FiCheck,
        title: 'Soporte Continuo',
        description:
          'Mantenimiento, actualizaciones y soporte técnico para que tu proyecto siempre esté al día.',
      },
    ],
  },
}

export default siteConfig
