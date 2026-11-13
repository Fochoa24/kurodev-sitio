import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';

// Hay un solo 404.html para todo el sitio, así que va en los dos idiomas.
export function NoEncontrado() {
  return (
    <section className="contenedor no-encontrado">
      <Seo
        titulo="Página no encontrada · Page not found · KuroDev"
        descripcion="La página que buscas no existe. The page you are looking for does not exist."
        ruta="/404"
        noindex
      />
      <span className="etiqueta">Error 404</span>
      <h1>
        No encontramos esta página<span className="lima">.</span>
      </h1>
      <p>Puede que el enlace esté mal escrito o que la página ya no exista.</p>
      <p lang="en">Page not found. The link may be mistyped, or the page may no longer exist.</p>
      <div className="no-encontrado__acciones">
        <Link className="boton boton--lima" to="/">
          Volver al inicio
        </Link>
        <Link className="boton boton--borde" to="/en" lang="en">
          Go to home
        </Link>
      </div>
    </section>
  );
}
