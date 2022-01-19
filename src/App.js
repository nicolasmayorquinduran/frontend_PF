import React from "react";
import { GlobalStyle } from "./globalStyles";
import NavBar from "./components/navBar/navBar.jsx"
import Products from "./components/products/products";
import ProductsDetail from "./components/ProductDetails/ProductDetails";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <h1>Lok APP</h1>
      <Products />
    </div>
  );
}

export default App;
