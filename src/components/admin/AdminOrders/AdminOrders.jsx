import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

// Actions:
import { getAllCarts } from "../../../redux/actions/products";

// Styles:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./AdminOrders.css";

const AdminOrders = () => {
  const dispatch = useDispatch();

  const carts = useSelector((state) => state.allCarts);

  const [productsOrder, setProductsOrder] = useState("");

  const [send, setSend] = useState({});
  // mail, cardId, status

  const [productStatus, setProductStatus] = useState({
    CartId: "",
    status: "",
  });

  // console.log(productStatus)

  useEffect(() => {
    dispatch(getAllCarts());
    setSend({
      to: productStatus.email,
      from: "jonascript.cpu@gmail.com",
      subject: `Pedido ${productStatus.status} `,
      text: `Subpedido ${productStatus.CartId} ha sido ${productStatus.status} `,
    });
  }, [dispatch, productStatus]);

  const handleStatusClick = async (event) => {
    const guardaValor = event.target.value;

    setProductStatus({
      CartId: productsOrder[0].CartId,
      status: guardaValor,
      email: productsOrder[0].user,
    });
  };

  const handleDetailClick = async (email, CartId) => {
    const productos = await axios.get("http://localhost:3001/cart/" + email);
    const productosData = productos.data;
    const myCartProducts = productosData.filter((p) => p.CartId === CartId);

    setProductsOrder(myCartProducts);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(send);
    await axios.put("http://localhost:3001/order", productStatus);
    await axios.post("http://localhost:3001/sendMail", send);
    window.location.reload(true);
  };

  /* const handleEmailClick = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:3001/sendMail', send)
  } */

  console.log(productsOrder);

  return (
    <div>
      {productsOrder.length ? (
        <div>
          <div>
            <h5>
              {" "}
              Usuario: <p>{productsOrder[0].user}</p>{" "}
            </h5>
            <h6>
              {" "}
              Número de orden: <p>{productsOrder[0].CartId}</p>{" "}
            </h6>

            <form onSubmit={handleSubmit}>
              <select onChange={handleStatusClick}>
                <option>Estado de compra</option>
                <option value="paid">paid</option>
                <option value="dispatched">dispatched</option>
                <option value="delivered">delivered</option>
              </select>

              <button type="submit">Actualizar estado</button>
            </form>
            {/*    <button onClick={handleEmailClick}>Prueba envios</button> */}
          </div>

          {productsOrder[0].productCart.map((p) => (
            <div key={p.ProductId}>
              <img src={p.img} alt="Image" width="150px" height="200px" />
              <p>Nombre: {p.name}</p>
              <p>Precio unitario: ${p.price}</p>
              <p>Talle xs: {p.stockSelected.xs}</p>
              <p>Talle s: {p.stockSelected.s}</p>
              <p>Talle m: {p.stockSelected.m}</p>
              <p>Talle l: {p.stockSelected.l}</p>
              <p>Talle xl: {p.stockSelected.xl}</p>
              <p>Talle xxl: {p.stockSelected.xxl}</p>
            </div>
          ))}
        </div>
      ) : (
        <h3>
          {" "}
          Historial de ordenes <hr />
        </h3>
      )}

      <table className="usersList">
        <thead>
          <tr>
            <th> Estado </th>
            <th> Usuario </th>
            <th> Número de orden </th>
            <th> Ver detalle </th>
          </tr>
        </thead>

        <tbody>
          {carts?.map((order) => (
            <tr>
              <td>{order.status}</td>

              <td>{order.user}</td>

              <td>{order.CartId}</td>

              <td onClick={() => handleDetailClick(order.user, order.CartId)}>
                <FontAwesomeIcon icon={faEye} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;
