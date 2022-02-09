// import { UseLocalStorage } from "../UseLocalStorage/UseLocalStorage";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Children } from "../../../globalStyles";
import { useAuth0 } from "@auth0/auth0-react";

import Swal from "sweetalert2";
import {
  getUserCart,
  deleteAllCart,
  deleteProductCart,
} from "../../../redux/actions/products";

import { getActualUser } from "../../../redux/actions/users";
import { Link } from "react-router-dom";
import { Button, Modal, ModalBody } from "reactstrap";
import Checkout from "../Checkout/Checkout.jsx";
import axios from "axios";

import "./style.css";
// import axios from "axios";

export default function Cart() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const { loginWithRedirect } = useAuth0();

  const navigate = useNavigate();
  const email = window.localStorage.getItem("userEmail");
  const User = useSelector((store) => store.actualUser);
  let carrito = useSelector(
    (store) =>
      store.actualUser.carts[store.actualUser.carts.length - 1]?.productCart
  );
  const [cart, setCart] = useState(
    User.hasOwnProperty("UsersId")
      ? carrito
      : JSON.parse(window.localStorage.getItem("cart"))
  );

  const dispatch = useDispatch();
  const idUser = !User ? null : User.UsersId;
  let products = carrito?.hasOwnProperty("productCart")
    ? carrito.productCart
    : [];
  useEffect(() => {
    dispatch(getActualUser(User?.UsersId));
  }, [dispatch, User]);
  // esto se va a usar para cargar a la base de datos lo que guardabas local al desmontar el componente

  return (
    <>
      <div>
        <h1>Shopping Cart</h1>
      </div>
      <Container className="productsAdded">
        {cart?.length ? (
          cart?.map((p) => (
            <Children
              pc={cart.length > 2 ? "3" : "2"}
              tablet="2"
              movil="1"
              className="model"
            >
              <div
                className="itemCartSection"
                style={{
                  backgroundImage: `url(${p.img})`,
                }}
              >
                <div id="productResume">
                  <p>{p.name}</p>
                  <strong>{`$${
                    Object.keys(p.stockSelected)?.reduce(
                      (acc, talla) => (acc += Number(p.stockSelected[talla])),
                      0
                    ) * p.price
                  } total`}</strong>
                </div>
                <button
                  onClick={() => {
                    let productsFiltered = cart?.filter(
                      (actualProduct) => actualProduct.ProductId !== p.ProductId
                    );
                    setCart(productsFiltered);
                    dispatch(
                      deleteProductCart(
                        User?.carts[User.carts?.length - 1].CartId,
                        p.ProductId
                      )
                    );

                    window.localStorage.setItem(
                      "cart",
                      JSON.stringify(productsFiltered)
                    );
                  }}
                  id="close"
                >
                  x
                </button>
              </div>
              <div className="itemCartSection">
                <div className="amountProduct">
                  <strong>{`Precio unitario $${p.price}`}</strong>
                </div>

                <div className="stockSelectedProduct">
                  {Object.keys(p.stockSelected)?.map((t) => {
                    return (
                      <div className="sise">
                        <p>{`$${t}: ${p.stockSelected[t]} unids`}</p>
                        <input
                          value={p.stockSelected[t]}
                          type="range"
                          min={0}
                          max={p.stock[t]}
                          disabled={p.stockSelected[t] == 0 && false}
                          style={{
                            background:
                              p.stockSelected[t] == 0 ? "#ccc" : "#fff",
                            color: p.stockSelected[t] == 0 ? "#888" : "#000",
                          }}
                          onChange={(e) => setCart()}
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
          {`Total compra: $${cart?.reduce(
            (acc, p) =>
              (acc += Object.keys(p.stockSelected)?.reduce(
                (acc, talla) => (acc += p.stockSelected[talla] * p.price),
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

        <button
          onClick={() => {
            dispatch(deleteProductCart(User?.CartId));
            window.localStorage.setItem("cart", JSON.stringify([]));
          }}
        >
          limpiar carritO
        </button>
        {User.hasOwnProperty("UsersId") ? (
          <Button onClick={toggle}>GO TO CHECKOUT</Button>
        ) : (
          <Button onClick={() => loginWithRedirect()}>
            Finalizar tu compra!
          </Button>
        )}

        <Modal isOpen={modal} toggle={toggle}>
          <ModalBody>
            <Checkout
              total={`Comprar $${cart.reduce(
                (acc, p) =>
                  (acc += Object.keys(p.stockSelected)?.reduce(
                    (acc, talla) => (acc += p.stockSelected[talla] * p.price),
                    0
                  )),
                0
              )}`}
              productos={cart}
            />
          </ModalBody>
        </Modal>
      </div>
    </>
  );
}
