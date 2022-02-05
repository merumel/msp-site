import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image"


const FORM_ENDPOINT = ""; // TODO - fill on the later step


const ContactForm = () => {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {

    setTimeout(() => {

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

    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
        <div className="flex flex-row bg-stone-300">
            <div className="flex flex-col w-1/3 bg-[url('../images/flat-mountains.svg')] bg-cover">
              <div className="flex-1 py-14">
                    <h1 className="mx-24 text-xl font-bold text-slate-200">Contact Information</h1>
                    <p className="mx-24 text-slate-200">Serving the greater Houston Area and beyond.</p>
                    <p className="py-2 mx-24 mt-3 text-slate-200">Having an issue with your computer? Trying to figure out a technology solution for your business? Whatever it may be, feel free to send us an email, give us a call, or send us a message.</p>
                    <div className="flex mt-3 text-slate-200 flex-row pb-1 mx-24 items-center space-x-3 text-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 align-center justify-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                    </svg>
                                    <p>                                                
                                    <strong>Phone: </strong>
                                     XXX XXX XXX
                                    </p>
                                </div>
                    <div className="flex flex-row pb-1 mx-24 items-center space-x-3 text-slate-200 text-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p>
                                    <strong>Email: </strong>
                                        support@maxlevel.tech
                                    </p>
                    </div>
              </div>
            </div>
            
            <div className="flex flex-col w-1/2 mx-20 my-8 py-14">
                <h1 className="pb-10 text-2xl">Send us a message</h1>
                <div className="flex mb-3 pt-0">
                    <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    className="px-3 py-3 placeholder-emerald-400 text-green-600 relative bg-slate-700   rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <textarea
                    placeholder="Your message"
                    name="message"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <button
                    className="bg-blue-500 text-white active:bg-blue-600 
                    font-bold uppercase text-sm px-6 py-3 rounded shadow 
                    hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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