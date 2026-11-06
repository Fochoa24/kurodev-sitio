import { Contacto } from '../components/Contacto';
import { Hero } from '../components/Hero';
import { Proceso } from '../components/Proceso';
import { Proyectos } from '../components/Proyectos';
import { Servicios } from '../components/Servicios';
import { SobreMi } from '../components/SobreMi';

export function Inicio() {
  return (
    <>
      <Hero />
      <Proyectos />
      <Servicios />
      <Proceso />
      <SobreMi />
      <Contacto />
    </>
  );
}
