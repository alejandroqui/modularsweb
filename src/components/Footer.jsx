import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logo from '../us/Logo_Positivo.png'; // Ajusta la ruta si es necesario

function Footer() {
  return (
    <footer className="bg-[#2d5d25] text-white py-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
        
        {/* Redes Sociales */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold mb-2">Síguenos</h3>
          <div className="flex gap-4 text-4xl">
            <a href="https://www.facebook.com/share/19wFWcax9f/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/573052423779" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com/modulars.co" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contacto */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold mb-2">Contáctanos</h3>
          <p className="flex items-center gap-2 text-[#fdf6ec]"><FaPhoneAlt /> +57 318 565 0274</p>
          <p className="flex items-center gap-2 text-[#fdf6ec]"><FaPhoneAlt /> +57 315 409 8031</p>
          <p className="flex items-center gap-2 text-[#fdf6ec]"><FaEnvelope /> outletmodular@gmail.com</p>
        </div>

        {/* Direcciones */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold mb-2">Nuestras sedes</h3>
          <p>Calle 44 # 27a-15, Barrio Sindical</p>
          <p>Carrera 24a # 42-32, Barrio Asturias </p>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center md:justify-end">
          <img src={logo} alt="Logo Outlet Modular" className="w-60 object-contain" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
