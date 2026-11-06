# Sitio KuroDev Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Sitio portafolio de KuroDev (one-page + casos) listo para deploy en Vercel.

**Architecture:** Vite + React + TS SPA con React Router. Todo el contenido vive en `src/data/*.ts`; los componentes solo lo renderizan. Tras `vite build`, `scripts/prerender.mjs` renderiza cada ruta a HTML estático (`renderToString`) y genera `sitemap.xml`.

**Tech Stack:** Vite 5, React 18, TypeScript 5, react-router-dom 6, Vitest 2.

**Spec:** `docs/specs/2026-11-06-sitio-kurodev-design.md`

## Global Constraints

- Colores: Kuro `#0B0B0B`, Lima `#B8F23A`, Blanco cálido `#F5F5F0`, Grafito `#2A2A2A`. Fuentes: Space Grotesk 700, Inter, JetBrains Mono.
- Nunca texto blanco sobre lima; lima sobre negro o negro sobre lima.
- Ninguna mención de Maipú ni comuna (incluido JSON-LD y la descripción de Café Cahve).
- Sin testimonios, métricas ni clientes inventados; Café Cahve con `estado: 'demo'`.
- Precios exactos: Vitrina 149990 / fundador 99990 · Vitrina + Agenda 249990 / 169990 · Carta Digital 299990 / 199990 · Página de ventas desde 199990 · Básico 14990/mes · Pro 29990/mes · Sin pago inicial: Vitrina 24990/mes, Carta Digital 39990/mes (12 meses).
- WhatsApp `56942179535`; correo `f.alonso8ajohn@gmail.com`; Instagram `https://www.instagram.com/kuro.dev_/`.
- Español de Chile; mobile-first.

## Review Focus

1. Mensajes de WhatsApp con tildes/ñ/espacios deben llegar intactos → test de codificación en Task 1.
2. Entrar directo a `/proyectos/cafe-cahve` (recarga o link compartido) debe servir el HTML prerenderizado, no un 404 de Vercel → verificación en Task 4.
3. `/proyectos/no-existe` debe mostrar NoEncontrado, no una pantalla en blanco → test en Task 3.
4. Paquete sin `precioFundador` (Página de ventas, A medida) no debe mostrar "$NaN" ni "undefined" → test en Task 2.
5. A 375 px ningún bloque desborda horizontalmente → revisión visual en Task 4.

---

### Task 1: Scaffold + utilidades

**Files:**
- Create: `package.json`, `tsconfig.json`, `vite.config.ts`, `index.html`, `src/main.tsx`, `src/App.tsx` (placeholder)
- Create: `src/lib/whatsapp.ts`, `src/lib/precio.ts`, `src/data/contacto.ts`
- Test: `src/lib/lib.test.ts`

**Interfaces:**
- Produces: `contacto: { whatsapp: string; correo: string; instagram: string; instagramHandle: string; mensajeDefault: string }`
- Produces: `linkWhatsApp(mensaje?: string): string`, `formatearPrecio(n: number): string`

- [ ] Step 1: scaffold Vite React TS manual (deps: react, react-dom, react-router-dom; dev: vite, @vitejs/plugin-react, typescript, vitest, @types/react, @types/react-dom). `npm install`.
- [ ] Step 2: tests:
  - `linkWhatsApp()` → `https://wa.me/56942179535?text=` + `encodeURIComponent(contacto.mensajeDefault)`
  - `linkWhatsApp('Hola, me interesa el paquete Vitrina + Agenda ñ')` contiene `%2B` y `%C3%B1`
  - `formatearPrecio(149990)` → `'$149.990'`
- [ ] Step 3: `npx vitest run` → FAIL.
- [ ] Step 4: implementar (`Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:0})`).
- [ ] Step 5: `npx vitest run` → PASS. Commit `feat: scaffold y utilidades`.

### Task 2: Datos, estilos y secciones de inicio

