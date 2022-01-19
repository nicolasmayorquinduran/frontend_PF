import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { detailsProduct } from "../../../redux/actions/products";

export default function ProductDetails() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(detailsProduct()), [dispatch]);

  const product = useSelector((store) => store.productsReducer.productsDetails);

  console.log(product);

  return (
    <div>
      <div>
        <button> Carrito </button>

        {product.hasOwnProperty("id") ? (
          <div>
            {" "}
            IMGENES:
            <img src={product.images[0].img1} alt="Not found" />
            <img src={product.images[1].img2} alt="Not found" />
            <img src={product.images[2].img3} alt="Not found" />
            <img src={product.images[3].img4} alt="Not found" />
            <p> {product.name} </p>
            <p> {product.type} </p>
            <p> {product.price} </p>
            <p> {product.description} </p> TALLES:
            <p>
              {product.size[0].name}, {product.size[0].qty}
            </p>
            <p>
              {product.size[1].name}, {product.size[1].qty}
            </p>
            <p>
              {product.size[2].name}, {product.size[2].qty}
            </p>
            <p>
              {product.size[3].name}, {product.size[3].qty}
            </p>
            <p>
              {product.size[4].name}, {product.size[4].qty}
            </p>
            <p>
              {product.size[5].name}, {product.size[5].qty}
            </p>{" "}
            REVIEWS:
            <p>{product.reviews[0].usuario}</p>
            <p>{product.reviews[0].timestamps}</p>
            <p>{product.reviews[0].comment}</p>
            <p>{product.reviews[1].usuario}</p>
            <p>{product.reviews[1].timestamps}</p>
            <p>{product.reviews[1].comment}</p>
            <p>{product.reviews[2].usuario}</p>
            <p>{product.reviews[2].timestamps}</p>
            <p>{product.reviews[2].comment}</p> INFO ADICIONAL:
            <p>{product.additional_information[0].manufacturer}</p>
            <p>{product.additional_information[0].fit}</p>
            <p>{product.additional_information[0].lining_material}</p>
            <p>{product.additional_information[0].ocasion}</p>
            <p> {product.description} </p>
          </div>
        ) : (
          <h3> Error 404 Not Found </h3>
        )}
      </div>
    </div>
  );
}
