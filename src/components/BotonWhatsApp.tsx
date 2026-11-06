import { linkWhatsApp } from '../lib/whatsapp';
import { IconoWhatsApp } from './IconoWhatsApp';

export function BotonWhatsApp() {
  return (
    <a
      className="whatsapp-flotante"
      href={linkWhatsApp()}
      target="_blank"
      rel="noopener"
      aria-label="Escríbeme por WhatsApp"
    >
      <IconoWhatsApp />
    </a>
  );
}
