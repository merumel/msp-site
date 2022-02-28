import React from "react";
//import Navbar from "./Navbar";
import Navbar from "./Navbar";
const Layout = ({ children, bodyClass }) => {
  bodyClass = bodyClass || "bg-transparent w-screen";
  return (
    <div className="h-screen w-screen">
      <Navbar siteTitle="Ligma IT" />
      <div>
        <div className={bodyClass}>{children}</div>
        <footer className="bg-white">
          © {new Date().getFullYear()}, Moon Spiders LLC
          {` `}
        </footer>
      </div>
    </div>
  );
};
export default Layout;

//bg-gradient-to-r
