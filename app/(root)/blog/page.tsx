import BlogCard from "@/components/cards/BlogCard";
import BlogHero from "@/components/sections/blog/BlogHero";
import { prisma } from "@/lib/prisma";
import React from "react";

const Blog = async () => {
  const blogs = await prisma.post.findMany({
    orderBy: {
      id: "desc",
    },
  });
  return (
    <div>
      <BlogHero />

      <div className="blogs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 p-20">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            route={`/blog/${blog.id}`}
            title={blog.title}
            content={blog.body}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
