import React, { useEffect, useState } from "react";
import "./style.scss";
import DoubleArrowIcon from "../../images/double-arrow.png";
import HambarIcon from "../../images/hambar.png";
import Logo from "../../images/logo.png";

const Header = () => {
  useEffect(() => {
    const header = document.querySelector(".header-container");
    window.addEventListener("scroll", function () {
      if (window.pageYOffset >= 5) {
        header.classList.add("header-fixed");
        let navbarheight = header.offsetHeight;
        document.body.style.paddingTop = navbarheight + "px";
      } else {
        header.classList.remove("header-fixed");
        document.body.style.paddingTop = "0";
      }
    });
  }, [window]);

  return (
    <section className={`header-container`}>
      <div className="container custom-container">
        <div className="row">
          <div className="col-2">
            <div className="logo-container">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="col-7 mob-hide">
            <ul className="items">
              <li>Home</li>
              <li>Service</li>
              <li>Blog</li>
              <li>Pages</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-3 mob-hide">
            <div className="btn-container">
              <div className="hire-me-btn">
                <p>Hire me</p>
                <img src={DoubleArrowIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="col-9 hambar-icon">
            <img src={HambarIcon} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
