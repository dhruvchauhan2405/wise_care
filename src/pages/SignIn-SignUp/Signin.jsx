import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

export const Signin = () => {
  return (
    <div className="fo">
      <div className="formholder">
        <form>
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
            <label className="label-f" htmlFor="password">
              Password
            </label>
            <br />
            <input
              type="password"
              id="password"
              className="input-field"
              placeholder="Enter your password"
              name="password"
            />
          </div>
          <br />

          <div className="conta">
            <a className="sign-in" href="">
              Sign In
            </a>
            <Link to="/signup">Create an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
