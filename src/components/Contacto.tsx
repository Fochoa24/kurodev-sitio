import { useEffect, useRef } from 'react';
import { contacto } from '../data/contacto';
import { linkWhatsApp } from '../lib/whatsapp';
import { IconoWhatsApp } from './IconoWhatsApp';

const RESPUESTA =
  '¡Hola! Cuéntame qué tipo de negocio tienes y te preparo un borrador para que veas cómo quedaría 🙌';

export function Contacto() {
  const chat = useRef<HTMLDivElement>(null);

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
            <span className="etiqueta">Contacto</span>
            <h2 id="titulo-contacto">
              ¿Conversamos<span className="lima">?</span>
            </h2>
            <p>
              Cuéntame de tu negocio. Te respondo por WhatsApp y, si te sirve, te preparo un borrador
              de tu página antes de cobrarte nada.
            </p>
            <ul className="contacto__canales">
              <li>
                <a href={linkWhatsApp()} target="_blank" rel="noopener">
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
                  <span>Correo</span> {contacto.correo} <i aria-hidden="true">↗</i>
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
                <small>Páginas web para negocios</small>
              </span>
            </div>
            <div className="chat__mensajes" aria-label="Ejemplo de conversación por WhatsApp">
              <p className="chat__burbuja chat__burbuja--yo">
                {contacto.mensajeDefault}
                <small>✓✓</small>
              </p>
              <p className="chat__escribiendo" aria-hidden="true">
                <i />
                <i />
                <i />
              </p>
              <p className="chat__burbuja chat__burbuja--kuro">{RESPUESTA}</p>
            </div>
            <a className="chat__enviar" href={linkWhatsApp()} target="_blank" rel="noopener">
              <span className="chat__campo">{contacto.mensajeDefault}</span>
              <span className="chat__boton">
                <IconoWhatsApp /> Enviar
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
