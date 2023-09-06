import React from "react";
import "../App.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="bar-start">
        <img
          className="nav-logo"
          src="./imgs/EvaGrowLogo.png"
          alt="EvaGrow Logo"
        />
        <p>
          <a href="#growunits">Grow Units</a>
        </p>
        <p>
          <a href="#accessories">Accessories</a>
        </p>
      </div>
      <div className="bar-end">
        <p>inc 2019</p>
      </div>
    </div>
  );
}

export default Navbar;
