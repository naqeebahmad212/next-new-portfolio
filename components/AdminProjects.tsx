"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { deleteProject } from "@/utils/db";
import { Project } from "@prisma/client";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React, { useState, useTransition } from "react";

const AdminProjects = ({ projects }: { projects: Project[] }) => {
  const [pending, startTransition] = useTransition();
  const [projectId, setProjectId] = useState("");
  return (
    <Table className="text-white w-full md:px-8 lg:px-20">
      <TableHeader>
        <TableRow className="text-white">
          <TableHead className=" text-white">Title</TableHead>
          <TableHead className="text-white">Image</TableHead>
          <TableHead className="text-white max-md:hidden ">Date</TableHead>
          <TableHead className="text-center text-white">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => {
          return (
            <TableRow key={project.id} className={cn("")}>
              <TableCell>{project.title.slice(0, 120)}</TableCell>
              <TableCell>
                <Image
                  width={50}
                  height={50}
                  src={project.image}
                  alt={project.title}
                />
              </TableCell>
              <TableCell className="max-md:hidden">
                {new Date(project.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-center">
                <button
                  className="p-2 bg-red-500 rounded-md hover:bg-red-700"
                  onClick={() => {
                    setProjectId(project.id);
                    startTransition(async () => {
                      await deleteProject(project.id);
                    });
                  }}
                >
                  {pending && projectId === project.id ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    "Delete"
                  )}
                </button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default AdminProjects;
