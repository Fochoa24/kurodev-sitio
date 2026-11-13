import { Link } from 'react-router-dom';
import { contacto } from '../data/contacto';
import { useIdioma } from '../lib/idioma';
import { Logo } from './Logo';

export function Footer() {
  const { t, r } = useIdioma();
  return (
    <footer className="footer">
      <div className="contenedor footer__fila">
        <Link to={r('/')} className="footer__logo" aria-label={t.header.irInicio}>
          <Logo />
        </Link>
        <nav aria-label={t.footer.nav}>
          <a href={r('/#proyectos')}>{t.header.enlaces[0]}</a>
          <a href={r('/#servicios')}>{t.header.enlaces[1]}</a>
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
