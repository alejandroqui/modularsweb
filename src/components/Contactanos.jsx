import React from 'react';

function Contactanos() {
  return (
    <section id="contacto" className="py-12 px-6 scroll-mt-24" style={{ backgroundColor: '#000' }}>
      {/* Encabezado */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">Contáctanos</h2>
      </div>

      {/* Formulario */}
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <form
          action="https://formspree.io/f/mzzglqay"
          method="POST"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2d5d25]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2d5d25]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="telefono">
              Teléfono
            </label>
            <input
              type="tel"
              name="telefono"
              id="telefono"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2d5d25]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="mensaje">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              id="mensaje"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2d5d25]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2d5d25] text-white py-2 rounded-md hover:bg-green-800 transition duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contactanos;

