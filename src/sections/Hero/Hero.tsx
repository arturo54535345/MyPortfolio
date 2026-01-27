import { ArrowRight, Download } from "lucide-react";
import { SectionWrapper } from "../../components/layout/SectionWrapper";
import { FadeIn } from "../../components/animations/FadeIn";
import { Button } from "../../components/ui/Button";

export const Hero = () => {
  return (
    <SectionWrapper id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/*  Fondo decorativo  */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="text-center relative z-10 max-w-3xl mx-auto space-y-6">
        
        {/* Etiqueta superior */}
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-accent-muted font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Disponible para trabajar
          </div>
        </FadeIn>

        {/* Título Principal */}
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            Creando experiencias web <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              memorables.
            </span>
          </h1>
        </FadeIn>

        {/* Subtítulo */}
        <FadeIn delay={0.3}>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Soy Arturo, un desarrollador Frontend especializado en React y TypeScript. 
            Transformo ideas complejas en interfaces simples, rápidas y accesibles.
          </p>
        </FadeIn>

        {/* Botones de Acción */}
        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              Ver Proyectos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button variant="outline" size="lg">
              Descargar CV
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </FadeIn>

      </div>
    </SectionWrapper>
  );
};