import React from "react";
import Slider from "react-slick";
import { clientsSlider } from "../../constants/sliderConstants";
import razrIcon from "../../images/razr-icon.png";
import signTalkIcon from "../../images/sign-talk.png";
import solyticsIcon from "../../images/solytics.png";
import zeeIcon from "../../images/zeezest.png";
import Aos from "aos";
import "./style.scss";

const Clients = () => {
  const clientsData = [
    {
      name: "RAZRTECH",
      icon: razrIcon,
      from: "Jan 2021",
      to: "present",
    },
    {
      name: "ZEEZEST",
      icon: zeeIcon,
      from: "Jan 2021",
      to: "present",
    },
    {
      name: "SOLYTICS",
      icon: solyticsIcon,
      from: "Jan 2021",
      to: "present",
    },
    {
      name: "SIGNTALK",
      icon: signTalkIcon,
      from: "Jan 2021",
      to: "present",
    },
  ];
  return (
    <section className="clients-section" id="clients">
      <div className="container custom-container">
        <div className="row">
          <div className="col-12">
            <div className="custom-tag">
              <p>
                ||
                <span>{"My Clients"}</span>
              </p>
            </div>
            <div className="clients-header">
              <h2>Clients, I have worked with</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <Slider {...clientsSlider}>
            {clientsData.map((el) => {
              return (
                <div className="box-container">
                  <div className="client-box" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50">
                    <img src={el.icon} alt="" />
                    <p className="name">{el.name}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Clients;
