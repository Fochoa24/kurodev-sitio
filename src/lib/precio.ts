const formato = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
});

/** 149990 → "$149.990" */
export function formatearPrecio(n: number): string {
  return formato.format(n).replace(/\s/g, '');
}
