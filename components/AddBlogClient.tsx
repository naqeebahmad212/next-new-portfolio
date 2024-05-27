"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import { Metadata } from "next";
import { useFormStatus } from "react-dom";
import { formHandler, getAllcategories } from "@/app/admin/add-blog/action";
import PostSubmitBtn from "./SbumitBtn";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import toast from "react-hot-toast";

interface CategoriesProps {
  id: string;
  name: string;
}

interface UserProps {
  id: string;
  email: string;
  name: string | null;
  role: string;
  emailVerified: Date | null;
  image: string | null;
}

// page metadata

const AddBlogClient = () => {
  const [isPending, startTransition] = useTransition();
  const { pending } = useFormStatus();
  const [editorData, setEditorData] = useState("");

  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  const [body, setBody] = useState("");
  const initArr: any = "";
  const [files, setFiles] = useState(initArr);
  const [imagePreview, setImagePreview] = useState(initArr);

  const addCategory = useRef<HTMLDialogElement>(null);
  let initArrCate: CategoriesProps[] = [];
  // Array<{ id: number, name: string }>
  const [categoriesDatabase, setCategoriesDatabase] = useState(initArrCate);
  const [cat, setCat] = useState("");

  useEffect(() => {
    startTransition(async () => {
      const categories = await getAllcategories();
      setCategoriesDatabase(categories);
    });
  }, []);

  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    setEditorData(data);
  };

  const imagesHandler = (e: any) => {
    if (e.target.files[0].size > 999200) {
      toast.error("File size should be less than 1MB.");
      return;
    }
    if (e.target.files.length > 0) {
      setFiles("");
      setImagePreview("");

      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          if (reader.result) {
            setImagePreview(reader.result);
            setFiles(reader.result);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="p-5 xs:p-[20px] md:p-20 lg:p-30 bg-dark-1">
      <div>
        {imagePreview && (
          <Image
            key={imagePreview}
            src={imagePreview}
            alt="pic"
            width={100}
            height={200}
          />
        )}
      </div>
      <form action={formHandler}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          placeholder="Title"
          className="w-full p-2 my-3"
        />

        <input type="hidden" name="imgs" value={files} id="" />
        <input
          value={snippet}
          onChange={(e) => setSnippet(e.target.value)}
          type="text"
          name="snippet"
          placeholder="Snippet"
          className="w-full p-2 my-3"
        />

        <input
          name="images"
          onChange={imagesHandler}
          type="file"
          accept="images/*"
          className=" file-input file-input-ghost input-bordered w-full my-4"
        />

        <select name="category" id="" className="select  p-2 my-3 w-full mb-4">
          <option value="no category">No Category</option>
          {categoriesDatabase.map((categoryName: any) => (
            <option value={categoryName.name} key={categoryName.name}>
              {categoryName.name}
            </option>
          ))}
        </select>

        <div className="form-group my-2 relative">
          <label htmlFor="body" className="text-gray-300 mb-1">
            Body
          </label>
          <CKEditor
            editor={ClassicEditor}
            data="<p>Type here...</p>"
            onChange={handleEditorChange}
          />
          <input type="hidden" name="body" value={editorData} id="" />
        </div>

        <input type="hidden" name="body" value={body} id="" />
        <PostSubmitBtn className="bg-primary-500 p-2 rounded-lg mt-3">
          Add Post
        </PostSubmitBtn>
      </form>
    </div>
  );
};

export default AddBlogClient;
