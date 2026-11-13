import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { guardarIdioma } from './AvisoIdioma';
import { linkWhatsApp } from '../lib/whatsapp';
import { otraRuta, useIdioma } from '../lib/idioma';

const anclas = ['/#proyectos', '/#servicios', '/#como-trabajo', '/#contacto'];

export function Header() {
  const [abierto, setAbierto] = useState(false);
  const cerrar = () => setAbierto(false);
  const { idioma, t, r } = useIdioma();
  const { pathname, hash } = useLocation();

  return (
    <header className="header">
      <div className="contenedor header__fila">
        <Link to={r('/')} className="header__logo" aria-label={t.header.irInicio} onClick={cerrar}>
          <Logo />
        </Link>
        <button
          type="button"
          className="header__menu"
          aria-expanded={abierto}
          aria-controls="menu-principal"
          aria-label={abierto ? t.header.cerrar : t.header.abrir}
          onClick={() => setAbierto((a) => !a)}
        >
          {abierto ? '✕' : '☰'}
        </button>
        <nav
          id="menu-principal"
          className={`header__nav${abierto ? ' header__nav--abierto' : ''}`}
          aria-label={t.header.nav}
        >
          {anclas.map((a, i) => (
            <a key={a} href={r(a)} onClick={cerrar}>
              {t.header.enlaces[i]}
            </a>
          ))}
          <Link
            className="header__idioma"
            to={otraRuta(pathname) + hash}
            hrefLang={idioma === 'es' ? 'en' : 'es'}
            aria-label={t.header.cambiarLabel}
            onClick={() => {
              guardarIdioma(idioma === 'es' ? 'en' : 'es');
              cerrar();
            }}
          >
            {t.header.cambiar}
          </Link>
          <a
            className="boton boton--lima boton--chico"
            href={linkWhatsApp(t.mensajeDefault)}
            target="_blank"
            rel="noopener"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
