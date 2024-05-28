"use client";
import { Loader2 } from "lucide-react";
import { signOut } from "next-auth/react";
import { ComponentProps, useState } from "react";
import { useFormStatus } from "react-dom";

type PostBtnProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

const Logout = ({ children, className, ...props }: PostBtnProps) => {
  return (
    <button onClick={async () => await signOut({ callbackUrl: "/" })}>
      {children}
    </button>
  );
};

export default Logout;
