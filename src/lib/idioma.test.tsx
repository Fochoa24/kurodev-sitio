import { describe, expect, test } from 'vitest';
import { enRuta, idiomaDe, otraRuta } from './idioma';
import { render } from '../entry-server';
import { paquetes, paquetesEn } from '../data/paquetes';
import { proyectos, proyectosEn } from '../data/proyectos';
import { planes, planesEn, sinPagoInicial, sinPagoInicialEn } from '../data/planes';
import { diferenciadores, diferenciadoresEn, proceso, procesoEn } from '../data/proceso';
import { formatearPrecio } from './precio';

describe('rutas por idioma', () => {
  test('idioma sale de la URL', () => {
    expect(idiomaDe('/')).toBe('es');
    expect(idiomaDe('/en')).toBe('en');
    expect(idiomaDe('/en/proyectos/piu-pizza')).toBe('en');
    expect(idiomaDe('/enlace')).toBe('es');
  });
  test('enRuta y otraRuta', () => {
    expect(enRuta('en', '/')).toBe('/en');
    expect(enRuta('en', '/#contacto')).toBe('/en#contacto');
    expect(enRuta('en', '/proyectos/x')).toBe('/en/proyectos/x');
    expect(enRuta('es', '/proyectos/x')).toBe('/proyectos/x');
    expect(otraRuta('/en')).toBe('/');
    expect(otraRuta('/en/proyectos/x')).toBe('/proyectos/x');
    expect(otraRuta('/proyectos/x')).toBe('/en/proyectos/x');
  });
});

test('cada dato en español tiene su inglés, en el mismo orden', () => {
  expect(paquetesEn).toHaveLength(paquetes.length);
  expect(proyectosEn).toHaveLength(proyectos.length);
  expect(planesEn).toHaveLength(planes.length);
  expect(sinPagoInicialEn).toHaveLength(sinPagoInicial.length);
  expect(procesoEn).toHaveLength(proceso.length);
  expect(diferenciadoresEn).toHaveLength(diferenciadores.length);
  proyectosEn.forEach((p, i) => {
    expect(p.capturas?.map((c) => c.src)).toEqual(proyectos[i].capturas.map((c) => c.src));
    expect(p.solucion).toHaveLength(proyectos[i].solucion.length);
  });
  paquetesEn.forEach((p, i) => {
    expect(p.incluye).toHaveLength(paquetes[i].incluye.length);
    expect(p.precio).toBeUndefined(); // los montos solo viven en español
  });
});

test('el inglés tampoco menciona Maipú', () => {
  const todo = JSON.stringify({ paquetesEn, proyectosEn, planesEn, procesoEn, diferenciadoresEn }) + render('/en').html;
  expect(todo).not.toMatch(/maip[uú]/i);
});

test('precio en inglés no se confunde con dólares', () => {
  expect(formatearPrecio(149990, 'en')).toBe('$149,990 CLP');
});

describe('SSR en inglés', () => {
  test('/en: lang, textos, precios y enlaces con prefijo', () => {
    const { html, head, lang } = render('/en');
    expect(lang).toBe('en');
    expect(html).toContain('Your business,');
    expect(html).toContain('From $149,990 CLP');
    expect(html).toContain('href="/en/proyectos/piu-pizza"');
    expect(html).not.toMatch(/Escríbeme|Cotización|Desde \$|Ver caso|Lo quiero|Volver a proyectos/);
    expect(html).not.toMatch(/NaN|undefined|null/);
    expect(head).toContain('<link rel="canonical" href="https://kurodev-seven.vercel.app/en" />');
    expect(head).toContain('hreflang="es" href="https://kurodev-seven.vercel.app/"');
    expect(head).toContain('en_US');
  });
  test('caso en inglés', () => {
    const { html, head } = render('/en/proyectos/piu-pizza');
    expect(html).toContain('What I built');
    expect(html).toContain('href="/en#proyectos"');
    expect(head).toContain('Demo project by KuroDev');
  });
  test('español sigue igual y apunta a su versión en inglés', () => {
    const { head, lang } = render('/');
    expect(lang).toBe('es-CL');
    expect(head).toContain('hreflang="en" href="https://kurodev-seven.vercel.app/en"');
  });
});
