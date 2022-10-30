import React from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className="fo">
      <div className="formholder">
        <form>
          <div className="conta">
            <label className="label-f" htmlFor="name">
              Full Name
            </label>
            <br />
            <input
              type="text"
              className="input-field"
              id="name"
              placeholder="Enter your full name"
              name="name"
            />
          </div>
          <div className="conta">
            <label className="label-f" htmlFor="password">
              Password
            </label>
            <br />
            <input
              type="password"
              className="input-field"
              id="password"
              placeholder="Enter your password"
              name="password"
            />
          </div>
          <div className="conta">
            <label className="label-f" htmlFor="email">
              E-Mail Address
            </label>
            <br />
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder="Enter your email"
              name="email"
            />
          </div>

          <div className="conta">
            <input type="checkbox" name="hasAgreed" /> I agree all statements in{" "}
            <a href="">terms of service</a>
          </div>

          <div className="conta">
            <a href="" className="sign-in">
              Sign Up
            </a>
            <Link to="/signin">I'm already member</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
