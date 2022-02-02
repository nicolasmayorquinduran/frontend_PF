import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  detailsProduct,
  getProducts,
  getUserCart,
  addToCart,
} from "../../../redux/actions/products";
import "./productdetails.css";
import Cart from "../Cart/Cart";
import { useParams } from "react-router-dom";
import { formatMoney } from "accounting";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { UseLocalStorage } from "../UseLocalStorage/UseLocalStorage";

export default function ProductDetails() {
  const [cart, setCart] = UseLocalStorage("cart", []);
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.actualUser);
  const email = user.email;

  useEffect(() => {
    dispatch(getProducts());
    dispatch(detailsProduct(id));
    dispatch(getUserCart(email));
  }, [dispatch]);

  let product = useSelector((store) => store.productDetail);
  let talles = [];
  for (const prop in product.stock) {
    if (product.stock[prop] > 0)
      talles = [...talles, { size: prop, stock: product.stock[prop] }];
  }
  const UserId = user.UsersId;

  const [changeInfo, setChangeInfo] = useState("");

  const handleAddSize = (e) => {
    product.size = e.target.value;
    console.log(product);
  };

  const handleAddCart = (e) => {
    setCart([...cart, product]);
  };
  // function onClick(e) {
  //   e.preventDefault();
  //   setChangeInfo(e.target.value);
  // }
  console.log(product, talles);
  return (
    <div>
      <hr id="hr"></hr>
      {product.hasOwnProperty("ProductId") ? (
        <div className="containerDetail">
          <div className="imgAndDetail">
            <div className="imgContainer">
              <div className="bigImg">
                <img src={product.img[0]} alt="big" />
              </div>

              <div className="smallImg">
                {product.img.map((i) => (
                  <img id="s" src={i} alt="small" />
                ))}
              </div>
            </div>

            <div className="productDetail">
              <h2> {product.name} </h2>
              <div className="ranking"></div>
              <br></br>
              <h3 id="price"> {formatMoney(product.price)} </h3>

              <br></br>

              <div id="categoriesContainer">
                <h6 id="categories"> Categories: </h6>
                <p> {product.categories.map((c) => c.name).join(", ")}</p>
              </div>

              <div id="talles">
                <h6>Talles:</h6>
                <div className="lista">
                  {talles.map((t) => {
                    return (
                      t.stock > 0 && (
                        <>
                          <div>
                            <label>{`${t.size}:`}</label>
                            <input
                              defaultValue="0"
                              type="number"
                              min={0}
                              max={t.stock}
                              onChange={(e) => {
                                if (e.target.value == t.stock)
                                  alert("no hay más unidades disponibles");
                              }}
                            />
                          </div>
                        </>
                      )
                    );
                  })}
                </div>
              </div>
              <br></br>
              <div>
                <button className="add" onClick={handleAddCart}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="productAbout">
            <div className="selectDeploy">
              <button value="Comentarios">Comentarios</button>
              <button value="Adicional">Información Adicional</button>
              <button value="Adicional">Descripción</button>
            </div>
            <hr></hr>
            {changeInfo === "Comentarios" ? (
              <div>comentarios</div>
            ) : (
              // product.reviews.map((p) => {
              //   return (
              //     <div key={p.usuario} className="reviewContainer">
              //       <div className="reviewDivider">
              //         <div className="reviewUser">
              //           <p>{p.usuario}</p>
              //         </div>
              //         <div className="reviewData">
              //           <p id="timeStamps">Publicado el {p.timestamps}</p>
              //           <p>{p.comment}</p>
              //         </div>
              //       </div>
              //     </div>
              //   );
              // })
              <div id="additionalDescription">
                {/* <p> {product.description} </p>
                  <div className="additionalData">
                    <p>Made in {product.additionalInformation.manufacturer}</p>
                    <p>Fit: {product.additionalInformation.fit}</p>
                    <p>
                      Material: {product.additionalInformation.lining_material}
                    </p>
                    <p>Ocasion: {product.additionalInformation.occasion}</p>
                  </div> */}
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
