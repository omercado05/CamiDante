# CamiDante Blog ✍️

> Un espacio de reflexión personal, reseñas literarias y notas de estilo de vida. Construido con filosofía editorial: lento, limpio y deliberado.

---

## 📖 Sobre el Proyecto

**CamiDante** es una plataforma de blog personal diseñada bajo una estética *"New Editorial"*. La interfaz imita la experiencia de leer una revista bien impresa: tipografía cuidada, espacios en blanco generosos, colores apagados como papel viejo, y sin distracciones visuales.

La filosofía de desarrollo es igualmente minimalista: **sin frameworks de utilidades CSS**, control total del diseño, y una base de código que se lee tan bien como el contenido que aloja.

---

## ✨ Características

| Categoría | Detalle |
|---|---|
| **Diseño** | Estética "Paper-First" — colores tierra, tipografía clásica, sin sombras pesadas |
| **Estilos** | 100% Vanilla CSS con CSS Modules (sin Tailwind) |
| **Tipografía** | *Noto Serif* (títulos) + *Work Sans* (cuerpo) via `next/font` |
| **Autenticación** | Registro, Login y panel Admin gestionado por Supabase Auth |
| **Rendimiento** | Server Components + SSG de Next.js para carga instantánea |
| **Animaciones** | Micro-animaciones CSS nativas (`fadeIn`, delays escalonados) |
| **Responsive** | Diseño adaptable a móvil, tablet y escritorio |

