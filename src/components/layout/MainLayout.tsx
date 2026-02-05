import React from "react";
import { Sidebar } from "./Sidebar";
import Grainient from "../backgrounds/Grainient"; 

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    // ❌ CORRECCIÓN DEFINITIVA: Hemos quitado 'overflow-x-hidden'.
    // Al dejar solo 'relative min-h-screen', el navegador usa el scroll del body
    // y el Sidebar podrá quedarse pegado (sticky) sin que nada lo bloquee.
    <div className="relative min-h-screen bg-black text-white selection:bg-orange-500/30">
      
      {/* --- FONDO MAGMA (GRAINIENT) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Grainient
          // CONFIGURACIÓN MAGMA 🔥
          color1="#000000"
          color2="#ffa629"
          color3="#4a1900"
          
          centerX={0.3}
          centerY={0.1}
          zoom={0.8}
          noiseScale={2.5}
          
          // Usamos className para la opacidad (Esto ya está arreglado)
          className="opacity-70"
        />
        
        {/* Capa extra para asegurar que el texto blanco siempre se lea bien */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* --- CONTENIDO --- */}
      <div className="relative z-10 min-h-screen px-6 font-sans md:px-12 lg:px-12 lg:py-0">
        <div className="lg:flex lg:gap-12">
          
          {/* SIDEBAR: Ahora sí funcionará porque su padre no tiene overflow */}
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