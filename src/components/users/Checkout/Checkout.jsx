import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActualUser } from "../../../redux/actions/users.js";
import axios from "axios";
import "./checkout.css";

export default function Checkout({ total, productos }) {
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  const actualUser = useSelector((state) => state.actualUser);
  const [user, setUser] = useState({
    name: "",
    adress: "",
    state: "",
    email: "",
  });

  const handlePost = () =>
    axios
      .post("http://localhost:3001/checkout", productos)
      .then((res) => setUrl(res.data));

  useEffect(() => {
    handlePost();
  }, []);

  console.log(url);

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="container">
      <h4>Confirmar datos de envío</h4>
      <span>
        <b>Nombre</b>
      </span>
      <input
        type="text"
        value={actualUser.name}
        name="name"
        onChange={(e) => handleChange(e)}
        required
      />
      <span>
        <b>Dirección</b>
      </span>
      <input
        type="text"
        value={actualUser.address}
        name="address"
        onChange={(e) => handleChange(e)}
        required
      />
      <span>
        <b>País</b>
      </span>
      <input
        type="text"
        value={actualUser.country}
        name="country"
        onChange={(e) => handleChange(e)}
        required
      />
      <span>
        <b>Ciudad</b>
      </span>
      <input
        type="text"
        value={actualUser.state}
        name="state"
        onChange={(e) => handleChange(e)}
        required
      />
      <span>
        <b>Correo</b>
      </span>
      <input
        type="text"
        value={actualUser.email}
        name="email"
        onChange={(e) => handleChange(e)}
        required
      />
      <a href={url} target="_blank">
        <button type="submit">
          <b>{total}</b>
        </button>
      </a>
    </div>
  );
}
