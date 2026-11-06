// Cinta lima en movimiento entre el hero y los proyectos.
const ITEMS = [
  'Páginas web',
  'Cartas digitales con QR',
  'Pedidos por WhatsApp',
  'Reservas online',
  'Pensado para el celular',
  'Borrador antes de cobrar',
];

function Fila({ oculta = false }: { oculta?: boolean }) {
  return (
    <ul className="cinta__fila" aria-hidden={oculta || undefined}>
      {ITEMS.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export function Cinta() {
  return (
    <div className="cinta">
      <div className="cinta__pista">
        <Fila />
        <Fila oculta />
      </div>
    </div>
  );
}
