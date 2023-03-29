import React from "react";
import Footer from "../Footer";
import Header from "../Header/Index";
import "./style.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="body-content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
