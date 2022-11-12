import React from "react";
import "./NavBar.css";
import "bootstrap";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        WiseCare
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item ">
            <a class="nav-link active" href="#">
              Featured
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About Us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Facilities
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">
              Find Doctor
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link sign-in " href="/">
              Sign-In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
