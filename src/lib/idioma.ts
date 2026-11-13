import { useLocation } from 'react-router-dom';
import { textos } from '../data/textos';

export type Idioma = 'es' | 'en';

/** El idioma sale solo de la URL (/en/...), así el HTML prerenderizado y la hidratación coinciden. */
export function idiomaDe(pathname: string): Idioma {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es';
}

/** Ruta en español → la misma ruta en el idioma pedido. "/" → "/en", "/#x" → "/en#x". */
export function enRuta(idioma: Idioma, ruta: string): string {
  if (idioma === 'es') return ruta;
  if (ruta === '/') return '/en';
  return ruta.startsWith('/#') ? '/en' + ruta.slice(1) : '/en' + ruta;
}

/** La ruta actual en el otro idioma (para el botón ES/EN). */
export function otraRuta(pathname: string): string {
  return idiomaDe(pathname) === 'en' ? pathname.slice(3) || '/' : enRuta('en', pathname);
}

/** Mezcla los textos en inglés (mismo orden) sobre los datos en español: precios y enlaces quedan en un solo lugar. */
export function traducir<T>(base: T[], idioma: Idioma, en: Partial<T>[]): T[] {
  return idioma === 'es' ? base : base.map((x, i) => ({ ...x, ...en[i] }));
}

export function useIdioma() {
  const idioma = idiomaDe(useLocation().pathname);
  return { idioma, t: textos[idioma], r: (ruta: string) => enRuta(idioma, ruta) };
}

export const CLAVE_IDIOMA = 'kurodev-idioma';
