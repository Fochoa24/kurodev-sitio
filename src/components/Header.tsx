import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { linkWhatsApp } from '../lib/whatsapp';

const enlaces = [
  { href: '/#proyectos', texto: 'Proyectos' },
  { href: '/#servicios', texto: 'Servicios' },
  { href: '/#como-trabajo', texto: 'Cómo trabajo' },
  { href: '/#contacto', texto: 'Contacto' },
];

export function Header() {
  const [abierto, setAbierto] = useState(false);
  const cerrar = () => setAbierto(false);

  return (
    <header className="header">
      <div className="contenedor header__fila">
        <Link to="/" className="header__logo" aria-label="KuroDev, ir al inicio" onClick={cerrar}>
          <Logo />
        </Link>
        <button
          type="button"
          className="header__menu"
          aria-expanded={abierto}
          aria-controls="menu-principal"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setAbierto((a) => !a)}
        >
          {abierto ? '✕' : '☰'}
        </button>
        <nav
          id="menu-principal"
          className={`header__nav${abierto ? ' header__nav--abierto' : ''}`}
          aria-label="Principal"
        >
          {enlaces.map((e) => (
            <a key={e.href} href={e.href} onClick={cerrar}>
              {e.texto}
            </a>
          ))}
          <a className="boton boton--lima boton--chico" href={linkWhatsApp()} target="_blank" rel="noopener">
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
