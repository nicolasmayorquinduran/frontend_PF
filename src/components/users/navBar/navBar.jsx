import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavBarCart } from "./navBarCart";
import { NavBarMenu } from "./navBarMenu";
import { NavBarUser } from "./navBarUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import logoLok from "./logo_LOK.png";
import "./navbar.css";
import { getUserCart } from "../../../redux/actions/products";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  const email = window.localStorage.getItem("userEmail");

  useEffect(() => {
    dispatch(getUserCart(email));
  }, [dispatch]);

  return (
    <div className="navbarContainer">
      <NavBarMenu />

      <div className="logoLok">
        <Link to="/">
          <img src={logoLok} alt="LooK" />
        </Link>
      </div>

      <NavBarUser />

      <NavBarCart />
    </div>
  );
};

export default NavBar;
