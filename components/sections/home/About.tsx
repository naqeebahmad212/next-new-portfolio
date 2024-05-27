import Image from "next/image";
import Link from "next/link";
import React from "react";
import hero from "@/public/images/me2.webp";

const About = () => {
  return (
    <section className="about-section flex flex-col md:flex-row items-center justify-center lg:h-[94vh] bg-dark-2 !py-10">
      <div className="about-content w-full lg:w-[40%] xs:px-[24px] lg:pl-[120px]  !p-6 flex flex-col ">
        <h1 className="text-32 font-ibm-plex-serif font-bold text-primary-500 pb-2">
          HEY I'M Leye
        </h1>
        <h2 className="text-heading2-semibold lg:text-heading1-semibold text-white">
          About Me
        </h2>
        <p className="text-white font-extralight py-5">
          I'm a 38-year-old web developer with a freakish obsession with the
          web. I've been a website developer since 2011 and have worked with all
          types of businesses, from startups to large international companies.
          This experience ensures a refined web development process that
          delivers results.
        </p>
        <Link href="/about" className="">
          <button className="cssbuttons-io-button">
            About Me
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
