import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accordian = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-base-regular !text-start font-semibold ">
          Why use a freelance web designer?
        </AccordionTrigger>
        <AccordionContent className="!text-base-regular text-gray-400">
          A freelance web designer can offer great value for money compared to
          an agency, whilst offering top quality websites and a more personal
          service.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-base-regular font-semibold !text-start">
          What locations do you cover?
        </AccordionTrigger>
        <AccordionContent className="!text-base-regular text-gray-400">
          I have spent years working remotely with businesses of all shapes and
          sizes. I've worked on freelance web design projects with clients based
          in London, Manchester, Glasgow, Essex, Oxford, Hereford, Gloucester
          and probably a city near you.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-base-regular font-semibold !text-start">
          How much does a freelance website designers charge?
        </AccordionTrigger>
        <AccordionContent className="!text-base-regular text-gray-400">
          The rates can vary depending on many factors, from experience to
          efficiency. Generally in the UK you'd be looking at minimum £40 an
          hour for a quality freelancer. As a rough guide, please see below my
          ballpark figures: Static Websites £2000+ Content-Managed Websites
          £2500
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="text-base-regular font-semibold !text-start">
          How long does a website take to build from a freelance web designer?
        </AccordionTrigger>
        <AccordionContent className="!text-base-regular text-gray-400">
          On average, a website project can take anywhere from a couple of days
          to a couple of months, depending on size.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger className="text-base-regular font-semibold !text-start">
          What's the difference between a freelance web designer and a freelance
          web developer?
        </AccordionTrigger>
        <AccordionContent className="!text-base-regular text-gray-400 font-extralight">
          A web designer designs how things look and feel, usually in a digital
          design canvas, like Figma or Sketch. A front-end developer then brings
          this to life in the browser, layering on interaction and user
          experience. I have years of experience and knowledge in both areas, so
          I can become a great asset to businesses looking to bridge that gap
          between design and development.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordian;
