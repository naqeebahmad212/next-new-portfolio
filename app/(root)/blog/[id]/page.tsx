import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import type { Metadata } from "next";

interface PostdetailsPageProps {
  params: {
    id: string;
  };
}

const fetchProject = async (id: string) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id: id },
    });
    return post;
  } catch (error: unknown) {
    console.log(error);
  }
};

export const generateMetadata = async ({
  params: { id },
}: PostdetailsPageProps): Promise<Metadata> => {
  const post = await fetchProject(id);
  if (post) {
    return {
      title: `Leye | ${post.title} `,
      description: "Project details page",
    };
  } else {
    return {
      title: `Project details `,
      description: "Generated by create next app",
    };
  }
};

const ProjectDeialtPage = async ({ params: { id } }: PostdetailsPageProps) => {
  // const post = await prisma.post.findUnique({
  //   where: { id: id },
  // });
  const post = await fetchProject(id);
  return (
    <div className="w-full mt-[100px]">
      <div className="w-[83%] mx-auto">
        <div className="post-image p-6 lg:h-[470px] lg:w-[70%]">
          {post && (
            <Image
              src={post.image}
              alt="Project Image"
              width={500}
              height={400}
              className="h-full w-full"
            />
          )}
        </div>

        <div className="content lg:w-[70%] p-6">
          <h1 className="text-2xl font-bold text-gray-300 mb-6 text-heading3-bold">
            {post?.title}
          </h1>
          {post && (
            <div
              className="text-gray-300"
              dangerouslySetInnerHTML={{ __html: post?.body }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDeialtPage;
