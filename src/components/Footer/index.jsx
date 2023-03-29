import React from "react";
import "./style.scss";
import Logo from "../../images/logo.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <p>
            © 2023
            <span>Portfolio</span>
            Made with 💖 by
            <span>Amit Pallauri</span>
          </p>
          <div className="footer-img">
            <img src={Logo} alt="" className="logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