**Files:**
- Create: `src/data/paquetes.ts`, `planes.ts`, `proyectos.ts`, `proceso.ts`, `src/styles.css`
- Create: `src/components/{Header,Hero,Proyectos,TarjetaProyecto,Servicios,TarjetaPaquete,Proceso,SobreMi,Contacto,Footer,BotonWhatsApp,Logo}.tsx`, `src/pages/Inicio.tsx`
- Copy: `../marca/logo/*.svg` → `public/logo/`
- Test: `src/data/data.test.ts`

**Interfaces:**
- Produces: `Paquete { id; nombre; paraQuien; incluye: string[]; precio: number | null; precioFundador?: number; desde?: boolean; plazo?: string }` (`precio: null` = "Cotización")
- Produces: `Proyecto { slug; nombre; rubro; estado: 'demo' | 'cliente'; paquete; url; resumen; problema; solucion: string[]; capturas: {src: string; alt: string}[] }`
- Produces: `textoPrecio(p: Paquete): string` en `paquetes.ts` (`'Desde $149.990'`, `'Cotización'`)

- [ ] Step 1: tests: `textoPrecio` de Vitrina = `'Desde $149.990'`; de A medida = `'Cotización'`; ningún texto en `proyectos`/`paquetes` contiene `/maip[uú]/i`; slugs únicos.
- [ ] Step 2: FAIL → implementar datos (valores de Global Constraints; Café Cahve según spec §6, url `https://demo-cafe-cahve-kurodev.vercel.app`) → PASS.
- [ ] Step 3: componentes con tokens en `styles.css`; `*palabra*` no se usa: palabra destacada vía `<em className="lima">`.
- [ ] Step 4: `npm run build` OK. Commit `feat: página de inicio`.

### Task 3: Router, caso, 404 y SEO

**Files:**
- Create: `src/pages/Caso.tsx`, `src/pages/NoEncontrado.tsx`, `src/components/Seo.tsx`
- Modify: `src/App.tsx` (rutas `/`, `/proyectos/:slug`, `*`), `src/main.tsx` (`hydrateRoot` si hay HTML, si no `createRoot`)
- Create: `src/entry-server.tsx` exporta `render(url: string): { html: string; head: string }` usando `StaticRouter`
- Test: `src/pages/caso.test.tsx`

- [ ] Step 1: test: `render('/proyectos/no-existe').html` contiene `'No encontramos'`; `render('/proyectos/cafe-cahve').html` contiene `'Café Cahve'` y `'Demo'`.
- [ ] Step 2: FAIL → implementar. `Seo` recolecta title/description/og/JSON-LD (`ProfessionalService`, sin dirección) en un contexto para que `render` lo devuelva como `head` → PASS.
- [ ] Step 3: Commit `feat: páginas de caso y SEO`.

### Task 4: Prerender, assets, README y deploy preview

**Files:**
- Create: `scripts/prerender.mjs`, `public/robots.txt`, `public/og-image.png`, `public/capturas/cafe-cahve-*.webp`, `vercel.json`, `README.md`
- Modify: `package.json` scripts: `build = vite build && vite build --ssr src/entry-server.tsx --outDir dist-ssr && node scripts/prerender.mjs`

- [ ] Step 1: prerender escribe `dist/index.html` y `dist/proyectos/<slug>/index.html` para cada slug, más `dist/sitemap.xml`.
- [ ] Step 2: capturas de la demo con Chrome headless (móvil 390×844 y escritorio 1440×900) → WebP; og-image 1200×630 con logo.
- [ ] Step 3: `vercel.json`: `cleanUrls`, rewrite de `/proyectos/:slug` sin HTML a `/index.html`.
- [ ] Step 4: `npm test && npm run build` OK; `npx vite preview` y revisar a 375 px y escritorio; Lighthouse móvil ≥ 90.
- [ ] Step 5: `vercel deploy` (preview) y abrir `/proyectos/cafe-cahve` directo → 200. Producción solo con confirmación.
- [ ] Step 6: Commit `feat: prerender, assets y deploy`.
