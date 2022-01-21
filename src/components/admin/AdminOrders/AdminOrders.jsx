import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import "./AdminOrders.css";

/* Actions  */
import { orderAdmin } from "../../../redux/actions/orderAdmin";

const AdminOrders = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(orderAdmin()), [dispatch]);

  const order = useSelector((state) => state.orderAdmReducer.orders);

  return (
    <div className="principal-container">
      <img src={order.image} alt="Not found" width="500px" height="600px" />
      <div className="productName">{order.productName}</div>
      <div>{order.price}</div>
      <div>{order.status}</div>
      <div>{order.description}</div>
      <div>
        <h5>Pedido realizado por:</h5>
      </div>
    </div>
  );
};

export default AdminOrders;
