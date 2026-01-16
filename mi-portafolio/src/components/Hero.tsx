import React from 'react';
import { FaGithub, FaLinkedin, FaFileDownload, FaArrowRight } from 'react-icons/fa';
import { profileData } from '../data';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Fondo de Ingeniería (Grid + Glow sutil) */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        
        {/* Badge Técnico */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-slate-900 border border-slate-700/50 text-slate-400 text-xs font-mono tracking-wider animate-fade-in-up shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Available for Hire
        </div>

        {/* Título Profesional Completo */}
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight animate-fade-in-up [animation-delay:200ms]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Ingeniero en Tecnologías
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            de la Información y Comunicación
          </span>
        </h1>
        
        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up [animation-delay:400ms]">
          {profileData.subHeadline}
        </p>
        
        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up [animation-delay:600ms]">
          <a 
            href="#projects" 
            className="group px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-900/20"
          >
            Ver Portafolio 
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
          </a>
          
          <a 
            href="/cv.pdf" 
            className="px-6 py-3 bg-transparent text-slate-300 border border-slate-700 font-medium rounded-lg hover:text-white hover:border-slate-500 transition-all flex items-center gap-2"
          >
            <FaFileDownload size={14} /> CV / Resumen
          </a>
        </div>

        {/* Redes Sociales */}
        <div className="mt-12 flex justify-center gap-6 animate-fade-in-up [animation-delay:800ms] opacity-80">
          {[
            { icon: FaGithub, link: profileData.social.github },
            { icon: FaLinkedin, link: profileData.social.linkedin }
          ].map((social, idx) => (
            <a 
              key={idx}
              href={social.link} 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-colors"
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};