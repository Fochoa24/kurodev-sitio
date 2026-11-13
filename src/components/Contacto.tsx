import { useEffect, useRef } from 'react';
import { contacto } from '../data/contacto';
import { linkWhatsApp } from '../lib/whatsapp';
import { useIdioma } from '../lib/idioma';
import { IconoWhatsApp } from './IconoWhatsApp';

export function Contacto() {
  const chat = useRef<HTMLDivElement>(null);
  const { t: tt } = useIdioma();
  const t = tt.contacto;
  const wa = linkWhatsApp(tt.mensajeDefault);

  // La conversación se "escribe" al llegar a la sección. Sin JS o con
  // "reducir movimiento", el chat se ve completo desde el inicio.
  useEffect(() => {
    const el = chat.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    el.dataset.estado = 'espera';
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.dataset.estado = 'activo';
          obs.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="seccion" id="contacto" aria-labelledby="titulo-contacto">
      <div className="contenedor">
        <div className="contacto">
          <div className="contacto__texto">
            <span className="etiqueta">{t.etiqueta}</span>
            <h2 id="titulo-contacto">
              {t.titulo}
              <span className="lima">?</span>
            </h2>
            <p>{t.texto}</p>
            <ul className="contacto__canales">
              <li>
                <a href={wa} target="_blank" rel="noopener">
                  <span>WhatsApp</span> {contacto.whatsappTexto} <i aria-hidden="true">↗</i>
                </a>
              </li>
              <li>
                <a href={contacto.instagram} target="_blank" rel="noopener">
                  <span>Instagram</span> {contacto.instagramHandle} <i aria-hidden="true">↗</i>
                </a>
              </li>
              <li>
                <a href={`mailto:${contacto.correo}`}>
                  <span>{t.correo}</span> {contacto.correo} <i aria-hidden="true">↗</i>
                </a>
              </li>
            </ul>
          </div>

          <div className="chat" ref={chat}>
            <div className="chat__cabecera">
              <span className="chat__avatar" aria-hidden="true">
                k<b>.</b>
              </span>
              <span>
                <strong>KuroDev</strong>
                <small>{t.chatSub}</small>
              </span>
            </div>
            <div className="chat__mensajes" aria-label={t.chatLabel}>
              <p className="chat__burbuja chat__burbuja--yo">
                {tt.mensajeDefault}
                <small>✓✓</small>
              </p>
              <p className="chat__escribiendo" aria-hidden="true">
                <i />
                <i />
                <i />
              </p>
              <p className="chat__burbuja chat__burbuja--kuro">{t.respuesta}</p>
            </div>
            <a className="chat__enviar" href={wa} target="_blank" rel="noopener">
              <span className="chat__campo">{tt.mensajeDefault}</span>
              <span className="chat__boton">
                <IconoWhatsApp /> {t.enviar}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
