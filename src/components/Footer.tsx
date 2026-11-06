import { Link } from 'react-router-dom';
import { contacto } from '../data/contacto';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor footer__fila">
        <Link to="/" className="footer__logo" aria-label="KuroDev, ir al inicio">
          <Logo />
        </Link>
        <nav aria-label="Pie de página">
          <a href="/#proyectos">Proyectos</a>
          <a href="/#servicios">Servicios</a>
          <a href={contacto.instagram} target="_blank" rel="noopener">
            Instagram
          </a>
          <a href={`mailto:${contacto.correo}`}>{contacto.correo}</a>
        </nav>
        <p>© 2026 KuroDev</p>
      </div>
    </footer>
  );
}
