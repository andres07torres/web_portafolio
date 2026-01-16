import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { profileData } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-950 pt-16 pb-8 border-t border-slate-900 overflow-hidden">
      
      {/* 1. Fondo Grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        
        {/* GRID PRINCIPAL: Agregamos 'text-center' general */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center">
          
          {/* Columna 1: Info Marca (Centrada) */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
              {profileData.name}
            </h3>
            {/* mx-auto para centrar el bloque de texto limitado */}
            <p className="text-slate-400 leading-relaxed text-sm max-w-xs mx-auto">
              {profileData.role}. <br/>
              Desarrollando software seguro, eficiente y escalable para el mundo real.
            </p>
          </div>

          {/* Columna 2: Navegación (Centrada) */}
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-white mb-4 text-lg">Navegación</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#home" className="hover:text-blue-500 transition-colors duration-300">Inicio</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors duration-300">Sobre Mí</a></li>
              <li><a href="#projects" className="hover:text-blue-500 transition-colors duration-300">Proyectos</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 3: Redes Sociales (Centrada) */}
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-white mb-4 text-lg">Conectemos</h4>
            {/* justify-center para centrar los iconos horizontalmente */}
            <div className="flex justify-center gap-4">
              <a 
                href={profileData.social.github} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href={profileData.social.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href={profileData.social.email} 
                className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Barra de Copyright (Ya estaba centrada) */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} <span className="text-slate-300 font-medium">{profileData.name}</span>. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};