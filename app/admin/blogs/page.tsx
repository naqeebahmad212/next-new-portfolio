import AdminBlogs from "@/components/AdminBlogs";
import AdminProjects from "@/components/AdminProjects";
import { prisma } from "@/lib/prisma";
import React from "react";

const page = async () => {
  const blogs = await prisma.post.findMany({});
  return (
    <div className="bg-dark-1 min-h-screen">
      <h1 className="text-primary-500 text-heading2-semibold p-5 lg:py-12 underline">
        Blogs
      </h1>
      <AdminBlogs blogs={blogs} />
    </div>
  );
};

export default page;
