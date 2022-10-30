import React from "react";

import { Main } from "../../components/Section1/Main";
import { Main2 } from "../../components/Section2/Main2";
import { Main3 } from "../../components/Section3/Main3";
import { Main4 } from "../../components/Section4/Main4";
import "../../App.css";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export const Homepages = () => {
  return (
    <div>
      <Main></Main>
      <Main2></Main2>
      <Main3></Main3>
      <br></br>
      <br></br>
      <Main4></Main4>
    </div>
  );
};
