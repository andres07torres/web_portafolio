import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../data';

export const Projects: React.FC = () => {
  return (
    <main id="projects" className="max-w-6xl mx-auto px-4 py-24">
      {/* ENCABEZADO: Alineado a la izquierda con línea de degradado */}
      <div className="mb-16 text-left">
        <h2 className="text-3xl font-bold text-white mb-4">
          Proyectos Destacados
        </h2>
        {/* Línea idéntica a Perfil Profesional */}
        <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
      </div>
      
      {/* Grid de Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
};