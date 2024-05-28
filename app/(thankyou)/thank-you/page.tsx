import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-dark-1">
      <div className="w-1/2 bg-dark-2 rounded-xl drop-shadow-xl py-5">
        <h1 className="text-primary-500 text-center p-2 xs:p-5 lg:p-10 text-heading1-bold">
          Thank you for reaching out to us!
        </h1>

        <p className="text-center text-gray-300 p-2 xs:p-5 lg:p-10">
          We appreciate your time. We will soon be in touch with you
        </p>

        <Link href="/" className="">
          <button className="cssbuttons-io-button relative mx-auto">
            Go to Home
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
    </div>
  );
};

export default page;
