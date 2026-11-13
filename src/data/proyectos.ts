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
  {
    slug: 'clemont',
    vitrina: {
      escritorio: '/vitrina/clemont-largo-escritorio.webp',
      movil: '/vitrina/clemont-largo-movil.webp',
    },
    nombre: 'Cafetería Clemont',
    rubro: 'Cafetería',
    estado: 'demo',
    paquete: 'Carta Digital',
    url: 'https://demo-clemont-kurodev.vercel.app',
    resumen: 'Su carta impresa llevada a la web, con pedidos por WhatsApp y café en grano molido para tu cafetera.',
    problema:
      'Una cafetería recién abierta y sin página web. Su carta existía solo en papel, y la venta de café en grano molido al momento quedaba escondida al final de la hoja.',
    solucion: [
      'Diseño sacado de su propia carta: turquesa sobre papel crema, toldo a rayas y dibujos a tinta.',
      'La taza de la portada se va vaciando a medida que bajas y crece al elegir tamaño Grande.',
      'Selector Normal / Grande que cambia todos los precios de la carta.',
      'Eliges tu cafetera y la bolsa de grano de 250 g se suma al pedido con la molienda indicada.',
      'Pedido armado en el sitio que se envía directo por WhatsApp.',
    ],
    portada: {
      src: '/capturas/clemont-inicio.webp',
      alt: 'Portada del sitio demo de Cafetería Clemont',
    },
    capturas: [
      { src: '/capturas/clemont-inicio.webp', alt: 'Portada de Clemont en escritorio, con la taza dibujada' },
      { src: '/capturas/clemont-carta.webp', alt: 'Carta de Clemont por categorías, con precios Normal y Grande' },
      { src: '/capturas/clemont-movil.webp', alt: 'Portada de Clemont en celular' },
    ],
  },
];

// Inglés, en el mismo orden que `proyectos`. Solo hechos que ya están arriba.
export const proyectosEn: Partial<Proyecto>[] = [
  {
    rubro: 'Specialty coffee shop',
    paquete: 'Digital Menu',
    resumen: 'Website with a digital menu, QR codes for the tables and orders that arrive via WhatsApp.',
    problema:
      'The café was only on Instagram and its OlaClick store. It had no site of its own to show the place, the full menu and its hours, and no menu to scan at the table.',
    solucion: [
      'Full website: home, about, menu, the space and how to get there.',
      'Table menu opened by the QR code, with the table number included.',
      'Order cart that builds the message and sends it via WhatsApp.',
      '“Open” or “closed” notice based on the café’s real opening hours.',
      'Its OlaClick store built in, for those who prefer to pay online.',
    ],
    portada: { src: '/capturas/cafe-cahve-escritorio.webp', alt: 'Home page of the Café Cahve demo site' },
    capturas: [
      { src: '/capturas/cafe-cahve-escritorio.webp', alt: 'Café Cahve home page on desktop' },
      { src: '/capturas/cafe-cahve-movil.webp', alt: 'Café Cahve home page on a phone' },
      { src: '/capturas/cafe-cahve-carta.webp', alt: 'Café Cahve table menu opened from the QR code' },
    ],
  },
  {
    rubro: 'Pizzeria and pastry shop',
    paquete: 'Digital Menu',
    resumen: 'A site with two worlds, pizza and pastry, and direct WhatsApp orders without delivery apps.',
    problema:
      'The shop sells mostly through Rappi and Uber Eats, which take a commission on every order. It also runs two crafts under one roof, pizza and pastry, and people who knew it by its former name don’t always find it.',
    solucion: [
      'A design that changes skin: oven night for the pizza and display-case daylight for the sweets.',
      'A menu with a drawing of each pizza built from its real ingredients, with filters.',
      'A cart that builds the order and sends it straight to WhatsApp, with no app commission.',
      'Cross-selling: when you add a pizza, the site suggests sides and desserts.',
      'Its former name included in the copy and the SEO, so people searching for it aren’t lost.',
    ],
    portada: { src: '/capturas/piu-pizza-carta.webp', alt: 'Pizza menu of the Più Pizza & Dolce demo site' },
    capturas: [
      { src: '/capturas/piu-pizza-carta.webp', alt: 'Più pizza menu on desktop, with filters by type' },
      { src: '/capturas/piu-pizza-dolce.webp', alt: 'Più’s Dolce section, with the house pastries' },
      { src: '/capturas/piu-pizza-movil.webp', alt: 'Più pizza menu on a phone' },
    ],
  },
  {
    rubro: 'Coffee shop',
    paquete: 'Digital Menu',
    resumen: 'Its printed menu brought to the web, with WhatsApp orders and coffee beans ground for your coffee maker.',
    problema:
      'A newly opened coffee shop with no website. Its menu existed only on paper, and its freshly ground coffee beans were hidden at the bottom of the page.',
    solucion: [
      'A design taken from its own menu: turquoise on cream paper, a striped awning and ink drawings.',
      'The cup on the home page empties as you scroll and grows when you pick the Large size.',
      'A Regular / Large switch that changes every price on the menu.',
      'You pick your coffee maker and a 250 g bag of beans is added to the order with the right grind.',
      'An order built on the site and sent straight to WhatsApp.',
    ],
    portada: { src: '/capturas/clemont-inicio.webp', alt: 'Home page of the Cafetería Clemont demo site' },
    capturas: [
      { src: '/capturas/clemont-inicio.webp', alt: 'Clemont home page on desktop, with the drawn cup' },
      { src: '/capturas/clemont-carta.webp', alt: 'Clemont menu by category, with Regular and Large prices' },
      { src: '/capturas/clemont-movil.webp', alt: 'Clemont home page on a phone' },
    ],
  },
];
