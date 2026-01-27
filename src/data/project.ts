import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "Panel de administración completo con gráficos en tiempo real y gestión de inventario.",
    image: "/assets/images/projects/dashboard.png", // imagen representativa del proyecto 
    technologies: ["React", "TypeScript", "Tailwind", "Recharts"],
    link: "https://tu-proyecto.com",
    github: "https://github.com/tu-usuario/repo",
    size: "large", // Ocupará 2 columnas
  },
  {
    id: 2,
    title: "Task Manager App",
    description: "Aplicación de productividad tipo Trello con drag & drop.",
    image: "/assets/images/projects/tasks.png",
    technologies: ["React", "Zustand", "Framer Motion"],
    link: "https://tu-proyecto.com",
    size: "medium", // Ocupará 1 columna normal
  },
  {
    id: 3,
    title: "Weather Widget",
    description: "Consumo de API del tiempo con geolocalización.",
    image: "/assets/images/projects/weather.png",
    technologies: ["TypeScript", "OpenWeatherMap"],
    link: "https://tu-proyecto.com",
    size: "small", //Ocupa columna pequeña 
  },
  {
    id: 4,
    title: "Portfolio v1",
    description: "Mi primer sitio web personal minimalista.",
    image: "/assets/images/projects/portfolio.png",
    technologies: ["HTML", "CSS", "JS"],
    size: "small", 
  },
];