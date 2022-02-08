import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../products/product";
import {
  detailsProduct,
  getProducts,
  addToCart,
} from "../../../redux/actions/products";
import { getReviews } from "../../../redux/actions/reviews.js";
import { filterClothingType } from "../../filters/logicFunctionFilters";
import "./productdetails.css";
import Cart from "../Cart/Cart";
import { useParams } from "react-router-dom";
import { formatMoney } from "accounting";
import Swal from "sweetalert2";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Container } from "../../../globalStyles";
import { UseLocalStorage } from "../UseLocalStorage/UseLocalStorage";

export default function ProductDetails() {
  const [cart, setCart] = UseLocalStorage("cart", []);
  const [changeTab, setChangeTab] = useState("Comentarios");
  let [stock, setStock] = useState({
    xs: "0",
    s: "0",
    m: "0",
    l: "0",
    xl: "0",
    xxl: "0",
  });
  const { id } = useParams();
  const dispatch = useDispatch();
  const review = useSelector((store) => store.reviews);
  const user = useSelector((store) => store.actualUser);
  let product = useSelector((store) => store.productDetail);
  let allProducts = useSelector((store) => store.allProducts);
console.log(product)

  const [bigImage, setBigImage] = useState(0);
  // console.log(bigImage);
  const handleImage = (e) => {
    setBigImage(e.target.id);
  };

  //  product.categories != undefined && allProducts.length) {
  //     return (allProducts = allProducts.filter(
  //       (p) => p.categories[0].name == product.categories[0].name
  //     ));
  /*   allProducts =
    allProducts.length && product.hasOwnProperty("ProductId")
      ? allProducts.filter(
          (p) => p.categories[0].name === product.categories[0].name
        )
      : allProducts; */
  // const email = user.email;
  // const UserId = user.UsersId;
  let idCart = user.hasOwnProperty("carts")
    ? user.carts.find((c) => c.status == "open")
    : {};
  let talles = [];
  for (const prop in product.stock) {
    talles = [...talles, { size: prop, stock: product.stock[prop] }];
  }
  let aditional = [];
  for (const prop in product.additionalInformation) {
    aditional = [
      ...aditional,
      {
        item: prop,
        value: product.additionalInformation[prop],
      },
    ];
  }

  let ranking = [Number(product.ranking)];
  while (ranking.length < ranking[ranking.length - 1]) {
    ranking = [...ranking, ranking[ranking.length - 1]];
  }
  useEffect(() => {
    window.localStorage.setItem(
      "cart",
      JSON.stringify(user.carts[0].productCart)
    );
    dispatch(getProducts());
    dispatch(detailsProduct(id));
    dispatch(getReviews(id));
  }, [dispatch, user, id, bigImage]);

  const handleStockQty = (s, n) => {
    setStock({ ...stock, [s]: n });
  };

  const handleAddCart = (e) => {
    var guardado = localStorage.getItem("cart");
    // console.log(JSON.parse(guardado));
    let { ProductId, name, img, price } = product;
    let data = { ProductId, name, img: img[0], price, stock };
    !user && setCart([...cart, JSON.stringify(data)]);
    dispatch(
      addToCart(
        user.hasOwnProperty("UsersId") ? idCart.CartId : undefined,
        data
      )
    );
    Swal.fire({
      icon: "success",
      text: "Producto agregado al carrito!",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  return (
    <div>
      <hr id="hr"></hr>
      {product.hasOwnProperty("ProductId") ? (
        <div className="containerDetail">
          <div className="imgAndDetail">
            <div id="images" className="section">
              <div className="smallImg">
                {product.img.map((i, index) => (
                  <img
                    key={index}
                    id={index}
                    src={i}
                    alt="small"
                    onClick={handleImage}
                  />
                ))}
              </div>
              <div
                className="bigImg"
                style={{ backgroundImage: `url(${product.img[bigImage]})` }}
              ></div>
            </div>

            <div id="data" className="section">
              <h2> {product.name} </h2>
              <div className="ranking">
                {ranking.length &&
                  ranking.map((star) => <FontAwesomeIcon icon={faStar} />)}
              </div>
              <br></br>
              <h3 id="price"> {formatMoney(product.price)} </h3>

              <br></br>

              <div id="categoriesContainer">
                <h6 id="categories"> Categorías: </h6>
                <p> {product.categories.map((c) => c.name).join(", ")}</p>
              </div>

              <div id="talles">
                <strong>
                  {talles.every((t) => t.stock == 0)
                    ? "No hay stock disponible en el momento:"
                    : "Tallas disponibles:"}
                </strong>
                <div className="lista">
                  {talles.map((t) => {
                    return (
                      <>
                        <div>
                          <label
                            style={{
                              color: t.stock == 0 ? "#888" : "#000",
                            }}
                          >{`${t.size}:`}</label>
                          <input
                            value={stock[t.size]}
                            type="number"
                            onClick={(e) =>
                              handleStockQty(t.size, e.target.value)
                            }
                            min={0}
                            max={t.stock}
                            disabled={t.stock == 0 && false}
                            style={{
                              background: t.stock == 0 ? "#ccc" : "#fff",
                              color: t.stock == 0 ? "#888" : "#000",
                            }}
                            onChange={(e) => {
                              // console.log(stock);
                              handleStockQty(t.size, e.target.value);
                              setStock({
                                ...stock,
                                [t.size]: e.target.value,
                              });
                              if (stock[t.size] == t.stock - 1)
                                Swal.fire({
                                  icon: "warning",
                                  title: "Apurate!!!",
                                  text: " Es la última de esta talla!",
                                  showConfirmButton: true,
                                  timer: 3000,
                                });
                            }}
                          />
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <br></br>
              <div>
                <button
                  disabled={talles.every((t) => stock[t.size] == 0) && true}
                  className="add"
                  onClick={handleAddCart}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="productAbout">
            <div className="selectDeploy">
              <button
                id="Comentarios"
                onClick={(e) => {
                  setChangeTab(e.target.id);
                }}
                style={{
                  fontWeight: changeTab == "Comentarios" ? "bold" : "initial",
                }}
              >
                Comentarios
              </button>
              <button
                id="descripcion"
                onClick={(e) => {
                  setChangeTab(e.target.id);
                }}
                style={{
                  fontWeight: changeTab == "descripcion" ? "bold" : "initial",
                }}
              >
                Descripción
              </button>
              <button
                id="Adicional"
                onClick={(e) => {
                  setChangeTab(e.target.id);
                }}
                style={{
                  fontWeight: changeTab == "Adicional" ? "bold" : "initial",
                }}
              >
                Información Adicional
              </button>
            </div>

            <div className="ContainerTabs">
              {(changeTab === "Comentarios" && (
                <div className="tabInfo">{review[0].description}</div>
              )) ||
                (changeTab === "Adicional" && (
                  <ul className="tabInfo">
                    {aditional.map((el) => {
                      return (
                        <li>
                          <strong>{el.item}</strong>
                          {`: ${el.value}`}
                        </li>
                      );
                    })}
                  </ul>
                )) ||
                (changeTab === "descripcion" && (
                  <p className="tabInfo">{product.description}</p>
                ))}
            </div>
          </div>

          <div>
            <hr
              style={{
                width: "100px",
                height: "7px",
                margin: "10px auto",
                color: "#9E005D",
                opacity: 1,
              }}
            ></hr>
            <h3>productos</h3>
            <h3 style={{ fontWeight: "bold" }}>relaciOnados</h3>
          </div>

          <div
            onClick={() =>
              setStock({
                xs: "0",
                s: "0",
                m: "0",
                l: "0",
                xl: "0",
                xxl: "0",
              })
            }
          >
            <Container>
              {allProducts.map(
                (p, index) =>
                  index < 4 && (
                    <Product
                      id={p.ProductId}
                      img={p.img[0]}
                      name={p.name}
                      price={p.price}
                      ranking={p.ranking}
                    />
                  )
              )}
            </Container>
          </div>
        </div>
      ) : (
        <h3> Error 404 Not Found </h3>
      )}
    </div>
  );
}
