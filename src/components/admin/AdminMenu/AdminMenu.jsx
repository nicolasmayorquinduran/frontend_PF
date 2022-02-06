import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../index.css'

const AdminMenu = () => {
  return (
    <div>
      <ul className="menuLink">
        <li>
          <NavLink exact to="/admin/products" activeClassName='active-link'>Productos</NavLink>
        </li>
        <li>
          <NavLink exact to="/admin/categorias" activeClassName='active-link'>Categorías</NavLink>
        </li>
        <li>
          <NavLink exact to="/admin/pedidos" activeClassName='active-link'>Pedidos</NavLink>
        </li>
        <li class="item-r">
          <NavLink exact to="/admin/promos" activeClassName='active-link'>Promos</NavLink>
        </li>
        <li class="item-r">
          <NavLink exact to="/admin/usuarios" activeClassName='active-link'>Usuarios</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminMenu;
