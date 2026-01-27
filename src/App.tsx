import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./sections/Hero/Hero";
import { About } from "./sections/About/About";
import { Projects } from "./sections/Projects/Projects";
import { Skills } from "./sections/Skills/Skills";


function App() {
  return (
    <main className="relative bg-background min-h-screen selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;