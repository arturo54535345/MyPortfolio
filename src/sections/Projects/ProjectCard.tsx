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
      className={`group relative overflow-hidden border-b border-white/10 bg-black transition-all duration-700 ${
        isHovered ? "bg-white/[0.02]" : ""
      }`}
    >
      {/* 1. CABECERA: Más compacta (py-8 en lugar de p-10) */}
      <motion.div layout="position" className="flex cursor-pointer items-center justify-between p-8">
        
        <div className="flex flex-col gap-2">
          <motion.h3 
            layout="position" 
            className="text-2xl font-bold tracking-tight text-gray-300 group-hover:text-white transition-colors md:text-3xl"
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
            backgroundColor: isHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
            color: isHovered ? "#000" : "rgba(255,255,255,0.3)"
          }}
          className="rounded-full border border-white/10 p-2 transition-all"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      {/* 2. CONTENIDO EXPANDIDO (Refinado y más bajo) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            {/* Reducimos pb-12 a pb-10 y el gap de 8 a 6 */}
            <div className="px-8 pb-10 flex flex-col gap-6">
              
              {/* IMAGEN: Cambiamos aspect-video (16/9) por algo más bajo (2.4/1) */}
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="relative aspect-[2.4/1] w-full overflow-hidden rounded-lg border border-white/5 shadow-2xl"
              >
                <motion.img 
                  src={image} 
                  alt={title} 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  className="h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>

              {/* TEXTO Y BOTONES: Animados en cascada */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-end">
                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <p className="max-w-2xl text-base text-gray-400 leading-relaxed">
                    {description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, i) => (
                      <motion.span 
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + (i * 0.05) }}
                        className="rounded bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-400 border border-teal-400/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* BOTONES: Más estilizados */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-3"
                >
                  {link && (
                    <a href={link} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold text-black hover:bg-teal-400 transition-colors">
                      <ExternalLink size={14} /> Demo
                    </a>
                  )}
                  {github && (
                    <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-white/20 bg-black px-6 py-3 text-xs font-bold text-white hover:bg-white/10 transition-colors">
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