import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// Actions:
import { getCategories } from "../../../redux/actions/categories";

// Styles:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import "./AdminProduct.css";

export default function NewProduct() {
  //Imagen
  const [imageSelected, setImageSelected] = useState();
  // PARAconsole.log(imageSelected);

  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories);

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

  const [product, setProduct] = useState({
    name: "",
    img: [],
    price: "",
    description: "",
    aditionalInformation: {},
    stock: {},
    categories: [],
  });

  useEffect(() => {
    if (typeof imageSelected === "string") {
      setProduct({
        ...product,
        img: [...product.img, imageSelected],
      });
    }

    dispatch(getCategories());
  }, [dispatch, imageSelected]);

  // PARA EL RENDERIZADO (INPUT DE STOCK):
  let size = ["XS", "S", "M", "L", "X-L", "XX-L"];

  // PARA EL RENDERIZADO (INPUT DE INFORMACION ADICIONAL):
  let infoAd = [
    "Manufacturer",
    "Material",
    "occasion",
    "Fit",
    "Lining material",
  ];

  // GUARDO LO QUE EL USUARIO ESCRIBE EN INPUT:
  function handleChange(event) {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmitCategory(event) {
    setProduct({
      ...product,
      categories: [...product.categories, event.target.value],
    });

    event.preventDefault();
  }

  // SUBMIT:
  async function handleSubmit(event) {
    event.preventDefault();

    setProduct({
      name: "",
      img: [],
      price: "",
      description: "",
      aditionalInformation: {},
      stock: {},
      categories: [],
    });
  }

  const updateProduct = async () => {
    await axios.post(
      "https://pfbackendecommerce.herokuapp.com/products",
      product || "http://localhost:3001/products",
      product
    );
  };

  // console.log(product);

  return (
    <>
      <h2> Agregá un nuevo Producto </h2>

      <form onSubmit={handleSubmit} className="new">
        <div className="partsNew">
          <h4> Imagen: </h4>
          <div>
            <input
              type="file"
              onChange={(event) => setImageSelected(event.target.files[0])}
            />
            <button onClick={uploadImage}> Cargar imagen </button>
            <img
              src={imageSelected}
              alt="Imagen"
              height="300px"
              width="250px"
            />
          </div>

          <h4> Nombre: </h4>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={product.name}
            autoComplete="off"
            required
          />

          <h4> Precio: </h4>
          <input
            onChange={handleChange}
            type="number"
            min="0"
            name="price"
            value={product.price}
            autoComplete="off"
            required
          />

          <h4> Descripción: </h4>
          <textarea
            onChange={handleChange}
            type="resume"
            name="description"
            value={product.description}
            autoComplete="off"
            required
          />

          <h4> Categorías: </h4>
          <select
            onClick={handleSubmitCategory}
            name="categories"
            autoComplete="off"
            required
          >
            {categories.map((c) => (
              <option> {c.name} </option>
            ))}
          </select>

          <div className="stocksNewProduct">
            <h4> Stocks: </h4>
            {size.map((sizes) => (
              <div>
                <h5> {sizes} </h5>
                <input
                  required
                  type="number"
                  min="0"
                  autoComplete="off"
                  onChange={(event) =>
                    setProduct({
                      ...product,
                      stock: { ...product.stock, [sizes]: event.target.value },
                    })
                  }
                />
              </div>
            ))}
          </div>

          <h4> Información adicional: </h4>
          {infoAd.map((info) => (
            <div>
              <h5> {info} </h5>
              <input
                type="text"
                required
                autoComplete="off"
                onChange={(event) =>
                  setProduct({
                    ...product,
                    aditionalInformation: {
                      ...product.aditionalInformation,
                      [info]: event.target.value,
                    },
                  })
                }
              />
            </div>
          ))}

          <button type="submit" onClick={() => updateProduct(product)}>
            {" "}
            ¡Crear!{" "}
          </button>
        </div>
      </form>
    </>
  );
}
