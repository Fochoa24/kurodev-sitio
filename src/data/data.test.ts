import { describe, expect, test } from 'vitest';
import { paquetes, textoPrecio } from './paquetes';
import { proyectos } from './proyectos';
import { planes, sinPagoInicial } from './planes';
import { proceso } from './proceso';

const porId = (id: string) => paquetes.find((p) => p.id === id)!;

describe('paquetes', () => {
  test('Vitrina muestra "Desde $149.990"', () => {
    expect(textoPrecio(porId('vitrina'))).toBe('Desde $149.990');
  });
  test('A medida muestra "Cotización" sin NaN ni undefined', () => {
    const t = textoPrecio(porId('a-medida'));
    expect(t).toBe('Cotización');
  });
  test('precios aprobados exactos', () => {
    expect([porId('vitrina').precio, porId('vitrina').precioFundador]).toEqual([149990, 99990]);
    expect([porId('vitrina-agenda').precio, porId('vitrina-agenda').precioFundador]).toEqual([249990, 169990]);
    expect([porId('carta-digital').precio, porId('carta-digital').precioFundador]).toEqual([299990, 199990]);
    expect(porId('pagina-ventas').precio).toBe(199990);
    expect(porId('pagina-ventas').precioFundador).toBeUndefined();
    expect(planes.map((p) => p.precio)).toEqual([14990, 29990]);
    expect(sinPagoInicial.map((p) => p.mensual)).toEqual([24990, 39990]);
  });
});

describe('proyectos', () => {
  test('slugs únicos', () => {
    const slugs = proyectos.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
  test('Café Cahve es demo', () => {
    expect(proyectos.find((p) => p.slug === 'cafe-cahve')?.estado).toBe('demo');
  });
});

test('ningún texto público menciona Maipú', () => {
  const todo = JSON.stringify({ paquetes, proyectos, planes, sinPagoInicial, proceso });
  expect(todo).not.toMatch(/maip[uú]/i);
});
