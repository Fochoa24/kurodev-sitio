import { describe, expect, test } from 'vitest';
import { render } from '../entry-server';

describe('render (SSR)', () => {
  test('slug inexistente muestra NoEncontrado', () => {
    const { html, head } = render('/proyectos/no-existe');
    expect(html).toContain('No encontramos');
    expect(head).toContain('noindex');
  });

  test('caso Café Cahve muestra nombre y etiqueta Demo', () => {
    const { html, head } = render('/proyectos/cafe-cahve');
    expect(html).toContain('Café Cahve');
    expect(html).toContain('Demo');
    expect(head).toContain('<title>Café Cahve');
    expect(head).toContain('og:title');
  });

  test('inicio renderizado no muestra NaN, undefined ni null en precios', () => {
    const { html } = render('/');
    expect(html).not.toMatch(/NaN|undefined|null/);
    expect(html).toMatch(/Fundador: (<!-- -->)?\$99\.990/);
    expect(html).toContain('Cotización');
  });

  test('inicio incluye JSON-LD ProfessionalService sin comuna', () => {
    const { html, head } = render('/');
    expect(html).toContain('online');
    expect(head).toContain('"@type":"ProfessionalService"');
    expect(head).not.toMatch(/maip[uú]/i);
  });
});
