import { useEffect, useRef } from 'react';

// Grilla de puntos que se ilumina en lima cerca del cursor y con una onda
// que la recorre sola cada pocos segundos (para que en celular también se vea viva).
// Canvas puro, sin librerías. Con "reducir movimiento" se dibuja una sola vez.

const ESPACIO = 30;
const RADIO_CURSOR = 150;
const CADA_ONDA = 4200; // ms entre ondas
const VEL_ONDA = 0.45; // px por ms
const ANCHO_ONDA = 46;

export function FondoPuntos() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let ancho = 0;
    let alto = 0;
    let puntos: { x: number; y: number }[] = [];
    const cursor = { x: -9999, y: -9999, fuerza: 0, objetivo: 0 };
    let onda = { x: 0, y: 0, inicio: -Infinity };
    let siguienteOnda = 600;
    let raf = 0;
    let visible = true;

    function medir() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas!.getBoundingClientRect();
      ancho = r.width;
      alto = r.height;
      canvas!.width = Math.round(ancho * dpr);
      canvas!.height = Math.round(alto * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      puntos = [];
      const offX = (ancho % ESPACIO) / 2;
      const offY = (alto % ESPACIO) / 2;
      for (let y = offY; y <= alto; y += ESPACIO) {
        for (let x = offX; x <= ancho; x += ESPACIO) puntos.push({ x, y });
      }
    }

    function dibujar(t: number) {
      ctx!.clearRect(0, 0, ancho, alto);
      cursor.fuerza += (cursor.objetivo - cursor.fuerza) * 0.08;
      const radioOnda = (t - onda.inicio) * VEL_ONDA;
      const maxOnda = Math.hypot(ancho, alto);
      const desvanecer = Math.max(0, 1 - radioOnda / maxOnda);

      for (const p of puntos) {
        let x = p.x;
        let y = p.y;
        let brillo = 0;

        const dx = p.x - cursor.x;
        const dy = p.y - cursor.y;
        const d = Math.hypot(dx, dy);
        if (d < RADIO_CURSOR && cursor.fuerza > 0.01) {
          const g = (1 - d / RADIO_CURSOR) ** 2 * cursor.fuerza;
          brillo = g;
          if (d > 0.1) {
            x += (dx / d) * g * 10;
            y += (dy / d) * g * 10;
          }
        }

        if (desvanecer > 0) {
          const dOnda = Math.hypot(p.x - onda.x, p.y - onda.y) - radioOnda;
          const g = Math.exp(-((dOnda / ANCHO_ONDA) ** 2)) * desvanecer * 0.85;
          if (g > brillo) brillo = g;
        }

        if (brillo < 0.02) {
          ctx!.fillStyle = 'rgba(245,245,240,0.13)';
          ctx!.fillRect(x - 0.9, y - 0.9, 1.8, 1.8);
        } else {
          ctx!.fillStyle = `rgba(184,242,58,${0.18 + brillo * 0.82})`;
          ctx!.beginPath();
          ctx!.arc(x, y, 1 + brillo * 1.8, 0, Math.PI * 2);
          ctx!.fill();
        }
      }
    }

    function cuadro(t: number) {
      if (t > siguienteOnda) {
        onda = { x: Math.random() * ancho, y: Math.random() * alto * 0.8, inicio: t };
        siguienteOnda = t + CADA_ONDA;
      }
      dibujar(t);
      raf = visible ? requestAnimationFrame(cuadro) : 0;
    }

    function arrancar() {
      if (!raf && visible && !document.hidden) raf = requestAnimationFrame(cuadro);
    }

    function alMover(e: PointerEvent) {
      if (e.pointerType !== 'mouse') return;
      const r = canvas!.getBoundingClientRect();
      cursor.x = e.clientX - r.left;
      cursor.y = e.clientY - r.top;
      cursor.objetivo = cursor.y >= 0 && cursor.y <= alto ? 1 : 0;
    }
    function alSalir() {
      cursor.objetivo = 0;
    }

    medir();
    if (quieto) {
      dibujar(-Infinity);
      const alRedimensionar = () => {
        medir();
        dibujar(-Infinity);
      };
      window.addEventListener('resize', alRedimensionar);
      return () => window.removeEventListener('resize', alRedimensionar);
    }

    const obs = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      arrancar();
    });
    obs.observe(canvas);
    const alVisibilidad = () => (document.hidden ? (cancelAnimationFrame(raf), (raf = 0)) : arrancar());

    window.addEventListener('resize', medir);
    window.addEventListener('pointermove', alMover, { passive: true });
    document.documentElement.addEventListener('pointerleave', alSalir);
    document.addEventListener('visibilitychange', alVisibilidad);
    arrancar();

    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
      window.removeEventListener('resize', medir);
      window.removeEventListener('pointermove', alMover);
      document.documentElement.removeEventListener('pointerleave', alSalir);
      document.removeEventListener('visibilitychange', alVisibilidad);
    };
  }, []);

  return <canvas ref={ref} className="fondo-puntos" aria-hidden="true" />;
}
