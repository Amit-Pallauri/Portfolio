import React from "react";
import "./style.scss";
import DownloadIcon from "../../images/download.png";

const HeroSection = () => {
  const downloadResume = () => {
    var link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1MHDKJQCsrpCL1ZzIdMB1DIDRF5VZaaRk/view?usp=sharing";
    link.download = "Amit_Pallauri_MERN_3y.pdf";
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
            <p className="subtitle">Software Developer specializing in MERN stack development.</p>
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
