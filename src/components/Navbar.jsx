import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="FoodLand Logo" className="logo" />
        <span className="brand-name">FoodLand</span>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Recipes</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;