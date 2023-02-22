import React from "react";
import Icofont from "react-icofont";
import "./style.scss";

const VerticalCard = ({ data }) => {
  return (
    <div className="verticalcard-section">
      <div className="header-icon">
        <Icofont icon={data.icon} className="icon" />
      </div>
      <h4 className="card-header">{data.header}</h4>
      <div className="card-content">
        {data.list.map((skill) => {
          return (
            <div className="content-list">
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
