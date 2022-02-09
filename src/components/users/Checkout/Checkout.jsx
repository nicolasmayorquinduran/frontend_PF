import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartToBuy } from "../../../redux/actions/products";
import axios from "axios";
import "./checkout.css";

export default function Checkout({ total, productos }) {
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  const actualUser = useSelector((state) => state.actualUser);
  const [user, setUser] = useState({
    name: actualUser.name,
    address: actualUser.address,
    state: actualUser.state,
    email: actualUser.email,
    cp:actualUser.cp,
    country: actualUser.country
  });
  const [acept,setAcept] = useState({name:"noAceptado"})
  // console.log("userrrr",actualUser)
  const handlePost = () =>{
    // console.log(user)
    axios
      .post("http://localhost:3001/checkout", productos)
      .then((res) => setUrl(res.data));
}
  useEffect(() => {
    handlePost();
  }, [user]);

  // console.log(url);
  const handleCartToBuy=(infoBuy,infoUser)=>{
    console.log("BUUUYYY", infoBuy)
    console.log("USERRRR", infoUser)

    // dispatch(cartToBuy(infoBuy,infoUser))
  }
  function handleChange(name,value) {
    setUser({
      ...user, 
      [name]: value,
    });
    console.log("userrr",user)
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
        onChange={(e) => handleChange(e.target.name,e.target.value)}
        required
      />
      <span>
        <b>Dirección</b>
      </span>
      <input
        type="text"
        value={actualUser.address}
        name="address"
        onChange={(e) => handleChange(e.target.name,e.target.value)}
        required
      />
      <span>
        <b>País</b>
      </span>
      <input
        type="text"
        value={actualUser.country}
        name="country"
        onChange={(e) => handleChange(e.target.name,e.target.value)}
        required
      />
      <span>
        <b>Ciudad</b>
      </span>
      <input
        type="text"
        value={actualUser.state}
        name="state"
        onChange={(e) => handleChange(e.target.name,e.target.value)}
        required
      />
      <span>
        <b>Correo</b>
      </span>
      <input
        type="text"
        value={actualUser.email}
        name="email"
        onChange={(e) => handleChange(e.target.name,e.target.value)}
        required
      />
      <input
      className="cp"
        type="text"
        value={actualUser.cp}
        name="cp"
        onChange={(e) => handleChange(e.target.name,e.target.value)}
        required
      />
      
      
      <a >
        <button type="submit" onSubmit={()=>handleCartToBuy(productos,user)}>
          <b>{total}</b>
        </button>
      </a>
      
    </div>
  );
}
