import Link from "next/link";
import React from "react";
interface ServicesProps {
  button: string;
  title: string;
  description: string;
}

const SocialCard = ({ button, title, description }: ServicesProps) => {
  return (
    <div className="border border-gray-500 mx-auto hover:scale-[1.03] transition-all duration-500 bg-dark-3 rounded-lg w-[98%] md:w-[460px] flex flex-col items-center justify-center p-2 xs:p-10">
      <h2 className="text-center text-gray-300">{title}</h2>
      <p className="font-bold text-white py-3">{button}</p>
      <p className="text-center text-gray-300">{description}</p>
    </div>
  );
};

export default SocialCard;
