import React from "react";
import { GlobalStyle } from "./globalStyles";
import Products from "./components/users/products/products";
import ProductsDetail from "./components/users/ProductDetails/ProductDetails";
import StyleRules from "./components/styleRules/Index";
import NavBar from "./components/users/navBar/navBar";
import AdminCat from "./components/Admin/AdminCategory/AdminCategories";
import { Route, Routes } from "react-router-dom";
import AdminMen from './components/Admin/AdminMenu/AdminMenu'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route exact path="/styleRules" element={<StyleRules />} />
        <Route exact path="/" element={<Products />} />
        <Route exact path="/detail" element={<ProductsDetail />} />
        <Route exact path="/admin/categories" element={<AdminCat />} />
        <Route exact path="/admin/menu" element={<AdminMen />} />
      </Routes>
    </div>
  );
}

export default App;
