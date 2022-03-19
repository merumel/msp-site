import { Link } from "gatsby";
import PrinterImage from "../assets/printer.svg";
import LogoImage from "../assets/MaxLevelLogo.svg";
import { Transition } from "@headlessui/react";
import React, { useState } from "react";

const Navbar = ({ siteTitle = `` }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative z-10 w-full items-center bg-[#0e0150] bg-opacity-80 bg-clip-padding shadow-sm backdrop-blur-md">
      <nav className="relative mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-center p-6">
        <div className="mr-6 flex flex-shrink-0 items-center text-amber-500">
          <LogoImage className="h-14 w-14" />

          <span className="pl-3 text-2xl font-semibold tracking-tight">
            Max Level IT
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center rounded border border-teal-400 px-3 py-2 text-yellow-700 hover:border-white hover:text-white
          "
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="block hidden w-full flex-grow lg:flex lg:w-auto lg:items-center">
          <div className="text-sm lg:flex-grow">
            <a
              href="#services"
              className="mt-4 mr-4 block text-white hover:text-white lg:mt-0 lg:inline-block"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="mt-4 mr-4 block text-white hover:text-white lg:mt-0 lg:inline-block"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="mt-4 block text-white hover:text-white lg:mt-0 lg:inline-block"
            >
              Contact Us
            </a>
          </div>
          <div>
            <a
              href="#"
              className="mt-4 inline-block rounded bg-amber-500 px-4 py-2 text-sm font-bold leading-none text-white shadow-lg hover:border-transparent hover:bg-white hover:text-teal-500 lg:mt-0"
            >
              Get Support Now
            </a>
          </div>
        </div>
      </nav>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="lg:hidden" id="mobile-menu">
            <div ref={ref} className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              <a
                href="services"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700"
              >
                Services
              </a>

              <a
                href="#pricing"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Pricing
              </a>

              <a
                href="#contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Navbar;
