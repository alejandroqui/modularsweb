import React from 'react';
import ceo from '../us/ceo.jpeg';
import logo from '../us/Logo-Modular.png';

function Nosotros() {
  return (
    <section id="nosotros" className="py-12 px-6" style={{ backgroundColor: '#fdf6ec' }}>
      {/* Encabezado */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#2d5d25]">Nosotros</h2>
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Tarjeta CEO */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col">
          <div className="w-full h-[240px]">
            <img
              src={ceo}
              alt="CEO"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-[#2d5d25] mb-2">Nuestros CEO</h3>
            <p className="text-gray-700 text-sm">
              Nuestros CEO han liderado las operaciones de <strong>Outlet Modular</strong> desde 2020, 
              innovando y ofreciendo productos funcionales y estéticamente agradables.
              <br /><br />
              Gracias a su liderazgo, nuestra compañía se ha establecido como un referente en el mercado, 
              siempre buscando la satisfacción del cliente.
            </p>
          </div>
        </div>

        {/* Tarjeta Logo */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden flex items-center justify-center p-6">
          <img
            src={logo}
            alt="Logo Outlet Modular"
            className="w-[80%] max-w-[300px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Nosotros;

