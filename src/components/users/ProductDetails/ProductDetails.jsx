import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct, getProducts } from "../../../redux/actions/products";
import "./productdetails.css";
import Cart from "../Cart/Cart";
import { useParams } from "react-router-dom";
import { formatMoney } from "accounting";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { UseLocalStorage } from "../UseLocalStorage/UseLocalStorage";

export default function ProductDetails() {
  const [cart, setCart] = UseLocalStorage("products", []);
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((store) =>
  store.productsReducer.products.find((e) => e.id == id)
  );
  product.ranking = Math.random(1,5);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(detailsProduct());
  }, [dispatch]);

  console.log("CARRITO", cart);

  const [changeInfo, setChangeInfo] = useState("");
  const handleAddSize = (e) => {
    product.size = e.target.value;
    console.log(product);
  };
  const handleAddQty = (e) => {
    if (!product.qty) {
      product.qty = 1;
    } else {
      product.qty = e.target.value;
    }
    console.log(product);
  };

  const handleAddCart = (e) => {
    setCart([...cart, product]);
  }
    function onClick(e) {
      e.preventDefault();
      setChangeInfo(e.target.value);
    }

    return (
      <div>
        <hr id="hr"></hr>
        {product.hasOwnProperty("id") ? (
          <div className="container">
            <div className="imgAndDetail">
              <div className="imgContainer">
                <div className="bigImg">
                  <img src={product.img} alt="big" />
                </div>
                <div className="smallImg">
                  <img id="s" src={product.img} alt="small" />
                  <img id="s" src={product.img} alt="small" />
                  <img id="s" src={product.img} alt="small" />
                  <img id="s" src={product.img} alt="small" />
                </div>
              </div>

              <div className="productDetail">
                <h2> {product.name} </h2>
                <div className="ranking">
                  <div style={{ width:  `${product.ranking}%` }} className="path"></div>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
                  <br></br>
                <h3 id="price"> {formatMoney(product.price)} </h3>
                
                <br></br>
                <div id="categoriesContainer">
                  <h6 id="categories"> Category: </h6>
                  {product.category}
                </div>
                <br></br>
                <p id="description"> {product.description} </p>
                <br></br>
                <div id="talles">
                  <h6>Talles:</h6>
                  <select className="size" id="size" onChange={handleAddSize}>
                    <option value="XS">X-Small</option>
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                    <option value="XL">X-Large</option>
                    <option value="XXL">XX-Large</option>
                  </select>
                </div>
                <br></br>
                <div>
                  <input
                    onChange={handleAddQty}
                    className="qty"
                    placeholder={1}
                    type="number"
                    min={1}
                    max={20}
                    name="qty"
                  />
                  <button className="add" onClick={handleAddCart}>Add to cart</button>
                </div>
              </div>
            </div>
            <div className="productAbout">
              <div className="selectDeploy">
                <button onClick={onClick} value="Comentarios">
                  Comentarios:{" "}
                </button>
                <button onClick={onClick}value="Adicional">Información Adicional:</button>
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
                      Made in {product.additionalInformation[0].manufacturer}
                    </p>
                    <p>Fit: {product.additionalInformation[0].fit}</p>
                    <p>Material: {product.additionalInformation[0].lining_material}</p>
                    <p>Ocasion: {product.additionalInformation[0].Occasion}</p>
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
  };

