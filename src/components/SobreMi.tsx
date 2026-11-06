const stack = ['React', 'TypeScript', 'Node.js', 'Firebase', 'Vercel', 'Claude API'];

export function SobreMi() {
  return (
    <section className="seccion" id="sobre-mi" aria-labelledby="titulo-sobre">
      <div className="contenedor sobre">
        <div className="seccion__cabecera">
          <span className="etiqueta">Sobre mí</span>
          <h2 id="titulo-sobre">
            Hola, soy Felipe<span className="lima">.</span>
          </h2>
        </div>
        <div className="sobre__texto">
          <p>
            <strong>KuroDev</strong> soy yo: Felipe Ochoa, estudiante de último año de Ingeniería en
            Computación e Informática. “Kuro” es mi alias como jugador online, y se quedó.
          </p>
          <p>
            Creé KuroDev para ayudar a negocios que hoy dependen solo de Instagram, WhatsApp o del boca
            a boca a tener una página propia, que funcione y que puedan actualizar sin depender de
            nadie.
          </p>
          <p>Trabajo con herramientas modernas para que tu sitio sea rápido, seguro y fácil de mantener:</p>
          <ul className="stack" aria-label="Tecnologías">
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
