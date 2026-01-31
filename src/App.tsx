import { MainLayout } from "./components/layout/MainLayout";
import { Intro } from "./sections/Intro/Intro";         // Tu presentación (Texto largo)
import { Experience } from "./sections/Experiencie/Experiencie"; // Tus trabajos anteriores
import { Projects } from "./sections/Projects/Projects"; // Tus proyectos
import { Skills } from "./sections/Skills/Skills";       // Tus habilidades

function App() {
  return (
    <MainLayout>
      
      {/* 1. INTRODUCCIÓN (ID="about") 
          Esto es lo primero que se ve arriba a la derecha. 
      */}
      <section id="about" className="mb-16 md:mb-24 lg:mb-32 scroll-mt-24">
        <Intro />
      </section>

      <section id="skills" className="mb-16 md:mb-24 lg:mb-32 scroll-mt-24">
        <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-gray-500 hidden lg:block">
          Skills
        </h2>
        <Skills />
      </section>

      {/* 2. EXPERIENCIA (ID="experience") 
          Lista de trabajos con fechas.
      */}
      <section id="experience" className="mb-16 md:mb-24 lg:mb-32 scroll-mt-24">
        <Experience />
      </section>

      {/* 3. PROYECTOS (ID="projects") */}
      <section id="projects" className="mb-16 md:mb-24 lg:mb-32 scroll-mt-24">
        {/* Título pequeño estilo Resumx para separar secciones visualmente */}
        <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-gray-500 hidden lg:block">
          Proyectos
        </h2>
        <Projects />
      </section>

      {/* 4. SKILLS (ID="skills") */}
      

      {/* NOTA: He quitado <Contact /> porque tus datos de contacto 
          ya están fijos y visibles todo el tiempo en el Sidebar izquierdo.
          Así queda más limpio, como en tus fotos de referencia. 
      */}

    </MainLayout>
  );
}

export default App;