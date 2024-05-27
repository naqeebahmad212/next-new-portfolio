"use server";

import cloudinary from "@/utils/cloudinary";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { File } from "buffer";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function formHandler(formaData: FormData) {
  const title = formaData.get("title")?.toString();
  const snippet = formaData.get("snippet")?.toString();
  const body = formaData.get("body")?.toString();
  const file: any = formaData.get("imgs")?.toString();
  const category: string | undefined = formaData.get("category")?.toString();
  const session = await getServerSession(authOptions);

  if (!title || !snippet || !body || !file || !category ) {
    throw Error("Fields required");
  }
  const result = await cloudinary.v2.uploader.upload(file, {
    folder: "blog",
  });

  let postCategory;
  const categoryExists = await prisma.category.findFirst({
    where: { name: { contains: category, mode: "insensitive" } },
  });

  if (categoryExists) {
    postCategory = categoryExists;
  } else {
    postCategory = await prisma.category.create({
      data: { name: category.toUpperCase() },
    });
  }

  const newPost = await prisma.post.create({
    data: {
      title,
      snippet,
      body,
      image: result.secure_url,
      public_id: result.public_id,
      categoryId: postCategory.id,
    },
  });


  redirect(`/blog/${newPost.id}`);
}

// get all categories

export const getAllcategories = async () => {
  return await prisma.category.findMany();
};



export const getUser = async (id: string) => {
  return await prisma.user.findUnique({ where: { id } });
};
