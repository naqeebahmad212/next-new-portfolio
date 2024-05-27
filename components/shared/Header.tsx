"use client";
import { mainLinks } from "@/constant";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import { User } from "@prisma/client";

const Header = ({ user }: { user: User | null }) => {
  const pathname = usePathname();
  return (
    <header className="p-4 bg-dark-1 max-lg:hidden flex justify-around sticky top-0 z-[999]">
      <Link
        href="/"
        className="text-primary-500 text-heading2-semibold flex items-center gap-4"
      >
        <Image src={logo} alt="logo" width={32} height={32} />
        Leye
      </Link>
      <nav className="flex items-center gap-6">
        {mainLinks.map((link) => {
          const isActive = pathname === link.link;
          return (
            <Link
              key={link.name}
              href={link.link}
              className={cn(
                "text-white hover:bg-primary-500 p-[6px] rounded-lg  transition-all duration-500 origin-left",
                {
                  "bg-primary-500": isActive,
                }
              )}
            >
              {link.name}
            </Link>
          );
        })}
        {user && user.role === "admin" && (
          <Link
            href="/admin/projects"
            className="text-white p-[6px] hover:bg-primary-500 rounded-lg"
          >
            Dashboard
          </Link>
        )}
      </nav>

      <Link href="/contact" className="">
        <button className="cssbuttons-io-button">
          Book A Call
          <div className="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </Link>
    </header>
  );
};

export default Header;
