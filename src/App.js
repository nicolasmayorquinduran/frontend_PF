<<<<<<< HEAD
import React from 'react'
import { GlobalStyle } from './globalStyles'
import Products from './components/users/products/products'
import ProductsDetail from './components/users/ProductDetails/ProductDetails'
import StyleRules from './components/styleRules/Index'
import NavBar from './components/users/navBar/navBar'
import { Route, Routes } from 'react-router-dom'
import Admin from './components/admin/Index'
=======
import React from "react";
import { GlobalStyle } from "./globalStyles";
import Products from "./components/users/products/products";
import ProductsDetail from "./components/users/ProductDetails/ProductDetails";
import StyleRules from "./components/styleRules/Index";
import NavBar from "./components/users/navBar/navBar";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/admin/Index";
>>>>>>> 78dcf18bc15907f7b51f325ad4026b394daf1801

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
    </div>
  )
}

export default App
