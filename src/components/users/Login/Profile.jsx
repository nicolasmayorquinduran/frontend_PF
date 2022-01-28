import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { postUser, getActualUser } from "../../../redux/actions/users";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./profile.css";

let noRepeat = false;

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const dispatch = useDispatch();

  // useEffect(async () => {
  //   if (isAuthenticated && noRepeat === false) {
  //     dispatch(postUser(user));
  //     noRepeat = true;
  //     dispatch(getActualUser(user.email));
  //   }
  // }, [user, dispatch]);

  const actualUser = useSelector((store) => store.userReducer.actualUser);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  /* if (isAuthenticated && noRepeat === false) {
    dispatch(postUser(user));
    noRepeat = true;
    dispatch(getActualUser(user.email));
  } */

  //console.log(actualUser)
  return (
    isAuthenticated && (
      <div>
        <img id="userImg" src={user.picture} alt={user.name} />
      </div>
    )
  );
};
