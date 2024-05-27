import SocialCard from "@/components/cards/SocialCard";
import React from "react";

const FindMe = () => {
  return (
    <div className="bg-dark-1  p-10 lg:pb-20">
      <div className="header-box text-white p-10 lg:p-20">
        <h2 className="text-center text-small-regular">Social</h2>
        <h2 className="text-center text-heading3-bold md:text-heading1-semibold">
          Where You Can Find Me
        </h2>
      </div>
      <div className="services justify-center justify-items-center flex flex-col lg:flex-row gap-10">
        <SocialCard
          button="Social"
          title="01"
          description="You can follow me on Twitter to see what I'm up to in the office or connect with me on LinkedIn for something more professional. You can check out my blog for valuable tips and industry insights."
        />

        <SocialCard
          button="Press"
          title="02"
          description="I've featured on significant tech sites like Treehouse, Web Designer Depot and One Extra Pixel. I love getting involved in the industry wherever possible, and I'm always available to be a guest on your next blog post or podcast!"
        />
      </div>
    </div>
  );
};

export default FindMe;
