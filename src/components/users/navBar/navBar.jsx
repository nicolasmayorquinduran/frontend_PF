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
        <Link to="/">
          <img src={logoLok} alt="LooK" />
        </Link>
      </div>
      <div>
        <NavBarUser />
        <Link id="navLink" to="/cart">
          <FontAwesomeIcon icon={faCartPlus} />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
