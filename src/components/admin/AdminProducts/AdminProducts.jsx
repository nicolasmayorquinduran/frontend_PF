import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions:
import { getCategories } from "../../../../src/redux/actions/categories.js";
import { getProducts } from "../../../redux/actions/products.js";

// Components:
import EditProduct from "./EditProduct.jsx";
import NewProduct from "./NewProduct.jsx";

// Styles:
import "./AdminProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { Container, Children } from "../../../globalStyles";

const AdminProducts = () => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState({
    name: "",
    price: "",
    ranking: "",
    img: "",
    category: "",
  });

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch, selected]);

  let productsAll = useSelector((state) => state.allProducts);
  // console.log(productsAll);

  return (
    <div>
      {selected.name.length ? (
        <EditProduct product={selected} setProduct={setSelected} />
      ) : (
        <NewProduct />
      )}

      <div className="Container">
        <Container>
          <Children
            style={{
              backgroundColor: "#ddd",
              height: "180px",
              justifyContent: "center",
            }}
            onClick={() =>
              setSelected({
                name: "",
                price: "",
                ranking: "",
                img: "",
                category: "",
              })
            }
          >
            <p></p>
            <h2 style={{ fontSize: "100px", margin: "0" }}>+</h2>
            <p>Crear nuevo producto</p>
          </Children>
          {productsAll.map((product) => (
            <Children
              className="cardProductos"
              key={product.ProductId}
              onClick={() =>
                setSelected({
                  ProductId: product.ProductId,
                  name: product.name,
                  price: product.price,
                  ranking: product.ranking,
                  img: product.img,
                  categories: product.categories,
                  additionalInformation: product.additionalInformation,
                  description: product.description,
                  stock: product.stock,
                })
              }
            >
              <div
                className="cardParts"
                style={{ backgroundImage: `url(${product.img[0]})` }}
              ></div>

              <div className="cardParts">
                <div>
                  <h5>{product.name}</h5>
                </div>

                <div className="price">
                  <strong>{product.price}</strong>
                </div>

                <div className="category">
                  <p>{product.category}</p>
                </div>

                <div className="iconCard">
                  <FontAwesomeIcon icon={faPenSquare} width="50px" />
                </div>
              </div>
            </Children>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default AdminProducts;
