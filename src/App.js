import React from "react";
import { GlobalStyle } from "./globalStyles";
import Products from "./components/users/products/products";
import ProductsDetails from "./components/users/ProductDetails/ProductDetails";
import StyleRules from "./components/styleRules/Index";
import NavBar from "./components/users/navBar/navBar";
import Cart from "./components/users/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/admin/Index";
import Footer from "./components/users/Footer/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/admin/:menu" element={<Admin />} />
        <Route exact path="/styleRules" element={<StyleRules />} />
        <Route exact path="/" element={<Products />} />
        <Route exact path="/detail/:id" element={<ProductsDetails />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
