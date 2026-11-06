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
}

export const proyectos: Proyecto[] = [
  {
    slug: 'cafe-cahve',
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
];
