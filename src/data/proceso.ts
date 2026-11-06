export interface Paso {
  titulo: string;
  detalle: string;
}

export const proceso: Paso[] = [
  {
    titulo: 'Conversamos',
    detalle: 'Por WhatsApp o en persona. Me cuentas de tu negocio y qué necesitas que haga tu página.',
  },
  {
    titulo: 'Te muestro un borrador',
    detalle: 'Antes de cobrarte, ves un borrador de tu propio sitio.',
  },
  {
    titulo: 'Lo construyo',
    detalle: 'Con el 50% de anticipo empiezo. Incluye 2 rondas de cambios para dejarlo a tu gusto.',
  },
  {
    titulo: 'Lo publico',
    detalle: 'Con el 50% restante, tu sitio queda online en tu dominio y conectado a Google.',
  },
  {
    titulo: 'Lo mantengo',
    detalle: 'Los 3 primeros meses de mantención van incluidos. Cualquier cambio, me escribes.',
  },
];

export const diferenciadores = [
  { titulo: 'Tú lo actualizas', detalle: 'Carta, precios y horarios que cambias sin depender de nadie.' },
  { titulo: 'Pensado para celular', detalle: 'Tus clientes llegan desde Instagram. Se ve y carga bien en el teléfono.' },
  { titulo: 'Trato directo', detalle: 'Hablas con quien construye tu sitio, no con un call center.' },
];
