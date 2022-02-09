import React from "react";
import { useSelector } from "react-redux";

export const MyOrders = () => {

    
    const actualUser = useSelector((store) => store.actualUser);

    return (
        <div>
            <h1>Tus compras</h1>
            <div>
                <ul>
                {
                    actualUser.carts?.map((e) => (
                        <li>
                            <div>
                                <p>N° de orden: {e.CartId}</p>
                                <p>Monto: {e.amount}</p>
                                <p>Productos: </p>
                                <ul>
                                    {
                                        e.productCart.map((e) => (
                                            <li>
                                                <img src={e.img} alt="not found" width="100px" />
                                                <p>{e.name}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
    );
}