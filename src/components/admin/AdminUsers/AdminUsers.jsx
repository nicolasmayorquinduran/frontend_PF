import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

// Actions:
import { getUsers } from "../../../redux/actions/users";
import { putUser } from "../../../redux/actions/users";

// Styles:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

function AdminUsers() {
  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.users);
  // console.log(allUsers);

  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    cp: "",
    state: "",
    country: "",
    picture: "",
    active: "",
    activeUser: "",
    inactiveUser: "",
    // admin: "",
    activeAdmin: "",
    inactiveAdmin: "",
  });

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  /*   const handleChange = (event) => setUser((user) => (
    {
      ...user,
      [event.target.id]: event.target.value 
    }
  )); */

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  const handleActiveUser = (event) => {
    event.preventDefault();

    setUser({
      ...user,
      activeUser: true,
    });

    dispatch(putUser({ email: user.email, activeUser: true }));
  };

  const handleInactiveUser = (event) => {
    event.preventDefault();

    setUser({
      ...user,
      inactiveUser: true,
    });

    dispatch(putUser({ email: user.email, inactiveUser: true }));
  };

  const handleActiveAdmin = (event) => {
    event.preventDefault();

    setUser({
      ...user,
      activeAdmin: true,
    });

    dispatch(putUser({ email: user.email, activeAdmin: true }));
  };

  const handleInactiveAdmin = (event) => {
    event.preventDefault();

    setUser({
      ...user,
      inactiveAdmin: true,
    });

    dispatch(putUser({ email: user.email, inactiveAdmin: true }));
  };

  const handleDetailClick = async (prop) => {
    const usuario = await axios.get(
      "https://pfbackendecommerce.herokuapp.com/users/" + prop ||
        "http://localhost:3001/users/" + prop
    );
    setUser({
      name: usuario.data.name,
      email: usuario.data.email,
      address: usuario.data.address,
      cp: usuario.data.cp,
      state: usuario.data.state,
      picture: usuario.data.picture,
      country: usuario.data.country,
      active: usuario.data.active,
      activeUser: usuario.data.activeUser,
      inactiveUser: usuario.data.inactiveUser,
      admin: usuario.data.admin,
      activeAdmin: usuario.data.activeAdmin,
      inactiveAdmin: usuario.data.inactiveAdmin,
    });
  };

  function handleSubmit(e) {
    if (user.name !== "") {
      e.preventDefault();
      alert("Datos guardados");
      dispatch(putUser(user));
    } else {
      e.preventDefault();
      alert("Complete el nombre");
    }
  }

  /*   const updateUser = (event) => {

    event.preventDefault();
    console.log("USER",user)
    //dispatch(putUser(user))
    
    setUser(
      {
        name: "",
        email: "",
        address: "",
        cp: "",
        state: "",
        country: "",
        picture: "",
        active: "",
        activeUser: "",
        inactiveUser: "",
        // admin: "",
        activeAdmin: "",
        inactiveAdmin: ""
      }
    );

  } */

  return (
    <div>
      {user.email.length ? (
        <div>
          <form className="formUser" onSubmit={(e) => handleSubmit(e)}>
            {/* <div>
              <img src={user.picture} alt={user.name} width="200px" height="200px"/>
            </div>

            <div className="formName">
              <label htmlFor="name"> Nombre </label>
              <input
                id="name"
                type="text"
                onChange={handleChange}
                placeholder={user.name}
              />
            </div>

            <div className="formCorreo">
              <label htmlFor="name">Correo</label>
              <input
                id="email"
                type="email"
                onChange={handleChange}
                placeholder={user.email}
              />
            </div>

            <div className="formPais">
              <label htmlFor="name"> Pais </label>
              <input
                id="country"
                type="text"
                onChange={handleChange}
                placeholder={user.country}
              />
            </div>

            <div className="formCiudad">
              <label htmlFor="name"> Ciudad/Provincia </label>
              <input
                id="state"
                type="text"
                onChange={handleChange}
                placeholder={user.state}
              />
            </div>

            <div className="formDireccion">
              <label htmlFor="name"> Dirección </label>
              <input
                id="address"
                type="text"
                onChange={handleChange}
                placeholder={user.address}
              />
            </div>

            <div className="formDireccion">
              <label htmlFor="name"> Código postal </label>
              <input id="cp" type="text" onChange={handleChange} placeholder={user.cp}/>
            </div>*/}
            <div className="formName">
              <h3>Tus datos</h3>
              <img src={user.picture} alt="not found" />
            </div>
            <div className="formName">
              <h5>Email</h5>
              <input type="text" value={user.email} disabled />
            </div>
            <div className="formName">
              <h5>Nombre</h5>
              <input
                type="text"
                value={user.name}
                name="name"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formName">
              <h5>Dirección</h5>
              <input
                type="text"
                value={user.address}
                name="address"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formName">
              <h5>Código Postal</h5>
              <input
                type="text"
                value={user.cp}
                name="cp"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="formName">
              <h5>Ciudad</h5>

              <input
                type="text"
                value={user.state}
                name="state"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="formDireccion">
              {user.active ? (
                <button id="inactiveUser" onClick={handleInactiveUser}>
                  {" "}
                  Desactivar usuario{" "}
                </button>
              ) : (
                <button id="activeUser" onClick={handleActiveUser}>
                  {" "}
                  Activar usuario{" "}
                </button>
              )}

              {user.admin ? (
                <button id="inactiveAdmin" onClick={handleInactiveAdmin}>
                  {" "}
                  Quitar administrador{" "}
                </button>
              ) : (
                <button id="activeAdmin" onClick={handleActiveAdmin}>
                  {" "}
                  Activar administrador{" "}
                </button>
              )}
            </div>

            <div className="formBoton">
              <button type="submit"> Guardar </button>
            </div>
          </form>
        </div>
      ) : (
        <h4>
          Elige un usuario para editar
          <hr />
        </h4>
      )}

      <table className="usersList">
        <thead>
          <tr>
            <th> Foto </th>
            <th> Email </th>
            <th> Rol </th>
            <th> Estado </th>
            <th> Detalle </th>
          </tr>
        </thead>

        <tbody>
          {allUsers.map((prop) => (
            <tr key={prop.UsersId}>
              <td>
                <img src={prop.picture} alt={prop.name} />
              </td>

              <td>{prop.email}</td>

              {prop.admin ? <td> Administrador </td> : <td> Usuario </td>}

              {prop.active ? <td> Activo </td> : <td> Inactivo </td>}

              <td onClick={() => handleDetailClick(prop.email)}>
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
