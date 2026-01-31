export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  link?: string;
  github?: string;
  size?: "small" | "medium" | "large";
}