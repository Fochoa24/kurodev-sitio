import { paquetes } from '../data/paquetes';
import { planes, sinPagoInicial } from '../data/planes';
import { formatearPrecio } from '../lib/precio';
import { TarjetaPaquete } from './TarjetaPaquete';

export function Servicios() {
  return (
    <section className="seccion" id="servicios" aria-labelledby="titulo-servicios">
      <div className="contenedor">
        <div className="seccion__cabecera">
          <span className="etiqueta">Servicios</span>
          <h2 id="titulo-servicios">Elige cómo partir</h2>
          <p>Paquetes cerrados, con precio claro. Todos incluyen 3 meses del plan Básico.</p>
        </div>

        <div className="franja-fundador">
          <span className="etiqueta">Cupo fundador</span>
          <span>Precio especial para mis 3 primeros clientes.</span>
        </div>

        <div className="servicios__grilla">
          {paquetes.map((p) => (
            <TarjetaPaquete key={p.id} paquete={p} />
          ))}
        </div>

        <div className="planes">
          {planes.map((plan) => (
            <div className="plan" key={plan.nombre}>
              <span className="etiqueta">Plan mensual</span>
              <h3>{plan.nombre}</h3>
              <p className="plan__precio">{formatearPrecio(plan.precio)}/mes</p>
              <ul>
                {plan.incluye.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="plan">
            <span className="etiqueta">Sin pago inicial</span>
            <h3>Paga mes a mes</h3>
            <ul>
              {sinPagoInicial.map((s) => (
                <li key={s.paquete}>
                  {s.paquete}: {formatearPrecio(s.mensual)}/mes
                </li>
              ))}
            </ul>
            <p className="nota">$0 al inicio, con permanencia mínima de 12 meses. Incluye el plan Básico.</p>
          </div>
        </div>

        <p className="nota">Pago: 50% de anticipo y 50% al entregar. Incluye 2 rondas de cambios.</p>
      </div>
    </section>
  );
}
