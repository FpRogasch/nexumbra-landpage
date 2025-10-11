# Guía Visual - Nexumbra Code

## Paleta de Colores

### Colores Principales
- **Púrpura (Primary)**: `#8B5CF6` - Color principal del logo, usado para elementos destacados
- **Cian (Accent)**: `#00D9FF` - Color secundario del logo, usado para acentos y CTAs
- **Fondo Oscuro**: `#0a0a0a` - Fondo principal de la aplicación
- **Texto**: `#f7fafc` - Color principal del texto

### Gradientes
- **Gradiente Principal**: `linear-gradient(to-r, #8B5CF6, #00D9FF)`
- **Gradiente de Fondo**: Radial con púrpura y cian
- **Glow Effects**: Sombras con opacidad 0.3-0.6

## Sugerencias de Imágenes

### 1. Hero Section (Pantalla Principal)
**Imagen necesaria**: Dashboard o aplicación web moderna
- **Ubicación**: `/public/static/screenshots/list.png`
- **Características**:
  - Interfaz de aplicación web moderna
  - Tono oscuro con acentos púrpura/cian
  - Diseño limpio y profesional
  - Resolución: 1200x800px mínimo
  
**Opciones de stock:**
- [Unsplash - Dashboard UI](https://unsplash.com/s/photos/dashboard-ui)
- [Undraw - Programming illustrations](https://undraw.co/illustrations)
- Crear screenshot de https://dribbble.com/shots/popular/web-design con tema oscuro

### 2. Página de Proyectos

#### Proyecto 1: FinTech Dashboard
**Imagen necesaria**: Dashboard financiero
- **Ubicación**: `/public/static/screenshots/dashboard.png`
- **Características**:
  - Gráficos y métricas financieras
  - Tablas de datos
  - Diseño moderno y limpio
  - Colores: púrpura/azul con fondo oscuro
  
**Sugerencias**:
- Screenshot de CoinMarketCap o similar con tema oscuro
- Crear mockup en Figma con componentes de Chakra UI
- Usar templates de dashboard de TailwindUI o similar

#### Proyecto 2: E-Commerce Platform
**Imagen necesaria**: Interfaz de tienda online
- **Ubicación**: `/public/static/screenshots/landingspage.png`
- **Características**:
  - Productos con imágenes
  - Carrito de compras
  - Diseño responsive y moderno
  - Tema oscuro con acentos de color
  
**Sugerencias**:
- Screenshot de Vercel Deploy página
- Mockup de landing page moderna
- Template de e-commerce de Shopify con tema oscuro

#### Proyecto 3: HealthCare SaaS
**Imagen necesaria**: Sistema de gestión médica
- **Ubicación**: `/public/static/screenshots/billing.png`
- **Características**:
  - Tabla de facturación
  - Dashboard médico
  - Diseño profesional y serio
  - Iconografía médica
  
**Sugerencias**:
- Mockup de CRM o sistema de gestión
- Screenshot de sistema de tickets/billing
- Template de SaaS dashboard

### 3. Avatares de Testimonios
**Ubicación**: `/public/static/images/`
- `avatar.jpg` - Mujer profesional, edad 30-40
- `avatar2.jpg` - Hombre profesional, edad 35-45
- `avatar3.jpg` - Mujer joven emprendedora, edad 25-35
- `eelco.jpg` - Hombre profesional, edad 40-50

**Características**:
- Fotos profesionales de estilo corporativo
- Fondo neutro o desenfocado
- Resolución: 400x400px mínimo
- Formato: JPG, optimizado para web

**Opciones de stock:**
- [Unsplash - Professional Portraits](https://unsplash.com/s/photos/professional-portrait)
- [Generated Photos](https://generated.photos/) - Fotos generadas por IA
- [UI Faces](https://uifaces.co/) - Avatares para UI

### 4. Iconos y Elementos Gráficos

#### Code/Tech Icons
- Iconos de código: `< />`, `{}`, `[]`
- Símbolos binarios: `101`, `010`, `110` (como en el logo)
- Patrones de circuitos
- Elementos geométricos futuristas

#### Backgrounds
- Patrón de grid animado (ya implementado)
- Partículas flotantes (ya implementado)
- Efectos de código cayendo tipo Matrix
- Líneas de escaneo

## Guía de Estilo Visual

### Tipografía
- **Fuente Principal**: Ubuntu (sans-serif)
- **Pesos**: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold)
- **Uso**:
  - Headings: Ubuntu Bold
  - Body: Ubuntu Regular
  - Code: Monospace

### Espaciado y Layout
- **Spacing**: Sistema de 8px (8, 16, 24, 32, 40, etc.)
- **Max Width Container**: 1280px (container.xl)
- **Border Radius**: 
  - Cards: 16px (xl) o 24px (2xl)
  - Buttons: 8px (md)
  - Badges: full (pill shape)

### Efectos Visuales

#### Glow Effect
```css
box-shadow: 0 0 30px rgba(139, 92, 246, 0.4);
text-shadow: 0 0 40px rgba(139, 92, 246, 0.3);
```

#### Hover States
- Transform: `translateY(-2px)` o `scale(1.02)`
- Transition: `all 0.3s ease`
- Brightness: aumentar 10-20%

#### Cards
- Background: `whiteAlpha.50` con backdrop blur
- Border: 1px `whiteAlpha.200`
- Hover: cambiar border a color del tema

### Animaciones

#### Velocidades
- Rápido: 0.2s
- Normal: 0.3s
- Lento: 0.5s
- Muy lento: 1s+

#### Efectos Implementados
1. Grid Animado - movimiento infinito
2. Scan Line - línea que baja verticalmente
3. Floating Code - código flotante que sube
4. Particle Field - partículas en movimiento
5. Glow Cards - cards con efecto de brillo

## Imágenes Temporales (Placeholders)

Mientras consigues las imágenes finales, puedes usar:

1. **Placeholder.com**: https://placeholder.com/
   - Ejemplo: `https://via.placeholder.com/1200x800/8B5CF6/FFFFFF?text=Dashboard`

2. **Unsplash Source API**:
   - `https://source.unsplash.com/1200x800/?dashboard,dark`
   - `https://source.unsplash.com/1200x800/?coding,technology`

3. **Lorem Picsum**:
   - `https://picsum.photos/1200/800`

## Herramientas Recomendadas

### Diseño
- **Figma**: Para crear mockups y diseños
- **Canva**: Para gráficos y composiciones rápidas
- **Excalidraw**: Para diagramas y wireframes

### Optimización
- **TinyPNG**: Comprimir imágenes
- **Squoosh**: Optimizar para web
- **ImageOptim**: Batch optimization

### Screenshots
- **Screely**: Agregar marcos a screenshots
- **Carbon**: Screenshots de código con estilo
- **Shot.so**: Mockups de browser/mobile

## Checklist de Imágenes

- [ ] Hero section dashboard (1200x800px)
- [ ] Proyecto 1: FinTech Dashboard
- [ ] Proyecto 2: E-Commerce Platform
- [ ] Proyecto 3: HealthCare SaaS
- [ ] Avatar testimonial 1 (400x400px)
- [ ] Avatar testimonial 2 (400x400px)
- [ ] Avatar testimonial 3 (400x400px)
- [ ] Avatar testimonial 4 (400x400px)
- [ ] Favicon (múltiples tamaños)
- [ ] Open Graph image (1200x630px)

## Assets Adicionales

### Favicon
Crear favicon con:
- Símbolo `< >` o `{}` en púrpura/cian
- Fondo oscuro o transparente
- Generar múltiples tamaños con https://realfavicongenerator.net/

### Open Graph / Social Share
- Tamaño: 1200x630px
- Logo Nexumbra Code centrado
- Gradiente púrpura a cian de fondo
- Tagline: "Desarrollo de Software en Chile"

---

## Contacto para Assets

Si necesitas que creemos assets personalizados:
- Email: contacto@nexumbra.cl
- Tiempo estimado: 2-3 días hábiles
- Formato entrega: PNG/JPG optimizados para web

