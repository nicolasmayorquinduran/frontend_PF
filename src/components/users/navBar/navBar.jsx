import React from "react";
import { Link } from "react-router-dom";
import { LoginButton } from "../Login/Login";
import { LogoutButton } from "../Login/Logout";
import { Profile } from "../Login/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBarMenu } from "./navBarMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="navbarContainer">
      <NavBarMenu />
      <Link id="navLink" to="/">
        <FontAwesomeIcon icon={faSearch} />
      </Link>
      <div className="vacio"></div>
      <h1>Henry LooK</h1>
      <div className="vacio"></div>
      {isAuthenticated ? (
        <div className="logged">
          <Profile />
          <LogoutButton />
        </div>
      ) : (
        <div>
          <LoginButton />
        </div>
      )}
      <Link id="navLink" to="/">
        <FontAwesomeIcon icon={faCartPlus} />
      </Link>
    </div>
  );
};

export default NavBar;
