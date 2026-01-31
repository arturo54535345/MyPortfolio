import React from "react";
import { Sidebar } from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-teal-400/30">
      
      {/* Quitamos mx-auto para que siga pegado a la izquierda */}
      <div className="min-h-screen px-6 py-12 font-sans md:px-12 md:py-20 lg:px-12 lg:py-0">
        
        <div className="lg:flex lg:justify-between lg:gap-12">
          
          {/* 👈 COLUMNA IZQUIERDA (SIDEBAR) - Se queda igual */}
          <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[350px] lg:shrink-0 lg:flex-col lg:justify-between lg:py-24 overflow-y-auto no-scrollbar">
            <Sidebar />
          </header>

          {/* 👉 COLUMNA DERECHA (CONTENIDO) */}
          {/* CAMBIO AQUÍ: Añadimos 'max-w-[1000px]' (o el ancho que prefieras) 
              Esto evita que en pantalla completa se estire demasiado.
          */}
          <main className="pt-24 lg:flex-1 lg:max-w-[1000px] lg:py-24 lg:pl-12 xl:pl-24">
            {children}
          </main>

        </div>
      </div>
    </div>
  );
};