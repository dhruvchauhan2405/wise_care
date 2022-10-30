import React from "react";
import "./ServiceCard.css";

export const ServiceCard = (props) => {
  return (
    <div>
      <div className="card service-card">
        <div className="service-heading">{props.servicename}</div>
        <div className="service-desc">{props.servicedesc}</div>
        <a href={props.link} className="exp-btn">
          Explore
        </a>
      </div>
    </div>
  );
};
