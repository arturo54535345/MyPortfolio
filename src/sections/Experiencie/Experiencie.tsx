import { FadeIn } from "../../components/animations/FadeIn";
import { useTranslation } from "react-i18next";

export const Experience = () => {
  const { t } = useTranslation();

  const jobs = [
    {
      company: "Proyecto 'Camino de Santiago'",
      role: t('experience.jobs.camino.role'),
      date: "Dic 19 - Presente",
      description: t('experience.jobs.camino.desc'),
      stack: ["React", "Node.js", "Express", "MongoDB"],
      logo: "CS" 
    },
    {
      company: "Proyecto Personal",
      role: t('experience.jobs.personal.role'),
      date: "Dic 22 - Dic 30",
      description: t('experience.jobs.personal.desc'),
      stack: ["React", "Node.js", "MongoDB"],
      logo: "PP"
    },
  ];

  return (
    <section id="experience" className="mb-24 scroll-mt-24">
      <FadeIn>
         <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-gray-500">
          {t('experience.title')}
        </h2>

        <div className="flex flex-col gap-6">
          {jobs.map((job, index) => (
            <div 
              key={index} 
              // 🔥 TU ESTRUCTURA ORIGINAL RESTAURADA + Estilos Dark Fijos
              className="group relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 p-6 rounded-2xl transition-all duration-300
                bg-white/[0.02] border border-white/5 
                hover:bg-white/5 hover:border-white/10"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold border transition-colors
                bg-gray-800 text-white border-white/10 group-hover:border-white/20"
              >
                {job.logo}
              </div>

              <div>
                 <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                   {job.role} — {job.company}
                 </h3>
                 <p className="text-sm text-gray-500 mb-4">{job.date}</p>
                 <p className="text-gray-400 text-sm leading-relaxed mb-4">
                   {job.description}
                 </p>
                 <div className="flex flex-wrap gap-2">
                   {job.stack.map(tech => (
                     <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full transition-colors
                       bg-orange-500/10 text-orange-300"
                     >
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