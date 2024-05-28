"use client";
import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
// import "react-quill/dist/quill.snow.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { submitHandler } from "@/utils/db";
import toast from "react-hot-toast";
import PostSubmitBtn from "./SbumitBtn";
import { useRouter } from "next/navigation";
import { Project } from "@prisma/client";

interface Result {
  success?: string;
  error?: "string";
  project?: Project;
}
const NewProject = () => {
  const router = useRouter();
  const [editorData, setEditorData] = useState("");
  const [file, setFile] = useState<string | ArrayBuffer>("");

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
      setFile("");

      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          if (reader.result) {
            setFile(reader.result);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const clientAction = async (formData: FormData) => {
    const result: Result = await submitHandler(formData);
    if (result?.error) {
      toast.error(result.error);
    } else if (result.success) {
      toast.success(result.success);
      router.push(`/project/${result?.project?.id}`);
    }
  };

  return (
    <div className=" min-h-screen w-full flex items-center justify-center bg-dark-1">
      <form action={clientAction} className="w-full lg:w-[70%]">
        <div className="form-group my-2">
          <label htmlFor="title" className="text-gray-300 mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Type here..."
            className="input w-full p-3 rounded-xl"
            required
          />
        </div>

        <div className="form-group my-2">
          <label htmlFor="image" className="text-gray-300 mb-1">
            Image
          </label>
          <input
            onChange={imagesHandler}
            type="file"
            name="img"
            className="input file-input rounded-none w-full"
            required
          />
          <input type="hidden" name="image" value={file.toString()} id="" />
        </div>

        <div className="form-group my-2 relative">
          <label htmlFor="image" className="text-gray-300 mb-1">
            Body
          </label>
          <CKEditor
            editor={ClassicEditor}
            data="<p>Type here...</p>"
            onChange={handleEditorChange}
          />
          <input type="hidden" name="body" value={editorData} id="" />
        </div>
        <PostSubmitBtn className="bg-primary-500 p-3 rounded-md px-4">
          Add
        </PostSubmitBtn>
      </form>
    </div>
  );
};

export default NewProject;
