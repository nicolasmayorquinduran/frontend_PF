import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { postUser } from "../../../redux/actions/users";
import { useDispatch } from "react-redux";
let noRepeat = false;

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  const dispatch = useDispatch()
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isAuthenticated && noRepeat === false) {
    dispatch(postUser(user))
    noRepeat = true;
  }
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
      </div>
    )
  );
};