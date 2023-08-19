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
        <p>Testing 123</p>
      </div>
      <div className="bar-end">
        <p>Stuff in here</p>
      </div>
    </div>
  );
}

export default Navbar;
