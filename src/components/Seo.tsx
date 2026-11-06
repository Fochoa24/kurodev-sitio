import { createContext, useContext, useEffect } from 'react';
import { sitio } from '../data/sitio';

export interface DatosSeo {
  titulo: string;
  descripcion: string;
  ruta: string;
  noindex?: boolean;
  jsonLd?: object;
}

/** En el servidor, Seo deja aquí sus datos para que el prerender arme el <head>. */
export const SeoContext = createContext<{ datos?: DatosSeo } | null>(null);

function escapar(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function headHtml(d: DatosSeo): string {
  const url = sitio.url + d.ruta;
  const img = sitio.url + sitio.ogImage;
  const t = escapar(d.titulo);
  const desc = escapar(d.descripcion);
  return [
    `<title>${t}</title>`,
    `<meta name="description" content="${desc}" />`,
    d.noindex ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="es_CL" />`,
    `<meta property="og:site_name" content="${sitio.nombre}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${desc}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    d.jsonLd
      ? `<script type="application/ld+json">${JSON.stringify(d.jsonLd).replace(/</g, '\\u003c')}</script>`
      : '',
  ]
    .filter(Boolean)
    .join('\n    ');
}

export function Seo(props: DatosSeo) {
  const ctx = useContext(SeoContext);
  if (ctx) ctx.datos = props;

  useEffect(() => {
    document.title = props.titulo;
    document.querySelector('meta[name="description"]')?.setAttribute('content', props.descripcion);
  }, [props.titulo, props.descripcion]);

  return null;
}
