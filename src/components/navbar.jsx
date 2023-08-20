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
      </div>
      <div className="bar-end">
        <p>
          <a href="#accessories">Accessories</a>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
