import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { Link } from 'react-router-dom';
import { proyectos } from '../data/proyectos';

// Navegador + celular con las demos reales desplazándose solas.
// Las capturas vienen de `vitrina` en data/proyectos.ts.

const CADA = 7000;
const conVitrina = proyectos.filter((p) => p.vitrina);

export function Vitrina() {
  const [activo, setActivo] = useState(0);
  const [pausa, setPausa] = useState(false);
  const caja = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (conVitrina.length < 2 || pausa) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setActivo((i) => (i + 1) % conVitrina.length), CADA);
    return () => window.clearInterval(id);
  }, [pausa]);

  if (conVitrina.length === 0) return null;
  const actual = conVitrina[activo];

  function inclinar(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== 'mouse' || !caja.current) return;
    const r = caja.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    caja.current.style.setProperty('--rx', `${(-y * 6).toFixed(2)}deg`);
    caja.current.style.setProperty('--ry', `${(x * 8).toFixed(2)}deg`);
  }
  function soltar() {
    caja.current?.style.setProperty('--rx', '0deg');
    caja.current?.style.setProperty('--ry', '0deg');
    setPausa(false);
  }

  return (
    <div className="vitrina">
      <div
        ref={caja}
        className="vitrina__escena"
        onPointerMove={inclinar}
        onPointerEnter={() => setPausa(true)}
        onPointerLeave={soltar}
      >
        <Link
          to={`/proyectos/${actual.slug}`}
          className="vitrina__navegador"
          aria-label={`Ver el caso ${actual.nombre}`}
        >
          <span className="vitrina__barra" aria-hidden="true">
            <i />
            <i />
            <i />
            <span className="vitrina__url">{actual.url.replace('https://', '')}</span>
          </span>
          <span className="vitrina__pantalla">
            {conVitrina.map((p, i) => (
              <img
                key={p.slug}
                src={p.vitrina!.escritorio}
                alt={i === activo ? `Sitio de ${p.nombre} en escritorio` : ''}
                className={i === activo ? 'activa' : ''}
                decoding="async"
              />
            ))}
          </span>
        </Link>
        <Link
          to={`/proyectos/${actual.slug}`}
          className="vitrina__celular"
          tabIndex={-1}
          aria-hidden="true"
        >
          <span className="vitrina__pantalla">
            {conVitrina.map((p, i) => (
              <img
                key={p.slug}
                src={p.vitrina!.movil}
                alt=""
                className={i === activo ? 'activa' : ''}
                decoding="async"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </span>
        </Link>
      </div>

      <div className="vitrina__pie">
        <p aria-live="polite">
          <strong>{actual.nombre}</strong> · {actual.rubro}
          {actual.estado === 'demo' && <span className="vitrina__demo">Demo</span>}
        </p>
        {conVitrina.length > 1 && (
          <div className="vitrina__puntos" role="group" aria-label="Elegir proyecto">
            {conVitrina.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                aria-label={`Mostrar ${p.nombre}`}
                aria-pressed={i === activo}
                onClick={() => setActivo(i)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
