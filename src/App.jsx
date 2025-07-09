import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Productos from './components/Productos';
import Clientes from './components/Clientes';
import Nosotros from './components/Nosotros';
import FAQ from './components/FAQ';
import Contactanos from './components/Contactanos';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      {/* Espaciador para compensar el navbar fijo */}
      <div className="h-20" />
      <main className="p-0">
        <Inicio />
        <Productos />
        <Clientes />
        <Nosotros />
        <FAQ />
        <Contactanos />
        <Footer />
      </main>
    </>
  );
}

export default App;

