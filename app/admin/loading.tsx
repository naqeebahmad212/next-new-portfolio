import React from "react";

const Loading = () => {
  return (
    <div className="loader fixed top-0 w-[65%] lg:w-screen h-screen flex items-start justify-center bg-dark-1">
      <div className="container">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loading;
