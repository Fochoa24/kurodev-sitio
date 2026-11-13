import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BotonWhatsApp } from './components/BotonWhatsApp';
import { AvisoIdioma } from './components/AvisoIdioma';
import { Inicio } from './pages/Inicio';
import { Caso } from './pages/Caso';
import { NoEncontrado } from './pages/NoEncontrado';
import { ScrollAlCambiar } from './components/ScrollAlCambiar';
import { useIdioma } from './lib/idioma';
import './styles.css';

/** La app sin router: main.tsx usa BrowserRouter y entry-server.tsx StaticRouter. */
export default function App() {
  const { t } = useIdioma();
  return (
    <>
      <ScrollAlCambiar />
      <a className="saltar" href="#contenido">
        {t.saltar}
      </a>
      <Header />
      <main id="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/proyectos/:slug" element={<Caso />} />
          <Route path="/en" element={<Inicio />} />
          <Route path="/en/proyectos/:slug" element={<Caso />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>
      <Footer />
      <BotonWhatsApp />
      <AvisoIdioma />
    </>
  );
}
