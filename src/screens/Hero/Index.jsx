import React from "react";
import "./style.scss";
import DownloadIcon from "../../images/download.png";
import loadable from "@loadable/component";
import CustomModal from "../../components/Modal/index";
import { useState } from "react";
import loadingVideo from "../../images/loading.mp4";
const Icofont = loadable(() => import("react-icofont"));

const HeroSection = () => {
  const [show, setShow] = useState(false);
  const downloadResume = () => {
    var link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1tMMnBI2v64Swg7hHn5P0O7SpfSZynD9U/view?usp=drive_link";
    // link.download = "AMIT_PALLAURI_3Y_MERN.pdf";
    link.target = "_blank";
    link.dispatchEvent(new MouseEvent("click"));
  };

  return (
    <>
      <CustomModal show={show} handleClose={() => setShow(false)}>
        <video width="1100" height="600" autoPlay>
          <source src={loadingVideo} type="video/mp4" />
        </video>
      </CustomModal>
      <section className="hero-section" id="hero">
        <div className="container">
          <div className="row custom-row">
            <div className="col-lg-7">
              <h1 className="title smaller-title">Hello! I'm</h1>
              <h1 className="title">Amit Pallauri</h1>
              <p className="subtitle">
                A software engineer with the curiosity and interest to solve
                real world problems
              </p>

              <div className="resume-container">
                <div className="resume-download-btn" onClick={downloadResume}>
                  <p>Get Resume</p>
                  <img src={DownloadIcon} alt="" />
                </div>

                <div className="play-video-container">
                  <div className="play-icon" onClick={() => setShow(true)}>
                    <Icofont icon="icofont-ui-play" className="icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="avatar">
                <img
                  src="https://htmldemo.net/lendex/lendex/assets/images/portrait/portrait-hero.png"
                  alt=""
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
