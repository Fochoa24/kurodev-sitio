import { Link, useParams } from 'react-router-dom';
import { proyectos, proyectosEn } from '../data/proyectos';
import { linkWhatsApp } from '../lib/whatsapp';
import { traducir, useIdioma } from '../lib/idioma';
import { Seo } from '../components/Seo';
import { NoEncontrado } from './NoEncontrado';

export function Caso() {
  const { slug } = useParams();
  const { idioma, t: tt, r } = useIdioma();
  const t = tt.caso;
  const proyecto = traducir(proyectos, idioma, proyectosEn).find((p) => p.slug === slug);
  if (!proyecto) return <NoEncontrado />;

  const [principal, ...resto] = proyecto.capturas;
  const demo = proyecto.estado === 'demo';

  return (
    <article className="caso">
      <Seo
        titulo={t.titulo(proyecto.nombre, demo)}
        descripcion={`${proyecto.nombre} (${proyecto.rubro.toLowerCase()}): ${proyecto.resumen}`}
        ruta={`/proyectos/${proyecto.slug}`}
      />
      <div className="contenedor">
        <Link to={r('/#proyectos')} className="caso__volver">
          {t.volver}
        </Link>

        <header className="caso__cabecera">
          <div className="tarjeta-proyecto__meta">
            <span className={`insignia${demo ? '' : ' insignia--lima'}`}>
              {demo ? tt.proyectos.demo : tt.proyectos.cliente}
            </span>
            <span className="insignia">{proyecto.paquete}</span>
          </div>
          <h1>{proyecto.nombre}</h1>
          <span className="etiqueta">{proyecto.rubro}</span>
          <p>{proyecto.resumen}</p>
        </header>

        {demo && <p className="aviso-demo">{t.avisoDemo}</p>}

        <figure className="caso__portada">
          <img src={principal.src} alt={principal.alt} width={1440} height={900} />
        </figure>

        <div className="caso__bloques">
          <section className="caso__bloque">
            <span className="etiqueta">{t.partida}</span>
            <h2>{t.problema}</h2>
            <p>{proyecto.problema}</p>
          </section>
          <section className="caso__bloque">
            <span className="etiqueta">{t.solucion}</span>
            <h2>{t.construi}</h2>
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
            {demo ? t.verDemo : t.verSitio}
          </a>
          <a
            className="boton boton--borde"
            href={linkWhatsApp(t.mensaje(proyecto.nombre))}
            target="_blank"
            rel="noopener"
          >
            {t.algoAsi}
          </a>
        </div>
      </div>
    </article>
  );
}
