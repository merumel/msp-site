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
      <div className="flex flex-col bg-stone-300 md:flex-row">
        <div
          className="flex w-full flex-col bg-cover md:w-1/3"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1280' height='1280' preserveAspectRatio='none' viewBox='0 0 1280 1280'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2052%26quot%3b)' fill='none'%3e%3crect width='1280' height='1280' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M46.72 -7.33L90.02 17.67L90.02 67.67L46.72 92.67L3.42 67.67L3.42 17.67zM90.02 67.67L133.32 92.67L133.32 142.67L90.02 167.67L46.72 142.67L46.72 92.67zM90.02 367.67L133.32 392.67L133.32 442.67L90.02 467.67L46.72 442.67L46.72 392.67zM46.72 592.67L90.02 617.67L90.02 667.67L46.72 692.67L3.42 667.67L3.42 617.67zM90.02 667.67L133.32 692.67L133.32 742.67L90.02 767.67L46.72 742.67L46.72 692.67zM46.72 892.67L90.02 917.67L90.02 967.67L46.72 992.67L3.42 967.67L3.42 917.67zM90.02 1267.67L133.32 1292.67L133.32 1342.67L90.02 1367.67L46.72 1342.67L46.72 1292.67zM133.32 442.67L176.63 467.67L176.63 517.67L133.32 542.67L90.02 517.67L90.02 467.67zM176.63 517.67L219.93 542.67L219.93 592.67L176.63 617.67L133.32 592.67L133.32 542.67zM133.32 742.67L176.63 767.67L176.63 817.67L133.32 842.67L90.02 817.67L90.02 767.67zM219.93 592.67L263.23 617.67L263.23 667.67L219.93 692.67L176.63 667.67L176.63 617.67zM263.23 667.67L306.53 692.67L306.53 742.67L263.23 767.67L219.93 742.67L219.93 692.67zM219.93 742.67L263.23 767.67L263.23 817.67L219.93 842.67L176.63 817.67L176.63 767.67zM219.93 1042.67L263.23 1067.67L263.23 1117.67L219.93 1142.67L176.63 1117.67L176.63 1067.67zM349.84 217.67L393.14 242.67L393.14 292.67L349.84 317.67L306.53 292.67L306.53 242.67zM306.53 292.67L349.84 317.67L349.84 367.67L306.53 392.67L263.23 367.67L263.23 317.67zM306.53 442.67L349.84 467.67L349.84 517.67L306.53 542.67L263.23 517.67L263.23 467.67zM306.53 592.67L349.84 617.67L349.84 667.67L306.53 692.67L263.23 667.67L263.23 617.67zM306.53 892.67L349.84 917.67L349.84 967.67L306.53 992.67L263.23 967.67L263.23 917.67zM349.84 967.67L393.14 992.67L393.14 1042.67L349.84 1067.67L306.53 1042.67L306.53 992.67zM436.44 217.67L479.75 242.67L479.75 292.67L436.44 317.67L393.14 292.67L393.14 242.67zM436.44 667.67L479.75 692.67L479.75 742.67L436.44 767.67L393.14 742.67L393.14 692.67zM436.44 967.67L479.75 992.67L479.75 1042.67L436.44 1067.67L393.14 1042.67L393.14 992.67zM393.14 1042.67L436.44 1067.67L436.44 1117.67L393.14 1142.67L349.84 1117.67L349.84 1067.67zM436.44 1267.67L479.75 1292.67L479.75 1342.67L436.44 1367.67L393.14 1342.67L393.14 1292.67zM523.05 217.67L566.35 242.67L566.35 292.67L523.05 317.67L479.75 292.67L479.75 242.67zM479.75 592.67L523.05 617.67L523.05 667.67L479.75 692.67L436.44 667.67L436.44 617.67zM479.75 892.67L523.05 917.67L523.05 967.67L479.75 992.67L436.44 967.67L436.44 917.67zM523.05 967.67L566.35 992.67L566.35 1042.67L523.05 1067.67L479.75 1042.67L479.75 992.67zM523.05 1267.67L566.35 1292.67L566.35 1342.67L523.05 1367.67L479.75 1342.67L479.75 1292.67zM609.65 217.67L652.96 242.67L652.96 292.67L609.65 317.67L566.35 292.67L566.35 242.67zM566.35 892.67L609.65 917.67L609.65 967.67L566.35 992.67L523.05 967.67L523.05 917.67zM566.35 1042.67L609.65 1067.67L609.65 1117.67L566.35 1142.67L523.05 1117.67L523.05 1067.67zM609.65 1267.67L652.96 1292.67L652.96 1342.67L609.65 1367.67L566.35 1342.67L566.35 1292.67zM696.26 367.67L739.56 392.67L739.56 442.67L696.26 467.67L652.96 442.67L652.96 392.67zM696.26 667.67L739.56 692.67L739.56 742.67L696.26 767.67L652.96 742.67L652.96 692.67zM696.26 817.67L739.56 842.67L739.56 892.67L696.26 917.67L652.96 892.67L652.96 842.67zM782.86 67.67L826.17 92.67L826.17 142.67L782.86 167.67L739.56 142.67L739.56 92.67zM782.86 367.67L826.17 392.67L826.17 442.67L782.86 467.67L739.56 442.67L739.56 392.67zM782.86 667.67L826.17 692.67L826.17 742.67L782.86 767.67L739.56 742.67L739.56 692.67zM782.86 967.67L826.17 992.67L826.17 1042.67L782.86 1067.67L739.56 1042.67L739.56 992.67zM869.47 67.67L912.77 92.67L912.77 142.67L869.47 167.67L826.17 142.67L826.17 92.67zM826.17 442.67L869.47 467.67L869.47 517.67L826.17 542.67L782.86 517.67L782.86 467.67zM869.47 517.67L912.77 542.67L912.77 592.67L869.47 617.67L826.17 592.67L826.17 542.67zM869.47 667.67L912.77 692.67L912.77 742.67L869.47 767.67L826.17 742.67L826.17 692.67zM869.47 1267.67L912.77 1292.67L912.77 1342.67L869.47 1367.67L826.17 1342.67L826.17 1292.67zM912.77 -7.33L956.07 17.67L956.07 67.67L912.77 92.67L869.47 67.67L869.47 17.67zM956.07 517.67L999.38 542.67L999.38 592.67L956.07 617.67L912.77 592.67L912.77 542.67zM956.07 817.67L999.38 842.67L999.38 892.67L956.07 917.67L912.77 892.67L912.77 842.67zM912.77 892.67L956.07 917.67L956.07 967.67L912.77 992.67L869.47 967.67L869.47 917.67zM999.38 -7.33L1042.68 17.67L1042.68 67.67L999.38 92.67L956.07 67.67L956.07 17.67zM1042.68 67.67L1085.98 92.67L1085.98 142.67L1042.68 167.67L999.38 142.67L999.38 92.67zM999.38 142.67L1042.68 167.67L1042.68 217.67L999.38 242.67L956.07 217.67L956.07 167.67zM999.38 292.67L1042.68 317.67L1042.68 367.67L999.38 392.67L956.07 367.67L956.07 317.67zM1042.68 367.67L1085.98 392.67L1085.98 442.67L1042.68 467.67L999.38 442.67L999.38 392.67zM1042.68 667.67L1085.98 692.67L1085.98 742.67L1042.68 767.67L999.38 742.67L999.38 692.67zM999.38 742.67L1042.68 767.67L1042.68 817.67L999.38 842.67L956.07 817.67L956.07 767.67zM1042.68 817.67L1085.98 842.67L1085.98 892.67L1042.68 917.67L999.38 892.67L999.38 842.67zM999.38 1192.67L1042.68 1217.67L1042.68 1267.67L999.38 1292.67L956.07 1267.67L956.07 1217.67zM1085.98 -7.33L1129.28 17.67L1129.28 67.67L1085.98 92.67L1042.68 67.67L1042.68 17.67zM1085.98 142.67L1129.28 167.67L1129.28 217.67L1085.98 242.67L1042.68 217.67L1042.68 167.67zM1129.28 517.67L1172.59 542.67L1172.59 592.67L1129.28 617.67L1085.98 592.67L1085.98 542.67zM1129.28 967.67L1172.59 992.67L1172.59 1042.67L1129.28 1067.67L1085.98 1042.67L1085.98 992.67zM1172.59 442.67L1215.89 467.67L1215.89 517.67L1172.59 542.67L1129.28 517.67L1129.28 467.67zM1172.59 592.67L1215.89 617.67L1215.89 667.67L1172.59 692.67L1129.28 667.67L1129.28 617.67zM1215.89 817.67L1259.19 842.67L1259.19 892.67L1215.89 917.67L1172.59 892.67L1172.59 842.67zM1172.59 1192.67L1215.89 1217.67L1215.89 1267.67L1172.59 1292.67L1129.28 1267.67L1129.28 1217.67zM1259.19 142.67L1302.49 167.67L1302.49 217.67L1259.19 242.67L1215.89 217.67L1215.89 167.67zM1302.49 367.67L1345.8 392.67L1345.8 442.67L1302.49 467.67L1259.19 442.67L1259.19 392.67zM1259.19 892.67L1302.49 917.67L1302.49 967.67L1259.19 992.67L1215.89 967.67L1215.89 917.67z' stroke='url(%23SvgjsLinearGradient2053)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2052'%3e%3crect width='1280' height='1280' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='1280' y1='1280' x2='0' y2='0' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2053'%3e%3cstop stop-color='rgba(234%2c 179%2c 8%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(67%2c 56%2c 202%2c 1)' offset='0.76'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
          }}
        >
          <div className="mx-2 mt-5 inline-block bg-[#0E2A47] p-2 md:mx-10 md:mt-16">
            <h1 className="text-xl font-bold text-slate-200">
              Contact Information
            </h1>
            <p className="text-slate-200">
              Serving the greater Houston Area and beyond.
            </p>
            <p className="mt-3 py-2 text-slate-200">
              Having an issue with your computer? Trying to figure out a
              technology solution for your business? Whatever it may be, feel
              free to send us an email, give us a call, or send us a message.
            </p>
            <div className="mt-3 flex flex-row items-center space-x-3 pb-1 text-lg text-slate-200">
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
            <div className="flex flex-row items-center space-x-3 pb-1 text-lg text-slate-200">
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
          <div className="mb-3 flex flex-col space-y-3 pt-0 md:flex-row md:space-x-3">
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
              placeholder="Your message (What services where you looking for? Questions? Concerns?"
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
