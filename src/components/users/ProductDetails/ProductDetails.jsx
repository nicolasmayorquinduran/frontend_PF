import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { detailsProduct } from "../../../redux/actions/products";

export default function ProductDetails() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(detailsProduct()));
  const product = useSelector((store) => store.productsReducer.productsDetails);
  console.log(product);

  return (
    <div>
      <Link to="/carrito">
        <button> Carrito </button>
      </Link>

      <div>
        {product.hasOwnProperty("id") ? (
          <div>
            {" "}
            IMGENES
            <img src={product.images[0].img1} alt="Not found" />
            <img src={product.images[1].img2} alt="Not found" />
            <img src={product.images[2].img3} alt="Not found" />
            <img src={product.images[3].img4} alt="Not found" />
            <p> {product.nameProduc} </p>
            <p> {product.productType} </p>
            <p> {product.price} </p>
            <p> {product.description} </p>
            <div>
              {" "}
              REVIEWS
              <p>{product.reviews[0].usuario}</p>
              <p>{product.reviews[0].timestamps}</p>
              <p>{product.reviews[0].comment}</p>
              <p>{product.reviews[1].usuario}</p>
              <p>{product.reviews[1].timestamps}</p>
              <p>{product.reviews[1].comment}</p>
              <p>{product.reviews[2].usuario}</p>
              <p>{product.reviews[2].timestamps}</p>
              <p>{product.reviews[2].comment}</p>
            </div>
            <div>
              {" "}
              INFO ADICIONAL
              <p>{product.Additional_Information[0].manufacturer}</p>
              <p>{product.Additional_Information[0].fit}</p>
              <p>{product.Additional_Information[0].lining_material}</p>
              <p>{product.Additional_Information[0].Occasion}</p>
            </div>
          </div>
        ) : (
          <h3> Error 404 Not Found </h3>
        )}
      </div>
    </div>
  );
}
