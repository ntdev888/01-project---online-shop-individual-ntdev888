import React from "react";

function Accessory({ imgSrc, title, price, buyLink }) {
  return (
    <div className="accessory">
      <img src={imgSrc} alt="picture of grow unit" />
      <p>{title}</p>
      <p>${price / 100}.00</p>
      <button href={buyLink}>Buy Now</button>
    </div>
  );
}

function Accessories({ products }) {
  const accessory = products.filter(
    (prod) => prod.metadata.type === "accessory"
  );
  console.log(accessory);
  return (
    <div className="accessories">
      {accessory.map((product, index) => (
        <Accessory
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

export default Accessories;
