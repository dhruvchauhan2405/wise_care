import React from "react";
import { BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Homepages } from "./pages/Homepage/Homepages";
import { Signin } from "./pages/SignIn-SignUp/Signin";
import { SignUp } from "./pages/SignIn-SignUp/SignUp";
import { BookApointment } from "./pages/BookAppointment/BookApointment";
import { Yoga } from "./pages/Yogapage/Yoga";
import { Exercise } from "./pages/Exercises/Exercise";
import { Pregnant } from "./pages/Pregnant/Pregnant";
import { MyFamily } from "./pages/MyFamily/MyFamily";
import { Tests } from "./pages/Tests/Tests";
import { DietPlans } from "./pages/DietPlans/DietPlans";
import { HealthBolgs } from "./pages/HealthBlogs/HealthBolgs";
import { Meditation } from "./pages/Meditation/Meditation";
import { MedsMart } from "./pages/MedsMart/MedsMart";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/bookappointment" element={<BookApointment />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/pregnant" element={<Pregnant />} />
          <Route path="/myfamily" element={<MyFamily />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/dietplans" element={<DietPlans />} />
          <Route path="/healthblogs" element={<HealthBolgs />} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/medsmart" element={<MedsMart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
