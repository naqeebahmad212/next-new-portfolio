import Accordian from "@/components/shared/Accordian";
import { Accordion } from "@radix-ui/react-accordion";
import React from "react";

export const Faqs = () => {
  return (
    <div className="p-5 xs:p-10 lg:p-40 lg:pl-[200px] bg-dark-2">
      <p className="text-white">FREQUENTLY ASKED</p>
      <h1 className="text-start text-white text-heading2-semibold lg:text-heading1-semibold mb-5">
        FAQ's
      </h1>
      <div className="text-gray-300 font-extralight !text-start text-heading4-medium lg:text-heading3-medium">
        <Accordian />
      </div>
    </div>
  );
};
