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
              Protect Your Health <br /> And Take Care Of <br /> Your Health
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
                      Schedule your favorite doctor anytime
                    </div>
                  </div>
                </div>
              </div>
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
                    <div className="row bolder">Make an appointment</div>
                    <div className="row desc">
                      Schedule your favorite doctor anytime
                    </div>
                  </div>
                </div>
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
