# Sitio KuroDev

Portafolio y sitio oficial de KuroDev: proyectos, servicios y forma de trabajar.

- Diseño: `docs/specs/2026-11-06-sitio-kurodev-design.md`
- Stack: Vite + React + TypeScript + React Router. Cada ruta se prerenderiza a HTML (SEO y vista previa al compartir).

## Cómo actualizar el contenido

Todo el texto que cambia está en `src/data/`. No hace falta tocar los componentes.

| Quiero cambiar… | Archivo |
|---|---|
| WhatsApp, correo, Instagram, mensaje prellenado | `src/data/contacto.ts` |
| Paquetes y precios | `src/data/paquetes.ts` (no cambiar montos sin aprobación) |
| Planes mensuales y opción sin pago inicial | `src/data/planes.ts` |
| Pasos de "Cómo trabajo" y diferenciadores | `src/data/proceso.ts` |
| URL del sitio (al conectar kurodev.cl) | `src/data/sitio.ts` |

### Agregar un proyecto

1. Deja las capturas en `public/capturas/` en WebP (escritorio 1440×900, celular 390×844).
2. Agrega un objeto a la lista de `src/data/proyectos.ts` con un `slug` nuevo. Usa `estado: 'demo'` si no es un cliente que pagó.
3. `npm run build`: genera `/proyectos/<slug>` y lo suma al `sitemap.xml`.

Solo datos reales: nada de métricas, testimonios ni resultados inventados.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # tests (Vitest)
npm run build    # dist/ con HTML prerenderizado, sitemap.xml y robots.txt
npm run preview  # sirve dist/ en local
```

## Deploy

Proyecto de Vercel con el preset Vite (`vercel.json` ya trae la configuración).

```bash
vercel deploy          # preview
vercel deploy --prod   # producción (sitio oficial: confirmar antes)
```

### Conectar kurodev.cl

1. Registra el dominio en nic.cl.
2. `vercel domains add kurodev.cl` (y `www.kurodev.cl`) en este proyecto.
3. En NIC Chile, apunta los DNS a `ns1.vercel-dns.com` / `ns2.vercel-dns.com`.
4. Cambia `url` en `src/data/sitio.ts` a `https://kurodev.cl` y vuelve a desplegar.
