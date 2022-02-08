import React from "react";
import Navbar from "./Navbar";
import "../styles/curves.css";

const Layout = ({ children, bodyClass }) => {
  bodyClass = bodyClass || "bg-transparent";
  return (
    <div className="h-screen">
      <Navbar siteTitle="Ligma IT" />
      <div>
        <div className={bodyClass}>{children}</div>
        <footer className="bg-white">
          © {new Date().getFullYear()}, Moon Spiders Inc.
          {` `}
          <p>this is a testie mc tsest</p>
        </footer>
      </div>
    </div>
  );
};
export default Layout;

//bg-gradient-to-r
