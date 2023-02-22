import React from "react";
import Header from "../Header/Index";
import "./style.scss";
import "../Header/style.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="body-content">{children}</div>
    </>
  );
};

export default Layout;
