import React from "react";
import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="md:container md:mx-auto">
      <NavbarComponent />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
