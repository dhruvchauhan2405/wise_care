import React from "react";
import "./Main.css";
let Logo = require("../../assets/images/5.png");

export const Main = () => {
  return (
    <div className="section">
      <div className="row">
        <div className="col">
          <div className="row ">
            <h1 className="main-head">
              Take Care Of Your <br /> Health{" "}
              <span className="blue"> Anytime</span> <br />{" "}
              <span className="blue">Anywhere</span>
            </h1>
          </div>
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="container">
                    <div className="row bolder">Make an appointment</div>
                    <div className="row desc">
                      Schedule your favorite doctor anytime
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="container">
                    <div className="row bolder">Health Guarantee Forever</div>
                    <div className="row desc">
                      We provide the best heathcare support
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="container">
                    <div className="row bolder">Find your best Doctor</div>
                    <div className="row desc">
                      Get the best Doctor consultation you need
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="container">
                    <div className="row bolder">Spread in various places</div>
                    <div className="row desc">
                      Now clinics are available in various places
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <a href="/bookapppointment" className="appointment-btn">
                  Book an Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <img className="photo" src={Logo}></img>
        </div>
      </div>
    </div>
  );
};
