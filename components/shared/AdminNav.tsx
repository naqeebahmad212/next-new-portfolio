"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { adminLinks, mainLinks } from "@/constant";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import logo from "@/public/images/logo.png";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { ArrowBigLeft, ArrowBigRight, LogOut } from "lucide-react";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const AdminNav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [width, setWidth] = useState("w-[50px]");
  return (
    <aside
      onClick={() => {
        setOpen(!open);
        setWidth(width === "w-[50px]" ? "w-[240px]" : "w-[50px]");
      }}
      className={` ${width} p-5 cursor-pointer sticky top-0  transition-all duration-300 bg-dark-3 h-screen overflow-y-auto overflow-x-hidden flex flex-col z-[9999] `}
    >
      <span
        className={`absolute top-2 right-2 z-[9999999] bg-white rounded-full transition-all duration-200 ${
          open ? "rotate-180" : "rotate-0"
        } `}
      >
        <ArrowBigRight />
      </span>

      {adminLinks.map((link) => {
        const isActive = pathname === link.link;
        return (
          <>
            {open && (
              <Link
                key={link.name}
                href={link.link}
                className={cn(
                  "text-white hover:bg-primary-500 p-[6px] mt-5 rounded-lg  transition-all duration-500 origin-left",
                  {
                    "bg-primary-500": isActive,
                  }
                )}
              >
                {link.name}
              </Link>
            )}
          </>
        );
      })}

      <button
        className="text-white hover:bg-primary-500 p-[6px] mt-5 rounded-lg  transition-all duration-500 origin-left absolute bottom-4 w-[80%] text-start mx-auto flex items-center"
        onClick={async () => {
          await signOut({ callbackUrl: "/" });
        }}
      >
        {open && "logout"}
        <LogOut size={16} className={`${open ? "ml-2" : "ml-0"}`} />
      </button>
    </aside>
  );
};

export default AdminNav;
