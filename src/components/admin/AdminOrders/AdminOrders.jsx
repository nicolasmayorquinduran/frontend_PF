import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components:
import OrdersDetails from "./OrdersDetails";

// Actions: 
import { getAllCarts } from "../../../redux/actions/products";

// Styles:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./AdminOrders.css";


const AdminOrders = () => {
  
  const dispatch = useDispatch();
  
  const carts = useSelector((state) => state.allCarts);
  // console.log(carts);


  useEffect(() => {
    
    dispatch(getAllCarts())
  
  }, [dispatch]);


  const handleDetailClick = () => {

  }


  return (
    <div>

      <h3> Historial de ordenes <hr/></h3>

      <OrdersDetails productsOrder={carts[0]?.productCart}/>
      
      <div><hr/></div>
      
      <table className="usersList">
        
        <thead>
          <tr>
            <th> Estado </th>
            <th> Usuario </th>
            <th> Id carrito </th>
            <th> Ver detalle </th>
          </tr>
        </thead>

        <tbody>
          {
            carts?.map((order) => (
              <tr>
                  
                <td>
                  {order.status}
                </td>

                <td>
                  {order.user}
                </td>

                <td>
                  {order.CartId}
                </td>

                <td onClick={() => handleDetailClick(order.CartId)}>
                  <FontAwesomeIcon icon={faEye}/>
                </td>
            
              </tr>
            )) 
        
          }
      
        </tbody>
    
      </table>

    </div>
  );

};


export default AdminOrders;