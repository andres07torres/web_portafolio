import React from 'react';
import { profileData } from '../data';
import { FaBolt, FaCode, FaBrain, FaRocket, FaShieldAlt } from 'react-icons/fa';

export const About: React.FC = () => {
  
  const features = [
    {
      icon: FaBolt,
      title: "Resolución Crítica",
      desc: "Diagnóstico y solución de problemas complejos bajo presión.",
      color: "text-yellow-400"
    },
    {
      icon: FaShieldAlt,
      title: "Seguridad Primero",
      desc: "Implementación de buenas prácticas de ciberseguridad desde el diseño.",
      color: "text-red-400"
    },
    {
      icon: FaCode,
      title: "Código Limpio",
      desc: "Arquitectura de software escalable, mantenible y documentada.",
      color: "text-blue-400"
    },
    {
      icon: FaBrain,
      title: "Aprendizaje Ágil",
      desc: "Adaptación continua a nuevas tecnologías y paradigmas.",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-950 overflow-hidden">
      
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Encabezado */}
        <div className="mb-16 text-left">
          {/* CORRECCIÓN: Tamaño ajustado a text-3xl fijo para igualar a las otras secciones */}
          <h2 className="text-3xl font-bold text-white mb-4">
            Perfil Profesional
          </h2>
          {/* Línea decorativa */}
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda: Narrativa */}
          <div className="space-y-6 text-lg leading-relaxed text-slate-400">
            <p>
              Mi viaje en la tecnología no comenzó solo escribiendo código, sino entendiendo <strong className="text-white">cómo funcionan los sistemas desde su núcleo</strong>. 
            </p>
            <p className="p-6 bg-slate-900/50 border-l-4 border-blue-500 rounded-r-xl italic">
              "{profileData.bio}"
            </p>
            <p>
              Como <strong className="text-blue-400">Ingeniero en TICs</strong>, mi enfoque va más allá de que "funcione". Me obsesiona la optimización, la seguridad de la infraestructura y la experiencia de usuario fluida.
            </p>
            
            <div className="pt-4">
              <a href="#contact" className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-400 transition-colors group">
                <FaRocket className="group-hover:-translate-y-1 transition-transform" /> 
                Vamos a construir algo increíble
              </a>
            </div>
          </div>

          {/* Columna Derecha: Grid de Competencias */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/30 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className={`mb-4 p-3 rounded-lg bg-slate-950 w-fit border border-slate-800 group-hover:border-${feature.color.split('-')[1]}-500/30`}>
                  <feature.icon className={`${feature.color} text-xl`} />
                </div>
                <h3 className="text-white font-bold mb-2 group-hover:text-blue-200 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};