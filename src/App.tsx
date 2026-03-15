import { MainLayout } from "./components/layout/MainLayout";
import { Intro } from "./sections/Intro/Intro";
import { Experience } from "./sections/Experiencie/Experiencie";
import { Projects } from "./sections/Projects/Projects";
import { Skills } from "./sections/Skills/Skills";
import { Contact } from "./sections/Contact/Contact"; 


function App() {
  return (
    <MainLayout>

      <section id="about" className="mb-16 md:mb-24 lg:mb-32 scroll-mt-24">
        <Intro />
      </section>


      <section id="skills" className="mb-16 md:mb-24 lg:mb-32 scroll-mt-24">
        <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-gray-500 hidden lg:block">
          Skills
        </h2>
        <Skills />
      </section>


      <section id="experience" className="mb-16 md:mb-24 lg:mb-32 scroll-mt-24">
        <Experience />
      </section>


      <section id="projects" className="mb-16 md:mb-24 lg:mb-32 scroll-mt-24">
        <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-gray-500 hidden lg:block">
          Proyectos
        </h2>
        <Projects />
      </section>


      <section id="contact" className="mb-16 md:mb-24 lg:mb-32 scroll-mt-24">
        <Contact />
      </section>

    </MainLayout>
  );
}

export default App;