import React from "react";
import { Sidebar } from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-teal-400/30">
      
      {/* Usamos max-w-[1280px] para controlar mejor los márgenes */}
      <div className="mx-auto min-h-screen max-w-[1280px] px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* 👈 COLUMNA IZQUIERDA (SIDEBAR) */}
          {/* FIX: 'max-h-screen' cambiada a 'h-screen sticky'. 
             Añadido 'overflow-y-auto' para que si la pantalla es bajita, puedas bajar en el menú.
             Quitado scrollbar para que sea invisible pero funcional. */}
          <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24 overflow-y-auto no-scrollbar">
            <Sidebar />
          </header>

          {/* 👉 COLUMNA DERECHA (CONTENIDO) */}
          <main className="pt-24 lg:w-[55%] lg:py-24">
            {children}
          </main>

        </div>
      </div>
    </div>
  );
};