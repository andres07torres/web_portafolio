import React from 'react';
import { experienceData } from '../data';
import { FaCalendarAlt, FaBuilding, FaLaptopCode } from 'react-icons/fa';

export const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Trayectoria Profesional
          </h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Desarrollo y crecimiento técnico a través de roles clave.
          </p>
        </div>

        {/* GRID LAYOUT: 1 columna en móvil, 2 en escritorio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {experienceData.map((exp, index) => (
            <div 
              key={exp.id} 
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:bg-slate-900 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-900/10 flex flex-col"
            >
              {/* Decoración: Número de paso sutil en el fondo */}
              <div className="absolute top-4 right-6 text-6xl font-black text-slate-800/50 group-hover:text-blue-900/20 transition-colors select-none pointer-events-none">
                0{index + 1}
              </div>

              {/* Cabecera de la Tarjeta */}
              <div className="flex items-start gap-4 mb-6 relative z-10">
                {/* Icono del Rol */}
                <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-blue-400 shrink-0">
                  <FaLaptopCode size={24} />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight mb-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                    <span className="flex items-center gap-1">
                      <FaBuilding size={10} /> {exp.company}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contenido (Logros) */}
              <div className="flex-grow relative z-10">
                <ul className="space-y-2">
                  {exp.achievements.slice(0, 3).map((item, i) => ( // Opcional: slice(0,3) limita a 3 logros para que no sea muy larga
                    <li key={i} className="flex items-start gap-2 text-slate-400 text-sm leading-snug">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer de Tarjeta: Fecha */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center relative z-10">
                <span className="inline-flex items-center gap-2 text-xs font-mono text-blue-300 bg-blue-900/20 px-3 py-1 rounded-full border border-blue-500/20">
                  <FaCalendarAlt size={10} />
                  {exp.period}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};