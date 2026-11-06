import { Cinta } from '../components/Cinta';
import { Contacto } from '../components/Contacto';
import { Hero } from '../components/Hero';
import { Proceso } from '../components/Proceso';
import { Proyectos } from '../components/Proyectos';
import { Servicios } from '../components/Servicios';
import { SobreMi } from '../components/SobreMi';
import { Seo } from '../components/Seo';
import { contacto } from '../data/contacto';
import { sitio } from '../data/sitio';
import { useRevelar } from '../lib/useRevelar';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: sitio.nombre,
  url: sitio.url,
  description: sitio.descripcion,
  image: sitio.url + sitio.ogImage,
  founder: { '@type': 'Person', name: 'Felipe Ochoa' },
  email: contacto.correo,
  telephone: '+' + contacto.whatsapp,
  sameAs: [contacto.instagram],
  priceRange: '$$',
};

export function Inicio() {
  useRevelar();
  return (
    <>
      <Seo titulo={sitio.titulo} descripcion={sitio.descripcion} ruta="/" jsonLd={jsonLd} />
      <Hero />
      <Cinta />
      <Proyectos />
      <Servicios />
      <Proceso />
      <SobreMi />
      <Contacto />
    </>
  );
}
