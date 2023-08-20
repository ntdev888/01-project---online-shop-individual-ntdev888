import { React, useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import GrowUnits from "./components/growUnits";
import HeroUnit from "./components/heroUnit";
import Accessories from "./components/accesories";
import "./App.css";
import { checkout } from "./services/checkout";

// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";

function App() {
  // use the products variable to read all of your products
  // and display them on your page
  const [products, setProducts] = useState([]);
  const [mainUnit, setMainUnit] = useState([]);

  const changeDisplayUnit = (unitSelected) => {
    setMainUnit(unitSelected);
  };

  useEffect(() => {
    const loadData = async () => {
      const products = await getProducts();
      setProducts(products);
      setMainUnit(products[11]);
    };

    loadData();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <GrowUnits
        checkout={checkout}
        products={products}
        changeDisplayUnit={changeDisplayUnit}
      />
      {mainUnit.length === 0 ? null : <HeroUnit displayUnit={mainUnit} />}
      <Accessories checkout={checkout} products={products} />
    </div>
  );
}

export default App;
