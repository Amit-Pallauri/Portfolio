import React from "react";
import Slider from "react-slick";
import { skillSlider } from "../../constants/sliderConstants";
import angularIcon from "../../images/tech/angular.png";
import cssIcon from "../../images/tech/css.png";
import gatsbyIcon from "../../images/tech/gatsby.png";
import gitIcon from "../../images/tech/git.png";
import htmlIcon from "../../images/tech/html.png";
import jsIcon from "../../images/tech/javascript.png";
import mongoIcon from "../../images/tech/mongodb.png";
import nextIcon from "../../images/tech/nextjs.png";
import nodeIcon from "../../images/tech/nodejs.png";
import reactIcon from "../../images/tech/reactjs.png";
import reduxIcon from "../../images/tech/redux.png";
import tsIcon from "../../images/tech/typescript.png";
import "./style.scss";

const SkillsSection = () => {
  const data = [
    {
      label: "Communication",
      score: "75",
      class: "score-75",
    },
    {
      label: "Leadership",
      score: "70",
      class: "score-70",
    },
    {
      label: "Teamwork",
      score: "90",
      class: "score-90",
    },
    {
      label: "Flexibility",
      score: "80",
      class: "score-80",
    },
  ];

  const icons = [reactIcon, angularIcon, gatsbyIcon, nextIcon, htmlIcon, cssIcon, jsIcon, tsIcon, reduxIcon, gitIcon, nodeIcon, mongoIcon];
  return (
    <section className="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="custom-tag">
              <p>
                ||
                <span>{"Special Skills"}</span>
              </p>
            </div>
            <div className="skills-header">
              <h2>Skills, I have honed</h2>
            </div>
            <div className="icons-container">
              <div className="row">
                <Slider className="row" {...skillSlider}>
                  {icons.map((el, i) => (
                    <div className="col-3" key={i}>
                      <div className="icon-circle">
                        <img src={el} alt="" />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="skill-items">
              {data.map((el) => {
                return (
                  <div className="skill-item">
                    <p>{el.label}</p>
                    <div class="progress">
                      <div class={`progress-bar ${el.class}`} role="progressbar" aria-valuenow={el.score} aria-valuemin="0" aria-valuemax="100" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
