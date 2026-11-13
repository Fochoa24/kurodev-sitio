import { textoPrecio, type Paquete } from '../data/paquetes';
import { formatearPrecio } from '../lib/precio';
import { linkWhatsApp } from '../lib/whatsapp';
import { useIdioma } from '../lib/idioma';

export function TarjetaPaquete({ paquete }: { paquete: Paquete }) {
  const { idioma, t: tt } = useIdioma();
  const t = tt.servicios;
  const mensaje = paquete.precio === null ? t.mensajeCotizar : t.mensajePaquete(paquete.nombre);

  return (
    <article className={`tarjeta-paquete${paquete.destacado ? ' tarjeta-paquete--destacado' : ''}`}>
      {paquete.destacado && <span className="etiqueta">{t.destacado}</span>}
      <h3>{paquete.nombre}</h3>
      <p className="tarjeta-paquete__para">{paquete.paraQuien}</p>
      <div>
        <p className="tarjeta-paquete__precio">{textoPrecio(paquete, idioma)}</p>
        {paquete.precioFundador != null && (
          <p className="tarjeta-paquete__fundador">
            {t.precioFundador}
            {formatearPrecio(paquete.precioFundador, idioma)}
          </p>
        )}
      </div>
      <ul>
        {paquete.incluye.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      {paquete.plazo && (
        <p className="tarjeta-paquete__plazo">
          {t.plazo}
          {paquete.plazo}
        </p>
      )}
      <a
        className={`boton boton--chico ${paquete.destacado ? 'boton--lima' : 'boton--borde'}`}
        href={linkWhatsApp(mensaje)}
        target="_blank"
        rel="noopener"
      >
        {paquete.precio === null ? t.cotizar : t.loQuiero}
      </a>
    </article>
  );
}
