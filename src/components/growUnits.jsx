import React, { useState } from "react";

function GrowUnit({ imgSrc, title, price, buyLink }) {
  return (
    <div className="growunit">
      <img src={imgSrc} alt="picture of grow unit" />
      <p>{title}</p>
      <p>{price}</p>
      <button href={buyLink}></button>
    </div>
  );
}

function GrowUnits() {
  const [currentUnit, setUnit] = setState(growUnits[0]);

  const clickUnit = () => {};

  return (
    <div>
      {growUnits.map((unit) => (
        <GrowUnit
          id={unit.id}
          imgSrc={unit.imgSrc}
          title={unit.title}
          price={unit.price}
          buyLink={unit.url}
        />
      ))}
    </div>
  );
}

export default GrowUnits;
