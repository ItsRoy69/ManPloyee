import React from "react";
import Navbar from "../constants/Navbar";
import "../styles/start.css";
import employee from "../assets/employee.png";
import { Link } from "react-router-dom";

function Start() {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="title">EMPLOYEE MANAGEMENT SYSTEM</div>

        <div className="more">
          <Link to={"/employeeLogin"}>
            <button className="more-item">Employee Login</button>
          </Link>
          <Link to={"/login"}>
            <button className="more-item">Admin Login</button>
          </Link>
        </div>
      </div>

      <div className="hero">
        <img src={employee} alt="" />
      </div>
    </>
  );
}

export default Start;
