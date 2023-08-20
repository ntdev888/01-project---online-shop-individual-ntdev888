import React from "react";

function GrowUnit({
  product,
  imgSrc,
  title,
  price,
  buyLink,
  changeDisplayUnit,
}) {
  return (
    <div className="grow-unit" onClick={() => changeDisplayUnit(product)}>
      <img src={imgSrc} alt="picture of grow unit" />
      <p>{title}</p>
      <p>${price / 100}.00</p>
      <button href={buyLink}>Buy Now</button>
    </div>
  );
}

function GrowUnits({ products, changeDisplayUnit }) {
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
          buyLink={product.url}
          changeDisplayUnit={changeDisplayUnit}
        />
      ))}
    </div>
  );
}

export default GrowUnits;
