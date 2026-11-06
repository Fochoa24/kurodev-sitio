import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BotonWhatsApp } from './components/BotonWhatsApp';
import { Inicio } from './pages/Inicio';
import { Caso } from './pages/Caso';
import { NoEncontrado } from './pages/NoEncontrado';
import { ScrollAlCambiar } from './components/ScrollAlCambiar';
import './styles.css';

/** La app sin router: main.tsx usa BrowserRouter y entry-server.tsx StaticRouter. */
export default function App() {
  return (
    <>
      <ScrollAlCambiar />
      <a className="saltar" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/proyectos/:slug" element={<Caso />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>
      <Footer />
      <BotonWhatsApp />
    </>
  );
}
