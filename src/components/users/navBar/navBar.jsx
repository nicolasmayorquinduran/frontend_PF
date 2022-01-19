import React from "react";
import { Link } from "react-router-dom";
import { NavBarUser } from "./navBarUser";
import { NavBarMenu } from "./navBarMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import logoLok from "./logo_LOK.png";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbarContainer">
      <NavBarMenu />
      <Link id="navLink" to="/">
        <FontAwesomeIcon icon={faSearch} />
      </Link>
      <div className="vacio"></div>
      <div className="logoLok">
        <img src={logoLok} alt="LooK" />
      </div>
      <div className="vacio"></div>
      <NavBarUser />
      <Link id="navLink" to="/">
        <FontAwesomeIcon icon={faCartPlus} />
      </Link>
    </div>
  );
};

export default NavBar;
