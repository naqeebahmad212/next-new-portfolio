import React from "react";

const BlogHero = () => {
  return (
    <section className="hero-section flex justify-between items-center lg:p-10">
      <div className="hero-content w-full lg:w-[70%] p-6 xs:px-[24px] lg:pl-[200px] ">
        <div
          className={`text-heading3-bold lg:text-[46px] lg:text-heading1-semibold text-white font-bold overflow-hidden`}
        >
          <h2>
            {" "}
            Freelance Developer <span className="text-primary-500"> Blog</span>
          </h2>
          {/* <Typed /> */}
        </div>
        <div className="text-sm font-extralight text-white mb-5 py-3">
          The work, snippets, thoughts, ideas & opinions of a freelance
          Developer.
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