---

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js 16](https://nextjs.org/) — App Router
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: Vanilla CSS + CSS Modules
- **Backend & Auth**: [Supabase](https://supabase.com/)
- **Despliegue**: [Vercel](https://vercel.com/)
- **Control de versiones**: Git + GitHub

---

## 📂 Estructura del Proyecto

```
CamiDante/
├── src/
│   ├── app/                        # Rutas del App Router de Next.js
│   │   ├── (auth)/                 # Grupo de rutas de autenticación
│   │   │   ├── login/page.tsx      # Página de inicio de sesión
│   │   │   ├── registro/page.tsx   # Página de registro de usuario
│   │   │   ├── admin/page.tsx      # Panel de acceso administrativo
│   │   │   └── auth.module.css     # Estilos compartidos del grupo auth
│   │   ├── blog/                   # Sección del blog
│   │   │   ├── [slug]/page.tsx     # Vista dinámica de artículo individual
│   │   │   ├── archivo/page.tsx    # Página con todos los posts
│   │   │   ├── books/page.tsx      # Categoría: Reseñas de libros
│   │   │   ├── lifestyle/page.tsx  # Categoría: Estilo de vida
│   │   │   ├── reflections/page.tsx# Categoría: Reflexiones personales
│   │   │   └── blog.module.css     # Estilos compartidos del blog
│   │   ├── about/                  # Sección "Sobre Mí"
│   │   │   ├── page.tsx
│   │   │   └── about.module.css
│   │   ├── perfil/page.tsx         # Dashboard del perfil de usuario
│   │   ├── globals.css             # Variables CSS del Design System
│   │   ├── layout.tsx              # Root layout (fuentes, metadata global)
│   │   ├── page.tsx                # Página de inicio (Home)
│   │   └── page.module.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Barra de navegación principal
│   │   │   └── Header.module.css
│   │   └── ui/                     # Biblioteca de componentes base
│   │       ├── Button.tsx          # Botón (variantes: primary, secondary, outline)
│   │       ├── Button.module.css
│   │       ├── Input.tsx           # Campo de texto estilo "Paper"
│   │       ├── Input.module.css
│   │       ├── Card.tsx            # Tarjeta con textura sutil
│   │       └── Card.module.css
│   └── lib/
│       └── supabase.ts             # Inicialización del cliente de Supabase
├── public/                         # Assets estáticos (imágenes, SVGs)
├── .env.local                      # Variables de entorno (no se sube a Git)
├── next.config.ts                  # Configuración de Next.js
├── tsconfig.json                   # Configuración de TypeScript
└── package.json
```

---

## 🗺️ Rutas de la Aplicación

| Ruta | Tipo | Descripción |
|---|---|---|
| `/` | Estática | Home con artículo destacado y posts recientes |
| `/about` | Estática | Presentación personal del autor |
| `/blog/reflections` | Estática | Categoría: Reflexiones |
| `/blog/books` | Estática | Categoría: Libros |
| `/blog/lifestyle` | Estática | Categoría: Lifestyle |
| `/blog/archivo` | Estática | Archivo completo de publicaciones |
| `/blog/[slug]` | Dinámica | Artículo individual por su identificador |
| `/login` | Estática | Formulario de inicio de sesión |
| `/registro` | Estática | Formulario de creación de cuenta |
| `/admin` | Estática | Acceso al panel de administración |
| `/perfil` | Estática | Dashboard del usuario autenticado |

---

## 🚀 Desarrollo Local

### Pre-requisitos
- Node.js `v18+`
- Una cuenta en [Supabase](https://supabase.com/)

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/omercado05/CamiDante.git
cd CamiDante

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.local.example .env.local
# Edita .env.local con tus credenciales reales de Supabase
```

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_publica
```

> ⚠️ **Importante**: Nunca subas tu `.env.local` a Git. Ya está incluido en el `.gitignore`.

### Scripts disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo en http://localhost:3000
npm run build    # Compila el proyecto para producción
npm run start    # Inicia el servidor de producción (requiere build previo)
npm run lint     # Ejecuta el linter de ESLint
```

---

## 🎨 Sistema de Diseño

Las variables CSS del Design System se definen en `src/app/globals.css` y están disponibles globalmente en toda la aplicación.

### Paleta de Colores

| Token | Valor | Uso |
|---|---|---|
| `--primary` | `#8a452e` (Terracotta) | Color de énfasis principal, CTAs |
| `--secondary` | `#546253` (Sage Green) | Etiquetas de categoría, elementos secundarios |
| `--tertiary` | `#735c00` (Soft Gold) | Acentos decorativos, Admin |
| `--background` | `#fbf9f4` (Paper) | Fondo de la aplicación |
| `--on-surface` | `#1b1c19` | Texto principal |
| `--on-surface-variant` | `#54433e` | Texto secundario y descripciones |

### Tipografía

- **Títulos (`h1`–`h6`)**: `Noto Serif` — Peso 400–500, tracking negativo para elegancia
- **Cuerpo y UI**: `Work Sans` — Peso 400–600, tracking positivo para legibilidad

### Espaciado y Layout

```css
--container-max: 1140px;   /* Ancho máximo del contenido */
--gutter: 24px;             /* Padding horizontal general */
--section-padding: 80px;    /* Espaciado vertical entre secciones */
--stack-sm: 12px;
--stack-md: 24px;
--stack-lg: 48px;
```

---

## 🔐 Autenticación (Supabase)

El proyecto usa **Supabase Auth** para gestionar usuarios. Las páginas de autenticación están listas en la estructura, pero la lógica de conexión con Supabase se activará en la siguiente fase de desarrollo.

**Flujo planeado:**
1. Usuario se registra en `/registro` → Supabase crea la cuenta.
2. Inicio de sesión en `/login` → Se genera una sesión JWT.
3. Rutas protegidas verifican la sesión mediante middleware de Next.js.
4. El autor accede a `/admin` con privilegios especiales.

---

## 🌐 Despliegue en Vercel

El proyecto está optimizado para despliegue en **Vercel**. Para desplegarlo:

1. Conecta tu repositorio de GitHub en [vercel.com/new](https://vercel.com/new).
2. Vercel detectará automáticamente que es un proyecto Next.js.
3. Añade las variables de entorno (`NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`) en la configuración del proyecto en Vercel.
4. Haz clic en **Deploy**. Cada `git push` a `main` desplegará automáticamente.

---

## 📝 Historial de Commits

El proyecto está organizado en commits atómicos y descriptivos:

```
docs: Update README with comprehensive project documentation
style: Add CSS animations and responsive adjustments
feat: Implement authentication and profile pages
feat: Implement public pages (Home, About, Archive, Categories, Article)
feat: Create Header layout component
feat: Create reusable UI components (Button, Input, Card)
feat: Implement CamiDante Design System tokens and typography
feat: Configure Supabase client
chore: Initialize Next.js project and configuration
```

---

## 🤝 Contribuciones

Este es un proyecto personal, pero si encuentras algún bug o tienes una sugerencia, eres bienvenido a abrir un *Issue* en el repositorio.

---

*Diseñado y desarrollado con dedicación. — CamiDante*
