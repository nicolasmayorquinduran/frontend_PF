import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbarContainer">
      <Link id="navLink" to="/">
        <FontAwesomeIcon icon={faBars} />
      </Link>
      <Link id="navLink" to="/">
        <FontAwesomeIcon icon={faSearch} />
      </Link>
      <div className="vacio"></div>
      <h1>Henry LooK</h1>
      <div className="vacio"></div>
      <Link id="navLink" to="/">
        <FontAwesomeIcon icon={faUser} />
      </Link>
      <Link id="navLink" to="/">
        <FontAwesomeIcon icon={faCartPlus} />
      </Link>
    </div>
  );
};

export default NavBar;
