import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoginButton } from "../Login/Login";
import { LogoutButton } from "../Login/Logout";
import { Profile } from "../Login/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

export const NavBarUser = () => {
  const { isAuthenticated } = useAuth0();

  const [dropdown, setDropdown] = useState(false);

  const openCloseDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      {isAuthenticated ? (
        <div className="logged">
          <Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
            <DropdownToggle className="dropdownButton">
              <Profile />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <LogoutButton />
              </DropdownItem>
              <DropdownItem>
                <Link to="/user/settings">Ver profile</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/admin/pedidos">Ver Admin</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      ) : (
        <div>
          <LoginButton />
        </div>
      )}
    </>
  );
};
