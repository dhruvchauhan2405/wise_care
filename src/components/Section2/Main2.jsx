import React from "react";
import { DoctorCard } from "../DoctorCard/DoctorCard";
import "./Main2.css";
import "../DoctorCard/DoctorData";
import Image from "../../assets/images/doctor1.png";

export const Main2 = () => {
  const DoctorData1 = [
    {
      doctorname: "Adarsh",
      doctorimage:
        "https://as2.ftcdn.net/v2/jpg/03/20/52/31/1000_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg",
      role: "Cardiologist",
    },
    {
      doctorname: "Dhruv",
      doctorimage:
        "https://as2.ftcdn.net/v2/jpg/02/60/04/09/1000_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
      role: "Dentist",
    },
    {
      doctorname: "Dhruv",
      doctorimage:
        "https://as1.ftcdn.net/v2/jpg/01/30/45/54/1000_F_130455409_fTuinPO1LXECv5hlk9VBREnL6yowYUo3.jpg",
      role: "Gynaecologist",
    },
    {
      doctorname: "Chauhan",
      doctorimage:
        "https://as2.ftcdn.net/v2/jpg/03/05/41/27/1000_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg",
      role: "Orthopaedic surgeon",
    },
    {
      doctorname: "Dhruv",
      doctorimage:
        "https://as1.ftcdn.net/v2/jpg/01/18/34/92/1000_F_118349279_cb2HA7KvQbLgdbWe9JmdpSEbqoqX1F6T.jpg",
      role: "Psychiatrists",
    },
    {
      doctorname: "Dhruv",
      doctorimage:
        "https://as1.ftcdn.net/v2/jpg/00/79/71/30/1000_F_79713072_dWCAZt6wPNFG5PqooCxAGsl4Mza7UfVy.jpg",
      role: "Neurologist",
    },
    {
      doctorname: "Dhruv",
      doctorimage:
        "https://as2.ftcdn.net/v2/jpg/02/65/13/75/1000_F_265137512_Oh1Bwar4BE4N6nnsvgkIse8SMkYHSn1h.jpg",
      role: "Oncologist",
    },
    {
      doctorname: "Dhruv",
      doctorimage:
        "https://as2.ftcdn.net/v2/jpg/03/08/95/89/1000_F_308958931_230NowzijT8bGskds47afzmUTvgbrZWk.jpg",
      role: "Cardiothoracic surgeon",
    },
  ];

  return (
    <div className="section">
      <br />
      <div className="main-head2">Meet our specialists</div>
      <div className="container">
        <div className="row">
          <div className="col">
            <DoctorCard
              doctorname={DoctorData1[0].doctorname}
              doctorimage={DoctorData1[0].doctorimage}
              doctorrole={DoctorData1[0].role}
            />
          </div>
          <div className="col">
            <DoctorCard
              doctorname={DoctorData1[1].doctorname}
              doctorimage={DoctorData1[1].doctorimage}
              doctorrole={DoctorData1[1].role}
            />
          </div>
          <div className="col">
            <DoctorCard
              doctorname={DoctorData1[2].doctorname}
              doctorimage={DoctorData1[2].doctorimage}
              doctorrole={DoctorData1[2].role}
            />
          </div>
          <div className="col">
            <DoctorCard
              doctorname={DoctorData1[3].doctorname}
              doctorimage={DoctorData1[3].doctorimage}
              doctorrole={DoctorData1[3].role}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <DoctorCard
              doctorname={DoctorData1[4].doctorname}
              doctorimage={DoctorData1[4].doctorimage}
              doctorrole={DoctorData1[4].role}
            />
          </div>
          <div className="col">
            <DoctorCard
              doctorname={DoctorData1[5].doctorname}
              doctorimage={DoctorData1[5].doctorimage}
              doctorrole={DoctorData1[5].role}
            />
          </div>
          <div className="col">
            <DoctorCard
              doctorname={DoctorData1[6].doctorname}
              doctorimage={DoctorData1[6].doctorimage}
              doctorrole={DoctorData1[6].role}
            />
          </div>
          <div className="col">
            <DoctorCard
              doctorname={DoctorData1[7].doctorname}
              doctorimage={DoctorData1[7].doctorimage}
              doctorrole={DoctorData1[7].role}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
