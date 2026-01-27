import { Github, ExternalLink } from "lucide-react";
import { SectionWrapper } from "../../components/layout/SectionWrapper";
import { FadeIn } from "../../components/animations/FadeIn";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { projects } from "../../data/project";

export const Projects = () =>{
    return (
    <SectionWrapper id="projects">
      
      {/* Encabezado de la sección */}
      <div className="mb-12 space-y-4">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Proyectos Destacados
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-gray-400 max-w-xl text-lg">
            Una selección de mis trabajos favoritos, desde aplicaciones web complejas hasta experimentos de diseño.
          </p>
        </FadeIn>
      </div>

      {/* LA PARRILLA BENTO (GRID) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <FadeIn 
            key={project.id} 
            delay={index * 0.1} // Efecto cascada (cada uno entra un poco después)
            className={getSizeClasses(project.size)} // Aquí aplicamos el tamaño
          >
            <Card className="group relative h-full flex flex-col min-h-[400px]">
              
              {/* 1. La Imagen del Proyecto */}
              <div className="relative flex-1 overflow-hidden bg-gray-900">
                 {/* Capa oscura que se aclara al pasar el ratón */}
                <div className="absolute inset-0 z-10 bg-black/20 transition-colors group-hover:bg-transparent" />
                
                {/* Imagen con efecto Zoom al hacer hover */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* 2. El Contenido (Texto) */}
              <div className="relative z-20 p-6 flex flex-col gap-4 border-t border-white/5 bg-card">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                  </div>
                </div>

                {/* Tecnologías (Badges) */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Botones (Aparecen o cambian de color al hover en escritorio) */}
                <div className="flex gap-3 mt-4 pt-4 border-t border-white/5">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex-1">
                      <Button size="sm" className="w-full gap-2">
                        <ExternalLink size={14} /> Demo
                      </Button>
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full gap-2">
                        <Github size={14} /> Código
                      </Button>
                    </a>
                  )}
                </div>
              </div>

            </Card>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
};

function getSizeClasses(size: string){
    switch(size){
        case "large":
            return "md:col-span-2";//en Pc ocupa dos huecos
            case "medium":
                default:
                    return "md:col-span-1";//en Pc ocupa un hueco
    }
}