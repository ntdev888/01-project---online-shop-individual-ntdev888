import React from "react";

function Accessory({ imgSrc, title, price, buyLink, checkout, description }) {
  return (
    <div className="accessory">
      <div className="img-box">
        <img src={imgSrc} alt="picture of grow unit" />
      </div>
      <div className="text-box">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <p>${price / 100}.00</p>
        <button onClick={() => checkout(buyLink)}>Buy Now</button>
      </div>
    </div>
  );
}

function Accessories({ products, checkout }) {
  const accessory = products.filter(
    (prod) => prod.metadata.type === "accessory"
  );
  console.log("Accessories working");
  return (
    <div id="accessories" className="accessories">
      {accessory.map((product, index) => (
        <Accessory
          key={index}
          imgSrc={product.images[0]}
          title={product.name}
          price={product.prices["0"].unit_amount}
          buyLink={product.prices["0"].id}
          checkout={checkout}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default Accessories;
