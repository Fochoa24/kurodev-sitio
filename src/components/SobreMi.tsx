import { useIdioma } from '../lib/idioma';

const stack = ['React', 'TypeScript', 'Node.js', 'Firebase', 'Vercel', 'Claude API'];

export function SobreMi() {
  const t = useIdioma().t.sobre;
  return (
    <section className="seccion" id="sobre-mi" aria-labelledby="titulo-sobre">
      <div className="contenedor sobre">
        <div className="seccion__cabecera">
          <span className="etiqueta">{t.etiqueta}</span>
          <h2 id="titulo-sobre">
            {t.titulo}
            <span className="lima">.</span>
          </h2>
        </div>
        <div className="sobre__texto">
          <p>
            <strong>KuroDev</strong> {t.p1}
          </p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
          <ul className="stack" aria-label={t.tecnologias}>
            {stack.map((s) => (
              <li className="insignia" key={s}>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
