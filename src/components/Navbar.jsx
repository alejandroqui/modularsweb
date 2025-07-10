import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass =
    "text-white hover:text-[#fdf6ec] no-underline transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium";

  return (
    <nav className="bg-[#2d5d25] text-white fixed top-0 w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#Navbar">
              <img
                src="/Logo.png"
                alt="Logo"
                className="h-16"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#Navbar" className={navLinkClass}>Inicio</a>
            <a href="#productos" className={navLinkClass}>Productos</a>
            <a href="#clientes" className={navLinkClass}>Nuestros clientes</a>
            <a href="#nosotros" className={navLinkClass}>Nosotros</a>
            <a href="#faq" className={navLinkClass}>Preguntas frecuentes</a>
            <a href="#contacto" className={navLinkClass}>Contáctanos</a>
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            <a href="#Navbar" onClick={() => setIsOpen(false)} className={`${navLinkClass} block`}>Inicio</a>
            <a href="#productos" onClick={() => setIsOpen(false)} className={`${navLinkClass} block`}>Productos</a>
            <a href="#clientes" onClick={() => setIsOpen(false)} className={`${navLinkClass} block`}>Nuestros clientes</a>
            <a href="#nosotros" onClick={() => setIsOpen(false)} className={`${navLinkClass} block`}>Nosotros</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className={`${navLinkClass} block`}>Preguntas frecuentes</a>
            <a href="#contacto" onClick={() => setIsOpen(false)} className={`${navLinkClass} block`}>Contáctanos</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
