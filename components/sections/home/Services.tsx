import ServicesCard from "@/components/cards/Services";
import React from "react";

const Services = () => {
  return (
    <div className="bg-dark-2  p-10 lg:pb-20">
      <div className="header-box text-white p-10 lg:p-20">
        <h2 className="text-center text-small-regular">Services</h2>
        <h2 className="text-center text-heading3-bold md:text-heading1-semibold">
          Full Stack Design & Development
        </h2>
      </div>
      <div className="services justify-center justify-items-center grid grid-cols-1 md:grid-cols-2 gap-6">
        <ServicesCard
          route="/services"
          button="Web design"
          title="01"
          description="I can help you with your web development needs. I can help you with your web development needs. I can help you with your web development needs."
        />
        <ServicesCard
          route="/services"
          button="Web development"
          title="02"
          description="I can help you with your web development needs. I can help you with your web development needs. I can help you with your web development needs."
        />
        <ServicesCard
          route="/services"
          button="Mern Stack Development"
          title="03"
          description="I can help you with your web development needs. I can help you with your web development needs. I can help you with your web development needs."
        />
        <ServicesCard
          route="/services"
          button="Website management"
          title="04"
          description="I can help you with your web development needs. I can help you with your web development needs. I can help you with your web development needs."
        />
      </div>
    </div>
  );
};

export default Services;
