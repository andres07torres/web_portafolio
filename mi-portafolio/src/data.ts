import { 
  SiReact, SiTypescript, SiTailwindcss, SiPython, SiNodedotjs, SiPostgresql, 
  SiDocker, SiLinux, SiGit, SiAndroid, SiKotlin, SiTensorflow, SiMongodb 
} from "react-icons/si";

import { 
  FaShieldHalved, FaWifi, FaDatabase, FaServer, FaCode, FaGithub, 
  FaLinkedin, FaEnvelope, FaLaptopCode, FaNetworkWired,
  FaAws // AGREGADO: Usamos este que es seguro
} from "react-icons/fa6";

// --- Interfaces ---
export interface Skill {
  name: string;
  icon: any;
  color?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  repoLink: string;
  demoLink: string;
  image: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

// --- Datos ---

export const profileData = {
  name: "Andr3s Dev 7",
  role: "Ingeniero en TICs & Especialista en Ciberseguridad",
  subHeadline: "",
  bio: "Ingeniero enfocado en la convergencia entre desarrollo robusto y seguridad informática. Transformo requisitos complejos en sistemas eficientes, seguros y de alta disponibilidad.",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:tu@email.com"
  }
};

// Lista Categorizada
export const skillsCategories: SkillCategory[] = [
  {
    title: "Frontend & UI",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ]
  },
  {
    title: "Backend & Datos",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ]
  },
  {
    title: "DevOps & Mobile",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "AWS", icon: FaAws, color: "#FF9900" }, // CORREGIDO AQUÍ
      { name: "Android", icon: SiAndroid, color: "#3DDC84" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
    ]
  }
];

// Lista Plana (Carrusel)
export const skillsData: Skill[] = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Python", icon: SiPython },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Android", icon: SiAndroid },
  { name: "Kotlin", icon: SiKotlin },
  { name: "Docker", icon: SiDocker },
  { name: "Linux", icon: SiLinux },
  { name: "AWS", icon: FaAws }, // CORREGIDO AQUÍ
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Seguridad", icon: FaShieldHalved },
];

export const experienceData: Experience[] = [
  {
    id: 1,
    role: "Ingeniero de Software Full Stack",
    company: "Tech Solutions Inc.",
    period: "2024 - Presente",
    achievements: [
      "Optimización de consultas SQL reduciendo latencia en un 40%.",
      "Implementación de CI/CD pipelines con GitHub Actions."
    ]
  },
  {
    id: 2,
    role: "Analista de Redes y Seguridad",
    company: "ISP Connect",
    period: "2023 - 2024",
    achievements: [
      "Hardening de servidores Linux y configuración de Firewalls.",
      "Auditoría de vulnerabilidades con herramientas de pentesting."
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Handy - Traductor IA",
    description: "App móvil nativa con integración de Machine Learning para traducción de lenguaje de señas en tiempo real.",
    tags: ["Kotlin", "Android", "TensorFlow", "MVVM"],
    repoLink: "https://github.com",
    demoLink: "#",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "SecureNet Monitor",
    description: "Dashboard de ciberseguridad para visualización de amenazas y análisis de paquetes de red en tiempo real.",
    tags: ["Python", "Django", "React", "WebSockets"],
    repoLink: "https://github.com",
    demoLink: "#",
    image: "https://images.unsplash.com/photo-1558494949-efc02570fbc9?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Cloud Inventory API",
    description: "Microservicios para gestión de activos TI con autenticación JWT y despliegue serverless.",
    tags: ["Node.js", "Express", "MongoDB", "Docker"],
    repoLink: "https://github.com",
    demoLink: "#",
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=1000",
  }
];