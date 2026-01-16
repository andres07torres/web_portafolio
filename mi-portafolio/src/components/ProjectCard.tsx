import React from 'react';
import type { Project } from '../data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative h-[450px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-lg hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500">
      
      {/* 1. Imagen de Fondo con Efecto */}
      <div className="absolute inset-0 w-full h-full">
        {/* Overlay oscuro base para que no brille tanto al inicio */}
        <div className="absolute inset-0 bg-slate-950/30 z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
      </div>

      {/* 2. Capa de Gradiente (Aparece fuerte al hacer hover para leer el texto) */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>

      {/* 3. Contenido (Z-Index alto para estar sobre la imagen) */}
      <div className="absolute inset-0 z-30 flex flex-col justify-end p-6 md:p-8">
        
        {/* Contenedor que se desliza hacia arriba */}
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          
          {/* Título y Línea Decorativa */}
          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
            {project.title}
          </h3>
          <div className="h-1 w-12 bg-blue-500 rounded-full mb-4 group-hover:w-full transition-all duration-700 ease-in-out"></div>

          {/* Descripción (Visible pero discreta, se ilumina al hover) */}
          <p className="text-slate-400 text-sm mb-6 line-clamp-3 group-hover:text-slate-200 transition-colors duration-300">
            {project.description}
          </p>

          {/* Tags Tecnológicos */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-mono font-medium text-blue-300 bg-blue-950/50 border border-blue-500/30 rounded-full backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* Botones de Acción (Ocultos inicialmente, suben y aparecen) */}
          <div className="grid grid-cols-2 gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
            <a 
              href={project.repoLink} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-800 hover:bg-white hover:text-slate-950 text-white font-bold text-sm transition-all border border-slate-700 hover:border-white"
            >
              <FaGithub size={16} /> Código
            </a>
            
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg hover:shadow-blue-500/50"
            >
              <FaExternalLinkAlt size={14} /> Demo Live
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};