import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaTerminal } from 'react-icons/fa';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función segura para el Toggle del menú
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que el clic "pase" a elementos de fondo
    setIsOpen((prev) => !prev); // Asegura que siempre use el estado real anterior
  };

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Stack', href: '#skills' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Proyectos', href: '#projects' },
  ];

  return (
    <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      
      <style>{`
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.9) translateY(-10px); }
          60% { opacity: 1; transform: scale(1.03) translateY(0); }
          100% { transform: scale(1); }
        }
        .animate-pop-in {
          animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>

      <nav className={`mx-auto max-w-5xl px-6 transition-all duration-300 relative ${
        scrolled 
          ? 'bg-slate-900/90 backdrop-blur-md border border-slate-800 shadow-lg shadow-blue-500/10 rounded-full py-2.5' 
          : 'bg-transparent border-transparent py-2'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 font-bold text-xl text-white tracking-tighter cursor-pointer hover:opacity-80 transition-opacity">
            <div className="p-1.5 bg-blue-600 rounded-lg text-white">
              <FaTerminal size={16} />
            </div>
            <span>Andr3s<span className="text-blue-500">Dev</span></span>
          </a>
          
          {/* Menú de Escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-sm font-medium text-slate-300 hover:text-white hover:scale-105 transition-all"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="px-5 py-2 bg-white text-slate-900 font-bold rounded-full text-sm hover:bg-blue-50 transition-colors shadow-lg shadow-white/10">
              Contactar
            </a>
          </div>

          {/* Botón Hamburguesa (Móvil) CORREGIDO */}
          <div 
            className="md:hidden text-white cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-colors select-none touch-manipulation" 
            onClick={toggleMenu}
            style={{ WebkitTapHighlightColor: 'transparent' }} // Quita el flash azul en móviles al hacer click
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </div>
        </div>

        {/* Menú Móvil */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-3 px-2 md:hidden">
            <div className="animate-pop-in bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl p-4 shadow-2xl flex flex-col items-center space-y-3">
              
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 w-full text-center py-2.5 rounded-lg transition-colors active:scale-95"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="w-full h-px bg-slate-800 my-1"></div>
              
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold text-blue-400 w-full text-center py-2.5 border border-blue-500/30 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors active:scale-95"
              >
                Contactar
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};