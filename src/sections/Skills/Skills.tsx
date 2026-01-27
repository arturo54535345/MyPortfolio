import { SectionWrapper } from "../../components/layout/SectionWrapper";
import { FadeIn } from "../../components/animations/FadeIn";
import { skills } from "../../data/skills";

export const Skills = () => {
  return (
    <SectionWrapper id="skills">
      
      {/* Título */}
      <div className="mb-12">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Stack Tecnológico
          </h2>
          <p className="text-gray-400 max-w-xl text-lg">
            Las herramientas que uso para dar vida a mis ideas. Siempre aprendiendo, siempre mejorando.
          </p>
        </FadeIn>
      </div>

      {/* Grid de Iconos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <FadeIn key={skill.name} delay={index * 0.05}>
            <div className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all duration-300">
              
              {/* El Icono: cambia de color al pasar el ratón (hover) */}
              <skill.icon 
                strokeWidth={1.5} 
                className="w-10 h-10 text-gray-400 group-hover:text-accent group-hover:scale-110 transition-all duration-300 mb-3" 
              />
              
              <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                {skill.name}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>

    </SectionWrapper>
  );
};