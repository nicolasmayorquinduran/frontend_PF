import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBarCart } from "./navBarCart";
import { NavBarMenu } from "./navBarMenu";
import { NavBarUser } from "./navBarUser";
import logoLok from "./logo_LOK.png";
import "./navbar.css";
import { getUserCart } from "../../../redux/actions/products";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const email = window.localStorage.getItem("userEmail");

  useEffect(() => {
    dispatch(getUserCart(email));
  }, [dispatch]);

  return (
    <div className={location.pathname == "/" ? "fixiMenu" : ""}>
      <div
        className={
          location.pathname == "/"
            ? "navbarContainer navTransparent"
            : "navbarContainer"
        }
      >
        <div className="sideLeft">
          <NavBarMenu />
          <div className="logoLok">
            <Link to="/">
              <img src={logoLok} alt="LooK" />
            </Link>
          </div>
        </div>
        <div className="sideRigth">
          <NavBarUser />
          <NavBarCart />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
