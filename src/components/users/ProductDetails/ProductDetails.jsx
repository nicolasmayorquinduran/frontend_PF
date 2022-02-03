import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../products/product";
import {
  detailsProduct,
  getProducts,
  getUserCart,
  addToCart,
} from "../../../redux/actions/products";
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
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.actualUser);
  let product = useSelector((store) => store.productDetail);
  let allProducts = useSelector((store) => store.allProducts);
  allProducts =
    allProducts.length && product.hasOwnProperty("ProductId")
      ? allProducts.filter(
          (p) => p.categories[0].name === product.categories[0].name
        )
      : allProducts;
  const email = user.email;
  const UserId = user.UsersId;
  let talles = [];
  for (const prop in product.stock) {
    if (product.stock[prop] > 0)
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
    dispatch(getProducts());
    dispatch(detailsProduct(id));
  }, [dispatch, user, id]);

  const handleAddSize = (e) => {
    product.size = e.target.value;
  };
  let idCart = user.hasOwnProperty("carts")
    ? user.carts.find((c) => c.status == "created").CartId
    : {};

  const handleAddCart = (e) => {
    if (!user) {
      setCart([...cart, product]);
    }
    dispatch(addToCart(idCart, id));
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
                {product.img.map((i) => (
                  <img id="s" src={i} alt="small" />
                ))}
              </div>
              <div
                className="bigImg"
                style={{ backgroundImage: `url(${product.img[0]})` }}
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
                <div className="tabInfo">Comentarios</div>
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
      ) : (
        <h3> Error 404 Not Found </h3>
      )}
    </div>
  );
}
