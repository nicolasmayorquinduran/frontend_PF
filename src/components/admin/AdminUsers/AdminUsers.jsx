import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/actions/users";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

function AdminUsers() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getUsers()), [dispatch]);
  const allUsers = useSelector((store) => store.userReducer.users);
  console.log(allUsers);
  return (
    <div>
      <form></form>

      <table className="usersList">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Usuario</th>
            <th>Rol</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((u) => (
            <tr>
              <td>
                <img src={u.img} />
              </td>
              <td>{u.name}</td>
              <td>
                <select>
                  <option>Guest</option>
                  <option>User</option>
                  <option>Admin</option>
                </select>
              </td>
              <td>
                <FontAwesomeIcon icon={faEye} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsers;
