import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions:
import { getUsers } from "../../../redux/actions/users";

// Styles:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

function AdminUsers() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getUsers()), [dispatch]);

  const allUsers = useSelector((state) => state.users);
  //console.log(allUsers);

  // const handleDetailUser = (event) => {

  // }

  return (
    <div>
      <div>
        <form className="formUser">
          <div className="imageUser"></div>

          <div className="formName">
            <label htmlFor="name">Nombre</label>
            <input id="" type="text" />
          </div>

          <div className="formCorreo">
            <label htmlFor="name">Correo</label>
            <input id="" type="email" />
          </div>

          <div className="formPais">
            <label htmlFor="name">Pais</label>
            <input id="" type="text" />
          </div>

          <div className="formCiudad">
            <label htmlFor="name">Ciudad/ Provincia</label>
            <input id="" type="text" />
          </div>

          <div className="formDireccion">
            <label htmlFor="name">Dirección</label>
            <input id="" type="text" />
          </div>

          <div className="formBoton">
            <button>Guardar</button>
          </div>
        </form>
      </div>

      <table className="usersList">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Detalle</th>
          </tr>
        </thead>

        <tbody>
          {allUsers.map((prop) => (
            <tr key={prop.UsersId}>
              <td>
                <img src={prop.picture} alt={prop.name} />
              </td>

              <td>{prop.email}</td>

              <td>
                <select>
                  <option>Guest</option>
                  <option>User</option>
                  <option>Admin</option>
                </select>
              </td>

              <td>
                <FontAwesomeIcon icon={faEye} onClick={(event) => event} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsers;
