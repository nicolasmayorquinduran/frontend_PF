import React from "react";
import { UseLocalStorage } from "../LocalStorage/UseLocalStorage";

export default function Cart({product}) {
    const [cart, setCart] = UseLocalStorage('products', [])
    console.log(cart)
    return (
        <button onClick={() => setCart([...cart, product])}>Add to cart</button>
    )
}