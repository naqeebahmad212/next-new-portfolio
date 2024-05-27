import Link from "next/link";
import React from "react";
interface ServicesProps {
  button: string;
  title: string;
  description: string;
  route: string;
}

const ServicesCard = ({ button, title, description, route }: ServicesProps) => {
  return (
    <Link href={route} className="">
      <div className="border border-gray-500 hover:scale-[1.03] transition-all duration-500 bg-dark-3 rounded-lg w-[98%] xs:w-[400px] flex flex-col items-center justify-center p-2 xs:p-10">
        <h2 className="text-center text-gray-300">{title}</h2>
        <button className="cssbuttons-io-button mt-5 mb-10">
          {button}
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
        <p className="text-center text-gray-300">{description}</p>
      </div>
    </Link>
  );
};

export default ServicesCard;
