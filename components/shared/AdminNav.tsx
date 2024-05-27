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

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const AdminNav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <aside
      className={cn(
        " p-5 cursor-pointer sticky top-0 transition-all duration-300 bg-dark-3 h-screen overflow-auto flex flex-col z-[9999] ",
        { "w-[50px]": !open, "!w-[250px]": open }
      )}
      onMouseOver={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      // onClick={() => setOpen(!open)}
    >
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
    </aside>
  );
};

export default AdminNav;
