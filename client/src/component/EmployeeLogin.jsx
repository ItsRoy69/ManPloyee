import React, { useState } from "react";
import "../styles/employeelogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../constants/Navbar";
import employeelogin from "../assets/employeelogin.webp";

function EmployeeLogin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/employeelogin", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          const id = res.data.id;
          navigate("/employeedetail/" + id);
        } else {
          setError(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />   

      <h1 className="employeeloginhead">Login as Employee</h1>
      <div className="login-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="text-danger">{error && error}</div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="johndoe@gmail.com"
                name="email"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>
            <button type="submit" className="submitbtn">
              Login
            </button>{" "}
            <p>You are agree to our terms and policies</p>
          </form>
        </div>
        <div className="image-container">
          <img src={employeelogin} alt="Employee" />
        </div>
      </div>
    </>
  );
}

export default EmployeeLogin;
