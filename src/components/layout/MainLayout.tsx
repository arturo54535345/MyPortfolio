import React from "react";
import { Sidebar } from "./Sidebar";
import Grainient from "../backgrounds/Grainient"; 
import { ThemeToggle } from "../ui/ThemeToggle";
import { LanguageToggle } from "../ui/LanguageToggle"; // 👈 IMPORTAR
import { useTheme } from "../../context/ThemeContext";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  const { theme } = useTheme();

  // 🎨 CONFIGURACIÓN DE COLORES DEL TEMA
  const magmaConfig = theme === 'dark' 
    ? { 
        c1: "#000000", c2: "#ffa629", c3: "#4a1900",
        opacity: "opacity-40", overlay: "bg-black/60"
      }
    : { 
        c1: "#ffffff", c2: "#ffbd59", c3: "#fff5e6",
        opacity: "opacity-60", overlay: "bg-white/30"
      };

  return (
    <div className="relative min-h-screen transition-colors duration-500 bg-slate-50 text-zinc-900 dark:bg-black dark:text-white selection:bg-orange-500/30">
      
      {/* 🔥 ZONA DE BOTONES FLOTANTES (ARRIBA DERECHA) */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      {/* --- FONDO DINÁMICO --- */}
      <div className="fixed inset-0 z-0 pointer-events-none transition-all duration-1000">
        <Grainient
          key={theme}
          color1={magmaConfig.c1}
          color2={magmaConfig.c2}
          color3={magmaConfig.c3}
          centerX={0.3}
          centerY={0.1}
          zoom={0.8}
          noiseScale={2.5}
          className={`${magmaConfig.opacity} transition-all duration-1000`}
        />
        <div className={`absolute inset-0 transition-colors duration-1000 ${magmaConfig.overlay}`} />
      </div>

      {/* --- CONTENIDO --- */}
      <div className="relative z-10 min-h-screen px-6 font-sans md:px-12 lg:px-12 lg:py-0">
        <div className="lg:flex lg:gap-12">
          
          <header className="py-12 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[280px] lg:shrink-0 lg:flex-col lg:justify-between lg:py-24 overflow-y-auto no-scrollbar z-50">
            <Sidebar />
          </header>

          <main className="flex-1 pt-0 pb-12 lg:pt-24 lg:pb-0 min-w-0 w-full lg:max-w-7xl">
            {children}
          </main>

        </div>
      </div>
    </div>
  );
};