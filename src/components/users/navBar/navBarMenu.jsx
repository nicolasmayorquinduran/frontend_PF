import React from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import { useState } from "react";

export const NavBarMenu = () => {
  const [dropdown, setDropdown] = useState(false);

  const openCloseDropdown = () => {
    setDropdown(!dropdown);
  };

  const showAllProducts = () => {
    alert("hacer función para ir a ver los productos");
  };

  return (
    <div>
      <Dropdown isOpen={dropdown} toggle={openCloseDropdown} size="lg">
        <DropdownToggle className="dropdownButton">
          <FontAwesomeIcon icon={faBars} />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => showAllProducts()}>
            Ver todos los productos
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem header>Categorías</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Categoría 1</DropdownItem>
          <DropdownItem>Categoría 2</DropdownItem>
          <DropdownItem>Categoría 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
