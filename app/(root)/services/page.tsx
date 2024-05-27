import GetStarted from "@/components/sections/home/GetStarted";
import Services from "@/components/sections/home/Services";
import Hero from "@/components/sections/services/Hero";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <GetStarted bg={"bg-dark-1"} />
    </div>
  );
};

export default page;
