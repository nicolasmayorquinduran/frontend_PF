import React from "react";
import "./index.css";
//import { useState } from "react";
import AdminMenu from "./AdminMenu/AdminMenu";
import AdminCategories from "./AdminCategory/AdminCategories";
import AdminUsers from "./AdminUsers/AdminUsers";
import AdminProducts from "./AdminProducts/AdminProducts";
import AdminOrders from "./AdminOrders/AdminOrders";
import AdminPromos from "./AdminPromos/AdminPromos";
import { useLocation } from "react-router-dom";

/* import Products from "../users/products/products";*/
/* componente prestacional del administrador con un menú de opciones disponibles (productos, pedidos, categorías y usuarios), debe renderizar determinado componente según la pestaña que se clickee */

function Index() {
  const location = useLocation();

  return (
    <div id="menu">
      <AdminMenu />
      <div>
        {(location.pathname === "/admin/pedidos" && <AdminOrders />) ||
          (location.pathname === "/admin/products" && <AdminProducts />) ||
          (location.pathname === "/admin/categorias" && <AdminCategories />) ||
          (location.pathname === "/admin/promos" && <AdminPromos />) ||
          (location.pathname === "/admin/usuarios" && <AdminUsers />)}
      </div>
    </div>
  );
}

export default Index;
