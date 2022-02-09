import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal, ModalBody } from "reactstrap";
import Review from "../ProductDetails/Reviews.jsx";

export const MyOrders = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
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
                                        e.productCart.map((el) => (
                                            <div>
                                                
                                            <li>
                                                <img src={el.img} alt="not found" width="100px" />
                                                <p>{el.name}</p>
                                            </li>
                                                <Button onClick={toggle}>Add Comment</Button>
                                                <Modal isOpen={modal} toggle={toggle}>                                    
                                                <ModalBody>
                                                    <Review 
                                                    productProductId={el.ProductId}
                                                    />
                                                </ModalBody>
                                                </Modal>    
                                            </div>
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