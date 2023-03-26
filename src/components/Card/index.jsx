import React from "react";
import "./style.scss";

const Card = ({ data }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <div className="overlay"></div>
        <div className="bg-image">
          <img src={"https://htmldemo.net/lendex/lendex/assets/images/project/project-slider-img-2.jpg"} />
        </div>
        <a href={data.link} target="_blank">
          <div className="image">
            <img className={data.class} src={data.image} />
          </div>
        </a>
      </div>

      <div className="content">
        <h4>
          <a href={data.link} target="_blank">
            {data.name}
          </a>
        </h4>
        <div className="techs">
          {data.techs.map((tech) => {
            return <p>{tech}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
