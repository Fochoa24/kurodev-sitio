import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { idiomaDe } from './lib/idioma';

const raiz = document.getElementById('root')!;
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Si la página viene prerenderizada en el mismo idioma, se hidrata; si no (dev, o el
// 404.html en español servido en /en/...), se crea de cero para evitar errores de hidratación.
const mismoIdioma = (document.documentElement.lang === 'en') === (idiomaDe(location.pathname) === 'en');
if (raiz.hasChildNodes() && mismoIdioma) hydrateRoot(raiz, app);
else createRoot(raiz).render(app);
