import { React, useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import GrowUnits from "./components/growUnits";
import HeroUnit from "./components/heroUnit";
import Accessories from "./components/accesories";
import Loading from "./components/loading";
import "./App.css";
import { checkout } from "./services/checkout";

import { getProducts } from "./services/getProducts";

function App() {
  const [products, setProducts] = useState([]);
  const [mainUnit, setMainUnit] = useState([]);

  //Hero unit function to return state
  const changeDisplayUnit = (unitSelected) => {
    setMainUnit(unitSelected);
  };

  useEffect(() => {
    const loadData = async () => {
      const products = await getProducts();
      setProducts(products);
      console.log("API Loaded");
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
      {mainUnit.length === 0 ? (
        <Loading />
      ) : (
        <HeroUnit displayUnit={mainUnit} />
      )}
      <Accessories checkout={checkout} products={products} />
    </div>
  );
}

export default App;
