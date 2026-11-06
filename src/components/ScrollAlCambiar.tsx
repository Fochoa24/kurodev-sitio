import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Al navegar: va al ancla (#seccion) si hay, si no, al inicio de la página. */
export function ScrollAlCambiar() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
