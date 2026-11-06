import { Contacto } from '../components/Contacto';
import { Hero } from '../components/Hero';
import { Proceso } from '../components/Proceso';
import { Proyectos } from '../components/Proyectos';
import { Servicios } from '../components/Servicios';
import { SobreMi } from '../components/SobreMi';
import { Seo } from '../components/Seo';
import { contacto } from '../data/contacto';
import { sitio } from '../data/sitio';

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
  return (
    <>
      <Seo titulo={sitio.titulo} descripcion={sitio.descripcion} ruta="/" jsonLd={jsonLd} />
      <Hero />
      <Proyectos />
      <Servicios />
      <Proceso />
      <SobreMi />
      <Contacto />
    </>
  );
}
