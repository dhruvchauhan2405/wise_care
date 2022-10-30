import React from "react";
import { Main2 } from "../../components/Section2/Main2";
import "./BookAppointment.css";

export const BookApointment = () => {
  return (
    <div>
      <h1 className="main-head appointment"> Book an Appointment</h1>

      <div className="row">
        <div className="col">
          <form action="">
            <label htmlFor="">Name</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="">Age</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="">Phone No.</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="">Email</label>
            <br />
            <input type="email" required />
            <br />
            <label htmlFor="">Gender</label>
            <br />
            <input type="radio" name="gender" id="Male" value="Male" />
            <label htmlFor="male">Male</label>
            &emsp;
            <input type="radio" name="gender" id="Female" value="Female" />
            <label for htmlFor="female">
              Female
            </label>
            <br />
            <label htmlFor="">Choose Doctor</label>
            <br />
            <select id="cars" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
            <br />
            <label htmlFor="">Time slot</label>
            <br />
            <select id="cars" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
            <br />
            <a href="">Submit</a>
          </form>
        </div>
        <div className="col"></div>
      </div>
      <Main2></Main2>
    </div>
  );
};
