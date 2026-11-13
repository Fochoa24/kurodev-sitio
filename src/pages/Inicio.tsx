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
import { enRuta, useIdioma } from '../lib/idioma';

const jsonLdBase = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: sitio.nombre,
  image: sitio.url + sitio.ogImage,
  founder: { '@type': 'Person', name: 'Felipe Ochoa' },
  email: contacto.correo,
  telephone: '+' + contacto.whatsapp,
  sameAs: [contacto.instagram],
  priceRange: '$$',
};

export function Inicio() {
  useRevelar();
  const { idioma, t } = useIdioma();
  const jsonLd = { ...jsonLdBase, url: sitio.url + enRuta(idioma, '/'), description: t.descripcion };
  return (
    <>
      <Seo titulo={t.titulo} descripcion={t.descripcion} ruta="/" jsonLd={jsonLd} />
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
