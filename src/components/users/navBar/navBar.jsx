import React from "react";
import { Link } from "react-router-dom";
import { LoginButton } from "../Login/Login";
import { NavBarMenu } from "./navBarMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbarContainer">
      <NavBarMenu />
      <Link id="navLink" to="/">
        <FontAwesomeIcon icon={faSearch} />
      </Link>
      <div className="vacio"></div>
      <h1>Henry LooK</h1>
      <div className="vacio"></div>
      <LoginButton />
      <Link id="navLink" to="/">
        <FontAwesomeIcon icon={faCartPlus} />
      </Link>
    </div>
  );
};

export default NavBar;
