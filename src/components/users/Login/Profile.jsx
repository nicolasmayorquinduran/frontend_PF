import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UseLocalStorage } from "../UseLocalStorage/UseLocalStorage";
import { postUser, getActualUser } from "../../../redux/actions/users";
import { addToCart } from "../../../redux/actions/products";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router"; 
import "./profile.css";

let noRepeat = false;

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [cart, setCart] = UseLocalStorage("cart", []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // else{
  //       dispatch(
  //       addToCart( "",
  //         "data"
  //       )
  //     }
  useEffect(async () => {
    if (isAuthenticated) {
      await dispatch(postUser(user));
      noRepeat = true;
      await dispatch(getActualUser(user.email));
      window.localStorage.setItem("userEmail", user.email);
      if (window.localStorage.url && window.localStorage.url !== window.location.pathname) {
        navigate(window.localStorage.url)
      }
      window.localStorage.removeItem("url")
    }
  }, [user, dispatch]);
  const actualUser = useSelector((store) => store.actualUser);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  //console.log(actualUser)
  return (
    isAuthenticated && (
      <div>
        <img id="userImg" src={user.picture} alt={user.name} />
      </div>
    )
  );
};
