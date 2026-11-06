import { contacto } from '../data/contacto';
import { linkWhatsApp } from '../lib/whatsapp';
import { IconoWhatsApp } from './IconoWhatsApp';

export function Contacto() {
  return (
    <section className="seccion" id="contacto" aria-labelledby="titulo-contacto">
      <div className="contenedor">
        <div className="contacto">
          <span className="etiqueta">Contacto</span>
          <h2 id="titulo-contacto">¿Conversamos?</h2>
          <p>
            Cuéntame de tu negocio. Te respondo por WhatsApp y, si te sirve, te preparo un borrador de
            tu página.
          </p>
          <div className="contacto__canales">
            <a className="boton boton--kuro" href={linkWhatsApp()} target="_blank" rel="noopener">
              <IconoWhatsApp /> {contacto.whatsappTexto}
            </a>
            <a className="boton boton--borde-kuro" href={contacto.instagram} target="_blank" rel="noopener">
              Instagram {contacto.instagramHandle}
            </a>
            <a className="boton boton--borde-kuro" href={`mailto:${contacto.correo}`}>
              Correo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
