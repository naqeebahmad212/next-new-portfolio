import Typed from "../../Typing";
import hero from "@/public/images/me2.webp";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="hero-section flex justify-between items-center lg:h-[70vh]">
      <div className="hero-content w-full lg:w-[70%] p-6 xs:px-[24px] lg:pl-[200px] ">
        <div
          className={`text-heading2-bold lg:text-[46px] lg:text-heading1-semibold text-white font-bold overflow-hidden`}
        >
          <h2>
            {" "}
            Web Development <span className="text-primary-500"> Services</span>
          </h2>
          <Typed />
        </div>
        <div className="text-sm font-extralight text-white mb-5 py-3">
          I work on everything web, from backend to front-end development.
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
