import { Link, useParams } from 'react-router-dom';
import { proyectos } from '../data/proyectos';
import { linkWhatsApp } from '../lib/whatsapp';
import { Seo } from '../components/Seo';
import { NoEncontrado } from './NoEncontrado';

export function Caso() {
  const { slug } = useParams();
  const proyecto = proyectos.find((p) => p.slug === slug);
  if (!proyecto) return <NoEncontrado />;

  const [principal, ...resto] = proyecto.capturas;

  return (
    <article className="caso">
      <Seo
        titulo={`${proyecto.nombre} · Proyecto ${proyecto.estado === 'demo' ? 'demo ' : ''}de KuroDev`}
        descripcion={`${proyecto.nombre} (${proyecto.rubro.toLowerCase()}): ${proyecto.resumen}`}
        ruta={`/proyectos/${proyecto.slug}`}
      />
      <div className="contenedor">
        <Link to="/#proyectos" className="caso__volver">
          ← Volver a proyectos
        </Link>

        <header className="caso__cabecera">
          <div className="tarjeta-proyecto__meta">
            <span className={`insignia${proyecto.estado === 'cliente' ? ' insignia--lima' : ''}`}>
              {proyecto.estado === 'demo' ? 'Demo' : 'Cliente'}
            </span>
            <span className="insignia">{proyecto.paquete}</span>
          </div>
          <h1>{proyecto.nombre}</h1>
          <span className="etiqueta">{proyecto.rubro}</span>
          <p>{proyecto.resumen}</p>
        </header>

        {proyecto.estado === 'demo' && (
          <p className="aviso-demo">
            Este es un borrador que preparé para mostrarle al negocio cómo se vería su página. No es
            un sitio contratado.
          </p>
        )}

        <figure className="caso__portada">
          <img src={principal.src} alt={principal.alt} width={1440} height={900} />
        </figure>

        <div className="caso__bloques">
          <section className="caso__bloque">
            <span className="etiqueta">El punto de partida</span>
            <h2>El problema</h2>
            <p>{proyecto.problema}</p>
          </section>
          <section className="caso__bloque">
            <span className="etiqueta">La solución</span>
            <h2>Lo que construí</h2>
            <ul>
              {proyecto.solucion.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>
        </div>

        {resto.length > 0 && (
          <div className="caso__galeria">
            {resto.map((c) => (
              <figure key={c.src}>
                <img src={c.src} alt={c.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        )}

        <div className="caso__acciones">
          <a className="boton boton--lima" href={proyecto.url} target="_blank" rel="noopener">
            Ver {proyecto.estado === 'demo' ? 'demo' : 'sitio'} ↗
          </a>
          <a
            className="boton boton--borde"
            href={linkWhatsApp(`Hola, vi el proyecto ${proyecto.nombre} y quiero algo así para mi negocio`)}
            target="_blank"
            rel="noopener"
          >
            Quiero algo así
          </a>
        </div>
      </div>
    </article>
  );
}
