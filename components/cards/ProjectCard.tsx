import { Project } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      href={`/project/${project.id}`}
      className="mx-4 drop-shadow-md h-[432px] flex flex-col bg-dark-3 gap-6 p- rounded-xl hover:scale-[1.02] transition-all duration-500 cursor-pointer"
    >
      <div className="content h-[30%] p-4">
        <h1 className="title text-[24px] font-semibold text-white">
          {project.title.slice(0, 20)}
        </h1>
        <div
          className="text-gray-300 py-2"
          dangerouslySetInnerHTML={{
            __html: project?.body.slice(0, 100) + "...",
          }}
        />
      </div>
      <div className="feature-image h-[70%]  overflow-hidden w-full">
        <Image
          src={project?.image}
          alt="feature image"
          width={200}
          height={200}
          className="h-full w-full rounded-b-xl overflow-hidden object-cover"
        />
      </div>
    </Link>
  );
};

export default ProjectCard;
