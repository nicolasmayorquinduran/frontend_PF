import React from "react";
import { Link, NavLink } from "react-router-dom";
import './index.css'

const UserMenu = () => {
  return (
    <div>
      <ul className="menuLink">
        <li>
          <NavLink exact to="/user/settings" activeClassName='active-link'>Perfil</NavLink>
        </li>
        <li>
          <NavLink exact to="/user/myorders" activeClassName='active-link'>Mis compras</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;