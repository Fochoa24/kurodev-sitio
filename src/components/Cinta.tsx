import { useIdioma } from '../lib/idioma';

// Cinta lima en movimiento entre el hero y los proyectos.
function Fila({ items, oculta = false }: { items: string[]; oculta?: boolean }) {
  return (
    <ul className="cinta__fila" aria-hidden={oculta || undefined}>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export function Cinta() {
  const { t } = useIdioma();
  return (
    <div className="cinta">
      <div className="cinta__pista">
        <Fila items={t.cinta} />
        <Fila items={t.cinta} oculta />
      </div>
    </div>
  );
}
