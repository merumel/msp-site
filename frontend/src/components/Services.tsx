import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Services = () => {
  return (
    <div className="flex flex-col bg-gray-300 text-[#e4e4e4]">
      <h1 className="pt-20 text-center text-2xl font-bold text-indigo-600">
        Our Services
      </h1>
      <strong className="text-center text-4xl font-bold text-black">
        What We Offer
      </strong>
      <div className="">
        <div className="mt-15 font-hairline grid grid-cols-1 gap-x-4 gap-y-14 self-start p-5 font-sans md:grid-cols-3 md:p-20">
          <div className="flex items-center justify-center">
            <div className="rounded bg-slate-300 shadow-lg shadow-indigo-700/50 hover:shadow-xl hover:shadow-amber-700/50 md:h-96 md:max-w-md">
              <StaticImage
                as="div"
                className="m-7 flex h-1/3 w-1/4"
                objectFit="contain"
                src="../images/code.png"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold leading-6 text-purple-700">
                  IT Consulting
                </div>
                <p className="text-lg text-stone-800">
                  Provide custom recommendations to improve your workflow. 
                  We ensure your technology needs
                  match your goals.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="max-w-md rounded bg-slate-300 shadow-lg shadow-indigo-700/50 hover:shadow-xl hover:shadow-amber-700/50 md:h-96">
              <StaticImage
                as="div"
                className="m-7 flex h-1/3 w-1/4"
                objectFit="contain"
                src="../images/laptop_1.png"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold leading-6 text-purple-700">
                  Hardware and Software Support
                </div>
                <p className="text-lg text-stone-800">
                No matter the problem, we keep your systems performing at <strong>MAX LEVEL</strong>.

                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-96 max-w-md rounded bg-slate-300 shadow-lg shadow-indigo-700/50 hover:shadow-xl hover:shadow-amber-700/50">
              <StaticImage
                as="div"
                className="m-7 flex h-1/3 w-1/4"
                objectFit="contain"
                src="../images/document.png"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold leading-6 text-indigo-700">
                  Malware Solutions
                </div>
                <p className="text-lg text-stone-800">
                  We find, eliminate, and prevent viruses and malware.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-96 max-w-md rounded bg-slate-300 shadow-lg shadow-indigo-700/50 hover:shadow-xl hover:shadow-amber-700/50">
              <StaticImage
                as="div"
                className="m-7 flex h-1/3 w-1/4"
                objectFit="contain"
                src="../images/cloud.png"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold leading-6 text-indigo-700">
                  Monitoring and Management
                </div>
                <p className="text-lg text-stone-800">
                  Keep your technology safe in an evolving threat landscape. Our analysts detect system vulnerabilities and deflect issues before they become problems.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-96 max-w-md rounded bg-slate-300 shadow-lg shadow-indigo-700/50 hover:shadow-xl hover:shadow-amber-700/50">
              <StaticImage
                as="div"
                className="m-7 flex h-1/3 w-1/4"
                objectFit="contain"
                src="../images/lock.png"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold leading-6 text-indigo-700">
                  Reliability
                </div>
                <p className="text-lg text-stone-800">
                IT issues are less stressful when you can rely on a familiar support specialist who knows you and your business.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-96 max-w-md rounded bg-slate-300 shadow-lg shadow-indigo-700/50 hover:shadow-xl hover:shadow-amber-700/50">
              <StaticImage
                as="div"
                className="m-7 flex h-1/3 w-1/4"
                objectFit="contain"
                src="../images/mail.png"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold leading-6 text-indigo-700">
                  Microsoft 365 and Cloud Services
                </div>
                <p className="text-base text-stone-800">
                  As a Microsoft Partner, we have extensive experience
                  performing successful Microsoft 365 implementations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
