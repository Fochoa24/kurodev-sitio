import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { Link } from 'react-router-dom';
import { proyectos, proyectosEn } from '../data/proyectos';
import { traducir, useIdioma } from '../lib/idioma';

// Navegador + celular con las demos reales desplazándose solas.
// Las capturas vienen de `vitrina` en data/proyectos.ts.

const CADA = 7000;

export function Vitrina() {
  const [activo, setActivo] = useState(0);
  const [pausa, setPausa] = useState(false);
  const caja = useRef<HTMLDivElement>(null);
  const { idioma, t, r } = useIdioma();
  const conVitrina = traducir(proyectos, idioma, proyectosEn).filter((p) => p.vitrina);

  useEffect(() => {
    if (conVitrina.length < 2 || pausa) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setActivo((i) => (i + 1) % conVitrina.length), CADA);
    return () => window.clearInterval(id);
  }, [pausa, conVitrina.length]);

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
          to={r(`/proyectos/${actual.slug}`)}
          className="vitrina__navegador"
          aria-label={t.vitrina.verCaso(actual.nombre)}
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
                alt={i === activo ? t.vitrina.alt(p.nombre) : ''}
                className={i === activo ? 'activa' : ''}
                decoding="async"
              />
            ))}
          </span>
        </Link>
        <Link
          to={r(`/proyectos/${actual.slug}`)}
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
          {actual.estado === 'demo' && <span className="vitrina__demo">{t.proyectos.demo}</span>}
        </p>
        {conVitrina.length > 1 && (
          <div className="vitrina__puntos" role="group" aria-label={t.vitrina.elegir}>
            {conVitrina.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                aria-label={t.vitrina.mostrar(p.nombre)}
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
