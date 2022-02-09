import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
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

export const NavBarMenu = () => {
  let location = useLocation();

  const [dropdown, setDropdown] = useState(false);

  const categoriesState = useSelector(
    (state) => state.categories && state.categories
  );

  const openCloseDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      {location.pathname != "/products" ? (
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
            {categoriesState.map((categorie) => {
              return (
                categorie.active && 
                <DropdownItem key={categorie.CategoriesId}>
                  <Link to="/products" state={{ filter: categorie.name }}>
                    {categorie.name}
                  </Link>
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      ) : (
        <Dropdown isOpen={dropdown} toggle={openCloseDropdown} size="lg">
          <DropdownToggle className="dropdownButton">
            <FontAwesomeIcon icon={faBars} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <a href="/">Home</a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
    </>
  );
};
