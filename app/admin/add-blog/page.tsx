import AddBlogClient from "@/components/AddBlogClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add-Blog",
};

const AddBlogPage = async () => {
  return (
    <div className=" m-auto">
      <AddBlogClient />
    </div>
  );
};

export default AddBlogPage;
