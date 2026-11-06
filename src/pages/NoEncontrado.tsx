import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';

export function NoEncontrado() {
  return (
    <section className="contenedor no-encontrado">
      <Seo
        titulo="Página no encontrada · KuroDev"
        descripcion="La página que buscas no existe."
        ruta="/404"
        noindex
      />
      <span className="etiqueta">Error 404</span>
      <h1>
        No encontramos esta página<span className="lima">.</span>
      </h1>
      <p>Puede que el enlace esté mal escrito o que la página ya no exista.</p>
      <Link className="boton boton--lima" to="/">
        Volver al inicio
      </Link>
    </section>
  );
}
