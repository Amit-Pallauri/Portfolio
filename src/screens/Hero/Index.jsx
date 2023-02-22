import React from "react";
import "./style.scss";
import DownloadIcon from "../../images/download.png";

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero-content">
      <div className="container">
        <div className="row custom-row">
          <div className="col-lg-7">
            <h1 className="title">Hello! I'm Amit Pallauri</h1>
            <p className="subtitle">Software Developer specializing in MERN stack development.</p>
            <div className="resume-download-btn">
              <p>Get Resume</p>
              <img src={DownloadIcon} alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="avatar">
              <img src="https://htmldemo.net/lendex/lendex/assets/images/portrait/portrait-hero.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
