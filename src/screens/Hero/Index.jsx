import React from "react";
import "./style.scss";
import DownloadIcon from "../../images/download.png";

const HeroSection = () => {
  const downloadResume = () => {
    var link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1hacLbwe7EU6alrTt_4WtblSFTpRzuOAo/view?usp=sharing";
    // link.download = "AMIT_PALLAURI_3Y_MERN.pdf";
    link.target = "_blank";
    link.dispatchEvent(new MouseEvent("click"));
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="row custom-row">
          <div className="col-lg-7">
            <h1 className="title smaller-title">Hello! I'm</h1>
            <h1 className="title">Amit Pallauri</h1>
            <p className="subtitle">A software engineer with the curiosity and interest to solve real world problems</p>
            <div className="resume-download-btn" onClick={downloadResume}>
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
