import { MainLayout } from "./components/layout/MainLayout";
import { Intro } from "./sections/Intro/Intro";
import { Experience } from "./sections/Experiencie/Experiencie";
import { Projects } from "./sections/Projects/Projects";
import { Skills } from "./sections/Skills/Skills";
import { Contact } from "./sections/Contact/Contact"; 
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
    <MainLayout>
      {/* 1. INTRODUCCIÓN (ID="about") */}
      <section id="about" className="mb-16 md:mb-24 lg:mb-32 scroll-mt-24">
        <Intro />
      </section>

      {/* 2. SKILLS (ID="skills") */}
      <section id="skills" className="mb-16 md:mb-24 lg:mb-32 scroll-mt-24">
        <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-gray-500 hidden lg:block">
          Skills
        </h2>
        <Skills />
      </section>

      {/* 3. EXPERIENCIA (ID="experience") */}
      <section id="experience" className="mb-16 md:mb-24 lg:mb-32 scroll-mt-24">
        <Experience />
      </section>

      {/* 4. PROYECTOS (ID="projects") */}
      <section id="projects" className="mb-16 md:mb-24 lg:mb-32 scroll-mt-24">
        <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-gray-500 hidden lg:block">
          Proyectos
        </h2>
        <Projects />
      </section>

      {/* 5. CONTACTO (ID="contact") - ✅ AÑADIDO AL FINAL */}
      <section id="contact" className="mb-16 md:mb-24 lg:mb-32 scroll-mt-24">
        <Contact />
      </section>

    </MainLayout>
    </ThemeProvider>
  );
}

export default App;