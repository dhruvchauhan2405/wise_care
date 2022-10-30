import React from "react";
import { ServiceCard } from "../service card/ServiceCard";

export const Main3 = () => {
  const ServiceData = [
    {
      servicename: "Testing",
      serviceDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, totam?",
      link: "/tests",
    },
    {
      servicename: "Meditation",
      serviceDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, totam?",
      link: "/meditation",
    },
    {
      servicename: "YogaPedia",
      serviceDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, totam?",
      link: "/yoga",
    },
    {
      servicename: "ExercisePedia",
      serviceDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, totam?",
      link: "/exercise",
    },
    {
      servicename: "Pregnancy",
      serviceDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, totam?",
      link: "/pregnant",
    },
    {
      servicename: "MedsMart",
      serviceDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, totam?",
      link: "/medsmart",
    },
    {
      servicename: "Diet Plans",
      serviceDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, totam?",
      link: "/dietplans",
    },
    {
      servicename: "Health Blogs",
      serviceDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, totam?",
      link: "/healthblogs",
    },
    {
      servicename: "Family",
      serviceDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, totam?",
      link: "/myfamily",
    },
    {
      servicename: "Book Appointment",
      serviceDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, totam?",
      link: "/bookappointment",
    },
  ];
  return (
    <div className="section">
      <h1 className="main-head2"> Our Services</h1>

      <div className="row">
        <div className="row">
          <ServiceCard
            servicename={ServiceData[0].servicename}
            servicedesc={ServiceData[0].serviceDesc}
            link={ServiceData[0].link}
          ></ServiceCard>
        </div>
        <div className="row">
          <ServiceCard
            servicename={ServiceData[1].servicename}
            servicedesc={ServiceData[1].serviceDesc}
            link={ServiceData[1].link}
          ></ServiceCard>
        </div>
        <div className="row">
          <ServiceCard
            servicename={ServiceData[2].servicename}
            servicedesc={ServiceData[2].serviceDesc}
            link={ServiceData[2].link}
          ></ServiceCard>
        </div>

        <div className="row">
          <ServiceCard
            servicename={ServiceData[3].servicename}
            servicedesc={ServiceData[3].serviceDesc}
            link={ServiceData[3].link}
          ></ServiceCard>
        </div>
        <div className="row">
          <ServiceCard
            servicename={ServiceData[4].servicename}
            servicedesc={ServiceData[4].serviceDesc}
            link={ServiceData[4].link}
          ></ServiceCard>
        </div>
        <div className="row">
          <ServiceCard
            servicename={ServiceData[5].servicename}
            servicedesc={ServiceData[5].serviceDesc}
            link={ServiceData[5].link}
          ></ServiceCard>
        </div>
        <div className="row">
          <ServiceCard
            servicename={ServiceData[6].servicename}
            servicedesc={ServiceData[6].serviceDesc}
            link={ServiceData[6].link}
          ></ServiceCard>
        </div>
        <div className="row">
          <ServiceCard
            servicename={ServiceData[7].servicename}
            servicedesc={ServiceData[7].serviceDesc}
            link={ServiceData[7].link}
          ></ServiceCard>
        </div>
        <div className="row">
          <ServiceCard
            servicename={ServiceData[8].servicename}
            servicedesc={ServiceData[8].serviceDesc}
            link={ServiceData[8].link}
          ></ServiceCard>
        </div>
        <div className="row">
          <ServiceCard
            servicename={ServiceData[9].servicename}
            servicedesc={ServiceData[9].serviceDesc}
            link={ServiceData[9].link}
          ></ServiceCard>
        </div>
      </div>
      {/* <ServiceCard></ServiceCard> */}
    </div>
  );
};
