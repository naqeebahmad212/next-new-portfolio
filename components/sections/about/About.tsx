import Image from "next/image";
import Link from "next/link";
import React from "react";
import hero from "@/public/images/me2.webp";

const About = () => {
  return (
    <section
      id="about-me"
      className="about-section flex flex-col md:flex-row items-center justify-center gap-10 lg:h-[94vh] bg-dark-2 !py-10"
    >
      <div className="about-content  w-full lg:w-[40%] xs:px-[24px] lg:pl-[120px]  !p-6 flex flex-col ">
        <h1 className="text-32 font-ibm-plex-serif font-bold text-primary-500 pb-2">
          Freelance Developer
        </h1>
        <h2 className="text-heading2-semibold lg:text-heading1-semibold text-white">
          HEY I'M Leye
        </h2>
        <p className="text-white font-extralight py-5">
          I haven't had the typical route to becoming a successful freelance
          developer. I'm self-taught, teaching myself to code over weekends and
          helping friends and family with digital projects. Over the years, I
          gained a bunch of experience at a local agency and decided to become a
          freelance developer, and I haven't turned back since!
          <br />
          <br />
          Wind on a few years and a few miserable Manchester United seasons, and
          I'm still here, running my freelance business working with amazing
          clients like Reed, UK Strength & Conditioning Association and the NHS,
          just to name a few. I often work remotely with clients based in
          London, Manchester, Glasgow & more, thanks to the modern wonders of
          technology.
        </p>
      </div>
      <div className="about-image h-full w-[90%] mx-auto lg:mx-0 lg:w-1/3 rounded-xl overflow-hidden drop-shadow-xl justify-self-end">
        <Image
          src={hero}
          alt="hero"
          width={500}
          height={500}
          className="w-full object-cover h-full"
        />
      </div>
    </section>
  );
};

export default About;
