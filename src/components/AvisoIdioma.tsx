import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CLAVE_IDIOMA, idiomaDe, otraRuta } from '../lib/idioma';

function leer(): string | null {
  try {
    return localStorage.getItem(CLAVE_IDIOMA);
  } catch {
    return null;
  }
}
export function guardarIdioma(valor: 'es' | 'en') {
  try {
    localStorage.setItem(CLAVE_IDIOMA, valor);
  } catch {
    /* modo privado: no se recuerda, no pasa nada */
  }
}

// Solo en el navegador: el HTML prerenderizado no depende del idioma del dispositivo.
// No redirige por idioma del navegador (los buscadores también tienen uno);
// solo pregunta, y si la persona ya eligió inglés antes, la lleva a /en.
export function AvisoIdioma() {
  const { pathname, hash } = useLocation();
  const navegar = useNavigate();
  const [visible, setVisible] = useState(false);
  const enEspanol = idiomaDe(pathname) === 'es';

  useEffect(() => {
    if (!enEspanol) return setVisible(false);
    const elegido = leer();
    if (elegido === 'en') navegar(otraRuta(pathname) + hash, { replace: true });
    else if (!elegido && !/^es\b/i.test(navigator.language || 'es')) setVisible(true);
  }, [enEspanol, pathname, hash, navegar]);

  if (!visible) return null;

  function elegir(valor: 'es' | 'en') {
    guardarIdioma(valor);
    setVisible(false);
    if (valor === 'en') navegar(otraRuta(pathname) + hash);
  }

  return (
    <div className="aviso-idioma" role="dialog" aria-label="Language" lang="en">
      <p>View this site in English?</p>
      <button type="button" className="boton boton--lima boton--chico" onClick={() => elegir('en')}>
        Yes, English
      </button>
      <button type="button" className="boton boton--borde boton--chico" lang="es" onClick={() => elegir('es')}>
        Seguir en español
      </button>
    </div>
  );
}
