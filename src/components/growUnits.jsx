import React, { useState } from "react";

function GrowUnit({ imgSrc, title, price, buyLink }) {
  return (
    <div className="grow-unit">
      <img src={imgSrc} alt="picture of grow unit" />
      <p>{title}</p>
      <p>{price}</p>
      <button href={buyLink}>Buy Now</button>
    </div>
  );
}

function GrowUnits({ products }) {
  const units = products.filter((prod) => prod.metadata.type === "unit");

  return (
    <div className="grow-units">
      {units.map((product, index) => (
        <GrowUnit
          key={index}
          imgSrc={product.images[0]}
          title={product.name}
          price={product.prices["0"].unit_amount}
          buyLink={product.url}
        />
      ))}
    </div>
  );
}

export default GrowUnits;
