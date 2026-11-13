import { paquetes, paquetesEn } from '../data/paquetes';
import { planes, planesEn, sinPagoInicial, sinPagoInicialEn } from '../data/planes';
import { formatearPrecio } from '../lib/precio';
import { traducir, useIdioma } from '../lib/idioma';
import { TarjetaPaquete } from './TarjetaPaquete';

export function Servicios() {
  const { idioma, t: tt } = useIdioma();
  const t = tt.servicios;
  return (
    <section className="seccion" id="servicios" aria-labelledby="titulo-servicios">
      <div className="contenedor">
        <div className="seccion__cabecera">
          <span className="etiqueta">{t.etiqueta}</span>
          <h2 id="titulo-servicios">{t.titulo}</h2>
          <p>{t.bajada}</p>
        </div>

        <div className="franja-fundador">
          <span className="etiqueta">{t.fundador}</span>
          <span>{t.fundadorTexto}</span>
        </div>

        <div className="servicios__grilla">
          {traducir(paquetes, idioma, paquetesEn).map((p) => (
            <TarjetaPaquete key={p.id} paquete={p} />
          ))}
        </div>

        <div className="planes">
          {traducir(planes, idioma, planesEn).map((plan) => (
            <div className="plan" key={plan.nombre}>
              <span className="etiqueta">{t.planMensual}</span>
              <h3>{plan.nombre}</h3>
              <p className="plan__precio">
                {formatearPrecio(plan.precio, idioma)}
                {t.mes}
              </p>
              <ul>
                {plan.incluye.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="plan">
            <span className="etiqueta">{t.sinPago}</span>
            <h3>{t.mesAMes}</h3>
            <ul>
              {traducir(sinPagoInicial, idioma, sinPagoInicialEn).map((s) => (
                <li key={s.paquete}>
                  {s.paquete}: {formatearPrecio(s.mensual, idioma)}
                  {t.mes}
                </li>
              ))}
            </ul>
            <p className="nota">{t.sinPagoNota}</p>
          </div>
        </div>

        <p className="nota">{t.pagoNota}</p>
      </div>
    </section>
  );
}
