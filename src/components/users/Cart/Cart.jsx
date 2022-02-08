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
import { Button, Modal, ModalBody } from "reactstrap";
import Checkout from "../Checkout/Checkout.jsx";

import "./style.css";
// import axios from "axios";

export default function Cart() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  var LSorage = localStorage.getItem("cart");
  LSorage = JSON.parse(LSorage);
  const navigate = useNavigate();
  const email = window.localStorage.getItem("userEmail");
  const carrito = useSelector(
    (store) =>
      store.actualUser.carts[store.actualUser.carts.length - 1].productCart
  );
  const [cart, setCart] = useState(carrito);

  const dispatch = useDispatch();
  const User = useSelector((store) => store.actualUser);
  const idUser = !User ? null : User.UsersId;
  let products = carrito?.hasOwnProperty("productCart")
    ? carrito.productCart
    : [];
  useEffect(() => {
    !cart.hasOwnProperty("UsersId") && setCart(LSorage);
    setCart(carrito);
  }, []);
  //esto se va a usar para cargar a la base de datos lo que guardabas local al desmontar el componente
  useEffect(() => {
    return () => console.log("se desmontó");
  }, []);
  //name img price stock Object.keys(stock)
  return (
    <>
      <div>
        <h1>Shopping Cart</h1>
      </div>
      <Container className="productsAdded">
        {cart.length ? (
          cart.map((p) => (
            <Children
              pc={cart.length > 2 ? "3" : "2"}
              tablet="2"
              movil="1"
              className="model"
            >
              <div
                className="itemCartSection"
                style={{ backgroundImage: `url(${p.img})` }}
              >
                <div id="productResume">
                  <p>{p.name}</p>
                  <strong>
                    {p.stock &&
                      `$${
                        Object.keys(p.stock).reduce(
                          (acc, talla) => (acc += Number(p.stock[talla])),
                          0
                        ) * p.price
                      } total`}
                  </strong>
                </div>
                <button id="close">x</button>
              </div>
              <div className="itemCartSection">
                <div className="amountProduct">
                  <strong>{`Precio unitario $${p.price}`}</strong>
                </div>

                <div className="stockProduct">
                  {p.stock &&
                    Object.keys(p.stock).map((t) => {
                      return (
                        <div className="sise">
                          <p>{`$${t}: ${p.stock[t]} unids`}</p>
                          <input
                            value={p.stock[t]}
                            type="range"
                            min={0}
                            max={p.stock[t]}
                            disabled={p.stock[t] == 0 && false}
                            style={{
                              background: p.stock[t] == 0 ? "#ccc" : "#fff",
                              color: p.stock[t] == 0 ? "#888" : "#000",
                            }}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            </Children>
          ))
        ) : (
          <p>No hay</p>
        )}
      </Container>
      <div>
        <h4>
          {cart.length &&
            `Total compra: $${cart.reduce(
              (acc, p) =>
                (acc += Object.keys(p.stock).reduce(
                  (acc, talla) => (acc += p.stock[talla] * p.price),
                  0
                )),
              0
            )}`}
        </h4>
      </div>

      <div>
        <Link to="/products">
          <button>Seguir comprandO</button>
        </Link>

        <button>limpiar carritO</button>

        <Button onClick={toggle}>GO TO CHECKOUT</Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalBody>
            <Checkout
              total={
                cart.length &&
                `Comprar $${cart.reduce(
                  (acc, p) =>
                    (acc += Object.keys(p.stock).reduce(
                      (acc, talla) => (acc += p.stock[talla] * p.price),
                      0
                    )),
                  0
                )}`
              }
              productos={cart}
            />
          </ModalBody>
        </Modal>
      </div>
    </>
  );
}
