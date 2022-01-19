import React from "react";
import { Link } from "react-router-dom";
import { Children } from "../../../globalStyles";

const Product = ({ id, name, price, img }) => {
  return (
    <Children>

      <Link to = "/detail" >
        <img src={img} alt="Producto" />
        <h2>{name}</h2>
      </Link>
      
      
      <h4>{price}</h4>
    </Children>
  );
};

export default Product;
