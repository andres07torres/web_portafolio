import React from 'react';
import { skillsCategories } from '../data';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* 2. ENCABEZADO UNIFICADO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tech Stack
          </h2>
          {/* Línea azul característica */}
          <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Arsenal tecnológico enfocado en rendimiento y seguridad.
          </p>
        </div>

        {/* 3. Grid de Categorías */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-900/10 transition-all duration-300 group"
            >
              {/* Título de la Categoría */}
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-3 flex items-center gap-2">
                <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
                {category.title}
              </h3>

              {/* Grid de Habilidades Internas */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-950 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 transition-all duration-300 group/skill"
                  >
                    {/* Icono con color dinámico */}
                    <skill.icon 
                      size={32} 
                      className="text-slate-500 mb-3 transition-colors duration-300 group-hover/skill:scale-110" 
                      style={{ color: skill.color }} // Usa el color original si lo definimos en data.ts, o usa CSS
                    />
                    <span className="text-sm font-medium text-slate-400 group-hover/skill:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};