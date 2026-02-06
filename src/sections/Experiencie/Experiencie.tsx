import { FadeIn } from "../../components/animations/FadeIn";
import { useTranslation } from "react-i18next"; // 👈 Solo añadimos esto

export const Experience = () => {
  const { t } = useTranslation(); // 👈 Hook de traducción

  const jobs = [
    {
      company: "Proyecto 'Camino de Santiago'",
      role: t('experience.jobs.camino.role'), // 👈 Traducido
      date: "Dic 19 - Presente",
      description: t('experience.jobs.camino.desc'), // 👈 Traducido
      stack: ["React", "Node.js", "Express", "MongoDB"],
      logo: "CS" 
    },
    {
      company: "Proyecto Personal",
      role: t('experience.jobs.personal.role'), // 👈 Traducido
      date: "Dic 22 - Dic 30",
      description: t('experience.jobs.personal.desc'), // 👈 Traducido
      stack: ["React", "Node.js", "MongoDB"],
      logo: "PP"
    },
  ];

  return (
    <section id="experience" className="mb-24 scroll-mt-24">
      <FadeIn>
         <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-gray-500">
          {t('experience.title')} {/* 👈 Traducido "Experiencia" */}
        </h2>

        <div className="flex flex-col gap-6">
          {jobs.map((job, index) => (
            <div 
              key={index} 
              // 🔥 TU GRID ORIGINAL + Colores Light/Dark
              // Mantenemos: group relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 p-6 rounded-2xl transition-all duration-300
              className="group relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 p-6 rounded-2xl transition-all duration-300
                bg-white border border-zinc-200 shadow-sm 
                hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20
                dark:bg-white/[0.02] dark:border-white/5 dark:shadow-none dark:hover:bg-white/5 dark:hover:border-white/10"
            >
              {/* TU ESTRUCTURA DE LOGO ORIGINAL */}
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold border transition-colors
                bg-zinc-100 text-zinc-700 border-zinc-200 group-hover:border-orange-500 group-hover:text-orange-600 group-hover:bg-orange-50
                dark:bg-gray-800 dark:text-white dark:border-white/10 dark:group-hover:border-white/10 dark:group-hover:bg-gray-800 dark:group-hover:text-white"
              >
                {job.logo}
              </div>

              {/* TU CONTENIDO ORIGINAL */}
              <div>
                 <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                   {job.role} — {job.company}
                 </h3>
                 <p className="text-sm text-gray-500 mb-4">{job.date}</p>
                 <p className="text-zinc-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                   {job.description}
                 </p>
                 <div className="flex flex-wrap gap-2">
                   {job.stack.map(tech => (
                     <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full transition-colors
                       bg-orange-100 text-orange-700
                       dark:bg-orange-500/10 dark:text-orange-300"
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