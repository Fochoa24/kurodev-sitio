import { linkWhatsApp } from '../lib/whatsapp';
import { useIdioma } from '../lib/idioma';
import { IconoWhatsApp } from './IconoWhatsApp';

export function BotonWhatsApp() {
  const { t } = useIdioma();
  return (
    <a
      className="whatsapp-flotante"
      href={linkWhatsApp(t.mensajeDefault)}
      target="_blank"
      rel="noopener"
      aria-label={t.hero.whatsapp}
    >
      <IconoWhatsApp />
    </a>
  );
}
