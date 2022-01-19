import React from "react";
import { GlobalStyle } from "./globalStyles";
import NavBar from "./components/navBar/navBar.jsx"
import Products from "./components/products/products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
function App() {
  return (
    <div className = "App">
      <GlobalStyle />
      <NavBar />
      <h1>Lok APP</h1>
      <Products />
      <ProductDetails />
    </div>
  );
}

export default App;
