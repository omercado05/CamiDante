# CamiDante Blog

CamiDante es una plataforma de blog personal diseñada bajo una estética "New Editorial". Pensada para ser un espacio de reflexión, reseñas de libros y notas de estilo de vida, la plataforma prioriza el minimalismo, la legibilidad y la elegancia clásica por encima de las tendencias modernas saturadas.

## 🌟 Características Principales

- **Diseño "New Editorial"**: Interfaz limpia, basada en papel (Paper-First), que simula la experiencia de lectura de una revista o libro tradicional.
- **Vanilla CSS Architecture**: Estilizado enteramente con CSS Modules y Variables CSS Nativas. **Cero dependencias de utilidades CSS** (como Tailwind), garantizando control absoluto sobre el diseño.
- **Tipografía Curada**: Uso de *Noto Serif* para títulos clásicos y *Work Sans* para cuerpos de texto altamente legibles.
- **Autenticación Integrada**: Flujo de usuarios (Registro, Login, Perfil) y panel de administración gestionados por Supabase Auth.
- **Performance de Próxima Generación**: Construido sobre el App Router de Next.js, aprovechando *Server Components* y *Static Site Generation (SSG)* para tiempos de carga ultrarrápidos.

## 🛠 Stack Tecnológico

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: Vanilla CSS + CSS Modules
- **Base de Datos & Auth**: [Supabase](https://supabase.com/)
- **Despliegue**: [Vercel](https://vercel.com/)

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura modular y escalable:

```text
CamiDante/
├── src/
│   ├── app/                 # Rutas de Next.js (App Router)
│   │   ├── (auth)/          # Rutas de autenticación (Login, Registro, Admin)
│   │   ├── blog/            # Archivo y categorías del blog
│   │   │   └── [slug]/      # Vista de artículo individual dinámico
│   │   ├── about/           # Página estática "Sobre Mí"
│   │   ├── globals.css      # Tokens del Design System y estilos globales
│   │   └── layout.tsx       # Root layout con inyección de tipografías
│   ├── components/          # Componentes de React
│   │   ├── layout/          # Componentes estructurales (Header, Footer)
│   │   └── ui/              # Componentes base reutilizables (Button, Input, Card)
│   └── lib/                 # Utilidades y configuración
│       └── supabase.ts      # Inicialización del cliente de Supabase
├── public/                  # Assets estáticos
└── package.json
```

## 🚀 Empezando (Desarrollo Local)

Sigue estos pasos para correr el proyecto en tu entorno local:

### 1. Clonar el repositorio
```bash
git clone <tu-repositorio-url>
cd CamiDante
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crea un archivo `.env.local` en la raíz del proyecto y añade tus credenciales de Supabase:
```env
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

### 4. Ejecutar el servidor de desarrollo
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 🎨 Sistema de Diseño (Design System)

La paleta de colores principal está inyectada en `:root` dentro de `globals.css`:
- **Terracotta** (`#8a452e`): Color primario para acciones principales y enlaces.
- **Sage Green** (`#546253`): Color secundario para detalles y metadatos.
- **Soft Gold** (`#735c00`): Color terciario para acentos sutiles.
- **Paper Background** (`#fbf9f4`): Fondo principal que simula papel editorial.

---
*Diseñado y desarrollado con dedicación para CamiDante.*
