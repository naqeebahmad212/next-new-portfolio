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
import { deleteProductHandler } from "@/utils/db";
import { Post } from "@prisma/client";
import { Loader2 } from "lucide-react";

import Image from "next/image";
import { useState, useTransition } from "react";
const AdminBlogs = ({ blogs }: { blogs: Post[] }) => {
  const [pending, startTransition] = useTransition();
  const [activeBlog, setActiveBlog] = useState("");
  return (
    <Table className="text-white !bg-dark-2  md:px-8 lg:px-20">
      <TableHeader>
        <TableRow className="text-white">
          <TableHead className=" text-white">Title</TableHead>
          <TableHead className="text-white">Image</TableHead>
          <TableHead className="text-white">Date</TableHead>
          <TableHead className="text-center text-white">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blogs.map((blog) => (
          <TableRow key={blog.id}>
            <TableCell>{blog.title.slice(0, 120)}</TableCell>
            <TableCell>
              <Image width={50} height={50} src={blog.image} alt={blog.title} />
            </TableCell>
            <TableCell>
              {new Date(blog.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell className="text-center">
              <button
                className="p-2 bg-red-500 rounded-md hover:bg-red-700"
                onClick={() => {
                  startTransition(async () => {
                    setActiveBlog(blog.id);
                    await deleteProductHandler(blog.id);
                  });
                }}
              >
                {pending && activeBlog === blog.id ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Delete"
                )}
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AdminBlogs;
