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
    alert("hacer función para ir a ver los productos filtrados");
  };

  return (
    <>
      <Dropdown isOpen={dropdown} toggle={openCloseDropdown} size="lg">
        <DropdownToggle className="dropdownButton">
          <FontAwesomeIcon icon={faBars} />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <a href="/">Home</a>
          </DropdownItem>
          <DropdownItem>
            <a href="/products">Ver todos los productos</a>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem header>Categorías</DropdownItem>
          <DropdownItem divider />
          {}
          <DropdownItem onClick={() => showAllProducts()}>
            Categoría 1
          </DropdownItem>
          <DropdownItem onClick={() => showAllProducts()}>
            Categoría 2
          </DropdownItem>
          <DropdownItem onClick={() => showAllProducts()}>
            Categoría 3
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};
