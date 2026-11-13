import { proyectos, proyectosEn } from '../data/proyectos';
import { linkWhatsApp } from '../lib/whatsapp';
import { traducir, useIdioma } from '../lib/idioma';
import { TarjetaProyecto } from './TarjetaProyecto';

export function Proyectos() {
  const { idioma, t: tt } = useIdioma();
  const t = tt.proyectos;
  return (
    <section className="seccion" id="proyectos" aria-labelledby="titulo-proyectos">
      <div className="contenedor">
        <div className="seccion__cabecera">
          <span className="etiqueta">{t.etiqueta}</span>
          <h2 id="titulo-proyectos">{t.titulo}</h2>
          <p>
            {t.antes} <strong>{t.demo}</strong> {t.despues}
          </p>
        </div>
        <div className="proyectos__grilla">
          {traducir(proyectos, idioma, proyectosEn).map((p) => (
            <TarjetaProyecto key={p.slug} proyecto={p} />
          ))}
          <div className="proyectos__proximo">
            <span className="etiqueta">{t.proximo}</span>
            <h3>{t.tuyo}</h3>
            <p>{t.tuyoTexto}</p>
            <a
              className="boton boton--borde boton--chico"
              href={linkWhatsApp(t.tuyoMensaje)}
              target="_blank"
              rel="noopener"
            >
              {t.tuyoBoton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
