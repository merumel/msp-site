import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import axios from "axios";
const FORM_ENDPOINT = ""; // TODO - fill on the later step
const formUrl =
  "https://script.google.com/macros/s/AKfycbz-_w3ubVqlEymYRpR_RjAgwb_R51Nht7HyTc7iubR8i2YyNBKOrE5eptDo19iyzHZR/exec";
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [contactEmail, setContactEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      const name = contactName;
      const email = contactEmail;
      const phone = contactPhone;
      const message = contactMessage;
      axios({
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        url: `${formUrl}?name=${encodeURIComponent(
          name
        )}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(
          message
        )}&phone=${encodeURIComponent(phone)}`,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>

        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
      <div className="flex flex-row bg-stone-300">
        <div className="flex w-1/3 flex-col bg-[url('../images/flat-mountains.svg')] bg-cover">
          <div className="flex-1 py-14">
            <h1 className="mx-24 text-xl font-bold text-slate-200">
              Contact Information
            </h1>
            <p className="mx-24 text-slate-200">
              Serving the greater Houston Area and beyond.
            </p>
            <p className="mx-24 mt-3 py-2 text-slate-200">
              Having an issue with your computer? Trying to figure out a
              technology solution for your business? Whatever it may be, feel
              free to send us an email, give us a call, or send us a message.
            </p>
            <div className="mx-24 mt-3 flex flex-row items-center space-x-3 pb-1 text-lg text-slate-200">
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
                XXX XXX XXX
              </p>
            </div>
            <div className="mx-24 flex flex-row items-center space-x-3 pb-1 text-lg text-slate-200">
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

        <div className="mx-20 my-8 flex w-1/2 flex-col py-14 ">
          <h1 className="pb-10 text-2xl">Send us a message</h1>
          <div className="mb-3 flex pt-0">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className="relative w-full rounded border-0 bg-slate-700 px-3   py-3 text-sm text-emerald-300 placeholder-emerald-200 shadow outline-none focus:outline-none focus:ring"
              required
            />
          </div>
          <div className="mb-3 flex flex-col pt-0 md:flex-row md:space-x-3">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="relative w-full rounded border-0 bg-slate-700 px-3  py-3 text-sm text-emerald-300 placeholder-emerald-200 shadow outline-none focus:outline-none focus:ring"
              required
            />
            <input
              type="phone"
              placeholder="Phone Number (optional)"
              name="phone"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              className="relative w-full rounded border-0 bg-slate-700 px-3  py-3 text-sm text-emerald-300 placeholder-emerald-200 shadow outline-none focus:outline-none focus:ring"
            />
          </div>
          <div className="mb-3 pt-0">
            <textarea
              placeholder="Your message"
              name="message"
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              className="relative w-full rounded border-0 bg-slate-700 px-3  py-3 text-sm text-emerald-300 placeholder-emerald-200 shadow outline-none focus:outline-none focus:ring"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <button
              className="mr-1 mb-1 rounded 
                    bg-blue-500 px-6 py-3 text-sm font-bold uppercase text-white 
                    shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-blue-600"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
