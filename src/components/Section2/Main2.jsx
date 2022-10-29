import React from "react";
import { DoctorCard } from "../DoctorCard/DoctorCard";
import "./Main2.css";
import "../DoctorCard/DoctorData";

export const Main2 = () => {
  const DoctorData1 = [
    {
      doctorname: "Adarsh",
    },
    {
      doctorname: "Dhruv",
    },
    {
      doctorname: "Dhruv",
    },
    {
      doctorname: "Chauhan",
    },
    {
      doctorname: "Dhruv",
    },
    {
      doctorname: "Dhruv",
    },
    {
      doctorname: "Dhruv",
    },
    {
      doctorname: "Dhruv",
    },
  ];

  return (
    <div className="section">
      <br />
      <div className="main-head2">Meet our specialists</div>
      <div className="container">
        <div className="row">
          <div className="col">
            <DoctorCard doctorname={DoctorData1[0].doctorname} />
          </div>
          <div className="col">
            <DoctorCard doctorname={DoctorData1[1].doctorname} />
          </div>
          <div className="col">
            <DoctorCard doctorname={DoctorData1[2].doctorname} />
          </div>
          <div className="col">
            <DoctorCard doctorname={DoctorData1[3].doctorname} />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <DoctorCard doctorname={DoctorData1[4].doctorname} />
          </div>
          <div className="col">
            <DoctorCard doctorname={DoctorData1[5].doctorname} />
          </div>
          <div className="col">
            <DoctorCard doctorname={DoctorData1[6].doctorname} />
          </div>
          <div className="col">
            <DoctorCard doctorname={DoctorData1[7].doctorname} />
          </div>
        </div>
      </div>
    </div>
  );
};
