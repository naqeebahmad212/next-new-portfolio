import React from "react";
import Typed from "../../Typing";
import hero from "@/public/images/me2.webp";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero-section flex justify-between items-center lg:h-[70vh]">
      <div className="hero-content w-full lg:w-[60%] p-6 xs:px-[24px] lg:pl-[200px] ">
        <div
          className={`text-heading2-semibold lg:text-[45px] lg:text-heading1-semibold text-white font-bold overflow-hidden`}
        >
          Freelance <span className="text-blue-500"> Developer</span>
          <Typed />
        </div>
        <div className="text-sm font-extralight text-white mb-5 py-3">
          I'm Leye, a freelance web developer with over 13 years of experience
          working with clients in London and across the UK.
        </div>
        <Link href="/portfolio" className="">
          <button className="cssbuttons-io-button">
            View My Work
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
    </section>
  );
};

export default Hero;
