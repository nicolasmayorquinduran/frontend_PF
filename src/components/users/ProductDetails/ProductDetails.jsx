import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { detailsProduct } from "../../../redux/actions/products";
import "./productdetails.css";

export default function ProductDetails() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(detailsProduct()), [dispatch]);

  const product = useSelector((store) => store.productsReducer.productsDetails);

  // console.log(product);

  return (
    <div>
      <hr></hr>
      {product.hasOwnProperty("id") ? (
        <div>
          {" "}
          <div className="imgAndDetail">
            <div className="imgContainer">
              <div className="bigImg">
                <img src={product.images[0].img1} alt="Not found" />
              </div>
              <div className="smallImg">
                <img src={product.images[0].img1} alt="Not found" />
                <img src={product.images[1].img2} alt="Not found" />
                <img src={product.images[2].img3} alt="Not found" />
                <img src={product.images[3].img4} alt="Not found" />
              </div>
            </div>
            <div className="productDetail">
              <h3> {product.name} </h3>
              <h3 id="price"> {product.price} </h3>
              <br></br>
              <p id="categories"> Categories: {product.type} </p>
              <br></br>
              <br></br>
              <br></br>
              <p> {product.description} </p>
            </div>
          </div>
          TALLES:
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
  );
}
