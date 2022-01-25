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

  return (
    <div className="principal-container">
      <h4>Productos</h4>
      <div className="container-titulos">
        <div>Estado</div>
        <div>Usuario:</div>
        <div>Id:</div>
        <div>Producto: </div>
        <div>Cantidad: </div>
        <div>Total x Producto:</div>
        <div>Total Compra:</div>
        <div>Ver Detalle:</div>
      </div>
      {order != undefined || order.length ? (
        order.map((el) => {
          return (
            <div className="container1">
              {el.products.map((p) => {
                return (
                  <div>
                    <ul>
                      <div className="status">
                        <div>
                          <br />
                        </div>
                        <select name="" id="">
                          <option value="">Pendiente</option>
                          <option value="">Cancelado</option>
                          <option value="">Entregado</option>
                        </select>
                      </div>
                      <div className="user">
                        <br />
                        <h6> {el.client.name}</h6>
                      </div>
                      <div className="id">
                        <br />

                        <ul>
                          <li>{p.id}</li>
                        </ul>
                      </div>
                      <div className="product">
                        <br />
                        <ul>
                          <li>{p.name}</li>
                        </ul>
                      </div>
                      <div className="cantidad">
                        <br />
                        <ul>
                          <li>{p.cantidad}</li>
                        </ul>
                      </div>
                      <div className="totalProduct">
                        <br />
                        <ul>
                          <li>{p.price}</li>
                        </ul>
                      </div>
                      <div className="totalcompra">
                        <br />
                        <ul>
                          <li>${p.price}</li>
                        </ul>
                      </div>
                      <div className="ojo">
                        <br />
                        <FontAwesomeIcon icon={faEye} />
                      </div>
                    </ul>
                  </div>
                );
              })}
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
/* 
  return (
    <div className="principal-container">
      <h4>Productos</h4>

      {order != undefined || order.length ? (
        order.map(el => {
          return (
            <div>{el.products.id}</div>
          )
        }),
        order.map((el) => {

          return (
            <div className="container1">
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
                  <h6>
                    {" "}
                    {el.products.map((el) => (
                      <li>{el.id}</li>
                    ))}
                  </h6>
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
                  <h6>
                    $
                    {el.products.map((el) => (
                      <li>{el.price}</li>
                    ))}
                  </h6>
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
}; */
