import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// Actions:
import { detailsProduct } from "../../../redux/actions/products";
import { getCategories } from "../../../redux/actions/categories";

// Styles:
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPenSquare,
//   faPlusSquare,
//   faWindowClose,
// } from "@fortawesome/free-solid-svg-icons";

const EditProduct = ({ product, setProduct }) => {
  // console.log(product)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = useSelector((state) => state.categories);

  const updateProduct = async () => {
    await axios.put("http://localhost:3001/products", product);

    navigate("/admin");
    navigate("/admin/products");
  };

  // PARA EL RENDERIZADO (INPUT DE INFORMACION ADICIONAL):
  let infoAdditional = [];

  for (const prop in product.additionalInformation) {
    infoAdditional = [
      ...infoAdditional,
      { title: prop, data: product.additionalInformation[prop] },
    ];
  }
  // console.log("INFORMACION ADICIONAL", infoAdditional)

  // PARA EL RENDERIZADO (INPUT DE STOCK):
  let stocksAll = [];

  for (const prop in product.stock) {
    stocksAll = [...stocksAll, { size: prop, stock: product.stock[prop] }];
  }
  // console.log("TODOS LOS STOCKS", stocksAll)

  useEffect(() => {
    dispatch(detailsProduct(product.ProductId));
    dispatch(getCategories());
  }, [dispatch, product, setProduct]);

  const handleProduct = (event) => {
    Array.isArray(product[event.target.id])
      ? product[event.target.id].includes(event.target.value)
        ? setProduct({
            ...product,
            [event.target.id]: [
              ...product[event.target.id].filter(
                (c) => c !== event.target.value
              ),
            ],
          })
        : event.target.value.length &&
          setProduct({
            ...product,
            [event.target.id]: [
              ...product[event.target.id],
              event.target.value,
            ],
          })
      : setProduct({ ...product, [event.target.id]: event.target.value });
  };

  // console.log(product)

  const handleObjects = (event) => {
    setProduct({
      ...product,
      [event.target.id]: {
        ...product[event.target.id],
        [event.target.className]: event.target.value,
      },
    });
    // console.log("CLASSNAME", event.target.className, "VALUE",event.target.value)
  };

  return (
    <>
      <h2> Editar datos del Producto </h2>
      <form className="new">
        <div className="partsEdit">
          <div className=" editImage">
            <div className="coverImage">
              <h4> Imagen </h4>
              <img src={product.img[0]} alt={product.name} />
            </div>

            {/* <FontAwesomeIcon className="icon" icon={faPenSquare} /> */}
          </div>
        </div>

        <div className="partsEdit formNew">
          <div className="nombrePrecio">
            <h4> Nombre </h4>
            <input
              id="name"
              value={product.name}
              type="text"
              name="name"
              autoComplete="off"
              onChange={handleProduct}
              required
            />

            <h4> Precio </h4>
            <input
              id="price"
              value={product.price}
              type="number"
              min="0"
              name="price"
              autoComplete="off"
              onChange={handleProduct}
              required
            />
          </div>

          <h4> Descripción </h4>
          <textarea
            id="description"
            onChange={handleProduct}
            type="resume"
            name="description"
            value={product.description}
            autoComplete="off"
            required
          />

          <div className="categorias">
            <h4> Selecciona una Categoría </h4>

            <select
              id="categories"
              autoComplete="off"
              required
              onChange={handleProduct}
            >
              {categories.map((category) => (
                <option
                  key={category.CategoriesId}
                  value={category.name}
                  id={category.CategoriesId}
                >
                  {" "}
                  {category.name}{" "}
                </option>
              ))}
            </select>
          </div>

          <div className="stocksNewProduct">
            <h4> Stocks </h4>
            {stocksAll.map((props) => (
              <div key={props.size}>
                <label>{props.size}:</label>
                <input
                  value={props.stock}
                  type="number"
                  min="0"
                  onChange={handleObjects}
                  id="stock"
                  className={props.size}
                />
              </div>
            ))}
          </div>

          <h4> Información addicional </h4>
          {infoAdditional.map((props) => (
            <div>
              <label> {props.title}: </label>
              <input
                value={props.data}
                type="text"
                onChange={handleObjects}
                id="additionalInformation"
                className={props.title}
              />
            </div>
          ))}

          <button type="submit" onClick={updateProduct}>
            {" "}
            ¡Terminar edición!{" "}
          </button>
        </div>
      </form>
    </>
  );
};

export default EditProduct;
