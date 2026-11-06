// Genera HTML estático por ruta (SEO y vista previa al compartir) y el sitemap.
// Se ejecuta después de `vite build` y `vite build --ssr`.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(raiz, 'dist');
const ssr = join(raiz, 'dist-ssr', 'entry-server.js');

const { render, rutas, sitio } = await import(pathToFileURL(ssr).href);
const plantilla = await readFile(join(dist, 'index.html'), 'utf8');

function pagina(url) {
  const { html, head } = render(url);
  return plantilla.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
}

for (const ruta of rutas) {
  // /proyectos/x → proyectos/x.html: con cleanUrls se sirve en /proyectos/x sin barra final.
  const archivo = ruta === '/' ? join(dist, 'index.html') : join(dist, `${ruta.slice(1)}.html`);
  await mkdir(dirname(archivo), { recursive: true });
  await writeFile(archivo, pagina(ruta));
  console.log('prerender', ruta);
}

// Vercel sirve 404.html (con estado 404) para cualquier ruta que no exista.
await writeFile(join(dist, '404.html'), pagina('/404'));
console.log('prerender /404');

const base = sitio.url.replace(/\/$/, '');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rutas.map((r) => `  <url><loc>${base}${r === '/' ? '/' : r}</loc></url>`).join('\n')}
</urlset>
`;
await writeFile(join(dist, 'sitemap.xml'), sitemap);
await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`);
console.log('sitemap.xml y robots.txt');

await rm(join(raiz, 'dist-ssr'), { recursive: true, force: true });
