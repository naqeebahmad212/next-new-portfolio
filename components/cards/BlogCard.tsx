import Link from "next/link";
import React from "react";

interface BlogCardProps {
  title: string;
  content: string;
  route: string;
}

const BlogCard = ({ title, content, route }: BlogCardProps) => {
  return (
    <div className="p-5 md:p-10 flex items-center flex-col gap-5  !bg-dark-3 rounded-xl cursor-pointer hover:scale-[1.02] transition-all duration-500">
      <h1 className="text-heading4-medium text-white">{title.slice(0, 50)}</h1>
      <div
        className="text-gray-300 py-2"
        dangerouslySetInnerHTML={{
          __html: content.slice(0, 100) + "...",
        }}
      />

      <Link
        href={route}
        className="text-white text-base-regular font-extralight self-start"
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
