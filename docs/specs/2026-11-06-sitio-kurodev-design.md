# Sitio KuroDev — Diseño

> Fecha: 2026-11-06 · Estado: en revisión · Autor: Felipe Ochoa (con Claude Code)

## 1. Objetivo

Sitio oficial de KuroDev que funcione como portafolio y canal de venta para **dueños de pequeños negocios**. Debe mostrar:

1. **Proyectos** (demos y, más adelante, clientes reales).
2. **Servicios** (paquetes con precio de referencia).
3. **Cómo trabajo** (proceso y diferenciadores).

**Éxito:** un dueño de negocio que llega desde Instagram en el celular entiende en menos de un minuto qué ofrece KuroDev, ve un ejemplo real y escribe por WhatsApp.

Cumple el pendiente "Sitio KuroDev propio" de la Fase 0 (`estrategia/plan-crecimiento.md`).

## 2. Restricciones

- Marca según `marca/README.md`: Kuro `#0B0B0B`, Lima `#B8F23A`, Blanco cálido `#F5F5F0`, Grafito `#2A2A2A`; Space Grotesk Bold (títulos), Inter (texto), JetBrains Mono (números y etiquetas); logo "punto online" (`k.` / `kuro.dev`).
- **No mencionar Maipú ni ninguna comuna** en textos, metadatos ni datos estructurados.
- Español de Chile, tono cercano pero profesional.
- **Sin testimonios, resultados ni clientes inventados.** Las demos se rotulan como "Demo".
- Mobile-first, Lighthouse móvil ≥ 90 en las cuatro categorías, accesible (contraste, alt, teclado).
- Precios: solo los aprobados en `estrategia/precios.md`; no se modifican montos sin aprobación de Felipe.

## 3. Decisiones tomadas

| Tema | Decisión |
|---|---|
| Público | Dueños de negocios (no reclutadores) |
| Proyectos | Demos rotuladas; al lanzar solo Café Cahve. Demos nuevas = proyectos aparte en `clientes/` |
| Precios | "Desde $X" (precio normal) + precio fundador destacado para los 3 primeros clientes |
| Estructura | One-page + página de detalle por proyecto (`/proyectos/:slug`) |
| Stack | Vite + React + TypeScript + React Router; deploy en Vercel |
| Contenido | En archivos de datos `src/data/*.ts`, separado de los componentes |
| Dominio | Subdominio de Vercel por ahora; dominio propio después |

## 4. Datos de contacto

| Canal | Valor |
|---|---|
| WhatsApp | `56942179535` (+56 9 4217 9535) |
| Correo | f.alonso8ajohn@gmail.com |
| Instagram | @kuro.dev_ — https://www.instagram.com/kuro.dev_/ |

Mensaje prellenado por defecto: "Hola, vi tu web y quiero una página para mi negocio". En los botones de paquete: "Hola, me interesa el paquete {nombre}".

## 5. Página principal `/`

En orden:

1. **Header**: logo `kuro.dev`, enlaces ancla (Proyectos, Servicios, Cómo trabajo, Contacto), botón "WhatsApp". En móvil, menú colapsable.
2. **Hero**: titular con palabra destacada en lima (propuesta: "Tu negocio, *online* y funcionando"), bajada de una línea sobre presencia digital para negocios que hoy dependen de Instagram o WhatsApp, CTA primario "Escríbeme por WhatsApp" y secundario "Ver proyectos".
3. **Proyectos**: grilla de `TarjetaProyecto` desde `proyectos.ts`. Cada tarjeta: captura, nombre, rubro, etiqueta `Demo` o `Cliente`, paquete usado, enlaces "Ver caso" (`/proyectos/:slug`) y "Ver sitio" (URL externa).
4. **Servicios**: franja "Precio fundador para los 3 primeros clientes". Tarjetas de Vitrina, Vitrina + Agenda, Carta Digital y Página de ventas, cada una con para quién es, qué incluye, "desde $X", precio fundador (si existe), plazo referencial y botón a WhatsApp con el paquete. Tarjeta "A medida → cotiza". Debajo: planes mensuales (Básico / Pro), "Todo paquete incluye 3 meses del plan Básico" y la opción sin pago inicial.
5. **Cómo trabajo**: pasos desde `proceso.ts`:
   1. Conversamos (WhatsApp o en persona) sobre tu negocio.
   2. Te muestro un borrador de *tu* sitio antes de cobrar.
   3. Con el 50% de anticipo, lo construyo (Vitrina 5–7 días hábiles · Carta Digital 10–15) con 2 rondas de cambios.
   4. Lo publico con el 50% restante.
   5. Lo mantengo: plan mensual con soporte por WhatsApp.

   Diferenciadores: contenido que tú mismo editas, pensado para celular, trato directo con quien lo construye.
