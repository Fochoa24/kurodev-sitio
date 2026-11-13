import type { Idioma } from './idioma';

const formato = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
});

/** 149990 → "$149.990"; en inglés "$149,990 CLP" para que no se lea como dólares. */
export function formatearPrecio(n: number, idioma: Idioma = 'es'): string {
  if (idioma === 'en') return `$${n.toLocaleString('en-US')} CLP`;
  return formato.format(n).replace(/\s/g, '');
}
