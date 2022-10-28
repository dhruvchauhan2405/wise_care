import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/Navbar/Navbar";
import "bootstrap";
import { Main } from "./components/Section1/Main";
import { Main2 } from "./components/Section2/Main2";
import { Main3 } from "./components/Section3/Main3";
import { Main4 } from "./components/Section4/Main4";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Main></Main>
      <Main2></Main2>
      <Main3></Main3>
      <br></br>
      <br></br>
      <Main4></Main4>
    </div>
  );
}

export default App;
