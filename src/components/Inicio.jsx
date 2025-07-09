function Inicio() {
  return (
    <section id="inicio" className="bg-gray-100">
      {/* Banner */}
      <div className="w-full">
        <img
          src="/Banner.jpg"
          alt="Banner"
          className="w-full h-[180px] md:h-[300px] object-cover object-right md:object-center"
        />
      </div>

      {/* Tarjetas */}
      <div className="w-full px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tarjeta Productos */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full flex flex-col items-center justify-center min-h-[250px] text-center">
          <h2 className="text-2xl font-semibold text-[#2d5d25] mb-4">Nuestros Productos</h2>
          <p className="text-gray-700">
            Escritorios modulares sencillos, tipo L y gamer.<br />
            Closets y cajoneras de diferentes tamaños y estilos.<br />
            Camas modulares y base camas.<br />
            Centros de entretenimiento y mesas de televisión.
          </p>
        </div>

        {/* Tarjeta Servicios */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full flex flex-col items-center justify-center min-h-[250px] text-center">
          <h2 className="text-2xl font-semibold text-[#2d5d25] mb-4">Nuestros Servicios</h2>
          <p className="text-gray-700">
            Asesoría en diseño de interiores para optimizar tus espacios.<br />
            Instalación de muebles.<br />
            Opciones de financiamiento para adaptarse a tu presupuesto.<br />
            Garantía de calidad y servicio postventa.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
