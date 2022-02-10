import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Children } from "../../../globalStyles";
import axios from "axios";

// Actions:
import { detailsProduct } from "../../../redux/actions/products";
import { getCategories } from "../../../redux/actions/categories";

// Styles:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenSquare,
  faPlusSquare,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";

const EditProduct = ({ product, setProduct }) => {
  // console.log(product)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = useSelector((state) => state.categories);

  // Imagen cloudinary:
  const [imageSelected, setImageSelected] = useState();
  console.log(imageSelected);

  const uploadImage = () => {
    const formData = new FormData();

    formData.append("file", imageSelected);
    formData.append("upload_preset", "qoc3ud7y");

    axios
      .post(
        "https://api.cloudinary.com/v1_1/jonascript/image/upload/",
        formData
      )
      .then((response) => {
        return setImageSelected(response.data.url);
      });
  };

  useEffect(() => {
    if (typeof imageSelected === "string") {
      setProduct({
        ...product,
        img: [...product.img, imageSelected],
      });
    }

    dispatch(detailsProduct(product.ProductId));
    dispatch(getCategories());
  }, [dispatch, imageSelected, product.ProductId /* , setProduct */]);

  const updateProduct = async () => {
    await axios
      .put(
        "https://pfbackendecommerce.herokuapp.com/products",
        {
          name: product.name,
          ProductId: product.ProductId,
          img: product.img,
          price: product.price,
          description: product.description,
          additionalInformation: product.additionalInformation,
          stock: product.stock,
          categories: product.categories.map((category) =>
            typeof category === "object" ? category.name : category
          ),
        } || "http://localhost:3001/products",
        {
          name: product.name,
          ProductId: product.ProductId,
          img: product.img,
          price: product.price,
          description: product.description,
          additionalInformation: product.additionalInformation,
          stock: product.stock,
          categories: product.categories.map((category) =>
            typeof category === "object" ? category.name : category
          ),
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

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

  const handleProduct = (event) => {
    Array.isArray(product[event.target.id])
      ? product[event.target.id].includes(event.target.value)
        ? setProduct({
            ...product,
            [event.target.id]: [
              ...product[event.target.id].filter(
                (c) => c != event.target.value
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
      : setProduct({
          ...product,
          [event.target.id]: event.target.value,
        });
  };

  function handleSubmitCategory(event) {
    let auxiliarCategories = product.categories.map((e) => {
      return typeof e === "object" ? e.name : e;
    });
    if (
      event.target.value !== "Seleccione las categorías" &&
      !auxiliarCategories.includes(event.target.value)
    ) {
      setProduct({
        ...product,
        categories: [...product.categories, event.target.value],
      });
    }
    event.preventDefault();
  }

  const handleObjects = (event) => {
    setProduct({
      ...product,
      [event.target.id]: {
        ...product[event.target.id],
        [event.target.className]: event.target.value,
      },
    });
    // console.log("CLASSNAME:", event.target.className, "VALUE:", event.target.value)
  };

  // ELIMINO CATEGORIAS:
  function handlerDeleteCategory(category) {
    setProduct({
      ...product,
      categories: product.categories.filter((element) => element !== category),
    });
  }

  // ELIMINO IMAGENES:
  function handlerDeleteImage(image) {
    setProduct({
      ...product,
      img: product.img.filter((element) => element !== image),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  async function handleDelete(e) {
    e.preventDefault();
    let choose = window.confirm("Está seguro que desea eliminar el producto?");
    if (choose) {
      await axios
        .put(
          "https://pfbackendecommerce.herokuapp.com/products",
          {
            name: product.name,
            ProductId: product.ProductId,
            img: product.img,
            price: product.price,
            description: product.description,
            additionalInformation: product.additionalInformation,
            stock: product.stock,
            categories: product.categories.map((category) =>
              typeof category === "object" ? category.name : category
            ),
            del: true,
          } || "http://localhost:3001/products",
          {
            name: product.name,
            ProductId: product.ProductId,
            img: product.img,
            price: product.price,
            description: product.description,
            additionalInformation: product.additionalInformation,
            stock: product.stock,
            categories: product.categories.map((category) =>
              typeof category === "object" ? category.name : category
            ),
            del: true,
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });

      navigate("/admin");
      navigate("/admin/products");
    }
  }
  async function handleActive(e) {
    e.preventDefault();
    await axios
      .put(
        "https://pfbackendecommerce.herokuapp.com/",
        {
          name: product.name,
          ProductId: product.ProductId,
          img: product.img,
          price: product.price,
          description: product.description,
          additionalInformation: product.additionalInformation,
          stock: product.stock,
          categories: product.categories.map((category) =>
            typeof category === "object" ? category.name : category
          ),
          del: false,
        } || "http://localhost:3001/products",
        {
          name: product.name,
          ProductId: product.ProductId,
          img: product.img,
          price: product.price,
          description: product.description,
          additionalInformation: product.additionalInformation,
          stock: product.stock,
          categories: product.categories.map((category) =>
            typeof category === "object" ? category.name : category
          ),
          del: false,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    navigate("/admin");
    navigate("/admin/products");
  }

  // console.log("IMAGEN:", product.img)
  console.log("PRODUCT:", product);

  return (
    <>
      <h2> Editar datos del Producto </h2>
      <form onSubmit={handleSubmit} className="new">
        <Container>
          <Children pc="2" tablet="2" movil="1" className=" editImage">
            <div className="coverImage partsEdit">
              <div id="principalImage" className="imgProduct" key="0">
                <img
                  src={product.img[0]}
                  alt="Img not found"
                  value={product.img[0]}
                />
                <button onClick={() => handlerDeleteImage(product.img[0])}>
                  x
                </button>
              </div>
            </div>
            <div className="restImages partsEdit">
              {product.img.map((image, index) => {
                return (
                  <>
                    {index > 0 && (
                      <div className="imgProduct" key={index}>
                        <img src={image} alt="Img not found" value={image} />
                        <button onClick={() => handlerDeleteImage(image)}>
                          x
                        </button>
                      </div>
                    )}
                  </>
                );
              })}
              <div className="imgProduct">
                <div
                  className="path"
                  style={{
                    height: "50%",
                  }}
                >
                  <p></p>
                  <h2
                    style={{
                      fontSize: "26px",
                      margin: "0",
                      color: "#fff",
                      paddingTop: "20px",
                    }}
                  >
                    subir nueva imágen
                  </h2>

                  <input
                    type="file"
                    className="imgLoader partsEditImg"
                    onChange={(event) =>
                      setImageSelected(event.target.files[0])
                    }
                  />
                </div>

                <button
                  onClick={uploadImage}
                  className="partsEditImg"
                  style={{ height: "50%", width: "100%" }}
                >
                  Guardar
                </button>
              </div>
            </div>
          </Children>

          <Children pc="2" tablet="2" movil="1" className="partsEdit formNew">
            <div className="nombrePrecio">
              <h5> Nombre </h5>
              <input
                id="name"
                value={product.name}
                type="text"
                name="name"
                autoComplete="off"
                onChange={handleProduct}
                required
              />

              <h5> Precio </h5>
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

            <h5> Descripción </h5>
            <textarea
              id="description"
              onChange={handleProduct}
              type="resume"
              name="description"
              value={product.description}
              autoComplete="off"
              required
            />
            <h5> Selecciona una Categoría </h5>

            <select
              id="categories"
              autoComplete="off"
              required
              onClick={handleSubmitCategory}
            >
              <option value="Seleccione las categorías">
                Seleccione las categorías
              </option>
              {categories.map((category) => (
                <option value={category.name} id={category.CategoriesId}>
                  {category.name}{" "}
                  {category.active ? " (Habilitada)" : " (Deshabilitada)"}
                </option>
              ))}
            </select>
            <div>
              {product.categories.map((category) => {
                return (
                  <div>
                    <h5>
                      {" "}
                      {typeof category === "object"
                        ? category.name
                        : category}{" "}
                    </h5>

                    <button onClick={() => handlerDeleteCategory(category)}>
                      x
                    </button>
                  </div>
                );
              })}
            </div>
          </Children>
          <Children pc="2" tablet="2" movil="1">
            <div className="stocksNewProduct">
              <strong> Stocks </strong>
              {stocksAll.map((props) => (
                <div>
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
          </Children>
          <Children pc="2" tablet="2" movil="1">
            <strong> Información addicional </strong>
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
          </Children>
          <Children className="floatButtons">
            <button type="submit" className="btnSave" onClick={updateProduct}>
              ¡Terminar edición!
            </button>
            {product.active ? (
              <button onClick={(e) => handleDelete(e)}>
                Desactivar producto
              </button>
            ) : (
              <button onClick={(e) => handleActive(e)}>Activar producto</button>
            )}
          </Children>
        </Container>
      </form>
    </>
  );
};

export default EditProduct;
