import React from "react";
import "./Admin.module.css";
import { Link } from "react-router-dom";
/* componente prestacional del administrador con un menú de opciones disponibles (productos, pedidos, categorías y usuarios), debe renderizar determinado componente según la pestaña que se clickee */

function AdminMenu() {
  return (
    <div id="menu">
      <ul>
        <li>
          <Link to="/products">
            <a href="#">Productos</a>
          </Link>
        </li>
        <li>
          <Link to="/pedidos">
            <a href="#">Pedidos</a>
          </Link>
        </li>
        <li>
          <Link to="/categorias">
            <a href="#">Categorías</a>
          </Link>
        </li>
        <li class="item-r">
          <Link to="/usuarios">
            <a href="#">Usuarios</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminMenu;
