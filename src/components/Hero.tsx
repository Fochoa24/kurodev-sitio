import type { CSSProperties } from 'react';
import { linkWhatsApp } from '../lib/whatsapp';
import { useIdioma } from '../lib/idioma';
import { FondoPuntos } from './FondoPuntos';
import { IconoWhatsApp } from './IconoWhatsApp';
import { Vitrina } from './Vitrina';

export function Hero() {
  const { t: tt } = useIdioma();
  const t = tt.hero;
  return (
    <section className="hero">
      <FondoPuntos />
      <div className="contenedor hero__grilla">
        <div className="hero__contenido">
          <span className="etiqueta hero__entra" style={{ '--d': 0 } as CSSProperties}>
            {t.etiqueta}
          </span>
          <h1>
            <span className="hero__linea" style={{ '--d': 1 } as CSSProperties}>
              {t.linea1}
            </span>{' '}
            <span className="hero__linea" style={{ '--d': 2 } as CSSProperties}>
              <em className="lima hero__subrayado">{t.enfasis}</em> {t.conector}
            </span>{' '}
            <span className="hero__linea" style={{ '--d': 3 } as CSSProperties}>
              {t.linea3}
            </span>
          </h1>
          <p className="hero__bajada hero__entra" style={{ '--d': 4 } as CSSProperties}>
            {t.bajada}
          </p>
          <div className="hero__acciones hero__entra" style={{ '--d': 5 } as CSSProperties}>
            <a className="boton boton--lima" href={linkWhatsApp(tt.mensajeDefault)} target="_blank" rel="noopener">
              <IconoWhatsApp /> {t.whatsapp}
            </a>
            <a className="boton boton--borde" href="#proyectos">
              {t.proyectos}
            </a>
          </div>
          <ul className="hero__datos hero__entra" style={{ '--d': 6 } as CSSProperties}>
            {t.datos.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
        <Vitrina />
      </div>
    </section>
  );
}
