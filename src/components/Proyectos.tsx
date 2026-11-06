import { proyectos } from '../data/proyectos';
import { linkWhatsApp } from '../lib/whatsapp';
import { TarjetaProyecto } from './TarjetaProyecto';

export function Proyectos() {
  return (
    <section className="seccion" id="proyectos" aria-labelledby="titulo-proyectos">
      <div className="contenedor">
        <div className="seccion__cabecera">
          <span className="etiqueta">Proyectos</span>
          <h2 id="titulo-proyectos">Lo que he construido</h2>
          <p>
            Sitios funcionando que puedes abrir y probar. Los marcados como <strong>Demo</strong> son
            borradores que preparo para mostrarle a un negocio cómo se vería su página.
          </p>
        </div>
        <div className="proyectos__grilla">
          {proyectos.map((p) => (
            <TarjetaProyecto key={p.slug} proyecto={p} />
          ))}
          <div className="proyectos__proximo">
            <span className="etiqueta">Próximo proyecto</span>
            <h3>¿El tuyo?</h3>
            <p>Te preparo un borrador de tu sitio para que veas cómo quedaría antes de decidir.</p>
            <a
              className="boton boton--borde boton--chico"
              href={linkWhatsApp('Hola, quiero ver un borrador de la página para mi negocio')}
              target="_blank"
              rel="noopener"
            >
              Pedir mi borrador
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
