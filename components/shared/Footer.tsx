import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Logout from "./Logout";

const Footer = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="footer w-full bg-dark-1  justify-center items-center p-5 md:px-20 md:pt-20 lg:px-[120px]">
      <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:justify-items-end">
        <div className="text-white col-span-2">
          <h2 className="font-bold">Overview</h2>
          <p className="text-gray-300 pt-4">
            I'm a freelance web designer working remotely with clients in London
            & across the country. If you're looking for a web design or web
            development quote, or even some advice, please don't hesitate to get
            in touch; I'm here to help!
          </p>
        </div>

        <div className="text-gray-300">
          <h2 className="font-bold text-white mb-4">Services</h2>
          <Link href={"/services"}>Web Design</Link> <br />
          <Link href={"/services"}>Web Development</Link>
          <br />
          <Link href={"/services"}>Mern Stack Development</Link> <br />
          <Link href={"/services"}>Website Management</Link>
        </div>

        <div className="text-gray-300">
          <h2 className="font-bold text-white mb-4">Links</h2>
          <Link href={"#"}>SSR</Link> <br />
          <Link href={"#"}>GitHub</Link>
          <br />
          <Link href={"#"}>Privacy</Link> <br />
          {session && <Logout>Logout</Logout>}
        </div>

        <div className="text-gray-300">
          <h2 className="font-bold text-white mb-4">Contact</h2>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>leye@gmail.com</p>
          <p>LinkedIn</p>
        </div>
      </div>
      <div className="border-t border-t-gray-400 flex items-center justify-around p-10 mt-5">
        <p className="text-gray-300">
          © 2024 Leye - Freelance Web Development in London & Across the UK. All
          Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
