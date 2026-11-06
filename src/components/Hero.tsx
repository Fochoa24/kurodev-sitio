import { linkWhatsApp } from '../lib/whatsapp';
import { IconoWhatsApp } from './IconoWhatsApp';

export function Hero() {
  return (
    <section className="hero">
      <div className="contenedor hero__contenido">
        <span className="etiqueta">Páginas web para negocios</span>
        <h1>
          Tu negocio, <em className="lima">online</em> y funcionando.
        </h1>
        <p className="hero__bajada">
          Si hoy tu negocio vive solo en Instagram o WhatsApp, te hago una página propia: tu carta,
          tus servicios y tus reservas en un sitio rápido, pensado para el celular y fácil de
          actualizar.
        </p>
        <div className="hero__acciones">
          <a className="boton boton--lima" href={linkWhatsApp()} target="_blank" rel="noopener">
            <IconoWhatsApp /> Escríbeme por WhatsApp
          </a>
          <a className="boton boton--borde" href="#proyectos">
            Ver proyectos
          </a>
        </div>
        <ul className="hero__datos">
          <li>Borrador antes de cobrar</li>
          <li>Listo desde 5 días hábiles</li>
          <li>3 meses de mantención incluidos</li>
        </ul>
      </div>
    </section>
  );
}
