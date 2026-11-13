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

export const procesoEn: Paso[] = [
  {
    titulo: 'We talk',
    detalle: 'On WhatsApp or in person. You tell me about your business and what you need your site to do.',
  },
  { titulo: 'I show you a draft', detalle: 'Before you pay anything, you see a draft of your own site.' },
  {
    titulo: 'I build it',
    detalle: 'I start with a 50% deposit. Includes 2 rounds of changes to get it just how you like it.',
  },
  {
    titulo: 'I launch it',
    detalle: 'With the remaining 50%, your site goes live on your domain and connected to Google.',
  },
  {
    titulo: 'I maintain it',
    detalle: 'The first 3 months of maintenance are included. Need a change? Just message me.',
  },
];

export const diferenciadoresEn = [
  { titulo: 'You update it', detalle: 'Menu, prices and hours you change without depending on anyone.' },
  {
    titulo: 'Designed for phones',
    detalle: 'Your customers come from Instagram. It looks good and loads well on a phone.',
  },
  { titulo: 'Direct contact', detalle: 'You talk to the person who builds your site, not a call center.' },
];
