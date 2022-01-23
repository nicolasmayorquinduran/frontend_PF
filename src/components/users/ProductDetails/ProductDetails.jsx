import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { detailsProduct } from "../../../redux/actions/products";
import "./productdetails.css";
import Cart from "../Cart/Cart";

export default function ProductDetails() {
  const dispatch = useDispatch();

  const [changeInfo, setChangeInfo] = useState("Comentarios");

  useEffect(() => dispatch(detailsProduct()), [dispatch]);

  const product = useSelector((store) => store.productsReducer.productsDetails);

  const [bigImage, setBigImage] = useState(0);

  function onClick(e) {
    e.preventDefault();
    setChangeInfo(e.target.value);
  }

  function onImage(e) {
    e.preventDefault();
    setBigImage(e.target.id);
  }

  // console.log(product);

  return (
    <div>
      <hr id="hr"></hr>
      {product.hasOwnProperty("id") ? (
        <div>
          <div className="imgAndDetail">
            <div className="imgContainer">
              <div className="bigImg">
                {product.images.map(
                  (image, index) =>
                    index == bigImage && (
                      <img src={image} id={index} alt={`clothes for men`} />
                    )
                )}
              </div>

              <div className="smallImg">
                {product.images.map((image, index) => (
                  <img
                    src={image}
                    onClick={onImage}
                    id={index}
                    alt={`clothes for men`}
                  />
                ))}
              </div>
            </div>
            <div className="productDetail">
              <h3> {product.name} </h3>
              <h3 id="price"> {product.price} </h3>
              <br></br>
              <div id="categoriesContainer">
                <h6 id="categories"> Categories: </h6>
                {product.type}
              </div>
              <br></br>
              <br></br>
              <br></br>
              <p id="description"> {product.description} </p>
              <br></br>
              <div id="talles">
                <h6>Talles:</h6>
                {product.size.map((s) => {
                  return (
                    <div key={s.name}>
                      <p>{s.name}</p>
                    </div>
                  );
                })}
              </div>
              <br></br>
              <br></br>
              <br></br>
              <Cart product={product} />
            </div>
          </div>
          <div className="productAbout">
            <div className="selectDeploy">
              <button onClick={onClick} value="Comentarios">
                Comentarios:{" "}
              </button>
              <button onClick={onClick} value="Adicional">
                Información Adicional:
              </button>
            </div>
            <hr></hr>
            {changeInfo === "Comentarios" ? (
              product.reviews.map((p) => {
                return (
                  <div key={p.usuario} className="reviewContainer">
                    <div className="reviewDivider">
                      <div className="reviewUser">
                        <p>{p.usuario}</p>
                      </div>
                      <div className="reviewData">
                        <p id="timeStamps">Publicado el {p.timestamps}</p>
                        <p>{p.comment}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div id="additionalDescription">
                <p> {product.description} </p>
                <div className="additionalData">
                  <p>
                    Made in {product.additional_information[0].manufacturer}
                  </p>
                  <p>{product.additional_information[0].fit}</p>
                  <p>{product.additional_information[0].lining_material}</p>
                  <p>{product.additional_information[0].ocasion}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <h3> Error 404 Not Found </h3>
      )}
    </div>
  );
}
