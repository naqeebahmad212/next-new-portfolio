import ProjectCard from "@/components/cards/ProjectCard";
import { Project } from "@prisma/client";
import React from "react";

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="p-5 xs:p-[24px] md:p-12 lg:p-20 bg-dark-2 grid grid-cols-1 md:grid-cols-2 gap-10">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
