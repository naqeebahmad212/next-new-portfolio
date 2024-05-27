"use client";
import ProjectCard from "@/components/cards/ProjectCard";
import Carousel from "@/components/shared/Carousel";
import { Project } from "@prisma/client";
import React from "react";

const RecentWork = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="bg-dark-1  p-10 lg:pb-20">
      <div className="header-box text-white p-10 lg:p-20">
        <h2 className="text-center text-small-regular">
          WEB DEVELOPMENT PROJECTS
        </h2>
        <h2 className="text-center text-heading2-semibold md:text-heading1-semibold">
          Recent Work
        </h2>
      </div>
      <div className="recent-work  gap-3">
        <Carousel projects={projects} />
      </div>
    </div>
  );
};

export default RecentWork;
