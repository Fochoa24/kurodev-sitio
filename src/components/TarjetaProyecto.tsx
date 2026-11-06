import { Link } from 'react-router-dom';
import type { Proyecto } from '../data/proyectos';

export function TarjetaProyecto({ proyecto }: { proyecto: Proyecto }) {
  return (
    <article className="tarjeta-proyecto">
      <div className="tarjeta-proyecto__imagen">
        <img
          src={proyecto.portada.src}
          alt={proyecto.portada.alt}
          loading="lazy"
          width={1440}
          height={900}
        />
      </div>
      <div className="tarjeta-proyecto__cuerpo">
        <div className="tarjeta-proyecto__meta">
          <span className={`insignia${proyecto.estado === 'cliente' ? ' insignia--lima' : ''}`}>
            {proyecto.estado === 'demo' ? 'Demo' : 'Cliente'}
          </span>
          <span className="insignia">{proyecto.paquete}</span>
        </div>
        <h3>{proyecto.nombre}</h3>
        <span className="etiqueta">{proyecto.rubro}</span>
        <p className="tarjeta-proyecto__resumen">{proyecto.resumen}</p>
        <div className="tarjeta-proyecto__acciones">
          <Link className="boton boton--lima boton--chico" to={`/proyectos/${proyecto.slug}`}>
            Ver caso
          </Link>
          <a className="boton boton--borde boton--chico" href={proyecto.url} target="_blank" rel="noopener">
            Ver sitio ↗
          </a>
        </div>
      </div>
    </article>
  );
}
