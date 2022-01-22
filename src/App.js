import React from "react";
import { GlobalStyle } from "./globalStyles";
import Products from "./components/users/products/products";
import ProductsDetails from "./components/users/ProductDetails/ProductDetails";
import StyleRules from "./components/styleRules/Index";
import NavBar from "./components/users/navBar/navBar";
import Cart from "./components/users/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/Index";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route exact path="/styleRules" element={<StyleRules />} />
        <Route exact path="/" element={<Products />} />
        <Route exact path="/detail/:id" element={<ProductsDetails />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
