import React from "react";
import { Children } from "../../globalStyles";

const Product = ({ id, name, price, img }) => {
  return (
    <Children>
      <img src={img} alt="Producto" />
      <h2>{name}</h2>
      <h3>{price}</h3>
    </Children>
  );
};

export default Product;
