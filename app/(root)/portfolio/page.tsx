import HeroPortfolio from "@/components/sections/portfolio/Hero";
import Projects from "@/components/sections/portfolio/Projects";
import { prisma } from "@/lib/prisma";
import React from "react";

const Portfolio = async () => {
  const projects = await prisma.project.findMany({ orderBy: { id: "desc" } });

  return (
    <div>
      <HeroPortfolio />
      <Projects projects={projects} />
    </div>
  );
};

export default Portfolio;
