import React from "react";

function GrowUnit({
  product,
  imgSrc,
  title,
  price,
  buyLink,
  changeDisplayUnit,
  checkout,
}) {
  return (
    <div className="grow-unit">
      <img
        src={imgSrc}
        alt="picture of grow unit"
        onClick={() => changeDisplayUnit(product)}
      />
      <h3>{title}</h3>
      <p>${price / 100}.00</p>
      <button onClick={() => checkout(buyLink)}>Buy Now</button>
    </div>
  );
}

function GrowUnits({ products, changeDisplayUnit, checkout }) {
  const units = products.filter((prod) => prod.metadata.type === "unit");
  console.log("GrowUnits working");
  return (
    <div id="growunits" className="grow-units">
      {units.map((product, index) => (
        <GrowUnit
          key={index}
          product={product}
          imgSrc={product.images[0]}
          title={product.name}
          price={product.prices["0"].unit_amount}
          buyLink={product.prices["0"].id}
          changeDisplayUnit={changeDisplayUnit}
          checkout={checkout}
        />
      ))}
    </div>
  );
}

export default GrowUnits;
