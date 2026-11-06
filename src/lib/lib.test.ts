import { describe, expect, test } from 'vitest';
import { linkWhatsApp } from './whatsapp';
import { formatearPrecio } from './precio';
import { contacto } from '../data/contacto';

describe('linkWhatsApp', () => {
  test('sin mensaje usa el mensaje por defecto', () => {
    expect(linkWhatsApp()).toBe(
      'https://wa.me/56942179535?text=' + encodeURIComponent(contacto.mensajeDefault),
    );
  });
  test('codifica +, tildes y ñ', () => {
    const url = linkWhatsApp('Hola, me interesa el paquete Vitrina + Agenda ñ');
    expect(url).toContain('%2B');
    expect(url).toContain('%C3%B1');
    expect(decodeURIComponent(url.split('text=')[1])).toBe(
      'Hola, me interesa el paquete Vitrina + Agenda ñ',
    );
  });
});

describe('formatearPrecio', () => {
  test('formato chileno sin decimales', () => {
    expect(formatearPrecio(149990)).toBe('$149.990');
  });
});