6. **Sobre mí**: Felipe Ochoa, estudiante de último año de Ingeniería en Computación e Informática (UNAB); "Kuro" viene de su alias como jugador online. Stack breve (React, TypeScript, Firebase, Vercel). Sin comuna.
7. **Contacto**: WhatsApp (principal), Instagram, correo.
8. **Footer**: logo, enlaces, © año, Instagram.
9. **Botón flotante de WhatsApp** en todas las páginas.

## 6. Página de caso `/proyectos/:slug`

- Encabezado: nombre, rubro, etiqueta Demo/Cliente, paquete.
- **El problema**: situación de partida (Café Cahve: solo Instagram y tienda en OlaClick, sin carta propia).
- **Lo que construí**: lista de funcionalidades (Café Cahve: sitio completo, carta de mesa por QR con `?mesa=N`, pedidos con carrito que llegan por WhatsApp, aviso abierto/cerrado según horario, tienda OlaClick integrada).
- Capturas (WebP, con alt).
- CTA: "Ver demo" (externo) y "Quiero algo así" (WhatsApp).
- Si el slug no existe: `NoEncontrado` con enlace al inicio.

Solo hechos verificables del proyecto; nunca métricas ni citas inventadas.

## 7. Arquitectura

```
sitio/
  public/            logo SVG (copiado de marca/logo), favicon, og-image.png, capturas/*.webp, robots.txt
  scripts/
    prerender.mjs    genera HTML estático por ruta + sitemap.xml tras el build
  src/
    data/
      contacto.ts    whatsapp, correo, instagram, mensajeDefault
      paquetes.ts    Paquete[]: id, nombre, paraQuien, incluye[], precio, precioFundador?, desde?, plazo?
      planes.ts      planes mensuales + opción sin pago inicial
      proyectos.ts   Proyecto[]: slug, nombre, rubro, estado ('demo'|'cliente'), paquete, url, resumen, problema, solucion[], capturas[{src, alt}]
      proceso.ts     Paso[]: titulo, detalle
    components/      Header, Hero, Proyectos, TarjetaProyecto, Servicios, TarjetaPaquete, Proceso, SobreMi, Contacto, Footer, BotonWhatsApp, Seo
    pages/           Inicio.tsx, Caso.tsx, NoEncontrado.tsx
    lib/
      whatsapp.ts    linkWhatsApp(mensaje?) → https://wa.me/56942179535?text=...
      precio.ts      formatearPrecio(n) con Intl.NumberFormat('es-CL', CLP, sin decimales)
    styles.css       tokens de marca como variables CSS
    App.tsx, main.tsx
  vercel.json        rewrites para rutas SPA no prerenderizadas
  README.md          cómo agregar un proyecto, cambiar precios y desplegar
```

**Unidades:**
- `data/*` solo exporta datos tipados; ningún componente contiene textos de precio o contacto en duro.
- `lib/whatsapp.ts` y `lib/precio.ts` son funciones puras (testeables).
- `Seo` fija `<title>`, descripción, Open Graph y JSON-LD por página.

## 8. SEO y rendimiento

- Título y descripción por página; Open Graph con `og-image.png` de marca (1200×630).
- JSON-LD `ProfessionalService` (nombre, url, sameAs Instagram, contacto), **sin dirección ni área geográfica**.
- Prerender a HTML estático de `/` y de cada `/proyectos/:slug` (listado desde `proyectos.ts`), para indexación y vista previa al compartir.
- `sitemap.xml` generado; `robots.txt` permite todo.
- Imágenes WebP con `loading="lazy"` (salvo la del hero), fuentes de Google Fonts con `preconnect` y `display=swap`.
- Contraste: lima sobre negro o negro sobre lima; nunca blanco sobre lima.

## 9. Verificación

- Tests unitarios (Vitest) para `linkWhatsApp` (codificación del mensaje) y `formatearPrecio` (formato `$149.990`).
- `npm run build` sin errores ni warnings de TypeScript.
- Lighthouse móvil ≥ 90 en Rendimiento, Accesibilidad, Buenas prácticas y SEO.
- Revisión visual a 375 px y escritorio; navegación completa por teclado.
- Revisión de textos: ninguna mención de Maipú/comuna; ningún dato inventado.

## 10. Deploy

- Proyecto Vercel `kurodev` (o el nombre disponible).
- Primero un **preview** para revisión; producción **solo con confirmación de Felipe** (es sitio oficial, no demo).

## 11. Fuera de alcance

- Demos nuevas (tatuadora, peluquería): proyectos aparte en `clientes/`, luego se agregan a `proyectos.ts`.
- Dominio propio, formulario con base de datos, blog, sección de testimonios (hasta tener testimonios reales), panel de administración.
