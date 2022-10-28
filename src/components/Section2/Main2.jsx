import React from "react";
import { DoctorCard } from "../DoctorCard/DoctorCard";
import "./Main2.css";

export const Main2 = () => {
  return (
    <div className="section">
      <br />
      <div className="main-head2">Meet our specialists</div>
      <div className="container">
        <div className="row">
          <div className="col">
            <DoctorCard></DoctorCard>
          </div>
          <div className="col">
            <DoctorCard></DoctorCard>
          </div>
          <div className="col">
            <DoctorCard></DoctorCard>
          </div>
          <div className="col">
            <DoctorCard></DoctorCard>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <DoctorCard></DoctorCard>
          </div>
          <div className="col">
            <DoctorCard></DoctorCard>
          </div>
          <div className="col">
            <DoctorCard></DoctorCard>
          </div>
          <div className="col">
            <DoctorCard></DoctorCard>
          </div>
        </div>
      </div>
    </div>
  );
};
