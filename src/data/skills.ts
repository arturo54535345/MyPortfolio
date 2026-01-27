import { Code, Palette, Database, Layout, Smartphone, Terminal } from "lucide-react";
import type { Skill } from "../types/skill";

export const skills: Skill[] = [
  {
    name: "React & Next.js",
    icon: Code,
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: Terminal,
    category: "tools",
  },
  {
    name: "Tailwind CSS",
    icon: Palette,
    category: "frontend",
  },
  {
    name: "Node.js",
    icon: Database,
    category: "backend",
  },
  {
    name: "UI/UX Design",
    icon: Layout,
    category: "frontend",
  },
  {
    name: "Responsive Dev",
    icon: Smartphone,
    category: "frontend",
  },
];