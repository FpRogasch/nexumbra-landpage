# Nexumbra Code - Landing Page 🚀

Landing page oficial de **Nexumbra Code**, startup chilena especializada en desarrollo de software y aplicaciones web.

![Nexumbra Code](https://img.shields.io/badge/Nexumbra-Code-8B5CF6?style=for-the-badge&logo=react&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## 🎨 Características de Diseño

### Identidad Visual Futurista
- **Colores**: Púrpura (#8B5CF6) y Cian (#00D9FF) del logo oficial
- **Fuente**: Ubuntu (Google Fonts)
- **Tema**: Oscuro con efectos de neón y glow
- **Animaciones**: Grid animado, scan lines, partículas, código flotante

### Páginas Implementadas
- ✅ **Home** - Hero section con animaciones futuristas
- ✅ **Servicios** - Stack tecnológico detallado
- ✅ **Proyectos** - 3 proyectos con páginas de demo individuales
- ✅ **Planes** - 3 tiers de precios adaptados a Chile
- ✅ **Contacto** - Formulario funcional con validación
- ✅ **FAQ** - Preguntas frecuentes

## 💼 Sobre Nexumbra Code

Somos un equipo de 3 profesionales apasionados por la tecnología:
- 👨‍💻 2 desarrolladores expertos en informática
- 🎨 1 diseñador especializado en UX/UI

### Nuestros Servicios

Transformamos ideas en soluciones digitales innovadoras:
- **Frontend Development**: React • Next.js • TypeScript
- **Backend & APIs**: Node.js • Express • GraphQL
- **Bases de Datos**: PostgreSQL • MongoDB • Redis
- **UX/UI Design**: Figma • Prototipos • Design Systems
- **E-Commerce**: Shopify • WooCommerce • Custom
- **Cloud & DevOps**: AWS • Docker • CI/CD
- **Mobile**: React Native • Flutter
- **Testing**: Jest • Cypress • E2E

## 🛠 Stack Tecnológico

### Frontend
- Next.js 14 (App Router)
- React 18
- TypeScript 5.6
- Chakra UI 2.x
- Framer Motion 11.x

### Styling
- Chakra UI Theme System
- Custom Components
- Animaciones CSS avanzadas
- Gradientes y efectos glow

## Instalación y Desarrollo

### Requisitos Previos

- Node.js 18+ 
- pnpm (recomendado) o npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/nexumbra-code/nexumbra-landpage.git

# Instalar dependencias
pnpm install
# o
npm install
```

### Ejecutar en Desarrollo

```bash
pnpm dev
# o
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la landing page.

### Build para Producción

```bash
pnpm build
pnpm start
```

## 📁 Estructura del Proyecto

```
nexumbra-landpage/
├── app/                              # Páginas Next.js (App Router)
│   ├── (marketing)/                 # Layout de marketing
│   │   ├── page.tsx                # Home con hero y secciones
│   │   ├── proyectos/              # Página de proyectos
│   │   │   ├── page.tsx           # Lista de proyectos
│   │   │   └── [id]/page.tsx      # Detalle de proyecto individual
│   │   ├── contacto/               # Página de contacto
│   │   │   └── page.tsx           # Formulario de contacto
│   │   └── layout.tsx              # Layout con header y footer
│   ├── (auth)/                      # Páginas de autenticación
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   └── layout.tsx                   # Layout principal con fuente Ubuntu
├── components/                       # Componentes React reutilizables
│   ├── animations/                  # Componentes de animación
│   │   ├── animated-grid.tsx       # Grid animado de fondo
│   │   ├── code-rain.tsx           # Efecto Matrix de código
│   │   ├── floating-code.tsx       # Código flotante
│   │   ├── glowing-card.tsx        # Cards con efecto glow
│   │   ├── particle-field.tsx      # Campo de partículas
│   │   └── scan-line.tsx           # Línea de escaneo
│   ├── hero/
│   ├── features/
│   ├── testimonials/
│   └── pricing/
├── data/                            # Archivos de configuración y datos
│   ├── config.tsx                  # Config general (colores del logo)
│   ├── faq.tsx                     # FAQ adaptado a desarrollo
│   ├── pricing.tsx                 # 3 tiers de precios en CLP
│   ├── projects.tsx                # Datos de proyectos
│   ├── testimonials.tsx            # Testimonios chilenos
│   └── logo.tsx                    # Logo con gradiente púrpura-cian
├── theme/                           # Configuración del tema Chakra UI
│   ├── index.ts                    # Tema con colores del logo
│   ├── components/                  # Estilos de componentes
│   └── foundations/
├── docs/                            # Documentación
│   └── visual-guide.md             # Guía de imágenes y estilo
├── public/                          # Archivos estáticos
│   └── static/
│       ├── images/                  # Avatares y fotos
│       └── screenshots/             # Screenshots de proyectos
└── README.md
```

## ✨ Animaciones y Efectos

### Efectos Futuristas Implementados
1. **Grid Animado** - Patrón de grid en movimiento infinito
2. **Scan Line** - Línea horizontal que recorre la pantalla
3. **Código Flotante** - Palabras clave de código que flotan
4. **Campo de Partículas** - Partículas animadas en el fondo
5. **Glow Effects** - Efectos de brillo en cards y botones
6. **Hover Animations** - Transformaciones suaves al pasar el mouse

### CSS Avanzado
- Gradientes lineales y radiales
- Backdrop blur para glassmorphism
- Text shadows con glow effect
- Box shadows con colores del tema
- Transitions suaves (0.3s ease)
- Transform effects (scale, translateY)

## Configuración

Los archivos de configuración para editar información del sitio, testimonios, FAQ y planes se encuentran en `/data`:

- `config.tsx`: Información general, navegación y footer
- `faq.tsx`: Preguntas frecuentes
- `pricing.tsx`: Planes y precios de servicios
- `testimonials.tsx`: Testimonios de clientes

## Despliegue

### Vercel (Recomendado)

La forma más fácil de desplegar esta aplicación es usando [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Otras Opciones

- Netlify
- Railway
- AWS Amplify
- Cualquier hosting compatible con Node.js

## 💰 Planes y Precios

### Starter: $350.000 - $800.000 CLP
Landing pages y sitios web simples, ideal para emprendimientos

### Professional: $2.500.000 - $5.000.000 CLP ⭐
Aplicaciones web full-stack con todas las funcionalidades

### Enterprise: Desde $8.000.000 CLP
Sistemas empresariales complejos y escalables

## 📸 Guía Visual

Consulta `docs/visual-guide.md` para:
- Paleta de colores completa
- Sugerencias de imágenes para proyectos
- Guía de estilo visual
- Assets necesarios
- Herramientas recomendadas

## 🎯 Próximos Pasos

1. **Agregar imágenes reales**: Reemplazar placeholders con screenshots de proyectos
2. **Optimizar SEO**: Meta tags, Open Graph, sitemap
3. **Integrar Analytics**: Google Analytics o similar
4. **Formulario de contacto**: Conectar con servicio de email
5. **Blog**: Agregar sección de artículos técnicos
6. **CMS**: Implementar Contentful o similar para gestión de contenido

## 📝 Licencia

Este proyecto es propiedad de Nexumbra Code.

## 📞 Contacto

- **Email**: contacto@nexumbra.cl
- **WhatsApp**: +56 9 1234 5678
- **LinkedIn**: [Nexumbra Code](https://linkedin.com/company/nexumbra-code)
- **GitHub**: [Nexumbra Code](https://github.com/nexumbra-code)

---

© 2024 Nexumbra Code - Startup Chilena de Desarrollo de Software  
Hecho con ❤️ en Chile 🇨🇱

**Stack**: Next.js 14 • React 18 • TypeScript • Chakra UI • Framer Motion
