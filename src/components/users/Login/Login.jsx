import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return <FontAwesomeIcon onClick={() => {
        window.localStorage.setItem("url", window.location.pathname)
        loginWithRedirect()
    }} icon={faUser} />;
}