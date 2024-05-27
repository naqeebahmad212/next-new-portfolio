import About from "@/components/sections/home/About";
import Blog from "@/components/sections/home/Blog";
import Comment from "@/components/sections/home/Comment";
import { Faqs } from "@/components/sections/home/Faqs";
import GetStarted from "@/components/sections/home/GetStarted";
import Hero from "@/components/sections/home/Hero";
import RecentWork from "@/components/sections/home/RecentWork";
import Services from "@/components/sections/home/Services";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {
  const projects = await prisma.project.findMany({ orderBy: { id: "desc" } });
  return (
    <div className="">
      <Hero />
      <About />
      <RecentWork projects={projects} />
      <Services />
      <Comment />
      <Faqs />
      <Blog />
      <GetStarted bg="bg-dark-2" />
    </div>
  );
}
