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
  /* console.log(imageSelected); */

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

  function handleImage(event) {
    setProduct({
      ...product,
      img: [...product.img, event.target.value],
    });
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
    await axios.post("http://localhost:3001/products", product);
  };

  console.log(product);

  return (
    <>
      <h2> Agregá un nuevo Producto </h2>
      <form onSubmit={handleSubmit} className="new">
        <div className="partsNew">
          <label> Imagen: </label>
          <div>
            <input
              type="file"
              onChange={(event) => setImageSelected(event.target.files[0])}
            />
            <button onClick={uploadImage}> Cargar imagen </button>
            <img src={imageSelected} alt="Imagen" />
          </div>
        </div>

        <div>
          <div className="partsNew">
            <label> Nombre: </label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={product.name}
              autoComplete="off"
              required
            />
          </div>

          <div className="partsNew">
            <label> Precio: </label>
            <input
              onChange={handleChange}
              type="number"
              min="0"
              name="price"
              value={product.price}
              autoComplete="off"
              required
            />
          </div>

          <div className="partsNew">
            <label> Descripción: </label>
            <input
              onChange={handleChange}
              type="text"
              name="description"
              value={product.description}
              autoComplete="off"
              required
            />
          </div>

          <div className="partsNew">
            <label> Categorías: </label>
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
          </div>

          <div className="partsNew">
            <label> Stocks: </label>
            {size.map((sizes) => (
              <div>
                <label>{sizes}:</label>
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

          <div className="partsNew">
            <label> Información adicional: </label>
            {infoAd.map((info) => (
              <div>
                <label>{info}:</label>
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
          </div>

          <div className="partsNew">
            <button type="submit" onClick={() => updateProduct(product)}>
              {" "}
              ¡Crear!{" "}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
