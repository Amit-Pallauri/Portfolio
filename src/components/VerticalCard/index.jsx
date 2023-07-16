import React from "react";
import loadable from "@loadable/component";
import "./style.scss";
const Icofont = loadable(() => import("react-icofont"));

const VerticalCard = ({ data }) => {
  return (
    <div className="verticalcard-section" data-aos-once="false" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="30">
      <div className="header-icon">
        <Icofont icon={data.icon} className="icon" />
      </div>
      <h4 className="card-header">{data.header}</h4>
      <div className="card-content">
        {data.list.map((skill, i) => {
          return (
            <div className="content-list" key={i}>
              <Icofont icon="icofont-rounded-double-right" className="icon" />
              <p>{skill}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VerticalCard;
