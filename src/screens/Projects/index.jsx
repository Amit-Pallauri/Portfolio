import React from "react";
import Slider from "react-slick";
import { projectsSlider } from "../../constants/sliderConstants";
import "./style.scss";
import loadable from "@loadable/component";
import Card from "../../components/Card";
import xuppiImage from "../../images/xuppi.png";
import zeeImage from "../../images/zee.png";
import { useRef } from "react";
const Icofont = loadable(() => import("react-icofont"));

const ProjectsSection = () => {
  const sliderRef = useRef();
  const projectsData = [
    {
      name: "Xuppi - Social Commerce",
      image: xuppiImage,
      link: "https://xuppi.com/",
      techs: ["NextJS", "Typescript", "Agora"],
      class: "",
    },
    {
      name: "ZeeZest - Contet rich platform.",
      image: zeeImage,
      link: "https://zeezest.com/",
      techs: ["NextJS", "AngularJs", "NodeJS", "MongoDB"],
      class: "",
    },
    {
      name: "Home Seek - Find a new place to call, home",
      image: "https://images.unsplash.com/photo-1635286756403-9d401732a2e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=379&q=80",
      link: "https://github.com/Amit-Pallauri/home-seek",
      techs: ["React", "MongoDB", "NodeJS", "ExpressJS"],
      class: "small-image",
    },
    {
      name: "Studious - Study, Teach & Earn",
      image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      link: "https://github.com/Amit-Pallauri/udemy-clone",
      techs: ["React", "MongoDB", "NodeJS", "ExpressJS"],
      class: "small-image",
    },
    {
      name: "kitab e keeda - Find the best book reviewed",
      image: "https://images.unsplash.com/photo-1544185310-0b3cf501672b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      link: "https://github.com/Amit-Pallauri/kitab-e-keeda",
      techs: ["React", "MongoDB", "NodeJS", "ExpressJS"],
      class: "small-image",
    },
  ];
  return (
    <section className="projects-section" id="projects">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="custom-tag">
              <p>
                ||
                <span>{"My Projects"}</span>
              </p>
            </div>
            <div className="projects-header">
              <h2>Products, i have worked on</h2>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="slider-btns">
              <div className="btn-container" onClick={() => sliderRef.current.slickPrev()}>
                <Icofont icon="icofont-rounded-double-left" className="icon" />
              </div>
              <div className="btn-container" onClick={() => sliderRef.current.slickNext()}>
                <Icofont icon="icofont-rounded-double-right" className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cards-container">
        <Slider ref={sliderRef} {...projectsSlider}>
          {projectsData.map((el, i) => {
            return <Card data={el} />;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectsSection;
