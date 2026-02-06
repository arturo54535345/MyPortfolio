import { FadeIn } from "../../components/animations/FadeIn";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/project";

export const Projects = () => {
  return (
    <section className="flex flex-col gap-6">
      {projects.map((project, index) => (
        <FadeIn key={project.id} delay={index * 0.1}>
          <ProjectCard 
            title={project.title}
            description={project.description}
            image={project.images[0]} 
            technologies={project.technologies}
            link={project.link}
            github={project.github}
          />
        </FadeIn>
      ))}
    </section>
  );
};