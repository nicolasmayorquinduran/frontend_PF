import React from "react";
import { GlobalStyle } from "./globalStyles";
import Products from "./components/users/products/products";
import ProductsDetail from "./components/users/ProductDetails/ProductDetails";
import StyleRules from "./components/styleRules/Index";
import NavBar from './components/users/navBar/navBar'
import AdminCat from "./components/Admin/AdminCategory/AdminCategories";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className = "App">
      <GlobalStyle />
      <StyleRules />
      <NavBar /> 
      <Routes>
        <Route exact path='/' element={<Products/>} />          
        <Route exact path='/detail' element={<ProductsDetail/>}/>
        <Route exact path='/admin/categories' element={<AdminCat/>} />
        <Route exact path='/ruta1' element />
        <Route exact path='/ruta2' element />
      </Routes>
    </div>
  );
}

export default App;
