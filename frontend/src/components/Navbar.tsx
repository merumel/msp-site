import { Link } from "gatsby";
import PrinterImage from "../assets/printer.svg";

import React from "react";

const Navbar = ({ siteTitle = `` }) => (
  <div className="relative z-10 w-full items-center bg-indigo-700 bg-opacity-80 bg-clip-padding shadow-sm backdrop-blur-md">
    <nav className="relative mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-center p-6">
      <div className="mr-6 flex flex-shrink-0 items-center text-amber-500">
        <PrinterImage className="h-12 w-12" />
        <span className="pl-2 text-2xl font-semibold tracking-tight">
          Max Level IT
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center rounded border border-teal-400 px-3 py-2 text-yellow-700 hover:border-white hover:text-white">
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
      <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="mt-4 mr-4 block text-white hover:text-white lg:mt-0 lg:inline-block"
          >
            Services
          </a>
          <a
            href="#responsive-header"
            className="mt-4 mr-4 block text-white hover:text-white lg:mt-0 lg:inline-block"
          >
            Pricing
          </a>
          <a
            href="#responsive-header"
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
  </div>
);

export default Navbar;
