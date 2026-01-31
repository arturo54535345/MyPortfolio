import { FadeIn } from "../../components/animations/FadeIn";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/project";

export const Projects = () => {
  return (
    <section className="flex flex-col border-t border-white/10">
      {projects.map((project, index) => (
        <FadeIn key={project.id} delay={index * 0.1}>
          <ProjectCard 
            title={project.title}
            description={project.description}
            image={project.images[0]} // use the first image from the images array
            technologies={project.technologies}
            link={project.link}
            github={project.github}
          />
        </FadeIn>
      ))}
    </section>
  );
};