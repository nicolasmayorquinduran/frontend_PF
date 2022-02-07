// import { UseLocalStorage } from "../UseLocalStorage/UseLocalStorage";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Children } from "../../../globalStyles";
import Swal from "sweetalert2";
import {
  getUserCart,
  deleteAllCart,
  deleteProductCart,
} from "../../../redux/actions/products";

// import { getActualUser } from "../../../redux/actions/users";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatMoney } from "accounting";
import s from "./Cart.module.css";
// import axios from "axios";

export default function Cart() {
  const navigate = useNavigate();
  const email = window.localStorage.getItem("userEmail");
  const carrito = useSelector(
    (store) => store.actualUser.carts[store.actualUser.carts.length - 1]
  );
  const [cart, setCart] = useState(carrito);

  const dispatch = useDispatch();
  const User = useSelector((store) => store.actualUser);
  const idUser = !User ? null : User.UsersId;
  let products = carrito?.hasOwnProperty("productCart")
    ? carrito.productCart
    : [];
  useEffect(() => {
    dispatch(getUserCart(email));
  }, [dispatch, email]);

  //esto se va a usar para cargar a la base de datos lo que guardabas local al desmontar el componente
  useEffect(() => {
    return () => console.log("se desmontó");
  }, []);

  return (
    <>
      <div>
        <h1>Shopping Cart</h1>
      </div>
      <Container>{cart.length ? <p>si hay</p> : <p>No hay</p>}</Container>
      <div>
        <div>Total compra: </div>
      </div>

      <div>
        <Link to="/products">
          <button>Seguir comprandO</button>
        </Link>

        <button>limpiar carritO</button>

        <input type="submit" value="COMPRAR!" />
      </div>
    </>
  );
}
