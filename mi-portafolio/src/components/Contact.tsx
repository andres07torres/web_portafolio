import React from 'react';
import { FaEnvelope, FaPaperPlane, FaUser, FaCommentAlt } from 'react-icons/fa';
import { profileData } from '../data';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      
      {/* Fondo Grid sutil */}
      <div className="absolute inset-0 bg-slate-950">
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        
        {/* Encabezado Limpio */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Contáctame
          </h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-400 max-w-lg mx-auto">
            ¿Tienes alguna propuesta o consulta? Envíame un mensaje y te responderé lo antes posible.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          
          {/* Tarjeta de Email (Izquierda) */}
          <div className="md:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col justify-center items-center text-center h-full hover:border-blue-500/30 transition-colors shadow-lg">
            <div className="p-4 bg-blue-500/10 rounded-full text-blue-400 mb-4">
              <FaEnvelope size={28} />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Email Directo</h3>
            <p className="text-slate-400 text-sm mb-6">
              Puedes escribirme directamente a mi correo personal:
            </p>
            <a 
              href={profileData.social.email}
              className="w-full py-3 bg-slate-800 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group border border-slate-700 hover:border-blue-500"
            >
              <span>Enviar Correo</span>
              <FaPaperPlane size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Formulario Estándar (Derecha) */}
          <div className="md:col-span-3 bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-2xl">
            <form className="space-y-5">
              
              {/* Input Nombre */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                  <FaUser size={12} className="text-blue-500" /> Nombre Completo
                </label>
                <input 
                  type="text" 
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" 
                  placeholder="Ej. Juan Pérez" 
                />
              </div>

              {/* Input Email */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                  <FaEnvelope size={12} className="text-blue-500" /> Correo Electrónico
                </label>
                <input 
                  type="email" 
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" 
                  placeholder="Ej. juan@empresa.com" 
                />
              </div>

              {/* Textarea Mensaje */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                  <FaCommentAlt size={12} className="text-blue-500" /> Mensaje
                </label>
                <textarea 
                  rows={4} 
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 resize-none" 
                  placeholder="Escribe aquí los detalles..."
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-blue-600/20 transform hover:-translate-y-0.5 transition-all duration-300 flex justify-center items-center gap-2"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};