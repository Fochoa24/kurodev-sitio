import type { CSSProperties } from 'react';
import { linkWhatsApp } from '../lib/whatsapp';
import { FondoPuntos } from './FondoPuntos';
import { IconoWhatsApp } from './IconoWhatsApp';
import { Vitrina } from './Vitrina';

export function Hero() {
  return (
    <section className="hero">
      <FondoPuntos />
      <div className="contenedor hero__grilla">
        <div className="hero__contenido">
          <span className="etiqueta hero__entra" style={{ '--d': 0 } as CSSProperties}>
            Páginas web para negocios
          </span>
          <h1>
            <span className="hero__linea" style={{ '--d': 1 } as CSSProperties}>
              Tu negocio,
            </span>{' '}
            <span className="hero__linea" style={{ '--d': 2 } as CSSProperties}>
              <em className="lima hero__subrayado">online</em> y
            </span>{' '}
            <span className="hero__linea" style={{ '--d': 3 } as CSSProperties}>
              funcionando.
            </span>
          </h1>
          <p className="hero__bajada hero__entra" style={{ '--d': 4 } as CSSProperties}>
            Si hoy tu negocio vive solo en Instagram o WhatsApp, te hago una página propia: tu carta,
            tus servicios y tus reservas en un sitio rápido, pensado para el celular y fácil de
            actualizar.
          </p>
          <div className="hero__acciones hero__entra" style={{ '--d': 5 } as CSSProperties}>
            <a className="boton boton--lima" href={linkWhatsApp()} target="_blank" rel="noopener">
              <IconoWhatsApp /> Escríbeme por WhatsApp
            </a>
            <a className="boton boton--borde" href="#proyectos">
              Ver proyectos
            </a>
          </div>
          <ul className="hero__datos hero__entra" style={{ '--d': 6 } as CSSProperties}>
            <li>Borrador antes de cobrar</li>
            <li>Listo desde 5 días hábiles</li>
            <li>3 meses de mantención incluidos</li>
          </ul>
        </div>
        <Vitrina />
      </div>
    </section>
  );
}
