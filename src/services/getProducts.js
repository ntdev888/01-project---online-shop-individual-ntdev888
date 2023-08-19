const getProducts = async () => {
  // TODO Fetch products and prices from the Stripe API
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}/products`;
  //Try Fetch my products from Stripe
  try {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);
    return products;
  } catch (error) {
    //basic error catching
    console.error(error);
  }
};

export { getProducts };
