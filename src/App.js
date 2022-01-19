import React from "react";
import { GlobalStyle } from "./globalStyles";
import Products from "./components/users/products/products";
import ProductsDetail from "./components/users/ProductDetails/ProductDetails";
import StyleRules from "./components/styleRules/Index";
import NavBar from './components/users/navBar/navBar'
function App() {
  return (
    <div className = "App">
      <GlobalStyle />
      <NavBar />
      <h1>Lok APP</h1>
      <StyleRules />
      <Products />
      <ProductsDetail />
    </div>
  );
}

export default App;
