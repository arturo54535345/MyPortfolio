import { FadeIn } from "../../components/animations/FadeIn";
import { Code2, LayoutTemplate, Cloud, Database, Wrench, Award } from "lucide-react";
import { useTranslation } from "react-i18next"; // 👈 Importar

export const Skills = () => {
  const { t } = useTranslation(); // 👈 Hook

  // Definimos las categorías DENTRO del componente para usar t()
  const categories = [
    {
      title: t('skills.categories.languages'), // 👈 TRADUCIDO
      icon: <Code2 size={24} className="text-orange-500" />,
      items: [
        { name: "JavaScript", slug: "javascript" },
        { name: "TypeScript", slug: "typescript" },
        { name: "HTML5", slug: "html5" },
        { name: "CSS3", slug: "css3" },
      ]
    },
    {
      title: t('skills.categories.frameworks'), // 👈 TRADUCIDO
      icon: <LayoutTemplate size={24} className="text-orange-500" />,
      items: [
        { name: "React", slug: "react" },
        { name: "Next.js", slug: "nextdotjs" },
        { name: "Node.js", slug: "nodedotjs" },
        { name: "Tailwind", slug: "tailwindcss" },
        { name: "Framer", slug: "framer" },
        { name: "Express", slug: "express" }, 
        { name: "Mongoose", slug: "mongoose" },
      ]
    },
    {
      title: t('skills.categories.cloud'), // 👈 TRADUCIDO
      icon: <Cloud size={24} className="text-orange-500" />,
      items: [
        { name: "Git", slug: "git" }
      ]
    },
    {
      title: t('skills.categories.database'), // 👈 TRADUCIDO
      icon: <Database size={24} className="text-orange-500" />,
      items: [
        { name: "MongoDB", slug: "mongodb" }
      ]
    },
    {
      title: t('skills.categories.tools'), // 👈 TRADUCIDO
      icon: <Wrench size={24} className="text-orange-500" />,
      items: [
        { name: "GitHub", slug: "github" },
        { name: "VS Code", slug: "visualstudiocode" },
        { name: "Clean Code", slug: "" },
        { name: "Postman", slug: "postman" },
      ]
    },
    {
      title: t('skills.categories.certifications'), // 👈 TRADUCIDO
      icon: <Award size={24} className="text-orange-500" />,
      items: [
        { name: "Neoland-Full Stack Bootcamp", slug: "" },
      ]
    }
  ];

  return (
    <section id="skills" className="space-y-8">
      
      <FadeIn>
        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">
            {t('skills.label')} {/* 👈 "Habilidades Técnicas" */}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
            {t('skills.title')} {/* 👈 "Mi Stack Tecnológico" */}
          </h3>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            
            <div className="group h-full min-h-[180px] p-6 flex flex-col gap-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1
              bg-white border-zinc-200 shadow-sm 
              hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 hover:bg-orange-50/20
              dark:bg-white/[0.02] dark:border-white/5 dark:shadow-none dark:hover:bg-white/5 dark:hover:border-white/10"
            >
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
                  {category.icon}
                </div>
                <h4 className="text-lg font-bold text-zinc-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {category.title}
                </h4>
              </div>

              {category.items.length === 0 ? (
                <div className="flex items-center justify-center h-full opacity-30">
                    <span className="text-sm italic text-gray-500">Próximamente...</span>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                    {category.items.map((item, i) => (
                    <div 
                        key={i} 
                        className="flex items-center gap-3 p-2 rounded-lg transition-colors group/item
                          hover:bg-orange-100 dark:hover:bg-white/5"
                    >
                        {item.slug && (
                        <img 
                            src={`https://cdn.simpleicons.org/${item.slug}`} 
                            alt={item.name}
                            className="w-5 h-5 object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover/item:scale-110
                              opacity-60 dark:opacity-60"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                        )}
                        <span className="text-xs font-medium transition-colors
                          text-zinc-600 group-hover:text-orange-700
                          dark:text-gray-300 dark:group-hover:text-white"
                        >
                        {item.name}
                        </span>
                    </div>
                    ))}
                </div>
              )}

            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};