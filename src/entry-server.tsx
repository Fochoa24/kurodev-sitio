import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { SeoContext, headHtml, type DatosSeo } from './components/Seo';
import { proyectos } from './data/proyectos';
import { enRuta, idiomaDe } from './lib/idioma';

export { sitio } from './data/sitio';

/** Rutas que el prerender genera como HTML estático. */
const rutasEs = ['/', ...proyectos.map((p) => `/proyectos/${p.slug}`)];
export const rutas = [...rutasEs, ...rutasEs.map((r) => enRuta('en', r))];

export function render(url: string): { html: string; head: string; lang: string } {
  const ctx: { datos?: DatosSeo } = {};
  const html = renderToString(
    <StrictMode>
      <SeoContext.Provider value={ctx}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </SeoContext.Provider>
    </StrictMode>,
  );
  return { html, head: ctx.datos ? headHtml(ctx.datos) : '', lang: idiomaDe(url) === 'en' ? 'en' : 'es-CL' };
}
