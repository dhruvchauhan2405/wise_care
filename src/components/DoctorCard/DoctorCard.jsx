import React from "react";
import "./DoctorCard.css";

export const DoctorCard = (props) => {
  return (
    <div>
      <div className="container doccard">
        <div className="row">
          <img
            className="docimage"
            src={props.doctorimage}
            alt="Doctor Image"
          />
        </div>
        <div className="row">
          <div className="row doctorname">{props.doctorname}</div>
          <div className="row">{props.doctorrole}</div>
        </div>
      </div>
    </div>
  );
};
