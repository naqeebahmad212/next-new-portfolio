"use client";
import { Loader2 } from "lucide-react";
import { ComponentProps, useState } from "react";
import { useFormStatus } from "react-dom";

type PostBtnProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

const PostSubmitBtn = ({ children, className, ...props }: PostBtnProps) => {
  const { pending } = useFormStatus();
  //   const [pending, setPending] = useState(false);
  return (
    <button
      type="submit"
      {...props}
      // onClick={()=> setPending(true) }
      disabled={pending}
      className={`btn btn-primary text-white ${className}`}
    >
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {!pending && children}
    </button>
  );
};

export default PostSubmitBtn;
