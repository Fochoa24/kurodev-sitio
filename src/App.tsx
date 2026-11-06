import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BotonWhatsApp } from './components/BotonWhatsApp';
import { Inicio } from './pages/Inicio';
import './styles.css';

export default function App() {
  return (
    <BrowserRouter>
      <a className="saltar" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Inicio />
      </main>
      <Footer />
      <BotonWhatsApp />
    </BrowserRouter>
  );
}
