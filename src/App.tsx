import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./sections/Hero/Hero";
import { About } from "./sections/About/About";


function App() {
  return (
    <main className="relative bg-background min-h-screen selection:bg-accent selection:text-white">
      <Hero />
      <About />
      <Navbar />
    </main>
  );
}

export default App;