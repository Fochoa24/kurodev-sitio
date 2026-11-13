import type { PointerEvent } from 'react';
import { Link } from 'react-router-dom';
import type { Proyecto } from '../data/proyectos';
import { useIdioma } from '../lib/idioma';

// Brillo lima que sigue al cursor dentro de la tarjeta.
function seguir(e: PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
}

export function TarjetaProyecto({ proyecto }: { proyecto: Proyecto }) {
  // Con captura larga, al pasar el mouse la página se recorre sola.
  const larga = proyecto.vitrina?.escritorio;
  const { t, r } = useIdioma();
  return (
    <article className="tarjeta-proyecto" onPointerMove={seguir}>
      <div className={`tarjeta-proyecto__imagen${larga ? ' tarjeta-proyecto__imagen--larga' : ''}`}>
        <img src={larga ?? proyecto.portada.src} alt={proyecto.portada.alt} loading="lazy" />
      </div>
      <div className="tarjeta-proyecto__cuerpo">
        <div className="tarjeta-proyecto__meta">
          <span className={`insignia${proyecto.estado === 'cliente' ? ' insignia--lima' : ''}`}>
            {proyecto.estado === 'demo' ? t.proyectos.demo : t.proyectos.cliente}
          </span>
          <span className="insignia">{proyecto.paquete}</span>
        </div>
        <h3>{proyecto.nombre}</h3>
        <span className="etiqueta">{proyecto.rubro}</span>
        <p className="tarjeta-proyecto__resumen">{proyecto.resumen}</p>
        <div className="tarjeta-proyecto__acciones">
          <Link className="boton boton--lima boton--chico" to={r(`/proyectos/${proyecto.slug}`)}>
            {t.proyectos.verCaso}
          </Link>
          <a className="boton boton--borde boton--chico" href={proyecto.url} target="_blank" rel="noopener">
            {t.proyectos.verSitio}
          </a>
        </div>
      </div>
    </article>
  );
}
