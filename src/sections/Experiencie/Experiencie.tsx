import { FadeIn } from "../../components/animations/FadeIn";

export const Experience = () => {
  const jobs = [
    {
      company: "Proyecto 'Camino de Santiago'",
      role: "Frontend Developer",
      date: "Dic 19 - Presente",
      description: "Desarrollo de la mayor parte del frontend de una aplicación web full stack con marketplace y blog. Implementé interfaces y estructuras de navegación.",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      logo: "CS" 
    },
    {
      company: "Proyecto Personal",
      role: "Full Stack Developer",
      date: "Dic 22 - Dic 30",
      description: "Construcción de una aplicación web personal enfocada en mejorar experiencia de usuario y lógica de negocio real.",
      stack: ["React", "Node.js", "MongoDB"],
      logo: "PP"
    },
  ];

  return (
    <section id="experience" className="mb-24 scroll-mt-24">
      <FadeIn>
         <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-gray-500">
          Experiencia
        </h2>

        <div className="flex flex-col gap-6">
          {jobs.map((job, index) => (
            <div 
              key={index} 
              className="group relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 p-6 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
            >
              {/* Logo / Icono izquierda */}
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-white border border-white/10">
                {job.logo}
              </div>

              {/* Contenido */}
              <div>
                 {/* 🔥 CAMBIO: Hover del título en Naranja */}
                 <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                   {job.role} — {job.company}
                 </h3>
                 <p className="text-sm text-gray-500 mb-4">{job.date}</p>
                 <p className="text-gray-400 text-sm leading-relaxed mb-4">
                   {job.description}
                 </p>
                 
                 {/* 🔥 CAMBIO: Stack tags en naranja */}
                 <div className="flex flex-wrap gap-2">
                   {job.stack.map(tech => (
                     <span key={tech} className="px-3 py-1 text-xs font-medium text-orange-300 bg-orange-500/10 rounded-full">
                       {tech}
                     </span>
                   ))}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};