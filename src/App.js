import React from "react";
import { GlobalStyle } from "./globalStyles";
import Products from "./components/users/products/products";
import ProductsDetail from "./components/users/ProductDetails/ProductDetails";
import StyleRules from "./components/styleRules/Index";
import NavBar from "./components/users/navBar/navBar";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/admin/Index";
import Footer from "./components/users/Footer/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route exact path="/styleRules" element={<StyleRules />} />
        <Route exact path="/" element={<Products />} />
        <Route exact path="/detail" element={<ProductsDetail />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
