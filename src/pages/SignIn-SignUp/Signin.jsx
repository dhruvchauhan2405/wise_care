import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

export const Signin = () => {
  return (
    <div>
      <div className="FormCenter">
        <form>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
            />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button>{" "}
            <Link to="/signup" className="FormField__Link">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
