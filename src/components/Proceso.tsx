import { diferenciadores, proceso } from '../data/proceso';

export function Proceso() {
  return (
    <section className="seccion" id="como-trabajo" aria-labelledby="titulo-proceso">
      <div className="contenedor">
        <div className="seccion__cabecera">
          <span className="etiqueta">Cómo trabajo</span>
          <h2 id="titulo-proceso">De la conversación a tu sitio online</h2>
          <p>Un proceso simple, sin letra chica, para que sepas qué pasa en cada paso.</p>
        </div>
        <ol className="proceso__lista">
          {proceso.map((paso) => (
            <li className="proceso__paso" key={paso.titulo}>
              <h3>{paso.titulo}</h3>
              <p>{paso.detalle}</p>
            </li>
          ))}
        </ol>
        <div className="diferenciadores">
          {diferenciadores.map((d) => (
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
