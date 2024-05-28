"use client";
import { useState, useEffect } from "react";

export const ContactForm = () => {
  // Fields I might need Name,Email, Message, Budget, Service,

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState("Select Budget");
  const [timescale, setTimescale] = useState("Select Timescale");
  const [hon1, setHon1] = useState("");
  const [hon2, setHon2] = useState("");
  const [ClickDisabled, setClickDisabled] = useState(false);

  useEffect(() => {
    console.log("UseEffect for hon1 and hon2", hon1.length, hon2.length);
    if (hon1.length > 0 || hon2.length > 0) {
      setClickDisabled(true);
    } else {
      setClickDisabled(false);
    }
  }, [hon1, hon2]);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const honStyle = {
    opacity: "0",
    position: "absolute",
    top: "0",
    left: "0",
    height: "0",
    width: "0",
    zIndex: "-1",
  };
  return (
    <div className="w-full">
      <div className="Contact w-full mx-auto lg:w-[70%] bg-dark-2 p-6 rounded-xl">
        <h1 className="Contact_Header text-gray-300 text-heading2-semibold mb-10">
          Contact Me
        </h1>
        <form
          className="Contact_Form w-full"
          action="https://formsubmit.co/naqeebahmad212@gmail.com"
          method="POST"
        >
          <input type="hidden" className="" name="_replyto" value={email} />
          <input
            type="hidden"
            name="_subject"
            value="!!!!Contact Form Submission"
          />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for contacting Leye-the-Developer. We will get back to you shortly."
          />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value="https://next-new-portfolio-three.vercel.app/thank-you"
          />
          <div className="Contact_NameEmail w-full flex gap-5 justify-center items-center flex-col md:flex-row mb-5">
            <div className="w-full">
              <label
                className="Contact_NameLabel text-gray-300"
                htmlFor="jklname"
              >
                Name*:
              </label>
              <input
                required
                className="Contact_NameInput  w-full p-2 rounded-md"
                name="name"
                placeholder="Enter Your Name"
                type="text"
                id="jklname"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="w-full">
              <label
                className="Contact_EmailLabel text-gray-300"
                htmlFor="jklemail "
              >
                Email*:
              </label>
              <input
                className="Contact_EmailInput w-full p-2 rounded-md"
                name="email"
                placeholder="Enter Your Email"
                required
                type="email"
                id="jklemail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="Contact_BudgetTimeDiv flex gap-5 justify-center items-center  flex-col md:flex-row mb-5">
            <div className="w-full">
              <label
                className="Contact_BudgetTime text-gray-300"
                htmlFor="jklbudget"
              >
                Select Budget:
              </label>
              <select
                className="Contact_BudgetInput w-full p-2 rounded-md"
                id="jklbudget"
                name="jklbudget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="Select Budget">Select Budget</option>
                <option value="Under £2,000">Under £2,000</option>
                <option value="£2,000 - £5000">£2,000 - £5,000</option>
                <option value="Over £5,000">Over £5,000</option>
              </select>
            </div>

            <div className="w-full">
              <label htmlFor="jkltimescale" className="text-gray-300">
                Select Time Scale:
              </label>
              <select
                className="Contact_TimeInput w-full p-2 rounded-md"
                id="jkltimescale"
                name="jkltimescale"
                value={timescale}
                onChange={(e) => setTimescale(e.target.value)}
              >
                <option value="Select Time Scale">Select Time Scale</option>
                <option value="Under 1 month">Under 1 month</option>
                <option value="1-3 months">1-3 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="Over 6 months">Over 6 months</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="jklmessage" className="text-gray-300">
              Message:
            </label>
            <textarea
              className="Contact_MessageInput w-full"
              id="jklmessage"
              name="jklmessage"
              spellCheck="true"
              rows="15"
              placeholder="Details of your project and services you might be interested in"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Honeypot */}
          <div style={honStyle}>
            <label htmlFor="name"></label>
            <input
              style={honStyle}
              tabIndex={-1}
              type="text"
              name="_honey"
              autoComplete="off"
              id="name"
              placeholder="Enter Your name"
              onChange={(e) => setHon1(e.target.value)}
            />

            <label htmlFor="email"></label>
            <input
              style={honStyle}
              tabIndex={-1}
              type="email"
              name="_honey"
              autoComplete="off"
              id="email"
              placeholder="Enter Your email address"
              onChange={(e) => setHon2(e.target.value)}
            />
          </div>

          <button
            className="Contact_Submit p-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-500"
            disabled={ClickDisabled}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
