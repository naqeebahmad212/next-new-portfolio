import Hero from "@/components/sections/about/Hero";
import React from "react";
import About from "@/components/sections/about/About";
import GetStarted from "@/components/sections/home/GetStarted";
import FindMe from "@/components/sections/about/FindMe";

const AboutPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <FindMe />
      <GetStarted bg={"bg-dark-2"} />
    </div>
  );
};

export default AboutPage;
