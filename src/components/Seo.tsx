import { createContext, useContext, useEffect } from 'react';
import { sitio } from '../data/sitio';
import { enRuta, useIdioma, type Idioma } from '../lib/idioma';

export interface DatosSeo {
  titulo: string;
  descripcion: string;
  /** Ruta en español (sin /en); el idioma la completa. */
  ruta: string;
  idioma?: Idioma;
  noindex?: boolean;
  jsonLd?: object;
}

/** En el servidor, Seo deja aquí sus datos para que el prerender arme el <head>. */
export const SeoContext = createContext<{ datos?: DatosSeo } | null>(null);

function escapar(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function headHtml(d: DatosSeo): string {
  const idioma = d.idioma ?? 'es';
  const url = sitio.url + enRuta(idioma, d.ruta);
  const es = sitio.url + d.ruta;
  const en = sitio.url + enRuta('en', d.ruta);
  const img = sitio.url + sitio.ogImage;
  const t = escapar(d.titulo);
  const desc = escapar(d.descripcion);
  return [
    `<title>${t}</title>`,
    `<meta name="description" content="${desc}" />`,
    d.noindex ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${url}" />`,
    d.noindex ? '' : `<link rel="alternate" hreflang="es" href="${es}" />`,
    d.noindex ? '' : `<link rel="alternate" hreflang="en" href="${en}" />`,
    d.noindex ? '' : `<link rel="alternate" hreflang="x-default" href="${es}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="${idioma === 'en' ? 'en_US' : 'es_CL'}" />`,
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
  const { idioma } = useIdioma();
  if (ctx) ctx.datos = { idioma, ...props };

  useEffect(() => {
    document.title = props.titulo;
    document.documentElement.lang = idioma === 'en' ? 'en' : 'es-CL';
    document.querySelector('meta[name="description"]')?.setAttribute('content', props.descripcion);
  }, [props.titulo, props.descripcion, idioma]);

  return null;
}
