import React from "react";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/admin/products">Productos</Link>
        </li>
        <li>
          <Link to="/admin/categorias">Categorías</Link>
        </li>
        <li>
          <Link to="/admin/pedidos">Pedidos</Link>
        </li>
        <li className="item-r">
          <Link to="/admin/promos">Promos</Link>
        </li>
        <li className="item-r">
          <Link to="/admin/usuarios">Usuarios</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminMenu;
