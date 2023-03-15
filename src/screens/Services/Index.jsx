import React from "react";
import Slider from "react-slick";
import VerticalCard from "../../components/VerticalCard";
import "./style.scss";

const ServicesSection = () => {
  const settings = {
    dots: true,
    accessibility: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    loop: true,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          accessibility: true,
          appendDots: (dots) => <ul className="custom-dots"> {dots} </ul>,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          accessibility: true,
          appendDots: (dots) => <ul className="custom-dots"> {dots} </ul>,
        },
      },
    ],
  };

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
              <h2>Service Provide For My Clients.</h2>
            </div>
            <div className="cards-container">
              <Slider {...settings}>
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
