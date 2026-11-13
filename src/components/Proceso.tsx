import { diferenciadores, diferenciadoresEn, proceso, procesoEn } from '../data/proceso';
import { useIdioma } from '../lib/idioma';

export function Proceso() {
  const { idioma, t: tt } = useIdioma();
  const t = tt.proceso;
  const pasos = idioma === 'en' ? procesoEn : proceso;
  const difs = idioma === 'en' ? diferenciadoresEn : diferenciadores;
  return (
    <section className="seccion" id="como-trabajo" aria-labelledby="titulo-proceso">
      <div className="contenedor">
        <div className="seccion__cabecera">
          <span className="etiqueta">{t.etiqueta}</span>
          <h2 id="titulo-proceso">{t.titulo}</h2>
          <p>{t.bajada}</p>
        </div>
        <ol className="proceso__lista">
          {pasos.map((paso) => (
            <li className="proceso__paso" key={paso.titulo}>
              <h3>{paso.titulo}</h3>
              <p>{paso.detalle}</p>
            </li>
          ))}
        </ol>
        <div className="diferenciadores">
          {difs.map((d) => (
            <div className="diferenciador" key={d.titulo}>
              <h3>{d.titulo}</h3>
              <p>{d.detalle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
