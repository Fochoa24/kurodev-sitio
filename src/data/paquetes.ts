// Paquetes y precios aprobados (estrategia/precios.md, nov. 2026).
// No cambiar montos sin aprobación de Felipe.
import { formatearPrecio } from '../lib/precio';

export interface Paquete {
  id: string;
  nombre: string;
  paraQuien: string;
  incluye: string[];
  /** null = se cotiza */
  precio: number | null;
  precioFundador?: number;
  plazo?: string;
  destacado?: boolean;
}

export const paquetes: Paquete[] = [
  {
    id: 'vitrina',
    nombre: 'Vitrina',
    paraQuien: 'Tatuadoras, peluquerías, manicuristas y emprendedores que hoy solo usan Instagram.',
    incluye: [
      'Página única enfocada en que te escriban',
      'Galería de tus trabajos',
      'Servicios y precios',
      'Mapa, horario y botón de WhatsApp',
      'Ficha de Google Business Profile',
    ],
    precio: 149990,
    precioFundador: 99990,
    plazo: '5–7 días hábiles',
  },
  {
    id: 'vitrina-agenda',
    nombre: 'Vitrina + Agenda',
    paraQuien: 'Salones, peluquerías y centros de bienestar que trabajan con horas.',
    incluye: [
      'Todo lo de Vitrina',
      'Reservas de hora online (propias o con AgendaPro)',
    ],
    precio: 249990,
    precioFundador: 169990,
  },
  {
    id: 'carta-digital',
    nombre: 'Carta Digital',
    paraQuien: 'Cafeterías y restaurantes.',
    incluye: [
      'Sitio de 4 a 5 páginas',
      'Carta que tú mismo actualizas',
      'QR para las mesas, listo para imprimir',
      'Pedidos por WhatsApp',
      'SEO local para aparecer en Google',
    ],
    precio: 299990,
    precioFundador: 199990,
    plazo: '10–15 días hábiles',
    destacado: true,
  },
  {
    id: 'pagina-ventas',
    nombre: 'Página de ventas',
    paraQuien: 'Un producto, una promoción o un lanzamiento.',
    incluye: [
      'Una página pensada para vender',
      'Textos por secciones: problema, solución, beneficios',
      'Contacto por WhatsApp, formulario o pago',
    ],
    precio: 199990,
  },
  {
    id: 'a-medida',
    nombre: 'A medida',
    paraQuien: 'Cuando necesitas una herramienta que resuelva algo concreto.',
    incluye: [
      'Sistemas de reservas avanzados',
      'Paneles para editar tu información',
      'Asistentes con IA cuando aportan de verdad',
    ],
    precio: null,
  },
];

export function textoPrecio(p: Paquete): string {
  return p.precio === null ? 'Cotización' : `Desde ${formatearPrecio(p.precio)}`;
}
