import React from "react";
import "./index.css";
import { useState } from "react";

import AdminCategories from "./AdminCategory/AdminCategories";
import AdminUsers from "./AdminUsers/AdminUsers";
import AdminrOrders from "./AdminOrders/AdminOrders";
import AdminProducts from "./AdminProducts/AdminProducts";

/* componente prestacional del administrador con un menú de opciones disponibles (productos, pedidos, categorías y usuarios), debe renderizar determinado componente según la pestaña que se clickee */

function Index() {
  const [local, setLocal] = useState("");
  console.log(local);

  function handleClick(e) {
    return setLocal(e.target.value);
  }

  return (
    <div id="menu">
      <ul>
        <li>
          <a href="#" onClick={handleClick}>
            Productos
          </a>
        </li>
        <li>
          <a href="#">Pedidos</a>
        </li>
        <li>
          <a href="#">Categorías</a>
        </li>
        <li class="item-r">
          <a href="#">Usuarios</a>
        </li>
      </ul>
    </div>
  );
}

export default Index;
