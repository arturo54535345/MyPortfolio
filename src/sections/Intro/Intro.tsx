import { FadeIn } from "../../components/animations/FadeIn";

export const Intro = () => {
  return (
    <section className="mb-24">
      <FadeIn>
        {/* Etiqueta pequeña */}
        <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-gray-500">
          Intro
        </h2>

        {/* Titular */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
          Arturo Meave — <br className="hidden md:block" />
          <span className="text-gray-400">Junior Full Stack Developer</span>
        </h1>

        {/* Texto largo (Copy de tu referencia) */}
        <div className="text-gray-400 text-lg leading-relaxed space-y-4">
          <p>
            Desarrollador full stack con especial foco en frontend y experiencia en
            aplicaciones web completas usando React, Node.js y MongoDB.
          </p>
          <p>
            Apasionado por el diseño de interfaces intuitivas, la experiencia de
            usuario y la solución práctica de problemas reales. Trabajo con calma,
            enfoque práctico y aprendizaje continuo, combinando diseño y
            desarrollo para construir productos digitales que funcionan y se sienten
            bien.
          </p>
        </div>
      </FadeIn>
    </section>
  );
};