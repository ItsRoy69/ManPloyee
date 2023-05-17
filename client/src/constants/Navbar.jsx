import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to={"/start"}>
          <h4>ems</h4>
        </Link>
      </div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="menu-items">
          <Link to={location.pathname === "/employeeLogin" ? "/start" : "/employeeLogin"}>
            <button className="menu-item">
              {location.pathname === "/employeeLogin" ? "Home" : "Employee"}
            </button>
          </Link>
          <Link to={location.pathname === "/login" ? "/start" : "/login"}>
            <button className="menu-item">
              {location.pathname === "/login" ? "Home" : "Admin"}
            </button>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
