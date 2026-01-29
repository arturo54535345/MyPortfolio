import { Mail, ArrowRight } from "lucide-react";
import { SectionWrapper } from "../../components/layout/SectionWrapper";
import { FadeIn } from "../../components/animations/FadeIn";
import { Button } from "../../components/ui/Button";

export const Contact = () => {
  return (
    <SectionWrapper id="contact" className="text-center">
      <div className="max-w-2xl mx-auto space-y-8">
        
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            ¿Tienes una idea en mente?
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Actualmente estoy disponible para nuevos proyectos. Si buscas un desarrollador que cuide los detalles, hablemos.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
            {/* Botón Principal: Abre el gestor de correo */}
            <a href="mailto:tu@email.com">
              <Button size="lg" className="group">
                <Mail className="mr-2 h-4 w-4" />
                Envíame un correo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>

            {/* Botón Secundario: Copiar email (opcional) o Link a LinkedIn */}
            <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noreferrer">
              <Button variant="outline" size="lg">
                Hablemos por LinkedIn
              </Button>
            </a>
            
          </div>
        </FadeIn>

      </div>
    </SectionWrapper>
  );
};