import React from "react";
import { ServiceCard } from "../service card/ServiceCard";

export const Main3 = () => {
  return (
    <div className="section">
      <h1 className="main-head2"> Our Services</h1>

      <div className="row">
        <div className="col">
          <div className="row">
            <ServiceCard></ServiceCard>
          </div>
          <div className="row">
            <ServiceCard></ServiceCard>
          </div>
          <div className="row">
            <ServiceCard></ServiceCard>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <ServiceCard></ServiceCard>
          </div>
          <div className="row">
            <ServiceCard></ServiceCard>
          </div>
          <div className="row">
            <ServiceCard></ServiceCard>
          </div>
        </div>
      </div>
      {/* <ServiceCard></ServiceCard> */}
    </div>
  );
};
