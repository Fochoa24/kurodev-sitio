import { contacto } from '../data/contacto';

/** Link a WhatsApp de KuroDev con el mensaje ya escrito. */
export function linkWhatsApp(mensaje: string = contacto.mensajeDefault): string {
  return `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
