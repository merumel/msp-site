import { Link } from "gatsby"
import PrinterImage from "../assets/printer.svg";

import React from "react"

const Navbar = ({ siteTitle = ``}) => (
    <nav className="flex items-center justify-between flex-wrap bg-gradient-to-tl from-indigo-800 to-indigo-900 p-6">
    <div className="flex items-center flex-shrink-0 text-amber-500 mr-6">
      <PrinterImage className="h-12 w-12"/>
      <span className="font-semibold text-2xl tracking-tight pl-2">Max Level IT</span>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-yellow-700 border-teal-400 hover:text-white hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
          Services
        </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
          Pricing
        </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
          Contact Us
        </a>
      </div>
      <div>
        <a href="#" className="inline-block text-sm px-4 py-2 leading-none rounded font-bold bg-amber-500 text-white shadow-lg hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Get Support Now</a>
      </div>
    </div>
  </nav>
)

export default Navbar