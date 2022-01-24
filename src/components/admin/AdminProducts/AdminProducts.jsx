import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProductsAdm } from "../../../redux/actions/products.js";
import { getCategories } from "../../../../src/redux/actions/categories.js";
import { getProducts } from "../../../redux/actions/products.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import EditProduct from "./EditProduct.jsx";
import NewProduct from "./NewProduct.jsx";

const AdminProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, [dispatch]);

  let productsAll = useSelector((state) => state.productsReducer.allProducts);

  const [selected, setSelected] = useState({
    name: "",
    price: "",
    ranking: "",
    img: "",
    category: "",
  });

  return (
    <div>
      {selected.name.length ? (
        <EditProduct product={selected} />
      ) : (
        <NewProduct />
      )}

      <div className="Container">
        <div
          className="card"
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
          <img
            src="https://img.archiexpo.es/images_ae/photo-g/49577-12858130.webp"
            width="200px"
            height="300px"
            alt="img not found"
          />
          <div>
            <strong>Crear Nuevo</strong>
            <FontAwesomeIcon icon={faPlusSquare} />
          </div>
        </div>
        {productsAll.map((product) => (
          <div
            className="card"
            onClick={() =>
              setSelected({
                name: product.name,
                price: product.price,
                ranking: product.ranking,
                img: product.img,
                category: product.category,
              })
            }
          >
            <img
              src={product.img}
              width="200px"
              height="300px"
              alt="img not found"
            />
            <div>
              <h5>{product.name}</h5>
              <strong>{product.price}</strong>
              <p>{product.category}</p>
              <FontAwesomeIcon icon={faPenSquare} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;
