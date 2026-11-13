export interface Plan {
  nombre: string;
  precio: number;
  incluye: string[];
}

export const planes: Plan[] = [
  {
    nombre: 'Básico',
    precio: 14990,
    incluye: ['Hosting, SSL y dominio', '1 cambio de contenido al mes', 'Soporte por WhatsApp'],
  },
  {
    nombre: 'Pro',
    precio: 29990,
    incluye: [
      'Todo lo de Básico',
      'Cambios ilimitados (razonables)',
      'Actualización de Google Business Profile',
      'Reporte mensual de visitas',
    ],
  },
];

/** Opción sin pago inicial, con permanencia mínima de 12 meses. */
export const sinPagoInicial = [
  { paquete: 'Vitrina', mensual: 24990 },
  { paquete: 'Carta Digital', mensual: 39990 },
];

// Inglés, en el mismo orden. Los precios se toman de arriba.
export const planesEn: Partial<Plan>[] = [
  { nombre: 'Basic', incluye: ['Hosting, SSL and domain', '1 content change per month', 'WhatsApp support'] },
  {
    nombre: 'Pro',
    incluye: [
      'Everything in Basic',
      'Unlimited changes (within reason)',
      'Google Business Profile updates',
      'Monthly visits report',
    ],
  },
];

export const sinPagoInicialEn = [{ paquete: 'Showcase' }, { paquete: 'Digital Menu' }];
