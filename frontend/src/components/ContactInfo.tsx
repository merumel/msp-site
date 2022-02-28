import React from "react";

const ContactInfo = () => {
  return (
    <div className="bg-sprinkle flex w-full flex-col bg-cover md:w-1/3">
      <div className="mx-2 mt-5 inline-block bg-[#3B2893] p-2 md:mx-10 md:mt-16">
        <h1 className="text-xl font-bold text-slate-100">
          Contact Information
        </h1>
        <p className="text-slate-100">
          Serving the greater Houston Area and beyond.
        </p>
        <p className="mt-3 py-2 text-slate-100">
          Having an issue with your computer? Trying to figure out a technology
          solution for your business? Whatever it may be, feel free to send us
          an email, give us a call, or send us a message.
        </p>
        <div className="mt-3 flex flex-row items-center space-x-3 pb-1 text-lg text-slate-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="align-center h-5 w-5 justify-center"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
            />
          </svg>
          <p>
            <strong>Phone: </strong>
            281-241-7071
          </p>
        </div>
        <div className="flex flex-row items-center space-x-3 pb-1 text-lg text-slate-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <p>
            <strong>Email: </strong>
            support@maxlevel.tech
          </p>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
