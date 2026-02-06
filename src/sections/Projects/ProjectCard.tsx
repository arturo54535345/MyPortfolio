import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronDown } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export const ProjectCard = ({ title, description, image, technologies, link, github }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // 🔥 CLASES INTENSAS EN MODO CLARO:
      // Light Hover: border-orange-500 (Sólido) + shadow-orange-500/20 (Resplandor)
      // Dark Hover: Se mantiene sutil (glass)
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 
        ${isHovered 
          ? "border-orange-500 bg-white shadow-lg shadow-orange-500/20 dark:bg-white/[0.04] dark:border-white/20 dark:shadow-none" 
          : "border-zinc-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.02]"
        }`}
    >
      {/* CABECERA */}
      <motion.div layout="position" className="flex cursor-pointer items-center justify-between p-6 md:p-8">
        
        <div className="flex flex-col gap-2">
          <motion.h3 
            layout="position" 
            className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 dark:text-gray-200 group-hover:text-orange-600 dark:group-hover:text-white transition-colors"
          >
            {title}
          </motion.h3>
          
          {!isHovered && (
            <motion.p 
              initial={{ opacity: 0, y: -5 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase"
            >
              {technologies.slice(0, 3).join(" • ")}
            </motion.p>
          )}
        </div>

        <motion.div 
          animate={{ 
            rotate: isHovered ? 180 : 0,
            backgroundColor: isHovered 
              ? (document.documentElement.classList.contains('dark') ? "rgba(255,255,255,1)" : "rgba(249,115,22,0.1)") // Naranja suave en light
              : "transparent",
            color: isHovered 
              ? (document.documentElement.classList.contains('dark') ? "#000" : "#ea580c") // Naranja fuerte en light
              : (document.documentElement.classList.contains('dark') ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.4)")
          }}
          className={`rounded-full border p-2 transition-all ${isHovered ? 'border-orange-500 dark:border-white' : 'border-zinc-200 dark:border-white/10'}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      {/* CONTENIDO EXPANDIDO */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 md:px-8 md:pb-10 flex flex-col gap-6">
              
              <motion.div 
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="relative aspect-[2/1] w-full overflow-hidden rounded-xl border border-orange-200 dark:border-white/10 shadow-md"
              >
                <motion.img 
                  src={image} 
                  alt={title} 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  className="h-full w-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </motion.div>

              <div className="grid grid-cols-1 gap-6">
                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <p className="text-sm md:text-base text-zinc-600 dark:text-gray-400 leading-relaxed">
                    {description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, i) => (
                      <motion.span 
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + (i * 0.05) }}
                        className="rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider border transition-colors
                          bg-orange-50 text-orange-600 border-orange-500/20
                          dark:bg-white/5 dark:text-orange-400 dark:border-orange-500/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-3 pt-2"
                >
                  {link && (
                    <a href={link} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all
                      bg-orange-600 text-white hover:bg-orange-700 shadow-lg shadow-orange-500/20
                      dark:bg-white dark:text-black dark:hover:bg-orange-500 dark:shadow-none"
                    >
                      <ExternalLink size={14} /> Demo
                    </a>
                  )}
                  {github && (
                    <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-bold transition-colors
                      bg-white border-zinc-200 text-zinc-700 hover:border-orange-500 hover:text-orange-600
                      dark:bg-white/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
                    >
                      <Github size={14} /> Código
                    </a>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};