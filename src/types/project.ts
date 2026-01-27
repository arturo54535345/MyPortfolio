export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;      //ruta de la imagen
  technologies: string[]; //React, Tailwind 
  link?: string;      // El ? significa que es opcional puede que no tenga link
  github?: string;    // Opcional
  size: "small" | "medium" | "large"; // Clave para el diseño Bento Grid
}