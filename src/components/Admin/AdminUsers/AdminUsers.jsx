import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/actions/users";

function AdminUsers() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getUsers), [dispatch]);
  const allUsers = useSelector(getUsers());
  return <div></div>;
}

export default AdminUsers;
