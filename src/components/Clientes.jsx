import React, { useState } from 'react';
import cliente1 from '../clientes/cliente1.jpeg';
import cliente2 from '../clientes/cliente2.jpeg';
import cliente3 from '../clientes/cliente3.jpeg';
import cliente4 from '../clientes/cliente4.jpeg';
import cliente5 from '../clientes/cliente5.jpeg';
import cliente6 from '../clientes/cliente6.jpeg';
import cliente7 from '../clientes/cliente7.jpeg';
import cliente8 from '../clientes/cliente8.jpeg';
import cliente9 from '../clientes/cliente9.jpeg';
import cliente10 from '../clientes/cliente10.jpeg';
import cliente11 from '../clientes/cliente11.jpeg';
import cliente12 from '../clientes/cliente12.jpeg';

const clientesData = [
  { imagen: cliente1, descripcion: 'Entrega e instalación de mesa para televisor en espacio residencial.' },
  { imagen: cliente2, descripcion: 'Montaje completo de centro de entretenimiento en sala principal.' },
  { imagen: cliente3, descripcion: 'Armado de clóset modular de 2.30 metros, con división interna personalizada.' },
  { imagen: cliente4, descripcion: 'Ensamble de clóset compacto de 1.80 metros, ideal para habitaciones medianas.' },
  { imagen: cliente5, descripcion: 'Entrega de escritorio extensible, funcional para oficina o estudio en casa.' },
  { imagen: cliente6, descripcion: 'Armado de cómoda para habitación, optimizando el espacio con amplio almacenamiento.' },
  { imagen: cliente7, descripcion: 'Instalación de centro de entretenimiento con soporte para pantalla y accesorios.' },
  { imagen: cliente8, descripcion: 'Presentación de productos en sus empaques originales, listos para entrega o envío.' },
  { imagen: cliente9, descripcion: 'Entrega de escritorio gamer sencillo, perfecto para espacios reducidos.' },
  { imagen: cliente10, descripcion: 'Montaje de escritorio-biblioteca extensible, ideal para estudiantes o teletrabajo.' },
  { imagen: cliente11, descripcion: 'Entrega de clóset de 2 metros con maletero superior, ideal para almacenamiento adicional.' },
  { imagen: cliente12, descripcion: 'Servicio de domicilios en Cali y envíos a nivel nacional a través de Inter Rapidísimo.' },
];


function Clientes() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCliente, setSelectedCliente] = useState(null);

  const openModal = (cliente) => {
    setSelectedCliente(cliente);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCliente(null);
  };

  return (
    <section id="clientes" className="bg-gray-100 py-12 px-6 relative">
      {/* Encabezado */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#2d5d25]">Nuestros Clientes</h2>
      </div>

      {/* Grid de clientes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clientesData.map((cliente, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl overflow-hidden text-center min-h-[450px] flex flex-col cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => openModal(cliente)}
          >
            <img
              src={cliente.imagen}
              alt={`Cliente ${index + 1}`}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-6 flex-1 flex items-center justify-center">
              <p className="text-gray-700 text-lg">{cliente.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedCliente && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white w-11/12 md:w-4/5 lg:w-3/4 xl:w-[1000px] h-[600px] rounded-lg overflow-hidden flex relative">
            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-700 text-2xl font-bold z-10 hover:text-red-600"
            >
              &times;
            </button>

            {/* Imagen (70%) */}
            <div className="w-[70%] h-full bg-gray-100 flex items-center justify-center">
              <img
                src={selectedCliente.imagen}
                alt="Cliente"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Descripción (30%) */}
            <div className="w-[30%] h-full p-6 flex items-center justify-center bg-white border-l border-gray-200">
              <p className="text-gray-700 text-lg text-center">
                {selectedCliente.descripcion}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Clientes;

