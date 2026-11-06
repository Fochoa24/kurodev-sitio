// Proyectos del portafolio. Para agregar uno, suma un objeto a la lista
// y deja sus capturas en public/capturas/. Solo datos reales.

export interface Captura {
  src: string;
  alt: string;
}

export interface Proyecto {
  slug: string;
  nombre: string;
  rubro: string;
  estado: 'demo' | 'cliente';
  paquete: string;
  url: string;
  resumen: string;
  problema: string;
  solucion: string[];
  portada: Captura;
  capturas: Captura[];
  /** Capturas de página completa que se desplazan solas en la vitrina del inicio. */
  vitrina?: { escritorio: string; movil: string };
}

export const proyectos: Proyecto[] = [
  {
    slug: 'cafe-cahve',
    vitrina: {
      escritorio: '/vitrina/cafe-cahve-largo-escritorio.webp',
      movil: '/vitrina/cafe-cahve-largo-movil.webp',
    },
    nombre: 'Café Cahve',
    rubro: 'Cafetería de especialidad',
    estado: 'demo',
    paquete: 'Carta Digital',
    url: 'https://demo-cafe-cahve-kurodev.vercel.app',
    resumen: 'Sitio con carta digital, QR para las mesas y pedidos que llegan por WhatsApp.',
    problema:
      'El café se movía solo por Instagram y su tienda en OlaClick. No tenía una página propia donde mostrar el local, la carta completa y el horario, ni una carta para escanear en la mesa.',
    solucion: [
      'Sitio completo: inicio, nosotros, carta, el espacio y cómo llegar.',
      'Carta de mesa que abre el QR, con el número de mesa incluido.',
      'Carrito de pedidos que arma el mensaje y lo envía por WhatsApp.',
      'Aviso de “abierto” o “cerrado” según el horario real del local.',
      'Su tienda de OlaClick integrada para quien prefiere pagar online.',
    ],
    portada: {
      src: '/capturas/cafe-cahve-escritorio.webp',
      alt: 'Página de inicio del sitio demo de Café Cahve',
    },
    capturas: [
      { src: '/capturas/cafe-cahve-escritorio.webp', alt: 'Inicio del sitio de Café Cahve en escritorio' },
      { src: '/capturas/cafe-cahve-movil.webp', alt: 'Inicio del sitio de Café Cahve en celular' },
      { src: '/capturas/cafe-cahve-carta.webp', alt: 'Carta de mesa de Café Cahve abierta desde el QR' },
    ],
  },
  {
    slug: 'piu-pizza',
    vitrina: {
      escritorio: '/vitrina/piu-pizza-largo-escritorio.webp',
      movil: '/vitrina/piu-pizza-largo-movil.webp',
    },
    nombre: 'Più Pizza & Dolce',
    rubro: 'Pizzería y pastelería',
    estado: 'demo',
    paquete: 'Carta Digital',
    url: 'https://demo-piu-pizza-kurodev.vercel.app',
    resumen: 'Sitio con dos mundos, pizza y pastelería, y pedidos directos por WhatsApp sin apps de delivery.',
    problema:
      'El local vende sobre todo por Rappi y Uber Eats, que se quedan con una comisión de cada pedido. Además tiene dos oficios bajo un mismo techo, la pizza y la pastelería, y quienes lo conocían por su nombre anterior no siempre lo encuentran.',
    solucion: [
      'Diseño que cambia de piel: noche de horno para la pizza y día de vitrina para lo dulce.',
      'Carta con un dibujo de cada pizza armado a partir de sus ingredientes reales, con filtros.',
      'Carrito que arma el pedido y lo envía directo por WhatsApp, sin comisión de apps.',
      'Venta cruzada: al agregar una pizza, el sitio sugiere acompañamientos y postres.',
      'Su nombre anterior incluido en el texto y en el SEO, para no perder a quien lo busca así.',
    ],
    portada: {
      src: '/capturas/piu-pizza-carta.webp',
      alt: 'Carta de pizzas del sitio demo de Più Pizza & Dolce',
    },
    capturas: [
      { src: '/capturas/piu-pizza-carta.webp', alt: 'Carta de pizzas de Più en escritorio, con filtros por tipo' },
      { src: '/capturas/piu-pizza-dolce.webp', alt: 'Sección Dolce de Più, con la pastelería de la casa' },
      { src: '/capturas/piu-pizza-movil.webp', alt: 'Carta de pizzas de Più en celular' },
    ],
  },
];
