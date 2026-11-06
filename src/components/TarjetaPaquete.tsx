import { textoPrecio, type Paquete } from '../data/paquetes';
import { formatearPrecio } from '../lib/precio';
import { linkWhatsApp } from '../lib/whatsapp';

export function TarjetaPaquete({ paquete }: { paquete: Paquete }) {
  const mensaje =
    paquete.precio === null
      ? 'Hola, quiero cotizar una solución a medida para mi negocio'
      : `Hola, me interesa el paquete ${paquete.nombre}`;

  return (
    <article className={`tarjeta-paquete${paquete.destacado ? ' tarjeta-paquete--destacado' : ''}`}>
      {paquete.destacado && <span className="etiqueta">Más completo</span>}
      <h3>{paquete.nombre}</h3>
      <p className="tarjeta-paquete__para">{paquete.paraQuien}</p>
      <div>
        <p className="tarjeta-paquete__precio">{textoPrecio(paquete)}</p>
        {paquete.precioFundador !== undefined && (
          <p className="tarjeta-paquete__fundador">
            Fundador: {formatearPrecio(paquete.precioFundador)}
          </p>
        )}
      </div>
      <ul>
        {paquete.incluye.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      {paquete.plazo && <p className="tarjeta-paquete__plazo">Plazo: {paquete.plazo}</p>}
      <a
        className={`boton boton--chico ${paquete.destacado ? 'boton--lima' : 'boton--borde'}`}
        href={linkWhatsApp(mensaje)}
        target="_blank"
        rel="noopener"
      >
        {paquete.precio === null ? 'Cotizar' : 'Lo quiero'}
      </a>
    </article>
  );
}
