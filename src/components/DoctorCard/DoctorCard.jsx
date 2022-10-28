import React from "react";
import "./DoctorCard.css";

export const DoctorCard = () => {
  return (
    <div>
      <div className="container doccard">
        <div className="row">
          <img className="docimage" src="" alt="Doctor Image" />
        </div>
        <div className="row">
          <div className="row doctorname">Dr. Adarsh Kumar</div>
          <div className="row">Gyneacologist</div>
        </div>
      </div>
    </div>
  );
};
