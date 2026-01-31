import React from "react";
import { Sidebar } from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-teal-400/30">
      
      {/* CAMBIOS CLAVE:
         1. Quitamos 'mx-auto' y 'max-w'. Ahora ocupa todo el ancho.
         2. Mantenemos 'px-6' para que el texto no toque literalmente el borde del monitor (se vería mal),
            pero está mucho más pegado a la izquierda.
      */}
      <div className="min-h-screen px-6 py-12 font-sans md:px-12 md:py-20 lg:px-12 lg:py-0">
        
        <div className="lg:flex lg:justify-between lg:gap-12">
          
          {/* 👈 COLUMNA IZQUIERDA (SIDEBAR) */}
          {/* CAMBIO IMPORTANTE: 'lg:w-[350px]'. 
             Antes era un % (33% o 45%), ahora es un tamaño fijo y estrecho.
             'shrink-0' asegura que no se encoja.
          */}
          <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[350px] lg:shrink-0 lg:flex-col lg:justify-between lg:py-24 overflow-y-auto no-scrollbar">
            <Sidebar />
          </header>

          {/* 👉 COLUMNA DERECHA (CONTENIDO) */}
          {/* 'flex-1' significa: "Coge todo el espacio que sobre a la derecha" */}
          <main className="pt-24 lg:flex-1 lg:py-24 lg:pl-12 xl:pl-24">
            {children}
          </main>

        </div>
      </div>
    </div>
  );
};