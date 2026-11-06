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
