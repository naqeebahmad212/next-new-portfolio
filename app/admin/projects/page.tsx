import AdminProjects from "@/components/AdminProjects";
import { prisma } from "@/lib/prisma";
import React from "react";

const page = async () => {
  const projects = await prisma.project.findMany({});
  return (
    <div className="bg-dark-1">
      <h1 className="text-primary-500 text-heading2-semibold p-5 lg:py-12 underline">
        Projects
      </h1>
      <AdminProjects projects={projects} />
    </div>
  );
};

export default page;
