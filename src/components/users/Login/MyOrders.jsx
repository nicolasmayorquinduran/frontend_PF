import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal, ModalBody } from "reactstrap";
import Review from "../ProductDetails/Reviews.jsx";
import s from "./MyOrders.module.css"

export const MyOrders = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const actualUser = useSelector((store) => store.actualUser);
    let orders = actualUser?.carts?.filter(e=> e.productCart?.length > 0)
    console.log(orders)
    return (
        <div classname={s.background}>
            <h1>Tus compras</h1>
            <div className={s.container}>
                <div className={s.orders}>
                    {
                    orders?.map((e) => (
                        <div className={s.card}>
                            <p className={s.subtitle} >N° de orden: {e.CartId}</p>
                            <p className={s.subtitle} >Monto: {e.amount}</p>
                            <p className={s.subtitle} >Productos: </p>
                            <ul className={s.productsContainer}>
                                {e?.productCart?.map((el) => (
                                    <div className={s.products}>
                                        <li className={s.imgTitle}>
                                            <img src={el.img} alt="not found" width="100px" />
                                            <p>{el.name}</p>
                                        </li>
                                        <Button onClick={toggle}>Add Comment</Button>
                                        <Modal isOpen={modal} toggle={toggle}>
                                            <ModalBody>
                                                <Review productProductId={el.ProductId} />
                                            </ModalBody>
                                        </Modal>
                                </div>
                                ))}
                            </ul>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
}