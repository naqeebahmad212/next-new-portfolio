"use client";
import { ReactTyped } from "react-typed";

const Typed = () => (
  <div className="text-lg text-white">
    <ReactTyped
      strings={[
        "Web Development",
        "Backend Development",
        "Frontend Development",
        "Mern-Stack Development",
        "Web Management",
        "Web Design",
      ]}
      typeSpeed={40}
      backSpeed={40}
      attr="placeholder"
      loop
    >
      <input className="bg-transparent text-primary-foreground" type="text" />
      {/* <div></div> */}
    </ReactTyped>
  </div>
);

export default Typed;
