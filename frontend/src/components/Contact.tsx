import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import SprinkleBackground from "../assets/Sprinkle.svg";
import ContactInfo from "./ContactInfo";
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
        <div className="flex flex-col bg-stone-300 md:flex-row">
          <ContactInfo />
          <div className="mx-10 flex flex-col py-14 md:mx-20 md:my-8 md:w-1/2 ">
            <div className="text-2xl">Thank you!</div>

            <div className="text-md">We'll be in touch soon.</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
      <div className="flex flex-col bg-stone-300 md:flex-row">
        <ContactInfo />
        <div className="mx-10 flex flex-col py-14 md:mx-20 md:my-8 md:w-1/2 ">
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
          <div className="mb-3 flex flex-col gap-y-3 md:flex-row md:gap-x-3">
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
              className="relative w-full rounded border-0 bg-slate-700 px-3 py-3 text-sm text-emerald-300 placeholder-emerald-200 shadow outline-none focus:outline-none focus:ring"
            />
          </div>
          <div className="mb-3 pt-0">
            <textarea
              placeholder="Your message (What services were you looking for? Questions? Concerns?)"
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
                    bg-indigo-700 px-6 py-3 text-sm font-bold uppercase text-white 
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
