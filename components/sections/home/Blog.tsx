import BlogCard from "@/components/cards/BlogCard";
import { prisma } from "@/lib/prisma";
import React from "react";

const Blog = async () => {
  const Blogs = await prisma.post.findMany({
    take: 3,
    orderBy: { id: "desc" },
  });
  return (
    <div className="p-5 xs:p-10 lg:p-20 lg:px-[120px] bg-dark-1">
      <p className="text-white">FROM THE BLOGS</p>
      <h1 className="text-start text-white text-heading2-semibold lg:text-heading1-semibold mb-5">
        Latest Blogs
      </h1>
      <div className="text-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center font-extralight !text-start text-heading4-medium lg:text-heading3-medium">
        {Blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            content={blog.body}
            route={`/blog/${blog.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
