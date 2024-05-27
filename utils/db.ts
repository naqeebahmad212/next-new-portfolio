"use server"
import cloudinary from "@/utils/cloudinary";
import { getErrorMessage } from "./getErrorMessage";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";


interface DataProps {
  data: {
    name: string;
    email: string;
    password: string;
  };
}

export const submitHandler = async (data: FormData) : Promise<Object>  => {
    try {
     const title = data.get("title")?.toString();
     const body = data.get("body")?.toString();
     const image = data.get("image") as string;
   
     if (!title || !body || !image) {
   
       throw new Error("All fields required");
     }
   
     const result = await cloudinary.v2.uploader.upload(image, {
       folder: "portfolio",
     });
     const project = await prisma.project.create({
       data: {
         title,
         body,
         image: result.secure_url,
         public_id: result.public_id,
       },
     });
   
     if(!project) throw new Error('Project not created')
     return{
       success : 'Added Successfully',project:project
     }
     
    } catch (error:unknown) {
     return{
       error:getErrorMessage(error)
     }
    }
   };



   export const registerUser = async (formData: DataProps) => {
    const salt = await bcrypt.genSalt();
  
    try {
      if (formData.data.password.length < 8) {
        return "Password should be atleast 8 character";
      }
      const hashedPassword = await bcrypt.hash(formData.data.password, salt);
      const user = await prisma.user.create({
        data: {
          name: formData.data.name,
          email: formData.data.email,
          password: hashedPassword,
        },
      });
      console.log(user);
    } catch (err: any) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (err.code === "P2002") {
          return "Email already exists";
        }
      }
    }
    redirect("/auth/signin");
  };



  export const deleteProductHandler = async (id: string) => {
    const post = await prisma.post.findUnique({
      where: { id },
    });
    if (post) {
      await cloudinary.v2.uploader.destroy(post.public_id);
    }
    await prisma.post.delete({
      where: { id },
    });
  
    revalidatePath("/admin/blogs");
  };


  export const deleteProject= async (id:string)=>{
    const project=await prisma.project.findUnique({where:{id}})
  
    if (project){
      await cloudinary.v2.uploader.destroy(project.public_id)
    }
    await prisma.project.delete({
      where:{id}
    })
    revalidatePath('/admin/projects')
  }