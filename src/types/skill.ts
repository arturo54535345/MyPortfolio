import type { LucideIcon } from "lucide-react";

export interface Skill{
    name: string;
    icon: LucideIcon;
    category: "frontend" | "backend" | "tools";
}