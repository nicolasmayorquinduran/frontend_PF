import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./AdminOrders.css";

/* Actions  */
import { orderAdmin } from "../../../redux/actions/orderAdmin";

const AdminOrders = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(orderAdmin()), [dispatch]);

  const order = useSelector((state) => state.orderAdmReducer.orders);
  console.log(order);

  return (
    <div className="principal-container">
      {order != undefined || order.length ? (
        order.map((el) => {
          return (
            <div className="container1">
              <h4>Productos</h4>
              <br />
              <ul>
                <th>
                  <a>Estado</a>
                  <br />
                  <select name="" id="">
                    <option value="">Pendiente</option>
                    <option value="">Cancelado</option>
                    <option value="">Entregado</option>
                  </select>
                </th>
                <th>
                  <a>Usuario:</a>
                  <br />
                  <h6> {el.client.name}</h6>
                </th>
                <th>
                  <a>Id:</a>
                  <br />
                  <h6> {el.products.map(el => <li>{el.id}</li>)}</h6>
                </th>
                <th>
                  <a>Producto: </a>
                  <br />
                  <ul>
                    {el.products.map((el) => (
                      <li>{el.name}</li>
                    ))}
                  </ul>
                </th>
                <th>
                  <a>Cantidad: </a>
                  <br />
                  <ul>
                    {el.products.map((el) => (
                      <li>{el.cantidad}</li>
                    ))}
                  </ul>
                </th>
                <th>
                  <a>Total x Producto:</a>
                  <br />
                  <ul>
                    {el.products.map((el) => (
                      <li>{el.price}</li>
                    ))}
                  </ul>
                </th>
                <th>
                  <a>Total Compra:</a>
                  <br />
                   <h6>${el.products.map(el => (<li>{el.price}</li>))}</h6> 
                </th>
                <th>
                  <a>Ver Detalle:</a>
                  <br />
                  <FontAwesomeIcon icon={faEye} />
                </th>
              </ul>
              <br />
              <br />
            </div>
          );
        })
      ) : (
        <h2>Cargando productos</h2>
      )}
    </div>
  );
};

export default AdminOrders;


