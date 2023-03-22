import React from "react";
import Slider from "react-slick";
import VerticalCard from "../../components/VerticalCard";
import { servicesSettings } from "../../constants/sliderConstants";
import "./style.scss";

const ServicesSection = () => {
  const SerivicesData = [
    {
      icon: "icofont-code",
      header: "FE Development",
      list: ["HTML/CSS", "Javascript", "React JS", "Next Js", "JQuery", "Angular JS"],
    },
    {
      icon: "icofont-terminal",
      header: "BE Development",
      list: ["CMS", "NodeJs", "Express", "Typescript", "Template Engines"],
    },
    {
      icon: "icofont-calendar",
      header: "UI/UX Design",
      list: ["Landing Pages", "Wirframing"],
    },
  ];
  return (
    <section className="services-section" id="services">
      <div className="container custom-container">
        <div className="row">
          <div className="col-12">
            <div className="custom-tag">
              <p>
                ||
                <span>{"My Services"}</span>
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="service-header">
              <h2>Service, I Provide For My Clients.</h2>
            </div>
            <div className="cards-container">
              <Slider {...servicesSettings}>
                {SerivicesData.map((el, i) => {
                  return <VerticalCard key={i} data={el} />;
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
