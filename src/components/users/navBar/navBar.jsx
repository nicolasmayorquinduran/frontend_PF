import React from "react";
import { Link } from "react-router-dom";
import { NavBarUser } from "./navBarUser";
import { NavBarMenu } from "./navBarMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import logoLok from "./logo_LOK.png";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbarContainer">
      <NavBarMenu />

      <div className="logoLok">
        Esto es logo
        <Link to="/">
          <img src={logoLok} alt="LooK" />
        </Link>
      </div>

      <NavBarUser />
      <Link id="navLink" to="/cart">
        <FontAwesomeIcon icon={faCartPlus} />
      </Link>
    </div>
  );
};

export default NavBar;
