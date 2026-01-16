# 🚀 Mi Portafolio Profesional - Andr3sDev

![Estado](https://img.shields.io/badge/Estado-En%20Desarrollo-yellow)

Este es mi portafolio personal desarrollado con **React**, **TypeScript** y **Tailwind CSS**. Aquí muestro mi trayectoria profesional, mi stack tecnológico y mis proyectos destacados.

## 🛠️ Tecnologías utilizadas ##

- **Frontend**:  
  ⚛️ React.js &nbsp; | &nbsp; 🟦 TypeScript  

- **Estilos**:  
  🎨 Tailwind CSS  

- **Iconos**:  
  🔹 React Icons  

- **Herramienta de construcción**:  
  ⚡ Vite  

## 📋 Secciones del proyecto

El proyecto está organizado en componentes modulares:
* **Perfil Profesional**: Resumen de mis capacidades y enfoque.
* **Tech Stack**: Detalle de mi arsenal tecnológico.
* **Experiencia**: Línea de tiempo de mi trayectoria.
* **Proyectos**: Galería de trabajos realizados con demos y repositorios.

## ⚠️ Reglas del Flujo de Trabajo (Git Workflow)

Para asegurar la integridad del proyecto y evitar conflictos durante la colaboración, **todo el equipo debe cumplir estrictamente las siguientes reglas**:

### 1. 🚫 Prohibido subir a `master` (o `main`)
* La rama `master` está reservada exclusivamente para la versión final y estable del proyecto.
* **No hacer `git push` directo a `master`** mientras el desarrollo esté en curso.
* **IMPORTANTE:** Se debe trabajar **siempre en su rama asignada** siguiendo el formato `develop_nombreasignado` (ej: `develop_juan`, `develop_maria`). Solo se fusionará al final mediante un Pull Request.

### 2. 🔄 Rutina de Actualización Obligatoria
Antes de empezar a editar código o intentar subir cambios, siempre se debe verificar el estado del repositorio remoto para evitar conflictos:

```bash
# PASO 1: Verificar cambios remotos sin fusionar
git fetch

# PASO 2: Actualizar tu rama local con los cambios del equipo
# Asegúrate de estar en tu rama: develop_nombreasignado
git pull origin develop_[tu_nombre]
