import React from "react";

function HeroUnit({ displayUnit }) {
  console.log("I am working");
  return (
    <div className="hero-grow-unit">
      <img src={displayUnit.images[0]} alt="picture of grow unit" />
      <div className="text-box">
        <p>{displayUnit.name}</p>
        <p className="description">{displayUnit.description}</p>
        <p>${displayUnit.prices["0"].unit_amount / 100}.00</p>
        <button href={displayUnit.url}>Buy Now</button>
      </div>
    </div>
  );
}

export default HeroUnit;
