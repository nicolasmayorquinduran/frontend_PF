import React from "react";
import "./index.css";
//import { useState } from "react";
import { Settings } from "./Settings";
import { MyOrders } from "./MyOrders";
import UserMenu from "./UserMenu";
import { useLocation } from "react-router-dom";

/* import Products from "../users/products/products";*/
/* componente prestacional del administrador con un menú de opciones disponibles (productos, pedidos, categorías y usuarios), debe renderizar determinado componente según la pestaña que se clickee */

export default function IndexUser() {
  const location = useLocation();

  return (
    <div id="menu">
      <UserMenu />
      <div>
        {(location.pathname === "/user/settings" && <Settings />) ||
          (location.pathname === "/user/myorders" && <MyOrders />)}
      </div>
    </div>
  );
}
