import React from "react";
import { GlobalStyle } from "./globalStyles";
import { useLocation } from "react-router-dom";
import Products from "./components/users/products/products";
import ProductsDetails from "./components/users/ProductDetails/ProductDetails";
import StyleRules from "./components/styleRules/Index";
import NavBar from "./components/users/navBar/navBar";
import Cart from "./components/users/Cart/Cart";
import Home from "./components/users/home/Home";
import MigadePan from "./components/users/MigaDePan";
// import Prueba from "./components/users/home/Prueba";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/admin/Index";
import Footer from "./components/users/Footer/Footer";
import Page404 from "./components/Page404";
import { Settings } from "./components/users/Login/Settings";
import Checkout from "./components/users/Checkout/Checkout.jsx";

function App() {
  let location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      {location.pathname !== '/' && <MigadePan/>} 
      {location.pathname !== '/cart' && <NavBar/>}
      <Routes>
        <Route path="/admin/:menu" element={<Admin />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/styleRules" element={<StyleRules />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<ProductsDetails />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path={"/:route"} element={<Page404 />} />
        <Route exact path="/user/settings" element={<Settings />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
