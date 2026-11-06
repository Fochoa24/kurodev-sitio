import { useEffect } from 'react';

// Hace aparecer los bloques al entrar en pantalla. El HTML prerenderizado
// se ve completo; solo con JS (y sin "reducir movimiento") se ocultan y revelan.
const SELECTOR = [
  '.seccion__cabecera',
  '.tarjeta-proyecto',
  '.proyectos__proximo',
  '.franja-fundador',
  '.tarjeta-paquete',
  '.plan',
  '.proceso__paso',
  '.diferenciador',
  '.sobre__texto',
].join(',');

export function useRevelar() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const elementos = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (!e.isIntersecting) continue;
          e.target.classList.add('revela--visible');
          obs.unobserve(e.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );

    for (const el of elementos) {
      // Escalonado entre hermanos del mismo tipo (tarjetas de una grilla, pasos…)
      const hermanos = el.parentElement ? Array.from(el.parentElement.children) : [el];
      el.style.setProperty('--i', String(Math.min(hermanos.indexOf(el), 5)));
      el.classList.add('revela');
      obs.observe(el);
    }

    return () => {
      obs.disconnect();
      for (const el of elementos) el.classList.remove('revela', 'revela--visible');
    };
  }, []);
}
